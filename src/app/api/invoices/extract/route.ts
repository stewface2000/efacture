import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { PDFDocument, PDFName, PDFDict, PDFArray, PDFRawStream } from "pdf-lib";
import { execSync } from "child_process";
import { writeFileSync, readFileSync, mkdirSync, rmSync, existsSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { randomBytes } from "crypto";

let decodePDFRawStreamFn: any = null;
try {
  const pdfLib = require("pdf-lib");
  decodePDFRawStreamFn = pdfLib.decodePDFRawStream;
} catch (e) {
  // ignore
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function extractTagContent(xml: string, tag: string): string {
  const cleanTag = tag.split(":").pop() || tag;
  const match = xml.match(new RegExp(`<(${tag}|${cleanTag})[^>]*>([^<]*)<\/\\1>`));
  return match ? match[2].trim() : "";
}

/**
 * Create a unique temporary directory for extraction work.
 */
function makeTempDir(): string {
  const id = randomBytes(8).toString("hex");
  const dir = join(tmpdir(), `efacture_extract_${id}`);
  mkdirSync(dir, { recursive: true });
  return dir;
}

/**
 * Safely remove a temporary directory.
 */
function cleanupTempDir(dir: string) {
  try {
    if (existsSync(dir)) {
      rmSync(dir, { recursive: true, force: true });
    }
  } catch {
    // best effort
  }
}

// ─── File type detection ────────────────────────────────────────────────────

function detectFileType(fileName: string, fileType: string) {
  const nameLower = (fileName || "").toLowerCase();
  const typeLower = (fileType || "").toLowerCase();

  const isWord =
    nameLower.endsWith(".docx") ||
    nameLower.endsWith(".doc") ||
    typeLower === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    typeLower === "application/msword";

  const isExcel =
    nameLower.endsWith(".xlsx") ||
    nameLower.endsWith(".xls") ||
    typeLower === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    typeLower === "application/vnd.ms-excel";

  const isPdf =
    nameLower.endsWith(".pdf") || typeLower === "application/pdf";

  const isImage =
    typeLower.startsWith("image/") ||
    nameLower.endsWith(".png") ||
    nameLower.endsWith(".jpg") ||
    nameLower.endsWith(".jpeg") ||
    nameLower.endsWith(".webp");

  return { isWord, isExcel, isPdf, isImage, nameLower };
}

// ─── Text extraction from standard PDF ──────────────────────────────────────

/**
 * Extract visible text from a standard (non-Factur-X) PDF by reading
 * content stream operators (Tj, TJ, etc.).
 */
async function extractTextFromPDF(fileBase64: string): Promise<string | null> {
  try {
    let rawBase64 = fileBase64 || "";
    if (rawBase64.includes(";base64,")) {
      rawBase64 = rawBase64.split(";base64,")[1];
    }
    const buffer = Buffer.from(rawBase64, "base64");
    const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
    const pages = pdfDoc.getPages();
    const allText: string[] = [];

    for (const page of pages) {
      try {
        const node = page.node;
        // Get the Contents entry which can be a stream or array of streams
        const contentsRef = node.lookup(PDFName.of("Contents"));
        if (!contentsRef) continue;

        let rawBytes: Uint8Array | null = null;

        if (contentsRef instanceof PDFRawStream) {
          if (decodePDFRawStreamFn) {
            rawBytes = decodePDFRawStreamFn(contentsRef).decode();
          } else {
            rawBytes = contentsRef.contents;
          }
        } else if (contentsRef instanceof PDFArray) {
          // Multiple content streams — concatenate them
          const parts: Uint8Array[] = [];
          for (let i = 0; i < contentsRef.size(); i++) {
            const ref = contentsRef.lookup(i);
            if (ref instanceof PDFRawStream) {
              if (decodePDFRawStreamFn) {
                parts.push(decodePDFRawStreamFn(ref).decode());
              } else {
                parts.push(ref.contents);
              }
            } else if (ref && "contents" in (ref as any)) {
              parts.push((ref as any).contents);
            }
          }
          if (parts.length > 0) {
            const totalLen = parts.reduce((s, p) => s + p.length, 0);
            rawBytes = new Uint8Array(totalLen);
            let offset = 0;
            for (const part of parts) {
              rawBytes.set(part, offset);
              offset += part.length;
            }
          }
        } else if (contentsRef && "contents" in (contentsRef as any)) {
          rawBytes = (contentsRef as any).contents;
        }

        if (!rawBytes) continue;

        const contentStr = new TextDecoder("latin1").decode(rawBytes);

        // Extract text from Tj operators: (text) Tj
        const tjMatches = [...contentStr.matchAll(/\(([^)]*)\)\s*Tj/g)];
        for (const m of tjMatches) {
          const decoded = decodePdfString(m[1]);
          if (decoded.trim()) allText.push(decoded.trim());
        }

        // Extract text from TJ operators (text arrays): [(text) kern (text)] TJ
        const tjArrayMatches = [...contentStr.matchAll(/\[([^\]]*)\]\s*TJ/gi)];
        for (const m of tjArrayMatches) {
          const inner = m[1];
          const parts = [...inner.matchAll(/\(([^)]*)\)/g)];
          const combined = parts.map((p) => decodePdfString(p[1])).join("");
          if (combined.trim()) allText.push(combined.trim());
        }
      } catch (pageErr) {
        // Skip pages that can't be parsed
        continue;
      }
    }

    const result = allText.join("\n").trim();
    return result.length > 10 ? result : null;
  } catch (err) {
    console.error("Error extracting text from PDF:", err);
    return null;
  }
}

/**
 * Decode common PDF string escape sequences.
 */
function decodePdfString(s: string): string {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\\\/g, "\\")
    .replace(/\\([()])/g, "$1")
    .replace(/\\(\d{1,3})/g, (_, oct) => String.fromCharCode(parseInt(oct, 8)));
}

function cleanString(str: string): string {
  if (!str) return "";
  let clean = String(str)
    .replace(/Ã©/g, "e")
    .replace(/Ã /g, "a")
    .replace(/Ã¨/g, "e")
    .replace(/Ã¹/g, "u")
    .replace(/Ã¢/g, "a")
    .replace(/Ã´/g, "o")
    .replace(/Ã»/g, "u")
    .replace(/Ã®/g, "i")
    .replace(/Ã§/g, "c")
    .replace(/Ã«/g, "e")
    .replace(/Ã¯/g, "i")
    .replace(/Ã¶/g, "o")
    .replace(/Ã¼/g, "u");

  clean = clean.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return clean.toLowerCase().trim();
}

function fixDoubleEncoding(str: string): string {
  if (!str) return "";
  if (/Ã[© ¨¹¢´»®§«¯¶]/.test(str)) {
    try {
      return Buffer.from(str, "latin1").toString("utf-8");
    } catch {
      return str;
    }
  }
  return str;
}

function parseNumber(val: any): number {
  if (val === undefined || val === null || val === "") return NaN;
  if (typeof val === "number") return val;
  const clean = String(val)
    .replace(/\s/g, "")
    .replace("€", "")
    .replace("%", "")
    .replace(",", ".");
  return parseFloat(clean);
}

/**
 * Parse raw text extracted from a PDF/Excel/Word using heuristics to find
 * client info and invoice line items.
 */
function parseTextHeuristically(text: string, user?: any): any {
  // Apply fixDoubleEncoding to every line right at the start
  const rawLines = text.split("\n")
    .map((l) => fixDoubleEncoding(l.trim()))
    .filter((l) => l.length > 0);
  
  // Split each line into left and right columns if a tab or multiple spaces are present.
  // This isolates client details on the right column and prevents them from mixing with issuer details on the left.
  const leftLines: string[] = [];
  const rightLines: string[] = [];
  
  for (const line of rawLines) {
    const parts = line.split(/\t|\s{3,}/);
    if (parts.length >= 2) {
      leftLines.push(parts[0].trim());
      rightLines.push(parts.slice(1).join(" ").trim());
    } else {
      leftLines.push(line.trim());
      rightLines.push(line.trim());
    }
  }

  const fullText = rawLines.join(" ");

  const userPc = user?.postalCode ? String(user.postalCode).trim() : "";
  const userSiret = user?.siret ? String(user.siret).replace(/\s/g, "") : "";

  let clientName = "";
  let clientAddress = "";
  let clientCity = "";
  let clientPostalCode = "";
  let clientSiret = "";
  let clientVatNumber = "";
  let notes = "";
  const items: Array<{ description: string; quantity: number; unitPrice: number; vatRate: number }> = [];

  // --- 1. Client block detection ---
  // Standard French headers since text is now clean UTF-8
  const clientSectionRegex = /(?:client|destinataire|factur[eé]r?\s*[àa]|acheteur|bill\s*to|customer|à\s*l'attention\s*de)\s*[:\-]?\s*/i;
  let clientBlockLines: string[] = [];

  const isClientHeader = (l: string) => {
    const clean = cleanString(l);
    return clean.includes("client") || 
           clean.includes("destinataire") || 
           clean.includes("facture a") || 
           clean.includes("acheteur") || 
           clean.includes("bill to") || 
           clean.includes("customer") || 
           clean.includes("a l'attention de");
  };

  // Look in rightLines first
  let idx = rightLines.findIndex(l => isClientHeader(l));
  if (idx >= 0) {
    clientBlockLines = rightLines.slice(idx, idx + 5);
  } else {
    idx = rawLines.findIndex(l => isClientHeader(l));
    if (idx >= 0) {
      clientBlockLines = rawLines.slice(idx, idx + 5);
    }
  }

  if (clientBlockLines.length > 0) {
    // Line 0 might contain client name after the header
    const line0 = clientBlockLines[0];
    let cleanedLine0 = line0;
    // Find the header match
    const headerMatch = line0.match(clientSectionRegex);
    if (headerMatch) {
      cleanedLine0 = line0.substring(headerMatch.index! + headerMatch[0].length).trim();
    }
    
    let nameLineIdx = 1;
    if (cleanedLine0.length > 2) {
      clientName = cleanedLine0;
      nameLineIdx = 0;
    } else {
      clientName = clientBlockLines[1] || "";
    }

    clientName = clientName.replace(/\\$/, '').replace(/\(Monsieur$/, '').replace(/\(Madame$/, '').trim();

    // Find postal code and city
    let pcLineIdx = -1;
    for (let i = 0; i < clientBlockLines.length; i++) {
      const line = clientBlockLines[i];
      const m = line.match(/\b(\d{5})\b/);
      if (m) {
        clientPostalCode = m[1];
        clientCity = line.replace(m[0], "").replace(/^[,\s\-:]+/, "").replace(/[,\s\-:]+$/, "").trim();
        pcLineIdx = i;
        break;
      }
    }

    // Address is between name and postal code
    if (pcLineIdx > 0 && nameLineIdx < pcLineIdx) {
      const addrParts: string[] = [];
      for (let i = nameLineIdx + 1; i < pcLineIdx; i++) {
        if (clientBlockLines[i] && clientBlockLines[i].trim()) {
          addrParts.push(clientBlockLines[i].trim());
        }
      }
      clientAddress = addrParts.join(", ");
    }
  }

  // Fallback if clientName not found in block
  const pcMatches: Array<{ index: number; pc: string; city: string }> = [];
  if (!clientName) {
    for (let i = 0; i < rightLines.length; i++) {
      const line = rightLines[i];
      const m = line.match(/^(\d{5})\s+(.+)$/);
      if (m) {
        pcMatches.push({ index: i, pc: m[1], city: m[2] });
      }
    }

    let clientPc = null;
    if (userPc) {
      clientPc = pcMatches.find(p => p.pc !== userPc);
    }
    if (!clientPc && pcMatches.length >= 2) {
      clientPc = pcMatches[1];
    } else if (!clientPc && pcMatches.length === 1) {
      clientPc = pcMatches[0];
    }

    if (clientPc) {
      clientPostalCode = clientPc.pc;
      clientCity = clientPc.city;
      
      if (clientPc.index - 1 >= 0) {
        clientAddress = rightLines[clientPc.index - 1];
      }
      if (clientPc.index - 2 >= 0) {
        clientName = rightLines[clientPc.index - 2].replace(/\\$/, '').replace(/\(Monsieur$/, '').replace(/\(Madame$/, '').trim();
      }
    }
  }

  // Fallback for SIRET/VAT
  if (clientBlockLines.length > 0) {
    const blockText = clientBlockLines.join(" ");
    const siretMatch = blockText.match(/(?:siret|siren)\s*[:\-]?\s*([\d\s]{9,20})/i);
    if (siretMatch) {
      clientSiret = siretMatch[1].replace(/\s/g, "").trim();
    }
    const vatMatch = blockText.match(/(?:tva|vat)\s*(?:intra)?\s*[:\-]?\s*(FR\s*[\d\s]{11,15})/i);
    if (vatMatch) {
      clientVatNumber = vatMatch[1].replace(/\s/g, "");
    }
  }

  if (!clientSiret) {
    const siretMatch = fullText.match(/siret\s*[:\-]?\s*(\d{3}\s*\d{3}\s*\d{3}\s*\d{5})/i);
    if (siretMatch) {
      const parsedSiret = siretMatch[1].replace(/\s/g, "").trim();
      if (parsedSiret !== userSiret) {
        clientSiret = parsedSiret;
      }
    }
  }

  // --- 2. Items Extraction ---
  if (text.includes("\t")) {
    const rows = rawLines.map(l => l.split("\t"));
    
    let descColIdx = -1;
    let qtyColIdx = -1;
    let priceColIdx = -1;
    let vatColIdx = -1;
    let totalColIdx = -1;
    let headerRowIdx = -1;

    for (let r = 0; r < rows.length; r++) {
      const row = rows[r];
      if (!row) continue;
      
      let hasDesc = false;
      let hasPrice = false;
      let tempDesc = -1;
      let tempQty = -1;
      let tempPrice = -1;
      let tempVat = -1;
      let tempTotal = -1;
      
      for (let c = 0; c < row.length; c++) {
        const val = cleanString(row[c]);
        if (val === "designation" || val === "description" || val === "libelle" || val === "article" || val === "produit" || val === "prestation" || val === "detail" || val === "details" ||
            val.includes("designation") || val.includes("description") || val.includes("libelle")) {
          tempDesc = c;
          hasDesc = true;
        } else if (val === "qte" || val === "quantite" || val === "qty" || val === "nombre" || val === "vol" || val === "volume") {
          tempQty = c;
        } else if (val === "pu" || val === "p.u." || val === "pu ht" || val === "p.u. ht" || val === "prix unitaire" || val === "unit price" || val === "tarif unitaire" || val === "tarif" || val === "prix u. ht" || val === "prix u ht" ||
                   val.includes("prix unit") || val.includes("unit price") || val.includes("p.u.")) {
          tempPrice = c;
          hasPrice = true;
        } else if (val === "tva" || val === "vat" || val.includes("taux")) {
          tempVat = c;
        } else if (val === "total ht" || val === "montant ht" || val === "total" || val === "montant" || val === "somme" || val.includes("total ht") || val.includes("montant ht")) {
          tempTotal = c;
        }
      }
      
      if (hasDesc && (hasPrice || tempQty >= 0)) {
        descColIdx = tempDesc;
        qtyColIdx = tempQty;
        priceColIdx = tempPrice;
        vatColIdx = tempVat;
        totalColIdx = tempTotal;
        headerRowIdx = r;
        break;
      }
    }

    if (headerRowIdx >= 0 && descColIdx >= 0) {
      for (let r = headerRowIdx + 1; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length <= descColIdx) continue;
        
        const descVal = String(row[descColIdx] || "").trim();
        if (!descVal) continue;

        const descLower = descVal.toLowerCase();
        if (descLower.includes("total") || 
            descLower.includes("sous-total") || 
            descLower.includes("net à payer") || 
            descLower.includes("tva") || 
            descLower.includes("acompte") || 
            descLower.includes("règlement") || 
            descLower.includes("remise") || 
            descLower.includes("reduction") || 
            descLower.includes("réduction") || 
            descLower.includes("escompte") || 
            descLower.includes("conditions")) {
          continue;
        }

        let quantity = qtyColIdx >= 0 ? parseNumber(row[qtyColIdx]) : 1;
        if (isNaN(quantity) || quantity <= 0) {
          quantity = 1;
        }

        let unitPrice = priceColIdx >= 0 ? parseNumber(row[priceColIdx]) : NaN;
        if (isNaN(unitPrice) && totalColIdx >= 0) {
          const totalVal = parseNumber(row[totalColIdx]);
          if (!isNaN(totalVal)) {
            unitPrice = totalVal / quantity;
          }
        }

        let vatRate = vatColIdx >= 0 ? parseNumber(row[vatColIdx]) : 20;
        if (isNaN(vatRate)) {
          vatRate = 20;
        } else if (vatRate > 0 && vatRate <= 1) {
          vatRate = vatRate * 100;
        }

        if (!isNaN(unitPrice)) {
          items.push({
            description: descVal,
            quantity,
            unitPrice,
            vatRate
          });
        }
      }
    }
  }

  // Fallback for items if none found
  if (items.length === 0) {
    let lastItemEndIdx = 0;
    const clientPc = pcMatches.length > 0 ? pcMatches[0] : null;
    if (clientPc) {
      const clientPcLine = rightLines[clientPc.index];
      const rawPcIdx = rawLines.indexOf(clientPcLine);
      lastItemEndIdx = rawPcIdx >= 0 ? rawPcIdx + 1 : 0;
      
      while (lastItemEndIdx < rawLines.length && 
             (/(?:devis|facture|visite|technique|date|réf|émetteur|adressé)/i.test(rawLines[lastItemEndIdx]) || 
              rawLines[lastItemEndIdx].length < 3)) {
        lastItemEndIdx++;
      }
    }

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      
      if (line.includes("\t")) {
        const cells = line.split("\t").map(c => c.trim());
        const vatIdx = cells.findIndex(c => /^\d+(?:[.,]\d+)?\s*%$/.test(c));
        if (vatIdx >= 0) {
          const vatRate = parseFloat(cells[vatIdx].replace("%", "").replace(",", "."));
          const remaining = cells
            .map((c, idx) => ({ val: c, idx }))
            .filter(item => item.idx !== vatIdx && item.val !== "");
          const numeric = remaining.filter(item => /^\d+(?:[.,]\d+)?$/.test(item.val.replace(/\s/g, "")));
          if (numeric.length >= 2) {
            const parsed = numeric.map(item => ({
              val: parseFloat(item.val.replace(/\s/g, "").replace(",", ".")),
              idx: item.idx
            })).sort((a, b) => a.val - b.val);
            const quantity = parsed[0].val;
            const unitPrice = parsed[1].val;
            const descCell = cells.find((c, idx) => idx !== vatIdx && !numeric.some(nc => nc.idx === idx) && c.length > 2);
            const description = descCell ? descCell.trim() : cells[0];
            if (description && quantity > 0 && unitPrice > 0) {
              items.push({ description, quantity, unitPrice, vatRate });
            }
          }
        }
        continue;
      }

      const vatMatch = line.match(/^(\d+(?:[.,]\d+)?)\s*%$/);
      if (vatMatch && i - 2 >= lastItemEndIdx) {
        const vatRate = parseFloat(vatMatch[1].replace(",", "."));
        const priceStr = rawLines[i - 1];
        const qtyStr = rawLines[i - 2];

        const isPrice = /^[\d\s]+(?:[.,]\d{2})?$/.test(priceStr);
        const isQty = /^\d+(?:[.,]\d+)?$/.test(qtyStr);

        if (isPrice && isQty) {
          const unitPrice = parseFloat(priceStr.replace(/\s/g, "").replace(",", "."));
          const quantity = parseFloat(qtyStr.replace(",", "."));

          const descLines = rawLines.slice(lastItemEndIdx, i - 2);
          const cleanedDescLines = descLines.filter(l => {
            const lower = l.toLowerCase();
            if (lower.includes("désignation") || lower.includes("description") || lower.includes("libellé")) return false;
            if (lower.includes("réf. :") || lower.includes("date :") || lower.includes("devis")) return false;
            if (lower.includes("siège social") || lower.includes("société par actions")) return false;
            if (lower.includes("siret :") || lower.includes("tva :") || lower.includes("rcs/rm")) return false;
            if (lower.includes("montants exprimés") || lower.includes("conditions de règlement")) return false;
            if (/^\d+\s*\/\s*\d+$/.test(l)) return false;
            return true;
          });

          const description = cleanedDescLines.join(" ").trim();
          if (description && quantity > 0 && unitPrice > 0) {
            items.push({ description, quantity, unitPrice, vatRate });
            lastItemEndIdx = i + 2;
          }
        }
      }
    }
  }

  if (items.length === 0) {
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      const itemMatch = line.match(/^(.{5,80}?)\s+(\d+(?:[.,]\d+)?)\s+(\d[\d\s]*(?:[.,]\d{2}))\s*€?/);
      if (itemMatch) {
        const desc = itemMatch[1].trim();
        const qty = parseFloat(itemMatch[2].replace(",", "."));
        const price = parseFloat(itemMatch[3].replace(/\s/g, "").replace(",", "."));
        if (desc.toLowerCase().includes("désignation") || desc.toLowerCase().includes("description") || desc.toLowerCase().includes("libellé")) continue;
        if (!isNaN(qty) && !isNaN(price) && price > 0) {
          items.push({ description: desc, quantity: qty, unitPrice: price, vatRate: 20 });
        }
      }
    }
  }

  // Try to find notes/conditions
  const notesMatch = fullText.match(/(?:conditions|modalités|règlement|paiement|payment)\s*[:\-]?\s*(.{10,120})/i);
  if (notesMatch) {
    notes = notesMatch[1].trim();
  }

  // If we couldn't find a client name, try to find any company name pattern
  if (!clientName) {
    const companyMatch = fullText.match(/([A-ZÀ-Ü][\w\sÀ-ü-]{2,40}(?:SARL|SAS|SCI|EURL|SA|SASU|EI|SELARL|SNC))/);
    if (companyMatch) {
      clientName = companyMatch[1].trim();
    }
    if (!clientName) {
      const mMatch = fullText.match(/(?:M\.|Mme|Mr|Mrs)\s+([A-ZÀ-Ü][\wÀ-ü]+(?:\s[A-ZÀ-Ü][\wÀ-ü]+){0,3})/);
      if (mMatch) clientName = mMatch[0].trim();
    }
  }

  return {
    clientName,
    clientAddress,
    clientCity,
    clientPostalCode,
    clientSiret,
    clientVatNumber,
    notes,
    items,
    _extractedFromText: true,
  };
}

// ─── Text extraction from Office XML (DOCX / XLSX) ─────────────────────────

/**
 * Extract text content from a .docx file by unzipping and reading word/document.xml.
 * Uses the system `tar` command (available on Windows 10+).
 */
function extractTextFromDocx(base64Data: string): string | null {
  const tempDir = makeTempDir();
  try {
    // Strip data URL prefix if present
    let raw = base64Data;
    if (raw.includes(";base64,")) {
      raw = raw.split(";base64,")[1];
    }
    const buffer = Buffer.from(raw, "base64");
    const archivePath = join(tempDir, "input.docx");
    writeFileSync(archivePath, buffer);

    // Extract word/document.xml from the docx zip archive
    try {
      execSync(`tar -xf "${archivePath}" -C "${tempDir}" word/document.xml`, {
        timeout: 10000,
        windowsHide: true,
      });
    } catch {
      // tar may fail on legacy .doc format – return null
      return null;
    }

    const xmlPath = join(tempDir, "word", "document.xml");
    if (!existsSync(xmlPath)) return null;

    const xmlContent = readFileSync(xmlPath, "utf-8");

    // Extract all text from <w:t> tags
    const textMatches = [...xmlContent.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)];
    const textParts: string[] = [];

    // Also track paragraph boundaries for better structure
    const paragraphs = xmlContent.split(/<\/w:p>/);
    for (const para of paragraphs) {
      const paraTexts = [...para.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)];
      if (paraTexts.length > 0) {
        textParts.push(paraTexts.map((m) => m[1]).join(""));
      }
    }

    const result = textParts.join("\n").trim();
    return result.length > 0 ? result : (textMatches.length > 0 ? textMatches.map((m) => m[1]).join(" ") : null);
  } catch (err) {
    console.error("Error extracting text from DOCX:", err);
    return null;
  } finally {
    cleanupTempDir(tempDir);
  }
}

/**
 * Extract text content from a .xlsx file using the SheetJS library.
 * It reads the file, iterates over sheets and rows, and formats rows with tab separators.
 */
function extractTextFromXlsx(base64Data: string): string | null {
  try {
    let raw = base64Data;
    if (raw.includes(";base64,")) {
      raw = raw.split(";base64,")[1];
    }
    const buffer = Buffer.from(raw, "base64");
    
    const XLSX = require("xlsx");
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const parts: string[] = [];

    for (const sheetName of workbook.SheetNames) {
      const sheet = workbook.Sheets[sheetName];
      // Convert sheet to a 2D array of formatted cell strings
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: "" }) as string[][];
      
      for (const row of rows) {
        if (!row || row.every(cell => String(cell).trim() === "")) {
          continue;
        }
        // Fix double encoding on cell strings
        const cleanRow = row.map(c => fixDoubleEncoding(String(c).trim()));
        parts.push(cleanRow.join("\t"));
      }
    }
    
    return parts.join("\n").trim();
  } catch (err) {
    console.error("Error extracting text from XLSX via SheetJS:", err);
    return null;
  }
}

// ─── Factur-X XML extraction from PDF ───────────────────────────────────────

async function parseFacturXPDF(fileBase64: string): Promise<any | null> {
  try {
    let rawBase64 = fileBase64 || "";
    if (rawBase64.includes(";base64,")) {
      rawBase64 = rawBase64.split(";base64,")[1];
    }
    const buffer = Buffer.from(rawBase64, "base64");
    const pdfDoc = await PDFDocument.load(buffer);
    const catalog = pdfDoc.catalog;
    if (!catalog.has(PDFName.of("Names"))) return null;

    const names = catalog.lookup(PDFName.of("Names"), PDFDict);
    if (!names.has(PDFName.of("EmbeddedFiles"))) return null;

    const embeddedFiles = names.lookup(PDFName.of("EmbeddedFiles"), PDFDict);
    if (!embeddedFiles.has(PDFName.of("Names"))) return null;

    const efNames = embeddedFiles.lookup(PDFName.of("Names"), PDFArray);
    let xmlString: string | null = null;

    for (let idx = 0; idx < efNames.size(); idx += 2) {
      const fileNameObj = efNames.lookup(idx);
      if (!fileNameObj) continue;
      let nameStr = "";
      if (typeof fileNameObj === "object" && "decodeText" in fileNameObj) {
        nameStr = (fileNameObj as any).decodeText();
      } else {
        nameStr = fileNameObj.toString().replace(/^\(|\)$/g, "");
      }

      if (nameStr.toLowerCase().includes("factur-x.xml") || nameStr.toLowerCase().includes("facturx.xml")) {
        const fileSpec = efNames.lookup(idx + 1);
        if (!fileSpec || !(fileSpec instanceof PDFDict)) continue;
        if (fileSpec.has(PDFName.of("EF"))) {
          const efDict = fileSpec.lookup(PDFName.of("EF"), PDFDict);
          if (efDict && efDict.has(PDFName.of("F"))) {
            const stream = efDict.lookup(PDFName.of("F"));
            let decodedBytes: Uint8Array | null = null;

            if (stream instanceof PDFRawStream) {
              if (decodePDFRawStreamFn) {
                decodedBytes = decodePDFRawStreamFn(stream).decode();
              } else {
                decodedBytes = stream.contents;
              }
            } else if (stream && "contents" in (stream as any)) {
              decodedBytes = (stream as any).contents;
            }

            if (decodedBytes) {
              xmlString = new TextDecoder("utf-8").decode(decodedBytes);
            }
            break;
          }
        }
      }
    }

    if (!xmlString) return null;

    // Parse Buyer
    const buyerPartyMatch = xmlString.match(/<(ram:)?BuyerTradeParty>([\s\S]*?)<\/\1?BuyerTradeParty>/);
    let clientName = "";
    let clientAddress = "";
    let clientCity = "";
    let clientPostalCode = "";
    let clientSiret = "";
    let clientVatNumber = "";

    if (buyerPartyMatch) {
      const buyerXml = buyerPartyMatch[2];
      clientName = extractTagContent(buyerXml, "ram:Name");
      clientAddress = extractTagContent(buyerXml, "ram:LineOne");
      clientCity = extractTagContent(buyerXml, "ram:CityName");
      clientPostalCode = extractTagContent(buyerXml, "ram:PostcodeCode");

      const siretMatch = buyerXml.match(/<(ram:)?SpecifiedLegalOrganization>([\s\S]*?)<\/\1?SpecifiedLegalOrganization>/);
      if (siretMatch) {
        clientSiret = extractTagContent(siretMatch[2], "ram:ID");
      }

      const vatMatch = buyerXml.match(/<(ram:)?SpecifiedTaxRegistration>([\s\S]*?)<\/\1?SpecifiedTaxRegistration>/);
      if (vatMatch) {
        clientVatNumber = extractTagContent(vatMatch[2], "ram:ID");
      }
    }

    // Parse notes
    const notesMatch = xmlString.match(/<(ram:)?IncludedNote>([\s\S]*?)<\/\1?IncludedNote>/);
    let notes = "";
    if (notesMatch) {
      notes = extractTagContent(notesMatch[2], "ram:Content");
    }

    // Parse items
    const itemMatches = [...xmlString.matchAll(/<(ram:)?IncludedSupplyChainTradeLineItem>([\s\S]*?)<\/\1?IncludedSupplyChainTradeLineItem>/g)];
    const items = itemMatches.map((m) => {
      const itemXml = m[2];
      const description = extractTagContent(itemXml, "ram:Name");
      const quantity = parseFloat(extractTagContent(itemXml, "ram:BilledQuantity") || "1");
      const unitPrice = parseFloat(extractTagContent(itemXml, "ram:ChargeAmount") || "0");
      const vatRate = parseFloat(extractTagContent(itemXml, "ram:RateApplicablePercent") || "20");
      return { description, quantity, unitPrice, vatRate };
    });

    return {
      clientName,
      clientAddress,
      clientCity,
      clientPostalCode,
      clientSiret,
      clientVatNumber,
      notes,
      items,
    };
  } catch (err) {
    console.error("Error parsing Factur-X XML from PDF:", err);
    return null;
  }
}

// ─── Gemini API call ────────────────────────────────────────────────────────

const EXTRACTION_PROMPT = `Vous êtes un expert comptable et un outil d'extraction automatique de factures.
Analyse le document ci-joint (qui est une facture ou un devis reçu) et extrais les informations suivantes concernant le CLIENT (l'acheteur / destinataire) et les articles (les lignes de facturation).
Retourne uniquement un objet JSON valide correspondant au schéma suivant :
{
  "clientName": string,
  "clientAddress": string,
  "clientCity": string,
  "clientPostalCode": string,
  "clientSiret": string,
  "clientVatNumber": string,
  "notes": string,
  "items": Array<{
    "description": string,
    "quantity": number,
    "unitPrice": number,
    "vatRate": number
  }>
}

Notes :
- Si une information n'est pas trouvée, mets une chaîne vide "".
- Pour les items (lignes de facturation), extrais la description, la quantité (nombre), le prix unitaire HT (nombre) et le taux de TVA en pourcentage (nombre, par exemple 20 pour 20%).
- Ne mets aucun texte explicatif avant ou après le JSON.`;

async function callGeminiWithInlineData(
  apiKey: string,
  base64Data: string,
  mimeType: string
): Promise<any> {
  let rawBase64 = base64Data;
  if (rawBase64.includes(";base64,")) {
    rawBase64 = rawBase64.split(";base64,")[1];
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: EXTRACTION_PROMPT },
              { inlineData: { mimeType, data: rawBase64 } },
            ],
          },
        ],
        generationConfig: { responseMimeType: "application/json" },
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    console.warn("Gemini API call failed:", response.status, errText);
    throw new Error(`Gemini API failed with status ${response.status}`);
  }

  const geminiJson = await response.json();
  const text = geminiJson.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("No text returned in Gemini API response");

  return JSON.parse(text);
}

async function callGeminiWithText(apiKey: string, extractedText: string): Promise<any> {
  const textPrompt = `${EXTRACTION_PROMPT}

Voici le contenu textuel extrait du document :
---
${extractedText.substring(0, 15000)}
---

Analyse ce texte et retourne le JSON demandé.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: textPrompt }] }],
        generationConfig: { responseMimeType: "application/json" },
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    console.warn("Gemini text API call failed:", response.status, errText);
    throw new Error(`Gemini API failed with status ${response.status}`);
  }

  const geminiJson = await response.json();
  const text = geminiJson.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("No text returned in Gemini API response");

  return JSON.parse(text);
}

function normalizeExtractedData(data: any) {
  return {
    clientName: String(data.clientName || "").trim(),
    clientAddress: String(data.clientAddress || "").trim(),
    clientCity: String(data.clientCity || "").trim(),
    clientPostalCode: String(data.clientPostalCode || "").trim(),
    clientSiret: String(data.clientSiret || "").trim(),
    clientVatNumber: String(data.clientVatNumber || "").trim(),
    notes: String(data.notes || "").trim(),
    items: Array.isArray(data.items)
      ? data.items.map((item: { description?: string; quantity?: number; unitPrice?: number; vatRate?: number }) => ({
          description: String(item.description || "").trim(),
          quantity: typeof item.quantity === "number" ? item.quantity : 1,
          unitPrice: typeof item.unitPrice === "number" ? item.unitPrice : 0,
          vatRate: typeof item.vatRate === "number" ? item.vatRate : 20,
        }))
      : [],
  };
}

// ─── Mock data by file type ─────────────────────────────────────────────────

function getMockInvoiceData(fileName: string, fileCategory: "excel" | "word" | "image" | "pdf" | "unknown") {
  const nameLower = (fileName || "").toLowerCase();

  // ── Excel mocks ──
  if (fileCategory === "excel") {
    if (nameLower.includes("consulting") || nameLower.includes("conseil")) {
      return {
        clientName: "Avenir Consulting SAS",
        clientAddress: "27 Boulevard Haussmann",
        clientCity: "Paris",
        clientPostalCode: "75009",
        clientSiret: "84512367800019",
        clientVatNumber: "FR84512367800",
        notes: "Conditions de paiement : 30 jours fin de mois. Escompte 2% pour paiement anticipé.",
        items: [
          { description: "Mission de conseil stratégique — diagnostic organisationnel", quantity: 5, unitPrice: 950.0, vatRate: 20 },
          { description: "Analyse des processus internes et recommandations", quantity: 3, unitPrice: 850.0, vatRate: 20 },
          { description: "Rédaction du rapport final et présentation au COMEX", quantity: 1, unitPrice: 1200.0, vatRate: 20 },
        ],
      };
    }
    if (nameLower.includes("formation") || nameLower.includes("cours") || nameLower.includes("training")) {
      return {
        clientName: "École de Management Moderne",
        clientAddress: "15 Place Bellecour",
        clientCity: "Lyon",
        clientPostalCode: "69002",
        clientSiret: "91234567800042",
        clientVatNumber: "FR91234567800",
        notes: "Formation certifiante — éligible CPF. Numéro d'agrément organisme de formation : 82 69 12345 69.",
        items: [
          { description: "Animation formation « Management Agile » — 2 jours", quantity: 2, unitPrice: 1400.0, vatRate: 20 },
          { description: "Conception et impression des supports pédagogiques", quantity: 1, unitPrice: 350.0, vatRate: 20 },
          { description: "Évaluation des compétences et attestation de fin de formation", quantity: 1, unitPrice: 200.0, vatRate: 20 },
        ],
      };
    }
    // Default Excel
    return {
      clientName: "Société Globale Logistique",
      clientAddress: "Zone Industrielle des Milles, Bât. C",
      clientCity: "Aix-en-Provence",
      clientPostalCode: "13290",
      clientSiret: "75319824600031",
      clientVatNumber: "FR75319824600",
      notes: "Paiement à 45 jours date de facture. Pénalités de retard : 3 fois le taux d'intérêt légal.",
      items: [
        { description: "Audit des processus logistiques — entrepôt central", quantity: 1, unitPrice: 3200.0, vatRate: 20 },
        { description: "Rapport d'optimisation de la chaîne d'approvisionnement", quantity: 1, unitPrice: 1800.0, vatRate: 20 },
        { description: "Frais de déplacement et hébergement sur site", quantity: 2, unitPrice: 450.0, vatRate: 20 },
      ],
    };
  }

  // ── Word mocks ──
  if (fileCategory === "word") {
    if (nameLower.includes("traduction") || nameLower.includes("translation") || nameLower.includes("lingua")) {
      return {
        clientName: "Global Lingua Solutions",
        clientAddress: "3 Rue de Rivoli",
        clientCity: "Paris",
        clientPostalCode: "75004",
        clientSiret: "62478315900028",
        clientVatNumber: "FR62478315900",
        notes: "Traduction certifiée conforme. Délai de paiement : 30 jours net.",
        items: [
          { description: "Traduction technique FR→EN — Manuel utilisateur (45 pages)", quantity: 45, unitPrice: 32.0, vatRate: 20 },
          { description: "Relecture et certification par traducteur assermenté", quantity: 1, unitPrice: 280.0, vatRate: 20 },
          { description: "Mise en page et adaptation des schémas", quantity: 1, unitPrice: 150.0, vatRate: 20 },
        ],
      };
    }
    if (nameLower.includes("peinture") || nameLower.includes("travaux") || nameLower.includes("artisan") || nameLower.includes("renovation")) {
      return {
        clientName: "Peintures Réunies Lyon",
        clientAddress: "8 Rue de la République",
        clientCity: "Lyon",
        clientPostalCode: "69002",
        clientSiret: "12345678901234",
        clientVatNumber: "FR12345678901",
        notes: "Règlement à réception. Travaux réalisés conformément au devis accepté le 15/05/2026.",
        items: [
          { description: "Travaux de peinture intérieure — chambres et couloirs (120 m²)", quantity: 1, unitPrice: 1850.0, vatRate: 10 },
          { description: "Lessivage et préparation des supports (murs et plafonds)", quantity: 1, unitPrice: 450.0, vatRate: 10 },
          { description: "Fourniture peinture écologique label A+ (3 coloris)", quantity: 12, unitPrice: 42.0, vatRate: 20 },
        ],
      };
    }
    // Default Word
    return {
      clientName: "Société des Travaux et Rénovations",
      clientAddress: "22 Avenue Jean Jaurès",
      clientCity: "Toulouse",
      clientPostalCode: "31000",
      clientSiret: "48523196700015",
      clientVatNumber: "FR48523196700",
      notes: "TVA acquittée sur les encaissements. Garantie décennale n° GD-2026-78451.",
      items: [
        { description: "Isolation thermique par l'extérieur — façade principale (85 m²)", quantity: 1, unitPrice: 4800.0, vatRate: 10 },
        { description: "Fourniture et pose d'isolant certifié R=3.75", quantity: 85, unitPrice: 28.0, vatRate: 20 },
        { description: "Échafaudage et mise en sécurité du chantier", quantity: 1, unitPrice: 750.0, vatRate: 20 },
      ],
    };
  }

  // ── Image mocks ──
  if (fileCategory === "image") {
    if (nameLower.includes("materiel") || nameLower.includes("matériel") || nameLower.includes("bureau") || nameLower.includes("achat") || nameLower.includes("equipement")) {
      return {
        clientName: "Bureaux Moderne Co",
        clientAddress: "45 Rue du Commerce",
        clientCity: "Bordeaux",
        clientPostalCode: "33000",
        clientSiret: "53198247600043",
        clientVatNumber: "FR53198247600",
        notes: "Garantie constructeur 2 ans. Livraison incluse dans le prix.",
        items: [
          { description: "Écran 4K 27 pouces Dell UltraSharp U2723QE", quantity: 2, unitPrice: 549.0, vatRate: 20 },
          { description: "Clavier mécanique sans fil Logitech MX Keys S", quantity: 2, unitPrice: 119.0, vatRate: 20 },
          { description: "Souris ergonomique Logitech MX Master 3S", quantity: 2, unitPrice: 99.0, vatRate: 20 },
          { description: "Support moniteur ajustable en aluminium", quantity: 2, unitPrice: 65.0, vatRate: 20 },
        ],
      };
    }
    if (nameLower.includes("taxi") || nameLower.includes("uber") || nameLower.includes("transport") || nameLower.includes("deplacement")) {
      return {
        clientName: "Entreprise Innovante SARL",
        clientAddress: "10 Rue de la Paix",
        clientCity: "Paris",
        clientPostalCode: "75002",
        clientSiret: "91827364500012",
        clientVatNumber: "FR91827364500",
        notes: "Note de frais professionnels — déplacement client Marseille.",
        items: [
          { description: "Course taxi Paris CDG → Bureau (aller)", quantity: 1, unitPrice: 55.0, vatRate: 10 },
          { description: "Course taxi Gare St-Charles → Client (aller-retour)", quantity: 2, unitPrice: 32.0, vatRate: 10 },
          { description: "Supplément bagage et péage autoroute", quantity: 1, unitPrice: 18.0, vatRate: 20 },
        ],
      };
    }
    // Default Image
    return {
      clientName: "Société Tech Solutions",
      clientAddress: "7 Allée des Technologies",
      clientCity: "Nantes",
      clientPostalCode: "44000",
      clientSiret: "82716354900027",
      clientVatNumber: "FR82716354900",
      notes: "Déjeuner d'affaires — réunion trimestrielle avec le client Dupont & Associés.",
      items: [
        { description: "Déjeuner d'affaires — 3 couverts, restaurant Le Comptoir", quantity: 3, unitPrice: 38.50, vatRate: 10 },
        { description: "Bouteilles de vin (Château Margaux 2019)", quantity: 1, unitPrice: 65.0, vatRate: 20 },
        { description: "Café et mignardises", quantity: 3, unitPrice: 6.50, vatRate: 10 },
      ],
    };
  }

  // ── PDF / default mocks ──
  if (nameLower.includes("peinture") || nameLower.includes("devis")) {
    return {
      clientName: "Peintures Réunies Lyon",
      clientAddress: "8 Rue de la République",
      clientCity: "Lyon",
      clientPostalCode: "69002",
      clientSiret: "12345678901234",
      clientVatNumber: "FR12345678901",
      notes: "Règlement à réception. Travaux réalisés conformément au devis accepté.",
      items: [
        { description: "Travaux de peinture intérieure chambres et couloirs", quantity: 1, unitPrice: 1850.0, vatRate: 20 },
        { description: "Lessivage et préparation des supports (murs et plafonds)", quantity: 1, unitPrice: 450.0, vatRate: 20 },
      ],
    };
  }

  // Default standard fallback
  return {
    clientName: "SCI Le Petit Logis",
    clientAddress: "12 Avenue de la Gare",
    clientCity: "Lyon",
    clientPostalCode: "69002",
    clientSiret: "98765432100023",
    clientVatNumber: "FR98765432100",
    notes: "TVA acquittée sur les encaissements. Travaux conformes aux devis préalables.",
    items: [
      { description: "Rénovation plâtrerie — isolation et doublage des cloisons", quantity: 1, unitPrice: 2480.0, vatRate: 20 },
      { description: "Fourniture et pose d'isolant thermique certifié R=3.75", quantity: 1, unitPrice: 1000.0, vatRate: 20 },
    ],
  };
}

// ─── Main handler ───────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Optionnel mais recommandé: vérifier l'authentification
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { fileBase64, fileName, fileType } = body;

    console.log(`[Extract] Received file: ${fileName}, type: ${fileType}, base64 length: ${fileBase64?.length || 0}`);

    if (!fileBase64 && !fileName) {
      return NextResponse.json(
        { error: "Payload invalide. 'fileBase64' ou 'fileName' manquant." },
        { status: 400 }
      );
    }

    const { isWord, isExcel, isPdf, isImage, nameLower } = detectFileType(fileName, fileType);
    console.log(`[Extract] Detection: isPdf=${isPdf}, isWord=${isWord}, isExcel=${isExcel}, isImage=${isImage}`);

    // Determine file category for mock fallback
    const fileCategory: "excel" | "word" | "image" | "pdf" | "unknown" = isExcel
      ? "excel"
      : isWord
        ? "word"
        : isImage
          ? "image"
          : isPdf
            ? "pdf"
            : "unknown";

    // ── 1. PDF Factur-X native extraction ──
    if (isPdf) {
      console.log(`[Extract] Attempting Factur-X XML extraction from PDF...`);
      const parsedData = await parseFacturXPDF(fileBase64);
      if (parsedData) {
        console.log(`[Extract] ✅ Factur-X XML found! Client: ${parsedData.clientName}, Items: ${parsedData.items?.length}`);
        return NextResponse.json(parsedData);
      }
      console.log(`[Extract] No Factur-X XML found in PDF, falling through...`);
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const hasApiKey = apiKey && apiKey.trim() !== "";

    // ── 2. With Gemini API ──
    if (hasApiKey) {
      try {
        // 2a. PDF or Image → send as inlineData directly to Gemini
        if (isPdf || isImage) {
          const mimeType = isImage
            ? (fileType || "image/png")
            : "application/pdf";
          const extracted = await callGeminiWithInlineData(apiKey, fileBase64, mimeType);
          return NextResponse.json(normalizeExtractedData(extracted));
        }

        // 2b. Word (.docx) → extract text, then send text to Gemini
        if (isWord && nameLower.endsWith(".docx")) {
          const extractedText = extractTextFromDocx(fileBase64);
          if (extractedText && extractedText.length > 20) {
            const extracted = await callGeminiWithText(apiKey, extractedText);
            return NextResponse.json(normalizeExtractedData(extracted));
          }
        }

        // 2c. Excel → extract text, then send text to Gemini
        if (isExcel) {
          const extractedText = extractTextFromXlsx(fileBase64);
          if (extractedText && extractedText.length > 10) {
            const extracted = await callGeminiWithText(apiKey, extractedText);
            return NextResponse.json(normalizeExtractedData(extracted));
          }
        }

        // If we reach here for Word/Excel, text extraction failed → fall through
        console.warn(`Text extraction failed for ${fileName}, falling back.`);
      } catch (err) {
        console.error("Gemini processing failed, falling back:", err);
      }
    }

    // ── 3. PDF text extraction + heuristic parsing (no Gemini needed) ──
    if (isPdf) {
      console.log(`[Extract] Attempting raw text extraction from PDF...`);
      const pdfText = await extractTextFromPDF(fileBase64);
      if (pdfText && pdfText.length > 20) {
        console.log(`[Extract] Extracted ${pdfText.length} chars of text from PDF`);
        console.log(`[Extract] Text preview: ${pdfText.substring(0, 200).replace(/\n/g, " | ")}`);

        // If we have the Gemini API key, send the extracted text to Gemini
        if (hasApiKey) {
          try {
            const extracted = await callGeminiWithText(apiKey!, pdfText);
            console.log(`[Extract] ✅ Gemini parsed PDF text successfully`);
            return NextResponse.json(normalizeExtractedData(extracted));
          } catch (err) {
            console.warn("[Extract] Gemini text parsing failed, using heuristic:", err);
          }
        }

        // Otherwise parse heuristically
        const heuristicData = parseTextHeuristically(pdfText, user);
        const hasUsefulData = heuristicData.clientName || (heuristicData.items && heuristicData.items.length > 0);
        if (hasUsefulData) {
          console.log(`[Extract] ✅ Heuristic extraction: client="${heuristicData.clientName}", items=${heuristicData.items?.length}`);
          return NextResponse.json(heuristicData);
        }
        console.log(`[Extract] Heuristic extraction found no useful data, falling to mock.`);
      } else {
        console.log(`[Extract] Could not extract text from PDF (${pdfText?.length || 0} chars).`);
      }
    }

    // ── 4. Word/Excel text extraction + heuristic parsing (no Gemini or as fallback) ──
    if (isWord && nameLower.endsWith(".docx")) {
      const extractedText = extractTextFromDocx(fileBase64);
      if (extractedText && extractedText.length > 20) {
        console.log(`[Extract] Extracted text from DOCX, parsing heuristically...`);
        const heuristicData = parseTextHeuristically(extractedText, user);
        if (heuristicData.clientName || (heuristicData.items && heuristicData.items.length > 0)) {
          return NextResponse.json(heuristicData);
        }
      }
    }
    if (isExcel) {
      const extractedText = extractTextFromXlsx(fileBase64);
      if (extractedText && extractedText.length > 10) {
        console.log(`[Extract] Extracted text from Excel, parsing heuristically...`);
        const heuristicData = parseTextHeuristically(extractedText, user);
        if (heuristicData.clientName || (heuristicData.items && heuristicData.items.length > 0)) {
          return NextResponse.json(heuristicData);
        }
      }
    }

    // ── 5. Fallback: rich mock data ──
    console.log(`[Extract] Using mock data for ${fileName} (category: ${fileCategory})`);
    const mockData = getMockInvoiceData(fileName, fileCategory);
    return NextResponse.json(mockData);
  } catch (error) {
    console.error("Request handling error in extract route:", error);
    return NextResponse.json({ error: "Une erreur est survenue lors de l'extraction." }, { status: 500 });
  }
}

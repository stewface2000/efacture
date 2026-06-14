"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PDFDocument, PDFName, PDFDict, PDFArray, PDFRawStream } from "pdf-lib";
import { useLanguage } from "@/components/LanguageContext";

// Robust decoder fallback in case decodePDFRawStream is not exported
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let decodePDFRawStreamFn: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const pdfLib = require("pdf-lib");
  decodePDFRawStreamFn = pdfLib.decodePDFRawStream;
} catch (e) {
  console.warn("Could not import decodePDFRawStream directly, using fallback.", e);
}

interface ExtractedInvoiceData {
  invoiceId: string | null;
  date: string | null;
  sellerName: string | null;
  buyerName: string | null;
  totalHT: string | null;
  totalTTC: string | null;
  totalVAT: string | null;
  profile: string;
}

export default function ValidatorClient() {
  const router = useRouter();
  const { t, locale } = useLanguage();
  const [isDragActive, setIsDragActive] = useState(false);

  const [status, setStatus] = useState<"idle" | "analyzing" | "success" | "error">("idle");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [errorType, setErrorType] = useState<"format" | "unsupported_extension" | "xml_missing" | "xml_invalid" | "generic" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [extractedData, setExtractedData] = useState<ExtractedInvoiceData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const resetValidator = () => {
    setStatus("idle");
    setErrorType(null);
    setErrorMessage("");
    setFileName("");
    setFileSize("");
    setUploadedFile(null);
    setExtractedData(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const processFile = async (file: File) => {
    setUploadedFile(file);
    setFileName(file.name);
    setFileSize(formatFileSize(file.size));
    setStatus("analyzing");

    const extension = file.name.split(".").pop()?.toLowerCase();
    
    // 1. Direct interception for Word/Excel/unsupported formats
    if (["doc", "docx", "xls", "xlsx", "csv", "txt", "png", "jpg", "jpeg"].includes(extension || "")) {
      setTimeout(() => {
        setStatus("error");
        setErrorType("unsupported_extension");
        setErrorMessage(
          t("validateur.errUnsupportedExt").replace("{ext}", extension?.toUpperCase() || "")
        );
      }, 600);
      return;
    }

    if (extension !== "pdf") {
      setTimeout(() => {
        setStatus("error");
        setErrorType("generic");
        setErrorMessage(t("validateur.errGenericPDF"));
      }, 600);
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const arrayBuffer = e.target?.result as ArrayBuffer;
          
          // Try to extract Factur-X XML
          let xmlString = await extractFacturXXML(arrayBuffer);
          
          if (!xmlString) {
            // Fallback to binary text search
            xmlString = extractFacturXFallback(arrayBuffer);
          }

          if (!xmlString) {
            setStatus("error");
            setErrorType("xml_missing");
            setErrorMessage(t("validateur.errXmlMissing"));
            return;
          }

          // Parse the XML
          const data = parseFacturXXML(xmlString);
          setExtractedData(data);
          setStatus("success");
        } catch (err) {
          console.error("Error parsing PDF document:", err);
          setStatus("error");
          setErrorType("xml_invalid");
          setErrorMessage(t("validateur.errXmlInvalid"));
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (err) {
      console.error("FileReader error:", err);
      setStatus("error");
      setErrorType("generic");
      setErrorMessage(t("validateur.errReader"));
    }
  };


  // Extract XML using pdf-lib (traversing PDF name tree)
  const extractFacturXXML = async (arrayBuffer: ArrayBuffer): Promise<string | null> => {
    try {
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const catalog = pdfDoc.catalog;
      if (!catalog.has(PDFName.of("Names"))) return null;

      const names = catalog.lookup(PDFName.of("Names"), PDFDict);
      if (!names.has(PDFName.of("EmbeddedFiles"))) return null;

      const embeddedFiles = names.lookup(PDFName.of("EmbeddedFiles"), PDFDict);
      if (!embeddedFiles.has(PDFName.of("Names"))) return null;

      const efNames = embeddedFiles.lookup(PDFName.of("Names"), PDFArray);
      for (let idx = 0; idx < efNames.size(); idx += 2) {
        const fileNameObj = efNames.lookup(idx);
        if (!fileNameObj) continue;
        let nameStr = "";
        
        if (typeof fileNameObj === "object" && "decodeText" in fileNameObj) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
              let decodedBytes: Uint8Array;

              if (stream instanceof PDFRawStream) {
                if (decodePDFRawStreamFn) {
                  decodedBytes = decodePDFRawStreamFn(stream).decode();
                } else {
                  // manual simple lookup or direct access fallback
                  decodedBytes = stream.contents;
                }
              } else if (stream && "contents" in stream) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                decodedBytes = (stream as any).contents;
              } else {
                continue;
              }

              const decoder = new TextDecoder("utf-8");
              return decoder.decode(decodedBytes);
            }
          }
        }
      }
      return null;
    } catch (e) {
      console.warn("pdf-lib direct traversal failed, relying on fallback parser.", e);
      return null;
    }
  };

  // Fallback scanner (direct binary scan for XML block)
  const extractFacturXFallback = (arrayBuffer: ArrayBuffer): string | null => {
    try {
      const decoder = new TextDecoder("utf-8", { fatal: false });
      const text = decoder.decode(new Uint8Array(arrayBuffer));
      const startIdx = text.indexOf("<rsm:CrossIndustryInvoice");
      
      if (startIdx !== -1) {
        const endTag = "</rsm:CrossIndustryInvoice>";
        const endIdx = text.indexOf(endTag, startIdx);
        if (endIdx !== -1) {
          return text.substring(startIdx, endIdx + endTag.length);
        }
      }
      
      // Try alternative root tags
      const altStartIdx = text.indexOf("<CrossIndustryInvoice");
      if (altStartIdx !== -1) {
        const altEndTag = "</CrossIndustryInvoice>";
        const altEndIdx = text.indexOf(altEndTag, altStartIdx);
        if (altEndIdx !== -1) {
          return text.substring(altStartIdx, altEndIdx + altEndTag.length);
        }
      }

      return null;
    } catch (e) {
      console.error("Fallback binary scanner failed:", e);
      return null;
    }
  };

  // Parse Factur-X XML to extract structured metadata
  const parseFacturXXML = (xmlString: string): ExtractedInvoiceData => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    const getTagText = (parent: Document | Element, tagName: string): string | null => {
      const elements = parent.getElementsByTagName(tagName);
      if (elements.length > 0) return elements[0].textContent?.trim() || null;
      
      // Fallback without prefix
      const cleanTagName = tagName.split(":").pop() || tagName;
      const fallbackElements = parent.getElementsByTagName(cleanTagName);
      if (fallbackElements.length > 0) return fallbackElements[0].textContent?.trim() || null;

      return null;
    };

    // 1. Invoice ID
    const invoiceId = getTagText(xmlDoc, "ram:ID") || getTagText(xmlDoc, "ID");

    // 2. Date
    let dateText = null;
    const issueDateEl = xmlDoc.getElementsByTagName("ram:IssueDateTime")[0] || xmlDoc.getElementsByTagName("IssueDateTime")[0];
    if (issueDateEl) {
      const dateTimeString = issueDateEl.getElementsByTagName("udt:DateTimeString")[0] || issueDateEl.getElementsByTagName("DateTimeString")[0];
      if (dateTimeString) {
        dateText = dateTimeString.textContent?.trim() || null;
        if (dateText && dateText.length === 8 && /^\d+$/.test(dateText)) {
          dateText = `${dateText.substring(6, 8)}/${dateText.substring(4, 6)}/${dateText.substring(0, 4)}`;
        }
      }
    }

    // 3. Seller Name
    let sellerName = null;
    const sellerEl = xmlDoc.getElementsByTagName("ram:SellerTradeParty")[0] || xmlDoc.getElementsByTagName("SellerTradeParty")[0];
    if (sellerEl) {
      sellerName = getTagText(sellerEl, "ram:Name") || getTagText(sellerEl, "Name");
    }

    // 4. Buyer Name
    let buyerName = null;
    const buyerEl = xmlDoc.getElementsByTagName("ram:BuyerTradeParty")[0] || xmlDoc.getElementsByTagName("BuyerTradeParty")[0];
    if (buyerEl) {
      buyerName = getTagText(buyerEl, "ram:Name") || getTagText(buyerEl, "Name");
    }

    // 5. Totals
    let totalHT = null;
    let totalTTC = null;
    let totalVAT = null;
    const monetarySumEl = xmlDoc.getElementsByTagName("ram:SpecifiedTradeSettlementHeaderMonetarySummation")[0] || xmlDoc.getElementsByTagName("SpecifiedTradeSettlementHeaderMonetarySummation")[0];
    if (monetarySumEl) {
      totalHT = getTagText(monetarySumEl, "ram:TaxBasisTotalAmount") || getTagText(monetarySumEl, "TaxBasisTotalAmount");
      totalTTC = getTagText(monetarySumEl, "ram:GrandTotalAmount") || getTagText(monetarySumEl, "GrandTotalAmount");
      totalVAT = getTagText(monetarySumEl, "ram:TaxTotalAmount") || getTagText(monetarySumEl, "TaxTotalAmount");
    }

    // 6. Conformance Profile
    let profile = "Minimum";
    const guidelineEl = xmlDoc.getElementsByTagName("ram:GuidelineSpecifiedDocumentContextParameter")[0] || xmlDoc.getElementsByTagName("GuidelineSpecifiedDocumentContextParameter")[0];
    if (guidelineEl) {
      const profileId = getTagText(guidelineEl, "ram:ID") || getTagText(guidelineEl, "ID");
      if (profileId) {
        if (profileId.includes("minimum")) profile = "Minimum";
        else if (profileId.includes("basicwl")) profile = "Basic WL";
        else if (profileId.includes("basic")) profile = "Basic";
        else if (profileId.includes("en16931")) profile = "Comfort / Standard";
        else if (profileId.includes("extended")) profile = "Extended";
      }
    }

    return {
      invoiceId,
      date: dateText,
      sellerName,
      buyerName,
      totalHT: totalHT ? `${parseFloat(totalHT).toFixed(2)} €` : null,
      totalTTC: totalTTC ? `${parseFloat(totalTTC).toFixed(2)} €` : null,
      totalVAT: totalVAT ? `${parseFloat(totalVAT).toFixed(2)} €` : null,
      profile
    };
  };

  // Mock a successful Factur-X validation for testing
  const loadMockSuccess = () => {
    setStatus("analyzing");
    setFileName("facture_renovation_platrerie_demo.pdf");
    setFileSize("145.4 KB");
    setTimeout(() => {
      setExtractedData({
        invoiceId: "FV-2026-0042",
        date: "05/06/2026",
        sellerName: "Plâtrerie & Rénovation Artisanale Sud-Est",
        buyerName: "SCI Le Petit Logis",
        totalHT: "3480.00 €",
        totalTTC: "4176.00 €",
        totalVAT: "696.00 €",
        profile: "Basic"
      });
      setStatus("success");
    }, 800);
  };

  // Mock a failed validation for testing (regular PDF)
  const loadMockFail = () => {
    setStatus("analyzing");
    setFileName("devis_peinture_vieux_format.pdf");
    setFileSize("87.9 KB");
    setTimeout(() => {
      setStatus("error");
      setErrorType("xml_missing");
      setErrorMessage(
        "Fichier factur-x.xml introuvable. Ce fichier PDF est une facture classique (standard). Elle ne contient pas les métadonnées obligatoires nécessaires à la transmission automatique et à la validation par l'administration fiscale française."
      );
    }, 800);
  };

  const handlePrefillRedirect = () => {
    if (!uploadedFile) {
      const fallbackPayload = {
        name: fileName || "facture_non_conforme.pdf",
        type: "application/pdf",
        base64: ""
      };
      sessionStorage.setItem("efacture_prefill_file", JSON.stringify(fallbackPayload));
      router.push("/generateur/nouvelle?prefill=true");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1] || "";
      sessionStorage.setItem(
        "efacture_prefill_file",
        JSON.stringify({
          name: uploadedFile.name,
          type: uploadedFile.type,
          base64: base64,
        })
      );
      router.push("/generateur/nouvelle?prefill=true");
    };
    reader.readAsDataURL(uploadedFile);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      {/* Top Banner Disclaimer */}
      <div 
        className="glass-card animate-fade-in"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem 1.5rem",
          border: "1px solid var(--teal-muted)",
          background: "var(--teal-bg)",
          borderRadius: "var(--radius-md)",
          marginBottom: "2rem",
        }}
      >
        <span style={{ fontSize: "1.5rem" }}>🔒</span>
        <div style={{ fontSize: "0.85rem", color: "var(--teal-dark)", lineHeight: 1.5 }}>
          <strong>{t("validateur.disclaimerTitle")}</strong> {t("validateur.disclaimerDesc")}
        </div>
      </div>

      {/* Main interactive area */}
      <div 
        className="glass-card animate-fade-in-up" 
        style={{
          padding: "3rem clamp(1.5rem, 5%, 3rem)",
          textAlign: "center",
          border: isDragActive ? "2px dashed var(--teal)" : "2px dashed var(--border-medium)",
          backgroundColor: isDragActive ? "rgba(15, 118, 110, 0.03)" : "rgba(255, 255, 255, 0.8)",
          borderRadius: "var(--radius-lg)",
          transition: "all 0.2s ease-in-out",
          boxShadow: isDragActive ? "var(--shadow-glow-teal)" : "var(--shadow-card)",
          position: "relative"
        }}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          multiple={false}
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          onChange={handleChange}
        />

        {status === "idle" && (
          <div>
            <div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>📄</div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              {t("validateur.dropzoneTitle")}
            </h2>
            <p style={{ margin: "0 auto 1.5rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
              {t("validateur.dropzoneDesc")}
            </p>
            <button className="btn btn-primary btn-md" onClick={onButtonClick}>
              {t("validateur.browseBtn")}
            </button>
            
            {/* Mock Tests buttons */}
            <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", display: "block", width: "100%", marginBottom: "0.25rem" }}>
                {t("validateur.examplesLabel")}
              </span>
              <button 
                type="button"
                className="btn btn-secondary btn-sm" 
                style={{ fontSize: "0.75rem", padding: "0.375rem 0.875rem", color: "var(--teal)" }}
                onClick={loadMockSuccess}
              >
                {t("validateur.exampleSuccess")}
              </button>
              <button 
                type="button"
                className="btn btn-secondary btn-sm" 
                style={{ fontSize: "0.75rem", padding: "0.375rem 0.875rem", color: "var(--rust)" }}
                onClick={loadMockFail}
              >
                {t("validateur.exampleFail")}
              </button>
            </div>
          </div>
        )}

        {status === "analyzing" && (
          <div style={{ padding: "2rem 0" }}>
            <div className="spinner" style={{
              width: "48px",
              height: "48px",
              border: "4px solid rgba(15, 118, 110, 0.1)",
              borderTop: "4px solid var(--teal)",
              borderRadius: "50%",
              margin: "0 auto 1.5rem",
              animation: "spin 1s linear infinite"
            }} />
            <style jsx global>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-deep)" }}>
              {t("validateur.analyzing")}
            </h3>
            <p style={{ margin: "0.5rem auto 0", fontSize: "0.875rem", color: "var(--text-muted)" }}>
              {t("validateur.analyzingDesc").replace("{name}", fileName).replace("{size}", fileSize)}
            </p>
          </div>
        )}

        {status === "success" && extractedData && (
          <div className="animate-fade-in" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: "var(--teal-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "var(--teal)"
              }}>
                ✓
              </div>
              <div>
                <span className="badge badge-teal" style={{ marginBottom: "0.25rem" }}>
                  {t("validateur.formatDetected")}
                </span>
                <h3 style={{ fontSize: "1.375rem", fontWeight: 700, margin: 0, color: "var(--teal-dark)" }}>
                  {t("validateur.conformingTitle")}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "0.9375rem", marginBottom: "1.5rem", color: "var(--text-secondary)", maxWidth: "none" }}>
              {locale === "fr" && <>Félicitations ! Le document <strong>{fileName}</strong> contient les structures de données XML requises (profil <strong>{extractedData.profile}</strong>) et pourra être transmis directement et automatiquement au Portail Public de Facturation (PPF).</>}
              {locale === "en" && <>Congratulations! The document <strong>{fileName}</strong> contains the required XML data structures (profile <strong>{extractedData.profile}</strong>) and can be transmitted directly and automatically to the Public Invoicing Portal (PPF).</>}
              {locale === "ar" && <>تهانينا! يحتوي المستند <strong>{fileName}</strong> على هياكل بيانات XML المطلوبة (الملف التعريفي <strong>{extractedData.profile}</strong>) ويمكن نقله مباشرة وتلقائياً إلى بوابة الفوترة العامة (PPF).</>}
              {locale === "pl" && <>Gratulacje! Dokument <strong>{fileName}</strong> zawiera wymagane struktury danych XML (profil <strong>{extractedData.profile}</strong>) i może być bezpośrednio i automatycznie przesłany do publicznego portalu fakturowania (PPF).</>}
              {locale === "pt" && <>Parabéns! O documento <strong>{fileName}</strong> contém as estruturas de dados XML obrigatórias (perfil <strong>{extractedData.profile}</strong>) e poderá ser transmitido direta e automaticamente ao Portal Público de Faturação (PPF).</>}
            </p>

            {/* Extracted metadata grid */}
            <div style={{
              background: "#ffffff",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              padding: "1.25rem",
              marginBottom: "2rem"
            }}>
              <h4 style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em", marginTop: 0, marginBottom: "1rem" }}>
                {t("validateur.extractedDataTitle")}
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{t("validateur.invoiceNumber")}</span>
                  <strong style={{ color: "var(--text-deep)", fontSize: "0.9375rem" }}>{extractedData.invoiceId || "Non spécifié"}</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{t("validateur.issueDate")}</span>
                  <strong style={{ color: "var(--text-deep)", fontSize: "0.9375rem" }}>{extractedData.date || "Non spécifiée"}</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{t("validateur.seller")}</span>
                  <strong style={{ color: "var(--text-deep)", fontSize: "0.9375rem" }}>{extractedData.sellerName || "Non spécifié"}</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{t("validateur.buyer")}</span>
                  <strong style={{ color: "var(--text-deep)", fontSize: "0.9375rem" }}>{extractedData.buyerName || "Non spécifié"}</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{t("validateur.amountHT")}</span>
                  <strong style={{ color: "var(--text-deep)", fontSize: "0.9375rem" }}>{extractedData.totalHT || "Non spécifié"}</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{t("validateur.amountVAT")}</span>
                  <strong style={{ color: "var(--text-deep)", fontSize: "0.9375rem" }}>{extractedData.totalVAT || "Non spécifié"}</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{t("validateur.amountTTC")}</span>
                  <strong style={{ color: "var(--teal-dark)", fontSize: "1.125rem", fontWeight: 700 }}>{extractedData.totalTTC || "Non spécifié"}</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{t("validateur.profileLabel")}</span>
                  <span className="badge badge-teal" style={{ marginTop: "0.125rem" }}>{extractedData.profile}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="btn btn-secondary btn-sm" onClick={resetValidator}>
                {t("validateur.validateAnotherBtn")}
              </button>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="animate-fade-in" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: "var(--rust-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "var(--rust)"
              }}>
                ⚠️
              </div>
              <div>
                <span className="badge badge-rust" style={{ marginBottom: "0.25rem" }}>
                  {errorType === "unsupported_extension" ? t("validateur.unsupportedExtBadge") : t("validateur.nonConformBadge")}
                </span>
                <h3 style={{ fontSize: "1.375rem", fontWeight: 700, margin: 0, color: "var(--rust-dark)" }}>
                  {errorType === "unsupported_extension" 
                    ? t("validateur.unsupportedExtTitle") 
                    : t("validateur.nonConformTitle")}
                </h3>
              </div>
            </div>

            <div 
              className="border-warning-left"
              style={{
                background: "rgba(234, 88, 12, 0.02)",
                padding: "1.25rem",
                borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                marginBottom: "2rem"
              }}
            >
              <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "none" }}>
                {errorMessage}
              </p>
              
              {errorType === "unsupported_extension" && (
                <div style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--text-muted)", background: "#ffffff", padding: "0.75rem 1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                  💡 <strong>{t("validateur.conversionTip")}</strong> {t("validateur.conversionTipDesc")}
                </div>
              )}
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <button
                type="button"
                className="btn btn-accent btn-md"
                onClick={handlePrefillRedirect}
              >
                {t("validateur.generateConformBtn")}
              </button>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <button className="btn btn-secondary btn-sm" onClick={resetValidator}>
                {t("validateur.retryBtn")}
              </button>
              
              <Link href="/quiz" className="btn btn-accent btn-sm">
                {t("validateur.findSoftwareBtn")}
              </Link>
              
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                {t("validateur.generateurHint")}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Educational FAQ details below the tool */}
      <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "3rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
          {t("validateur.faqTitle")}
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          <div className="card card-flat">
            <h3 style={{ marginTop: 0, fontSize: "1.125rem", fontWeight: 700, color: "var(--text-deep)" }}>
              {t("validateur.faqQ1")}
            </h3>
            <p style={{ fontSize: "0.875rem", margin: 0 }}>
              {t("validateur.faqA1")}
            </p>
          </div>

          <div className="card card-flat">
            <h3 style={{ marginTop: 0, fontSize: "1.125rem", fontWeight: 700, color: "var(--text-deep)" }}>
              {t("validateur.faqQ2")}
            </h3>
            <p style={{ fontSize: "0.875rem", margin: 0 }}>
              {t("validateur.faqA2")}
            </p>
          </div>

          <div className="card card-flat">
            <h3 style={{ marginTop: 0, fontSize: "1.125rem", fontWeight: 700, color: "var(--text-deep)" }}>
              {t("validateur.faqQ3")}
            </h3>
            <p style={{ fontSize: "0.875rem", margin: 0 }}>
              {t("validateur.faqA3")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

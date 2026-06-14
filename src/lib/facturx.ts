import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// Types
interface InvoiceUser {
  companyName: string | null;
  siret: string | null;
  vatNumber: string | null;
  address: string | null;
  city: string | null;
  postalCode: string | null;
  country: string;
  phone: string | null;
  iban: string | null;
  bic: string | null;
  email: string;
  accentColor: string;
}

interface InvoiceItemData {
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
  totalHT: number;
  totalVAT: number;
  totalTTC: number;
}

interface InvoiceData {
  invoiceNumber: string;
  issueDate: string; // ISO date string
  dueDate?: string | null;
  clientName: string;
  clientAddress?: string | null;
  clientCity?: string | null;
  clientPostalCode?: string | null;
  clientCountry: string;
  clientSiret?: string | null;
  clientVatNumber?: string | null;
  totalHT: number;
  totalVAT: number;
  totalTTC: number;
  notes?: string | null;
  items: InvoiceItemData[];
}

/**
 * Generate the Factur-X XML string (CII / EN 16931 Basic profile)
 */
export function generateFacturXXML(invoice: InvoiceData, user: InvoiceUser): string {
  const issueDate = invoice.issueDate.replace(/-/g, "").substring(0, 8);
  const dueDateStr = invoice.dueDate
    ? invoice.dueDate.replace(/-/g, "").substring(0, 8)
    : issueDate;

  const escXml = (s: string | null | undefined) =>
    (s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const itemsXml = invoice.items
    .map(
      (item, i) => `
    <ram:IncludedSupplyChainTradeLineItem>
      <ram:AssociatedDocumentLineDocument>
        <ram:LineID>${i + 1}</ram:LineID>
      </ram:AssociatedDocumentLineDocument>
      <ram:SpecifiedTradeProduct>
        <ram:Name>${escXml(item.description)}</ram:Name>
      </ram:SpecifiedTradeProduct>
      <ram:SpecifiedLineTradeAgreement>
        <ram:NetPriceProductTradePrice>
          <ram:ChargeAmount>${item.unitPrice.toFixed(2)}</ram:ChargeAmount>
        </ram:NetPriceProductTradePrice>
      </ram:SpecifiedLineTradeAgreement>
      <ram:SpecifiedLineTradeDelivery>
        <ram:BilledQuantity unitCode="C62">${item.quantity.toFixed(2)}</ram:BilledQuantity>
      </ram:SpecifiedLineTradeDelivery>
      <ram:SpecifiedLineTradeSettlement>
        <ram:ApplicableTradeTax>
          <ram:TypeCode>VAT</ram:TypeCode>
          <ram:CategoryCode>S</ram:CategoryCode>
          <ram:RateApplicablePercent>${item.vatRate.toFixed(2)}</ram:RateApplicablePercent>
        </ram:ApplicableTradeTax>
        <ram:SpecifiedTradeSettlementLineMonetarySummation>
          <ram:LineTotalAmount>${item.totalHT.toFixed(2)}</ram:LineTotalAmount>
        </ram:SpecifiedTradeSettlementLineMonetarySummation>
      </ram:SpecifiedLineTradeSettlement>
    </ram:IncludedSupplyChainTradeLineItem>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rsm:CrossIndustryInvoice xmlns:rsm="urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100" xmlns:ram="urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100" xmlns:udt="urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100" xmlns:qdt="urn:un:unece:uncefact:data:standard:QualifiedDataType:100">
  <rsm:ExchangedDocumentContext>
    <ram:GuidelineSpecifiedDocumentContextParameter>
      <ram:ID>urn:factur-x.eu:1p0:basic</ram:ID>
    </ram:GuidelineSpecifiedDocumentContextParameter>
  </rsm:ExchangedDocumentContext>
  <rsm:ExchangedDocument>
    <ram:ID>${escXml(invoice.invoiceNumber)}</ram:ID>
    <ram:TypeCode>380</ram:TypeCode>
    <ram:IssueDateTime>
      <udt:DateTimeString format="102">${issueDate}</udt:DateTimeString>
    </ram:IssueDateTime>
  </rsm:ExchangedDocument>
  <rsm:SupplyChainTradeTransaction>
    <ram:ApplicableHeaderTradeAgreement>
      <ram:SellerTradeParty>
        <ram:Name>${escXml(user.companyName || user.email)}</ram:Name>${
    user.siret
      ? `
        <ram:SpecifiedLegalOrganization>
          <ram:ID schemeID="0002">${escXml(user.siret)}</ram:ID>
        </ram:SpecifiedLegalOrganization>`
      : ""
  }
        <ram:PostalTradeAddress>
          <ram:PostcodeCode>${escXml(user.postalCode)}</ram:PostcodeCode>
          <ram:LineOne>${escXml(user.address)}</ram:LineOne>
          <ram:CityName>${escXml(user.city)}</ram:CityName>
          <ram:CountryID>${user.country === "France" ? "FR" : escXml(user.country)}</ram:CountryID>
        </ram:PostalTradeAddress>${
    user.vatNumber
      ? `
        <ram:SpecifiedTaxRegistration>
          <ram:ID schemeID="VA">${escXml(user.vatNumber)}</ram:ID>
        </ram:SpecifiedTaxRegistration>`
      : ""
  }
      </ram:SellerTradeParty>
      <ram:BuyerTradeParty>
        <ram:Name>${escXml(invoice.clientName)}</ram:Name>${
    invoice.clientSiret
      ? `
        <ram:SpecifiedLegalOrganization>
          <ram:ID schemeID="0002">${escXml(invoice.clientSiret)}</ram:ID>
        </ram:SpecifiedLegalOrganization>`
      : ""
  }
        <ram:PostalTradeAddress>
          <ram:PostcodeCode>${escXml(invoice.clientPostalCode)}</ram:PostcodeCode>
          <ram:LineOne>${escXml(invoice.clientAddress)}</ram:LineOne>
          <ram:CityName>${escXml(invoice.clientCity)}</ram:CityName>
          <ram:CountryID>${invoice.clientCountry === "France" ? "FR" : escXml(invoice.clientCountry)}</ram:CountryID>
        </ram:PostalTradeAddress>${
    invoice.clientVatNumber
      ? `
        <ram:SpecifiedTaxRegistration>
          <ram:ID schemeID="VA">${escXml(invoice.clientVatNumber)}</ram:ID>
        </ram:SpecifiedTaxRegistration>`
      : ""
  }
      </ram:BuyerTradeParty>
    </ram:ApplicableHeaderTradeAgreement>
    <ram:ApplicableHeaderTradeDelivery/>
    <ram:ApplicableHeaderTradeSettlement>
      <ram:InvoiceCurrencyCode>EUR</ram:InvoiceCurrencyCode>${
    user.iban
      ? `
      <ram:SpecifiedTradeSettlementPaymentMeans>
        <ram:TypeCode>58</ram:TypeCode>
        <ram:PayeePartyCreditorFinancialAccount>
          <ram:IBANID>${escXml(user.iban)}</ram:IBANID>
        </ram:PayeePartyCreditorFinancialAccount>${
          user.bic
            ? `
        <ram:PayeeSpecifiedCreditorFinancialInstitution>
          <ram:BICID>${escXml(user.bic)}</ram:BICID>
        </ram:PayeeSpecifiedCreditorFinancialInstitution>`
            : ""
        }
      </ram:SpecifiedTradeSettlementPaymentMeans>`
      : ""
  }${
    invoice.dueDate
      ? `
      <ram:SpecifiedTradePaymentTerms>
        <ram:DueDateDateTime>
          <udt:DateTimeString format="102">${dueDateStr}</udt:DateTimeString>
        </ram:DueDateDateTime>
      </ram:SpecifiedTradePaymentTerms>`
      : ""
  }
      <ram:ApplicableTradeTax>
        <ram:CalculatedAmount>${invoice.totalVAT.toFixed(2)}</ram:CalculatedAmount>
        <ram:TypeCode>VAT</ram:TypeCode>
        <ram:BasisAmount>${invoice.totalHT.toFixed(2)}</ram:BasisAmount>
        <ram:CategoryCode>S</ram:CategoryCode>
        <ram:RateApplicablePercent>20.00</ram:RateApplicablePercent>
      </ram:ApplicableTradeTax>
      <ram:SpecifiedTradeSettlementHeaderMonetarySummation>
        <ram:LineTotalAmount>${invoice.totalHT.toFixed(2)}</ram:LineTotalAmount>
        <ram:TaxBasisTotalAmount currencyID="EUR">${invoice.totalHT.toFixed(2)}</ram:TaxBasisTotalAmount>
        <ram:TaxTotalAmount currencyID="EUR">${invoice.totalVAT.toFixed(2)}</ram:TaxTotalAmount>
        <ram:GrandTotalAmount currencyID="EUR">${invoice.totalTTC.toFixed(2)}</ram:GrandTotalAmount>
        <ram:DuePayableAmount currencyID="EUR">${invoice.totalTTC.toFixed(2)}</ram:DuePayableAmount>
      </ram:SpecifiedTradeSettlementHeaderMonetarySummation>
    </ram:ApplicableHeaderTradeSettlement>
${itemsXml}
  </rsm:SupplyChainTradeTransaction>
</rsm:CrossIndustryInvoice>`;
}

/**
 * Parse a hex color string to RGB values (0-1 range)
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;
  return { r, g, b };
}

/**
 * Format a date string (ISO) to DD/MM/YYYY
 */
function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

/**
 * Generate the full Factur-X PDF (visual PDF + embedded XML attachment)
 */
export async function generateInvoicePDF(
  invoice: InvoiceData,
  user: InvoiceUser
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const accent = hexToRgb(user.accentColor || "#0f766e");
  const accentRgb = rgb(accent.r, accent.g, accent.b);
  const black = rgb(0.1, 0.1, 0.1);
  const grey = rgb(0.45, 0.45, 0.45);
  const lightGrey = rgb(0.92, 0.92, 0.92);

  const marginLeft = 50;
  const marginRight = 50;
  const contentWidth = width - marginLeft - marginRight;
  let y = height - 50;

  // === HEADER BAR ===
  page.drawRectangle({
    x: 0,
    y: height - 80,
    width,
    height: 80,
    color: accentRgb,
  });

  page.drawText("FACTURE", {
    x: marginLeft,
    y: height - 55,
    size: 24,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText(invoice.invoiceNumber, {
    x: width - marginRight - font.widthOfTextAtSize(invoice.invoiceNumber, 12),
    y: height - 45,
    size: 12,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const dateStr = formatDate(invoice.issueDate);
  page.drawText(`Date : ${dateStr}`, {
    x: width - marginRight - font.widthOfTextAtSize(`Date : ${dateStr}`, 9),
    y: height - 62,
    size: 9,
    font,
    color: rgb(0.9, 0.9, 0.9),
  });

  y = height - 110;

  // === SELLER INFO ===
  page.drawText("Émetteur", {
    x: marginLeft,
    y,
    size: 8,
    font: fontBold,
    color: accentRgb,
  });
  y -= 14;

  const sellerLines = [
    user.companyName || user.email,
    user.address,
    [user.postalCode, user.city].filter(Boolean).join(" "),
    user.siret ? `SIRET : ${user.siret}` : null,
    user.vatNumber ? `TVA : ${user.vatNumber}` : null,
    user.phone ? `Tél : ${user.phone}` : null,
    user.email,
  ].filter(Boolean) as string[];

  for (const line of sellerLines) {
    page.drawText(line, { x: marginLeft, y, size: 9, font, color: black });
    y -= 13;
  }

  // === CLIENT INFO ===
  const clientX = marginLeft + contentWidth / 2 + 20;
  let cy = height - 110;

  page.drawText("Destinataire", {
    x: clientX,
    y: cy,
    size: 8,
    font: fontBold,
    color: accentRgb,
  });
  cy -= 14;

  const clientLines = [
    invoice.clientName,
    invoice.clientAddress,
    [invoice.clientPostalCode, invoice.clientCity].filter(Boolean).join(" "),
    invoice.clientSiret ? `SIRET : ${invoice.clientSiret}` : null,
    invoice.clientVatNumber ? `TVA : ${invoice.clientVatNumber}` : null,
  ].filter(Boolean) as string[];

  for (const line of clientLines) {
    page.drawText(line, { x: clientX, y: cy, size: 9, font, color: black });
    cy -= 13;
  }

  y = Math.min(y, cy) - 30;

  // === TABLE HEADER ===
  const colDescrX = marginLeft;
  const colQtyX = marginLeft + contentWidth * 0.5;
  const colPriceX = marginLeft + contentWidth * 0.62;
  const colVatX = marginLeft + contentWidth * 0.74;
  const colTotalX = marginLeft + contentWidth * 0.86;

  page.drawRectangle({
    x: marginLeft,
    y: y - 4,
    width: contentWidth,
    height: 20,
    color: accentRgb,
  });

  const headerY = y;
  const headers = [
    { text: "Description", x: colDescrX + 6 },
    { text: "Qté", x: colQtyX },
    { text: "P.U. HT", x: colPriceX },
    { text: "TVA %", x: colVatX },
    { text: "Total HT", x: colTotalX },
  ];

  for (const h of headers) {
    page.drawText(h.text, {
      x: h.x,
      y: headerY,
      size: 8,
      font: fontBold,
      color: rgb(1, 1, 1),
    });
  }

  y -= 22;

  // === TABLE ROWS ===
  for (let i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];

    if (i % 2 === 0) {
      page.drawRectangle({
        x: marginLeft,
        y: y - 4,
        width: contentWidth,
        height: 18,
        color: lightGrey,
      });
    }

    // Truncate long descriptions
    let desc = item.description;
    const maxDescWidth = colQtyX - colDescrX - 12;
    while (font.widthOfTextAtSize(desc, 8.5) > maxDescWidth && desc.length > 3) {
      desc = desc.substring(0, desc.length - 4) + "...";
    }

    page.drawText(desc, { x: colDescrX + 6, y, size: 8.5, font, color: black });
    page.drawText(item.quantity.toString(), { x: colQtyX, y, size: 8.5, font, color: black });
    page.drawText(`${item.unitPrice.toFixed(2)} €`, { x: colPriceX, y, size: 8.5, font, color: black });
    page.drawText(`${item.vatRate.toFixed(0)}%`, { x: colVatX, y, size: 8.5, font, color: black });
    page.drawText(`${item.totalHT.toFixed(2)} €`, { x: colTotalX, y, size: 8.5, font, color: black });

    y -= 18;
  }

  y -= 10;

  // === SEPARATOR ===
  page.drawLine({
    start: { x: marginLeft + contentWidth * 0.6, y },
    end: { x: marginLeft + contentWidth, y },
    thickness: 1,
    color: lightGrey,
  });

  y -= 18;

  // === TOTALS ===
  const totalsX = marginLeft + contentWidth * 0.62;
  const totalsValX = marginLeft + contentWidth * 0.86;

  page.drawText("Total HT", { x: totalsX, y, size: 9, font, color: grey });
  page.drawText(`${invoice.totalHT.toFixed(2)} €`, { x: totalsValX, y, size: 9, font, color: black });
  y -= 16;

  page.drawText("TVA", { x: totalsX, y, size: 9, font, color: grey });
  page.drawText(`${invoice.totalVAT.toFixed(2)} €`, { x: totalsValX, y, size: 9, font, color: black });
  y -= 20;

  page.drawRectangle({
    x: totalsX - 8,
    y: y - 6,
    width: contentWidth * 0.38 + 8,
    height: 26,
    color: accentRgb,
  });

  page.drawText("TOTAL TTC", { x: totalsX, y, size: 10, font: fontBold, color: rgb(1, 1, 1) });
  page.drawText(`${invoice.totalTTC.toFixed(2)} €`, {
    x: totalsValX,
    y,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  y -= 40;

  // === PAYMENT INFO ===
  if (user.iban) {
    page.drawText("Coordonnées bancaires", { x: marginLeft, y, size: 8, font: fontBold, color: accentRgb });
    y -= 14;
    page.drawText(`IBAN : ${user.iban}`, { x: marginLeft, y, size: 8.5, font, color: black });
    y -= 13;
    if (user.bic) {
      page.drawText(`BIC : ${user.bic}`, { x: marginLeft, y, size: 8.5, font, color: black });
      y -= 13;
    }
    y -= 10;
  }

  // === DUE DATE ===
  if (invoice.dueDate) {
    page.drawText(`Date d'échéance : ${formatDate(invoice.dueDate)}`, {
      x: marginLeft,
      y,
      size: 9,
      font: fontBold,
      color: black,
    });
    y -= 16;
  }

  // === NOTES ===
  if (invoice.notes) {
    page.drawText("Notes :", { x: marginLeft, y, size: 8, font: fontBold, color: grey });
    y -= 13;
    // Simple word-wrap for notes
    const words = invoice.notes.split(" ");
    let line = "";
    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(testLine, 8) > contentWidth - 10) {
        page.drawText(line, { x: marginLeft, y, size: 8, font, color: grey });
        y -= 12;
        line = word;
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, { x: marginLeft, y, size: 8, font, color: grey });
    }
  }

  // === FOOTER ===
  page.drawText("Facture générée au format Factur-X — efacture-independant.fr", {
    x: marginLeft,
    y: 30,
    size: 7,
    font,
    color: grey,
  });

  // === ATTACH FACTUR-X XML ===
  const xmlContent = generateFacturXXML(invoice, user);
  const xmlBytes = new TextEncoder().encode(xmlContent);

  await pdfDoc.attach(xmlBytes, "factur-x.xml", {
    mimeType: "text/xml",
    description: "Factur-X XML invoice data (Basic profile)",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afRelationship: "Alternative" as any,
  });

  // Set PDF metadata
  pdfDoc.setTitle(`Facture ${invoice.invoiceNumber}`);
  pdfDoc.setAuthor(user.companyName || user.email);
  pdfDoc.setSubject("Facture électronique Factur-X");
  pdfDoc.setProducer("efacture-independant.fr");
  pdfDoc.setCreator("efacture-independant.fr");

  return pdfDoc.save();
}

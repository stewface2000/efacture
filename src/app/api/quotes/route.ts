import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";
import { generateQuotePDF } from "@/lib/facturx";

/**
 * GET /api/quotes — List all quotes for the authenticated user
 */
export async function GET() {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const quotes = await prisma.quote.findMany({
    where: { userId: user.id },
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.quote.count({
    where: { userId: user.id },
  });

  return NextResponse.json({ quotes, _count: total });
}

/**
 * POST /api/quotes — Create a new quote + generate PDF
 * No quota limit for quotes (unlimited)
 */
export async function POST(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const body = await request.json();
  const {
    clientName,
    clientAddress,
    clientCity,
    clientPostalCode,
    clientCountry,
    clientSiret,
    clientVatNumber,
    validUntil,
    notes,
    items,
  } = body;

  if (!clientName || !items || items.length === 0) {
    return NextResponse.json(
      { error: "Le nom du client et au moins une ligne de devis sont requis." },
      { status: 400 }
    );
  }

  // Auto-generate quote number: DV-{YYYY}-{sequential 4-digit}
  const year = new Date().getFullYear();
  const existingCount = await prisma.quote.count({
    where: {
      userId: user.id,
      quoteNumber: { startsWith: `DV-${year}-` },
    },
  });
  const sequentialNumber = String(existingCount + 1).padStart(4, "0");
  const quoteNumber = `DV-${year}-${sequentialNumber}`;

  // Compute item totals
  const computedItems = items.map(
    (item: { description: string; quantity: number; unitPrice: number; vatRate: number }) => {
      const totalHT = item.quantity * item.unitPrice;
      const totalVAT = totalHT * (item.vatRate / 100);
      const totalTTC = totalHT + totalVAT;
      return {
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        vatRate: item.vatRate,
        totalHT: Math.round(totalHT * 100) / 100,
        totalVAT: Math.round(totalVAT * 100) / 100,
        totalTTC: Math.round(totalTTC * 100) / 100,
      };
    }
  );

  // Compute quote totals
  const quoteTotalHT = computedItems.reduce(
    (sum: number, item: { totalHT: number }) => sum + item.totalHT,
    0
  );
  const quoteTotalVAT = computedItems.reduce(
    (sum: number, item: { totalVAT: number }) => sum + item.totalVAT,
    0
  );
  const quoteTotalTTC = computedItems.reduce(
    (sum: number, item: { totalTTC: number }) => sum + item.totalTTC,
    0
  );

  // Default validity: 30 days from now
  const defaultValidUntil = new Date();
  defaultValidUntil.setDate(defaultValidUntil.getDate() + 30);

  // Create quote + items in a transaction
  const quote = await prisma.$transaction(async (tx) => {
    const q = await tx.quote.create({
      data: {
        userId: user.id,
        quoteNumber,
        issueDate: new Date(),
        validUntil: validUntil ? new Date(validUntil) : defaultValidUntil,
        clientName,
        clientAddress: clientAddress || null,
        clientCity: clientCity || null,
        clientPostalCode: clientPostalCode || null,
        clientCountry: clientCountry || "France",
        clientSiret: clientSiret || null,
        clientVatNumber: clientVatNumber || null,
        totalHT: Math.round(quoteTotalHT * 100) / 100,
        totalVAT: Math.round(quoteTotalVAT * 100) / 100,
        totalTTC: Math.round(quoteTotalTTC * 100) / 100,
        status: "FINAL",
        notes: notes || null,
        items: {
          create: computedItems,
        },
      },
      include: { items: true },
    });
    return q;
  });

  // Generate Quote PDF
  const pdfBytes = await generateQuotePDF(
    {
      quoteNumber: quote.quoteNumber,
      issueDate: quote.issueDate.toISOString(),
      validUntil: quote.validUntil?.toISOString() || null,
      clientName: quote.clientName,
      clientAddress: quote.clientAddress,
      clientCity: quote.clientCity,
      clientPostalCode: quote.clientPostalCode,
      clientCountry: quote.clientCountry,
      clientSiret: quote.clientSiret,
      clientVatNumber: quote.clientVatNumber,
      totalHT: quote.totalHT,
      totalVAT: quote.totalVAT,
      totalTTC: quote.totalTTC,
      notes: quote.notes,
      items: quote.items.map((item) => ({
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        vatRate: item.vatRate,
        totalHT: item.totalHT,
        totalVAT: item.totalVAT,
        totalTTC: item.totalTTC,
      })),
    },
    {
      companyName: user.companyName,
      siret: user.siret,
      vatNumber: user.vatNumber,
      address: user.address,
      city: user.city,
      postalCode: user.postalCode,
      country: user.country,
      phone: user.phone,
      iban: user.iban,
      bic: user.bic,
      email: user.email,
      accentColor: user.accentColor,
    }
  );

  // Return PDF as binary download
  const filename = `${quote.quoteNumber}.pdf`;
  return new NextResponse(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Length": String(pdfBytes.length),
    },
  });
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser, canCreateFreeInvoice } from "@/lib/auth";
import { generateInvoicePDF } from "@/lib/facturx";

/**
 * GET /api/invoices — List all invoices for the authenticated user
 */
export async function GET() {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const invoices = await prisma.invoice.findMany({
    where: { userId: user.id },
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.invoice.count({
    where: { userId: user.id },
  });

  return NextResponse.json({ invoices, _count: total });
}

/**
 * POST /api/invoices — Create a new invoice + generate Factur-X PDF
 */
export async function POST(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  // Check quota
  const canCreate = await canCreateFreeInvoice(user.id);
  if (!canCreate && !user.hasActiveSubscription) {
    return NextResponse.json(
      {
        error:
          "Vous avez atteint la limite de 3 factures gratuites. Souscrivez un abonnement pour continuer.",
        requiresSubscription: true,
      },
      { status: 403 }
    );
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
    dueDate,
    notes,
    items,
  } = body;

  if (!clientName || !items || items.length === 0) {
    return NextResponse.json(
      { error: "Le nom du client et au moins une ligne de facture sont requis." },
      { status: 400 }
    );
  }

  // Auto-generate invoice number: FV-{YYYY}-{sequential 4-digit}
  const year = new Date().getFullYear();
  const existingCount = await prisma.invoice.count({
    where: {
      userId: user.id,
      invoiceNumber: { startsWith: `FV-${year}-` },
    },
  });
  const sequentialNumber = String(existingCount + 1).padStart(4, "0");
  const invoiceNumber = `FV-${year}-${sequentialNumber}`;

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

  // Compute invoice totals
  const invoiceTotalHT = computedItems.reduce(
    (sum: number, item: { totalHT: number }) => sum + item.totalHT,
    0
  );
  const invoiceTotalVAT = computedItems.reduce(
    (sum: number, item: { totalVAT: number }) => sum + item.totalVAT,
    0
  );
  const invoiceTotalTTC = computedItems.reduce(
    (sum: number, item: { totalTTC: number }) => sum + item.totalTTC,
    0
  );

  // Create invoice + items in a transaction
  const invoice = await prisma.$transaction(async (tx) => {
    const inv = await tx.invoice.create({
      data: {
        userId: user.id,
        invoiceNumber,
        issueDate: new Date(),
        dueDate: dueDate ? new Date(dueDate) : null,
        clientName,
        clientAddress: clientAddress || null,
        clientCity: clientCity || null,
        clientPostalCode: clientPostalCode || null,
        clientCountry: clientCountry || "France",
        clientSiret: clientSiret || null,
        clientVatNumber: clientVatNumber || null,
        totalHT: Math.round(invoiceTotalHT * 100) / 100,
        totalVAT: Math.round(invoiceTotalVAT * 100) / 100,
        totalTTC: Math.round(invoiceTotalTTC * 100) / 100,
        status: "FINAL",
        notes: notes || null,
        items: {
          create: computedItems,
        },
      },
      include: { items: true },
    });
    return inv;
  });

  // Generate Factur-X PDF
  const pdfBytes = await generateInvoicePDF(
    {
      invoiceNumber: invoice.invoiceNumber,
      issueDate: invoice.issueDate.toISOString(),
      dueDate: invoice.dueDate?.toISOString() || null,
      clientName: invoice.clientName,
      clientAddress: invoice.clientAddress,
      clientCity: invoice.clientCity,
      clientPostalCode: invoice.clientPostalCode,
      clientCountry: invoice.clientCountry,
      clientSiret: invoice.clientSiret,
      clientVatNumber: invoice.clientVatNumber,
      totalHT: invoice.totalHT,
      totalVAT: invoice.totalVAT,
      totalTTC: invoice.totalTTC,
      notes: invoice.notes,
      items: invoice.items.map((item) => ({
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
  const filename = `${invoice.invoiceNumber}.pdf`;
  return new NextResponse(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Length": String(pdfBytes.length),
    },
  });
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser, canCreateFreeInvoice } from "@/lib/auth";
import { generateInvoicePDF } from "@/lib/facturx";

type RouteParams = {
  params: Promise<{ id: string }>;
};

/**
 * POST /api/quotes/:id/convert — Convert a quote to an invoice
 * The created invoice counts toward the invoice quota.
 */
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
    }

    const { id } = await params;

    // Find the quote
    const quote = await prisma.quote.findUnique({
      where: {
        id,
        userId: user.id,
      },
      include: {
        items: true,
      },
    });

    if (!quote) {
      return NextResponse.json({ error: "Devis non trouvé." }, { status: 404 });
    }

    if (quote.convertedInvoiceId) {
      return NextResponse.json(
        { error: "Ce devis a déjà été converti en facture." },
        { status: 400 }
      );
    }

    // Check invoice quota (converted invoice counts toward quota)
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

    // Auto-generate invoice number
    const year = new Date().getFullYear();
    const existingCount = await prisma.invoice.count({
      where: {
        userId: user.id,
        invoiceNumber: { startsWith: `FV-${year}-` },
      },
    });
    const sequentialNumber = String(existingCount + 1).padStart(4, "0");
    const invoiceNumber = `FV-${year}-${sequentialNumber}`;

    // Create invoice from quote data in a transaction
    const invoice = await prisma.$transaction(async (tx) => {
      // Create the invoice with items from the quote
      const inv = await tx.invoice.create({
        data: {
          userId: user.id,
          invoiceNumber,
          issueDate: new Date(),
          dueDate: quote.validUntil, // Use quote validity as due date
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
          status: "FINAL",
          notes: quote.notes,
          items: {
            create: quote.items.map((item) => ({
              description: item.description,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              vatRate: item.vatRate,
              totalHT: item.totalHT,
              totalVAT: item.totalVAT,
              totalTTC: item.totalTTC,
            })),
          },
        },
        include: { items: true },
      });

      // Mark quote as converted
      await tx.quote.update({
        where: { id: quote.id },
        data: {
          status: "CONVERTED",
          convertedInvoiceId: inv.id,
        },
      });

      return inv;
    });

    // Generate Factur-X PDF for the new invoice
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
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur interne";
    console.error("Convert quote to invoice API error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";
import { generateInvoicePDF } from "@/lib/facturx";

type RouteParams = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
    }

    const { id } = await params;

    const invoice = await prisma.invoice.findUnique({
      where: {
        id,
        userId: user.id,
      },
      include: {
        items: true,
      },
    });

    if (!invoice) {
      return NextResponse.json({ error: "Facture non trouvée." }, { status: 404 });
    }

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
    console.error("Fetch invoice PDF API error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

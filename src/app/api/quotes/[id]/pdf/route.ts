import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";
import { generateQuotePDF } from "@/lib/facturx";

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

    const filename = `${quote.quoteNumber}.pdf`;
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
    console.error("Fetch quote PDF API error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

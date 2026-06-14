import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";

/**
 * GET /api/user/profile — Return the authenticated user's profile data
 */
export async function GET() {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  return NextResponse.json({
    id: user.id,
    email: user.email,
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
    logoUrl: user.logoUrl,
    accentColor: user.accentColor,
    hasActiveSubscription: user.hasActiveSubscription,
  });
}

/**
 * PUT /api/user/profile — Update the authenticated user's profile
 */
export async function PUT(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const body = await request.json();

  // Whitelist updatable fields
  const allowedFields = [
    "companyName",
    "siret",
    "vatNumber",
    "address",
    "city",
    "postalCode",
    "phone",
    "iban",
    "bic",
    "accentColor",
  ] as const;

  const updateData: Record<string, string | null> = {};
  for (const field of allowedFields) {
    if (field in body) {
      updateData[field] = body[field] || null;
    }
  }

  // Validate accentColor format if provided
  if (updateData.accentColor && !/^#[0-9a-fA-F]{6}$/.test(updateData.accentColor)) {
    return NextResponse.json(
      { error: "Format de couleur invalide. Utilisez le format #RRGGBB." },
      { status: 400 }
    );
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: updateData,
  });

  return NextResponse.json({
    success: true,
    user: {
      id: updatedUser.id,
      email: updatedUser.email,
      companyName: updatedUser.companyName,
      siret: updatedUser.siret,
      vatNumber: updatedUser.vatNumber,
      address: updatedUser.address,
      city: updatedUser.city,
      postalCode: updatedUser.postalCode,
      country: updatedUser.country,
      phone: updatedUser.phone,
      iban: updatedUser.iban,
      bic: updatedUser.bic,
      accentColor: updatedUser.accentColor,
    },
  });
}

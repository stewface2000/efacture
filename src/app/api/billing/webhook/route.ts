import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, action } = body as { userId?: string; action?: string };

    if (action !== "SIMULATE_PAYMENT_SUCCESS") {
      return NextResponse.json(
        { error: "Action non reconnue." },
        { status: 400 }
      );
    }

    // Resolve the target user: prefer explicit userId, fall back to session
    let targetUserId = userId;

    if (!targetUserId) {
      const sessionUser = await getAuthUser();
      if (!sessionUser) {
        return NextResponse.json(
          { error: "Non authentifié." },
          { status: 401 }
        );
      }
      targetUserId = sessionUser.id;
    }

    // Activate subscription
    const user = await prisma.user.update({
      where: { id: targetUserId },
      data: { hasActiveSubscription: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur introuvable." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Billing webhook error:", err);
    const message =
      err instanceof Error ? err.message : "Erreur interne.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

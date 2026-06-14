import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthUser, clearSessionCookie } from "@/lib/auth";

export async function POST() {
  try {
    const user = await getAuthUser();

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: { sessionToken: null },
      });
    }

    await clearSessionCookie();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Logout] Erreur:", error);
    // Clear cookie even if DB update fails
    await clearSessionCookie();
    return NextResponse.json({ success: true });
  }
}

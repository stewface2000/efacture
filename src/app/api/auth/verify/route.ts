import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateToken, setSessionCookie } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const redirectParam = request.nextUrl.searchParams.get("redirect");

  const errorRedirect = () => {
    let url = "/login?error=invalid";
    if (redirectParam && redirectParam.startsWith("/") && !redirectParam.startsWith("//")) {
      url += `&redirect=${encodeURIComponent(redirectParam)}`;
    }
    return NextResponse.redirect(new URL(url, request.url));
  };

  try {
    const token = request.nextUrl.searchParams.get("token");

    if (!token) {
      return errorRedirect();
    }

    // Find user by magic link token
    const user = await prisma.user.findFirst({
      where: { magicLinkToken: token },
    });

    if (!user) {
      return errorRedirect();
    }

    // Check if the token has expired
    if (!user.magicLinkExpiresAt || user.magicLinkExpiresAt < new Date()) {
      return errorRedirect();
    }

    // Generate a session token and save it
    const sessionToken = generateToken();

    await prisma.user.update({
      where: { id: user.id },
      data: {
        sessionToken,
        magicLinkToken: null,
        magicLinkExpiresAt: null,
      },
    });

    // Set the session cookie
    await setSessionCookie(sessionToken);

    // Redirect to the invoice generator or custom redirect destination
    let destination = "/generateur";
    if (redirectParam && redirectParam.startsWith("/") && !redirectParam.startsWith("//")) {
      destination = redirectParam;
    }
    return NextResponse.redirect(new URL(destination, request.url));
  } catch (error) {
    console.error("[Verify] Erreur de vérification du magic link:", error);
    return errorRedirect();
  }
}

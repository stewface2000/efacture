import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { email, redirectUrl } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Veuillez saisir une adresse email valide." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Generate a magic link token
    const token = generateToken();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // Upsert user: create if not exists, update magic link fields
    await prisma.user.upsert({
      where: { email: normalizedEmail },
      create: {
        email: normalizedEmail,
        magicLinkToken: token,
        magicLinkExpiresAt: expiresAt,
      },
      update: {
        magicLinkToken: token,
        magicLinkExpiresAt: expiresAt,
      },
    });

    // Build the magic link URL using proxy headers if available
    const forwardedHost = request.headers.get("x-forwarded-host");
    const forwardedProto = request.headers.get("x-forwarded-proto") || "https";
    
    let origin = request.nextUrl.origin;
    if (forwardedHost) {
      origin = `${forwardedProto}://${forwardedHost}`;
    }

    let magicLink = `${origin}/api/auth/verify?token=${token}`;
    if (redirectUrl && typeof redirectUrl === "string" && redirectUrl.startsWith("/") && !redirectUrl.startsWith("//")) {
      magicLink += `&redirect=${encodeURIComponent(redirectUrl)}`;
    }


    const brevoApiKey = process.env.BREVO_API_KEY;

    if (brevoApiKey) {
      // Production: send email via Brevo SMTP API
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          sender: {
            name: "e-independant.fr",
            email: "noreply@e-independant.fr",
          },
          to: [{ email: normalizedEmail }],
          subject: "Votre lien de connexion — e-independant.fr",
          htmlContent: `
            <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 2rem;">
              <h2 style="color: #1a1a1a; margin-bottom: 1rem;">Connexion à efacture</h2>
              <p style="color: #3d3d3d; line-height: 1.6;">
                Cliquez sur le bouton ci-dessous pour vous connecter. Ce lien est valable 15 minutes.
              </p>
              <a href="${magicLink}"
                 style="display: inline-block; margin-top: 1rem; padding: 0.875rem 2rem; background: #0f766e; color: #ffffff; text-decoration: none; border-radius: 9999px; font-weight: 600;">
                Se connecter
              </a>
              <p style="color: #7a7a7a; font-size: 0.875rem; margin-top: 1.5rem;">
                Si vous n'avez pas demandé ce lien, vous pouvez ignorer cet email.
              </p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("[Brevo] Erreur d'envoi de l'email magic link:", errorData);
        return NextResponse.json(
          { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." },
          { status: 500 }
        );
      }

      console.log(`[Magic Link] Email envoyé à ${normalizedEmail} via Brevo.`);

      return NextResponse.json({
        success: true,
        message: "Un lien de connexion vous a été envoyé par email.",
      });
    } else {
      // Dev mode: log the magic link and return it in the response
      console.log(`[Magic Link] Mode dev — lien de connexion :`);
      console.log(magicLink);

      return NextResponse.json({
        success: true,
        message: "Un lien de connexion vous a été envoyé par email.",
        devLink: magicLink,
      });
    }
  } catch (error) {
    console.error("[Magic Link] Erreur:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer.", details: message },
      { status: 500 }
    );
  }
}

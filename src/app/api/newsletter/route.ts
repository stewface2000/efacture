import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Veuillez saisir une adresse email valide." },
        { status: 400 }
      );
    }

    // 1. Save to local database (LeadSubscriber table)
    // Ignore duplicate keys since users might sign up multiple times
    try {
      await prisma.leadSubscriber.create({
        data: {
          email,
          source: "HOMEPAGE_FOOTER",
        },
      });
      console.log(`[LeadSubscriber] New subscriber added locally: ${email}`);
    } catch (dbError: unknown) {
      if (dbError && typeof dbError === "object" && "code" in dbError && dbError.code === "P2002") {
        console.log(`[LeadSubscriber] Email already exists locally: ${email}`);
      } else {
        console.error("[LeadSubscriber] DB error:", dbError);
      }
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (brevoApiKey) {
      console.log(`[Brevo] Sending subscriber ${email} to Brevo API...`);
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          email,
          updateEnabled: true,
          // You could optionally add listIds: [2] here if a specific list ID was configured
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("[Brevo] API Error:", errorData);
        // We still return success to the user since they were saved locally
      } else {
        console.log(`[Brevo] Successfully subscribed ${email} to Brevo.`);
      }
    } else {
      console.log(
        `[Simulation Mode] Brevo API Key not configured. Simulated adding contact: ${email}`
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'inscription." },
      { status: 500 }
    );
  }
}

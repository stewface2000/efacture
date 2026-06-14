import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";

export async function POST() {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;

  // Simulation mode — no Stripe key configured
  if (!stripeKey) {
    return NextResponse.json({ checkoutUrl: "/generateur/checkout-simu" });
  }

  // Real Stripe mode
  try {
    const origin = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const params = new URLSearchParams();
    params.append("mode", "subscription");
    params.append("payment_method_types[0]", "card");
    params.append("line_items[0][price_data][currency]", "eur");
    params.append("line_items[0][price_data][unit_amount]", "900");
    params.append("line_items[0][price_data][recurring][interval]", "month");
    params.append("line_items[0][price_data][product_data][name]", "Abonnement Générateur Factur-X — Illimité");
    params.append("line_items[0][quantity]", "1");
    params.append("metadata[userId]", user.id);
    params.append("success_url", `${origin}/generateur?subscribed=true`);
    params.append("cancel_url", `${origin}/generateur`);

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("Stripe API Error:", errData);
      throw new Error("Erreur de création de session Stripe.");
    }

    const session = await response.json();
    return NextResponse.json({ checkoutUrl: session.url });
  } catch (err: unknown) {
    console.error("Stripe checkout error:", err);
    const message = err instanceof Error ? err.message : "Erreur Stripe inconnue.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

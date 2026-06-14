import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/components/LanguageContext";
import { Locale } from "@/lib/translations";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  });

export const metadata: Metadata = {
  title: {
    default:
      "Facture Électronique Obligatoire 2026 — Guide Pratique pour Indépendants",
    template: "%s | efacture-independant.fr",
  },
  description:
    "Pas de panique, pas de jargon. Trouvez la solution de facturation électronique adaptée à votre métier avant le 1er septembre 2026.",
  keywords: [
    "facture électronique",
    "e-facture",
    "indépendant",
    "auto-entrepreneur",
    "obligation 2026",
    "facturation électronique obligatoire",
  ],
  authors: [{ name: "efacture-independant.fr" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "efacture-independant.fr",
    title:
      "Facture Électronique Obligatoire 2026 — Guide Pratique pour Indépendants",
    description:
      "Pas de panique, pas de jargon. Trouvez la solution de facturation électronique adaptée à votre métier avant le 1er septembre 2026.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "fr") as Locale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} antialiased`}>
      <body>
        <LanguageProvider initialLocale={locale}>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}


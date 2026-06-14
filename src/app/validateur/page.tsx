import type { Metadata } from "next";
import ValidatorClient from "@/components/ValidatorClient";
import { cookies } from "next/headers";
import { getTranslation, Locale } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Validateur de Facture Électronique Gratuit — Format Factur-X 2026",
  description:
    "Testez gratuitement la conformité de vos factures pour la réforme du 1er septembre 2026. Vérification instantanée et 100% sécurisée du format Factur-X sans envoyer vos fichiers sur aucun serveur.",
  keywords: [
    "validateur facture",
    "tester facture electronique",
    "verificateur factur-x",
    "conformite facture 2026",
    "generer factur-x",
    "facture electronique artisan",
  ],
};

export default async function ValidatorPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "fr") as Locale;
  const t = (key: string) => getTranslation(key, locale);

  return (
    <article className="bg-warm-mesh" style={{ minHeight: "calc(100vh - 4rem)" }}>
      {/* Header Section */}
      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: "1rem" }}>
            {t("validateur.badge")}
          </span>
          <h1 style={{ marginBottom: "1rem", fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}>
            {t("validateur.title")}
          </h1>
          <p style={{ margin: "0 auto", fontSize: "1.0625rem", color: "var(--text-secondary)" }}>
            {t("validateur.subtitle")}
          </p>
        </div>
      </section>

      {/* Validator Component Section */}
      <section className="section" style={{ paddingTop: "1rem", paddingBottom: "4rem" }}>
        <div className="container">
          <ValidatorClient />
        </div>
      </section>
    </article>
  );
}


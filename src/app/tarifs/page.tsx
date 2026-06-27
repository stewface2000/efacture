import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { getTranslation, Locale } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Tarifs — Solutions de Facturation Électronique Factur-X",
  description:
    "Découvrez nos solutions simples et transparentes pour les indépendants. Validateur de factures 100% gratuit, générateur gratuit ou version illimitée pour vos factures conformes Factur-X 2026.",
  keywords: [
    "tarifs facture",
    "facture electronique prix",
    "factur-x gratuit",
    "abonnement facture electronique",
    "generateur facture pro",
  ],
};

export default async function TarifsPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "fr") as Locale;
  const t = (key: string) => getTranslation(key, locale);

  return (
    <article className="bg-warm-mesh" style={{ minHeight: "calc(100vh - 4rem)" }}>
      {/* Header section */}
      <section className="section" style={{ paddingBottom: "1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: "1rem" }}>
            {t("tarifs.badge")}
          </span>
          <h1 style={{ marginBottom: "1rem", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            {t("tarifs.title")}
          </h1>
          <p style={{ margin: "0 auto", fontSize: "1.0625rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            {t("tarifs.description")}
          </p>
        </div>
      </section>

      {/* Pricing Grid section */}
      <section className="section" style={{ paddingTop: "1.5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
            maxWidth: "1100px",
            margin: "0 auto"
          }}>
            
            {/* Validateur - Free */}
            <div className="card" style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative",
              borderTop: "4px solid var(--teal-light)"
            }}>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="badge badge-teal">{t("tarifs.card1Badge")}</span>
                  <span className="badge badge-muted">{t("tarifs.card1Status")}</span>
                </div>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-deep)", margin: "0 0 0.5rem 0" }}>
                  {t("tarifs.card1Title")}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  {t("tarifs.card1Desc")}
                </p>
                
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "2rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-deep)" }}>{t("tarifs.card1Price")}</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{t("tarifs.card1Period")}</span>
                </div>

                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)"
                }}>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card1F1")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card1F2")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card1F3")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card1F4")}</span>
                  </li>
                </ul>
              </div>

              <Link href="/validateur" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                {t("tarifs.card1Cta")}
              </Link>
            </div>

            {/* Générateur - Version Gratuite */}
            <div className="card" style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative",
              borderTop: "4px solid var(--teal)"
            }}>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="badge badge-teal">{t("tarifs.card2Badge")}</span>
                  <span className="badge badge-muted">{t("tarifs.card2Status")}</span>
                </div>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-deep)", margin: "0 0 0.5rem 0" }}>
                  {t("tarifs.card2Title")}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  {t("tarifs.card2Desc")}
                </p>
                
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "2rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-deep)" }}>{t("tarifs.card2Price")}</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{t("tarifs.card2Period")}</span>
                </div>

                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)"
                }}>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card2F1")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card2F2")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card2F3")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card2F4")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card2F5")}</span>
                  </li>
                </ul>
              </div>

              <Link href="/generateur" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                {t("tarifs.card2Cta")}
              </Link>
            </div>

            {/* Générateur - Version Illimitée */}
            <div className="card" style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative",
              border: "2px solid var(--rust)",
              backgroundColor: "var(--surface-elevated)",
              boxShadow: "var(--shadow-lg)"
            }}>
              {/* Premium Top badge */}
              <div style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10
              }}>
                <span className="badge badge-rust" style={{ boxShadow: "0 4px 10px rgba(234, 88, 12, 0.2)" }}>
                  {t("tarifs.card3Recommended")}
                </span>
              </div>

              <div style={{ flexGrow: 1, paddingTop: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="badge badge-rust" style={{ background: "rgba(234, 88, 12, 0.1)", color: "var(--rust)" }}>{t("tarifs.card3Badge")}</span>
                  <span className="badge badge-rust">{t("tarifs.card3Status")}</span>
                </div>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-deep)", margin: "0 0 0.5rem 0" }}>
                  {t("tarifs.card3Title")}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  {t("tarifs.card3Desc")}
                </p>
                
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "2rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-deep)" }}>{t("tarifs.card3Price")}</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{t("tarifs.card3Period")}</span>
                </div>

                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)"
                }}>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--rust)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card3F1")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--rust)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card3F2")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--rust)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card3F3")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--rust)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card3F4")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--rust)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card3F5")}</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--rust)", fontWeight: "bold" }}>✓</span>
                    <span>{t("tarifs.card3F6")}</span>
                  </li>
                </ul>
              </div>

              <Link href="/generateur" className="btn btn-cta" style={{ width: "100%", justifyContent: "center" }}>
                {t("tarifs.card3Cta")}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt" style={{ paddingBlock: "4.5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 1rem 0" }}>
              {t("tarifs.faqTitle")}
            </h2>
            <p style={{ color: "var(--text-muted)", margin: "0 auto" }}>
              {t("tarifs.faqDesc")}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            
            <details style={{
              background: "var(--bg-warm)",
              padding: "1.25rem 1.5rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              cursor: "pointer"
            }}>
              <summary style={{ fontWeight: 600, color: "var(--text-deep)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{t("tarifs.faqQ1")}</span>
                <span style={{ fontSize: "1.25rem", color: "var(--teal)", fontWeight: "bold" }}>+</span>
              </summary>
              <p style={{ marginTop: "1rem", fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, cursor: "default" }}>
                {t("tarifs.faqA1")}
              </p>
            </details>

            <details style={{
              background: "var(--bg-warm)",
              padding: "1.25rem 1.5rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              cursor: "pointer"
            }}>
              <summary style={{ fontWeight: 600, color: "var(--text-deep)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{t("tarifs.faqQ2")}</span>
                <span style={{ fontSize: "1.25rem", color: "var(--teal)", fontWeight: "bold" }}>+</span>
              </summary>
              <p style={{ marginTop: "1rem", fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, cursor: "default" }}>
                {t("tarifs.faqA2")}
              </p>
            </details>

            <details style={{
              background: "var(--bg-warm)",
              padding: "1.25rem 1.5rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              cursor: "pointer"
            }}>
              <summary style={{ fontWeight: 600, color: "var(--text-deep)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{t("tarifs.faqQ3")}</span>
                <span style={{ fontSize: "1.25rem", color: "var(--teal)", fontWeight: "bold" }}>+</span>
              </summary>
              <p style={{ marginTop: "1rem", fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, cursor: "default" }}>
                {t("tarifs.faqA3")}
              </p>
            </details>

            <details style={{
              background: "var(--bg-warm)",
              padding: "1.25rem 1.5rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              cursor: "pointer"
            }}>
              <summary style={{ fontWeight: 600, color: "var(--text-deep)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{t("tarifs.faqQ4")}</span>
                <span style={{ fontSize: "1.25rem", color: "var(--teal)", fontWeight: "bold" }}>+</span>
              </summary>
              <p style={{ marginTop: "1rem", fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, cursor: "default" }}>
                {t("tarifs.faqA4")}
              </p>
            </details>

            <details style={{
              background: "var(--bg-warm)",
              padding: "1.25rem 1.5rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              cursor: "pointer"
            }}>
              <summary style={{ fontWeight: 600, color: "var(--text-deep)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{t("tarifs.faqQ5")}</span>
                <span style={{ fontSize: "1.25rem", color: "var(--teal)", fontWeight: "bold" }}>+</span>
              </summary>
              <p style={{ marginTop: "1rem", fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, cursor: "default" }}>
                {t("tarifs.faqA5")}
              </p>
            </details>

          </div>
        </div>
      </section>
    </article>
  );
}


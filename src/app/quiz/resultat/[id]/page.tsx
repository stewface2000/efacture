import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getRecommendation, type QuizAnswers } from "@/lib/quiz-logic";
import { notFound } from "next/navigation";
import PrintButton from "@/components/PrintButton";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Votre Diagnostic Personnalisé — Facturation Électronique",
    description:
      "Découvrez la solution de facturation électronique recommandée pour votre profil et commencez votre mise en conformité.",
    robots: { index: false, follow: true },
  };
}

export default async function QuizResultPage({ params }: Props) {
  const { id } = await params;

  // Fetch the quiz result from database
  const quizResult = await prisma.quizResult.findUnique({
    where: { id },
    include: { recommended: true },
  });

  if (!quizResult) {
    notFound();
  }

  // Re-compute recommendation from saved profile for full details
  const userProfile: QuizAnswers = JSON.parse(quizResult.userProfile);
  const recommendation = getRecommendation(userProfile);

  return (
    <article style={{ position: "relative" }}>
      {/* Printable branding header */}
      <div className="print-header">
        <div className="print-title">e-independant.fr</div>
        <div className="print-subtitle">Votre diagnostic de facturation électronique personnalisé</div>
      </div>

      {/* Header */}
      <section
        className="section"
        id="result-header"
        aria-label="Résultat du diagnostic"
        style={{ paddingBottom: "1rem" }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center" }} className="animate-fade-in-up">
            <span className="badge badge-teal" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              ✅ Diagnostic terminé
            </span>
            <h1 style={{ marginBottom: "0.75rem" }}>Votre diagnostic personnalisé</h1>
            <p style={{ margin: "0 auto", fontSize: "1.0625rem" }}>
              Basé sur vos réponses, voici la solution que nous recommandons 
              pour votre situation.
            </p>
            <div style={{ marginTop: "1.5rem" }} className="no-print">
              <PrintButton />
            </div>
          </div>
        </div>
      </section>

      {/* Main Recommendation Card */}
      <section
        className="section section-alt"
        id="recommendation-card"
        aria-label="Solution recommandée"
        style={{ paddingTop: "2rem" }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="animate-fade-in-up delay-100" style={{
            background: "var(--bg-white)",
            borderRadius: "var(--radius-xl)",
            border: "2px solid var(--teal)",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(15, 118, 110, 0.1), var(--shadow-lg)",
          }}>
            {/* Card Header */}
            <div style={{
              background: "linear-gradient(135deg, var(--teal), var(--teal-dark))",
              padding: "1.5rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "2.5rem" }}>{recommendation.logoEmoji}</span>
                <div>
                  <h2 style={{ color: "#fff", margin: 0, fontSize: "1.5rem" }}>
                    {recommendation.name}
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: "0.875rem", maxWidth: "none" }}>
                    {recommendation.tagline}
                  </p>
                </div>
              </div>
              <div style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "var(--radius-full)",
                padding: "0.5rem 1rem",
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" }}></span>
                {recommendation.matchScore}% compatible
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: "2rem" }}>
              {/* Match Reasons */}
              <div style={{ marginBottom: "1.75rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text-deep)" }}>
                  Pourquoi cette recommandation ?
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {recommendation.matchReasons.map((reason, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                    }}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: "2px" }}>
                        <circle cx="10" cy="10" r="10" fill="var(--teal)" fillOpacity="0.1" />
                        <path d="M6 10 L9 13 L14 7" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="border-accent-left" style={{ marginBottom: "1.75rem" }}>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
                  {recommendation.description}
                </p>
              </div>

              {/* Features Grid */}
              <div style={{ marginBottom: "1.75rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text-deep)" }}>
                  Fonctionnalités clés
                </h3>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "0.625rem",
                }}>
                  {recommendation.features.map((feature, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      padding: "0.5rem 0.75rem",
                      background: "var(--bg-warm)",
                      borderRadius: "var(--radius-md)",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: "2px", color: "var(--teal)" }}>
                        <path d="M4 10 L8 14 L16 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div style={{
                background: "var(--bg-warm)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Tarif
                    </div>
                    <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-deep)" }}>
                      {recommendation.pricing}
                    </div>
                  </div>
                  <div style={{
                    background: "var(--rust-bg)",
                    color: "var(--rust-dark)",
                    padding: "0.5rem 1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                  }}>
                    {recommendation.discountHook}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={recommendation.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta btn-lg"
                style={{ width: "100%", justifyContent: "center", fontSize: "1.0625rem" }}
                id="affiliate-cta"
              >
                Essayer {recommendation.name} gratuitement →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      {recommendation.alternatives.length > 0 && (
        <section
          className="section"
          id="alternatives"
          aria-label="Solutions alternatives"
          style={{ paddingTop: "2rem" }}
        >
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}>
              Autres solutions à considérer
            </h2>
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {recommendation.alternatives.map((alt) => (
                <div key={alt.name} className="card card-flat" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>{alt.logoEmoji}</span>
                    <h3 style={{ margin: 0, fontSize: "1.0625rem" }}>{alt.name}</h3>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>
                    {alt.tagline}
                  </p>
                  <a
                    href={alt.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ alignSelf: "flex-start", marginTop: "auto" }}
                  >
                    Découvrir →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upsell: Generator */}
      <section
        className="section section-alt"
        id="upsell-generator"
        aria-label="Générateur Factur-X"
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="animate-fade-in-up" style={{
            background: "var(--text-deep)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(2rem, 5vw, 3rem)",
            textAlign: "center",
            color: "#fff",
          }}>
            <h2 style={{ color: "#fff", fontSize: "1.375rem", marginBottom: "0.75rem" }}>
              Générez vos factures conformes Factur-X dès maintenant
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.7)",
              margin: "0 auto 1.5rem",
              maxWidth: "45ch",
              fontSize: "0.9375rem",
            }}>
              Éditez, validez et téléchargez vos premières factures électroniques conformes aux nouvelles réglementations. Les 3 premières factures sont gratuites à vie.
            </p>
            <Link href="/generateur" className="btn btn-accent btn-lg">
              Créer ma première facture gratuitement →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

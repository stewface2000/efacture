import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all 12 seeded professions
export async function generateStaticParams() {
  const professions = await prisma.profession.findMany({
    select: { slug: true },
  });
  return professions.map((p) => ({
    slug: p.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profession = await prisma.profession.findUnique({
    where: { slug },
  });

  if (!profession) {
    return {
      title: "Guide non trouvé — e-independant.fr",
    };
  }

  return {
    title: `Facture Électronique Obligatoire pour ${profession.name} - Guide Pratique 2026`,
    description: `Découvrez comment adapter votre activité de ${profession.name} à la réforme de la facture électronique du 1er septembre 2026 sans jargon.`,
  };
}

export default async function ProfessionGuidePage({ params }: Props) {
  const { slug } = await params;

  // Fetch profession and its associated solutions
  const profession = await prisma.profession.findUnique({
    where: { slug },
    include: {
      solutions: {
        include: {
          solution: true,
        },
      },
    },
  });

  if (!profession) {
    notFound();
  }

  // Extract solutions array
  const matchedSolutions = profession.solutions.map((sp) => sp.solution);

  // Generate structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `Facture Électronique Obligatoire pour ${profession.name} - Guide Pratique 2026`,
    "description": `Découvrez comment adapter votre activité de ${profession.name} à la réforme de la facture électronique du 1er septembre 2026 sans jargon.`,
    "inLanguage": "fr-FR",
    "datePublished": profession.createdAt.toISOString(),
    "dateModified": profession.updatedAt.toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "e-independant.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://e-independant.fr/favicon.ico"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://e-independant.fr/metiers/${slug}`
    }
  };

  return (
    <article style={{ background: "var(--bg-warm)" }}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <section className="section" id="profession-header" aria-label="En-tête du guide" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav aria-label="Fil d'Ariane" style={{ marginBottom: "1.5rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-[var(--teal)]">Accueil</Link>
            <span style={{ marginInline: "0.5rem" }}>&gt;</span>
            <Link href="/metiers" className="hover:text-[var(--teal)]">Guides par métier</Link>
            <span style={{ marginInline: "0.5rem" }}>&gt;</span>
            <span style={{ color: "var(--text-deep)", fontWeight: 500 }}>{profession.name}</span>
          </nav>

          <div className="animate-fade-in-up" style={{ maxWidth: "800px" }}>
            <span className="badge badge-teal" style={{ marginBottom: "1rem" }}>
              {profession.icon} Guide Spécialisé · {profession.category}
            </span>
            <h1 style={{ marginBottom: "1rem" }}>
              Facture électronique pour les {profession.name} : Ce qui change concrètement
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.6, maxWidth: "none", margin: 0 }}>
              {profession.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Side recommendations Panel */}
      <section className="section section-alt" id="profession-content" aria-label="Contenu du guide" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-14 items-start">
            
            {/* Guide Text Column */}
            <div className="guide-content-column">
              <div 
                dangerouslySetInnerHTML={{ __html: profession.contentHtml }} 
                className="guide-rich-text"
              />
              
              {/* Secondary CTA Box */}
              <div style={{
                marginTop: "3rem",
                padding: "2rem",
                background: "var(--bg-warm)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
              }}>
                <h3 style={{ marginTop: 0, color: "var(--text-deep)" }}>Vous avez un doute sur vos obligations ?</h3>
                <p style={{ fontSize: "0.9375rem" }}>
                  Chaque situation est unique. Répondez à 5 questions simples pour obtenir un diagnostic 
                  immédiat et une suggestion d&apos;outils adaptée à votre volume et votre statut.
                </p>
                <Link href="/quiz" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
                  Faire le quiz de diagnostic →
                </Link>
              </div>
            </div>

            {/* Recommendation Sidebar */}
            <aside className="guide-sidebar-column" style={{
              position: "sticky",
              top: "5.5rem",
            }}>
              <div style={{
                background: "var(--bg-warm)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <span className="badge badge-teal" style={{ marginBottom: "1rem", fontSize: "0.75rem" }}>
                  🛡️ Recommandé pour votre métier
                </span>
                <h2 style={{ fontSize: "1.375rem", marginBottom: "0.5rem", marginTop: 0 }}>
                  Solutions adaptées
                </h2>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  Voici les outils de facturation électronique conseillés pour un {profession.name} :
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {matchedSolutions.map((sol) => (
                    <div 
                      key={sol.id} 
                      style={{
                        background: "var(--bg-white)",
                        borderRadius: "var(--radius-lg)",
                        padding: "1.25rem",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <span style={{ fontSize: "1.5rem" }}>{sol.logoUrl}</span>
                        <h3 style={{ margin: 0, fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-deep)" }}>
                          {sol.name}
                        </h3>
                      </div>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                        {sol.description.substring(0, 120)}...
                      </p>
                      <a 
                        href={sol.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        style={{ alignSelf: "flex-start", width: "100%", justifyContent: "center" }}
                        id={`affiliate-link-${sol.name.toLowerCase()}`}
                      >
                        Découvrir {sol.name} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </article>
  );
}

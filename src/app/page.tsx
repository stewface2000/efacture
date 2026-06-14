"use client";

import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useLanguage } from "@/components/LanguageContext";

const ElectronicInvoiceIllustration = () => (
  <svg
    width="100%"
    height="180"
    viewBox="0 0 400 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="illustration-svg animate-fade-in"
    style={{ filter: "drop-shadow(0 8px 24px rgba(15, 118, 110, 0.06))", marginBottom: "-1rem" }}
  >
    <defs>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--teal-light)" />
        <stop offset="100%" stopColor="var(--teal)" />
      </linearGradient>
      <linearGradient id="rustGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--rust-light)" />
        <stop offset="100%" stopColor="var(--rust)" />
      </linearGradient>
      <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Background Glow */}
    <circle cx="200" cy="90" r="70" fill="url(#tealGrad)" fillOpacity="0.06" filter="url(#glow)" />
    
    {/* Left Side: Physical Paper Invoice */}
    <g transform="translate(60, 25)">
      {/* Paper Card shadow */}
      <rect x="2" y="2" width="90" height="120" rx="8" fill="rgba(0,0,0,0.02)" />
      {/* Paper Card */}
      <rect width="90" height="120" rx="8" fill="#ffffff" stroke="var(--border-subtle)" strokeWidth="1.5" />
      {/* Invoice Lines */}
      <rect x="15" y="15" width="30" height="8" rx="2" fill="var(--text-light)" fillOpacity="0.5" />
      <rect x="15" y="32" width="60" height="4" rx="1" fill="var(--border-subtle)" />
      <rect x="15" y="44" width="60" height="4" rx="1" fill="var(--border-subtle)" />
      <rect x="15" y="56" width="45" height="4" rx="1" fill="var(--border-subtle)" />
      {/* Invoice Details block */}
      <rect x="15" y="80" width="60" height="1.5" fill="var(--border-subtle)" />
      <rect x="15" y="90" width="25" height="6" rx="2" fill="var(--border-subtle)" />
      <rect x="55" y="90" width="20" height="6" rx="2" fill="var(--rust)" fillOpacity="0.8" />
    </g>

    {/* Flowing Digital Elements (Dotted connections and glowing particles) */}
    <path
      d="M170 85 C 200 65, 220 105, 250 85"
      stroke="var(--teal)"
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="185" cy="78" r="4" fill="var(--teal-light)" />
    <circle cx="210" cy="92" r="5" fill="var(--rust-light)" />
    <circle cx="232" cy="80" r="3.5" fill="var(--teal-light)" />
    
    {/* Right Side: Digital Invoice Card (Glassmorphic look) */}
    <g transform="translate(250, 15)">
      {/* Digital card shadow */}
      <rect x="3" y="3" width="90" height="120" rx="12" fill="rgba(0,0,0,0.03)" />
      {/* Glass card background */}
      <rect width="90" height="120" rx="12" fill="url(#glassGrad)" stroke="var(--teal)" strokeWidth="1.5" />
      
      {/* Glowing digital elements */}
      {/* Sparkle badge */}
      <circle cx="70" cy="20" r="12" fill="url(#tealGrad)" />
      <path d="M70 15 L72 19 L76 20 L72 21 L70 25 L68 21 L64 20 L68 19 Z" fill="#ffffff" />
      
      {/* Header Info */}
      <rect x="12" y="18" width="40" height="6" rx="2" fill="var(--text-deep)" />
      
      {/* Digital invoice lines */}
      <rect x="12" y="40" width="66" height="4" rx="1" fill="var(--teal)" fillOpacity="0.4" />
      <rect x="12" y="50" width="66" height="4" rx="1" fill="var(--teal)" fillOpacity="0.4" />
      
      {/* QR Code / Security validation marker */}
      <rect x="12" y="68" width="28" height="28" rx="4" fill="var(--teal-bg)" stroke="var(--teal-light)" strokeWidth="1" />
      {/* Mock QR details */}
      <rect x="16" y="72" width="6" height="6" fill="var(--teal)" />
      <rect x="28" y="72" width="6" height="6" fill="var(--teal)" />
      <rect x="16" y="84" width="6" height="6" fill="var(--teal)" />
      <rect x="25" y="81" width="3" height="3" fill="var(--teal)" />
      <rect x="28" y="84" width="3" height="3" fill="var(--teal)" />
      
      {/* Total amount */}
      <rect x="48" y="84" width="30" height="8" rx="2" fill="var(--teal)" />
    </g>
  </svg>
);

export default function HomePage() {
  const { t } = useLanguage();

  const professionPreviews = [
    {
      slug: "artisan-btp",
      name: t("homepage.guideArtisan"),
      icon: "🏗️",
      description: t("homepage.guideArtisanDesc"),
    },
    {
      slug: "freelance-tech",
      name: t("homepage.guideFreelance"),
      icon: "💻",
      description: t("homepage.guideFreelanceDesc"),
    },
    {
      slug: "restaurateur",
      name: t("homepage.guideResto"),
      icon: "🍽️",
      description: t("homepage.guideRestoDesc"),
    },
    {
      slug: "auto-entrepreneur",
      name: t("homepage.guideAuto"),
      icon: "🚀",
      description: t("homepage.guideAutoDesc"),
    },
  ];

  return (
    <article>
      {/* ===== HERO SECTION ===== */}
      <section className="hero section bg-warm-mesh" id="hero" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            {/* Left column: text + CTAs */}
            <div className="animate-fade-in-up">
              <p className="hero-subtitle">{t("homepage.heroSubtitle")}</p>
              <h1>
                {t("homepage.heroTitleLine1")}
                <br />
                <span style={{ color: "var(--teal)" }}>{t("homepage.heroTitleLine2")}</span>
              </h1>
              <p className="hero-description">
                {t("homepage.heroDesc")}
              </p>
              <div className="hero-buttons" style={{ marginBottom: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/validateur" className="btn btn-cta btn-lg" id="hero-cta-validator">
                  {t("homepage.heroCtaValidatorBtn")}
                </Link>
                <Link href="/metiers" className="btn btn-secondary btn-lg" id="hero-cta-metiers">
                  {t("homepage.heroCtaGuides")}
                </Link>
              </div>

              <div className="hero-trust">
                <div className="hero-trust-stars" aria-label="5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="hero-trust-star" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>{t("homepage.trustBadge")}</span>
              </div>
            </div>

            {/* Right column: Countdown + SVG illustration */}
            <div className="animate-fade-in-up delay-200" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", width: "100%" }}>
              <div style={{ width: "100%", maxWidth: "420px", display: "flex", justifyContent: "center" }}>
                <ElectronicInvoiceIllustration />
              </div>
              <div className="glass-card" style={{ 
                padding: "2.5rem clamp(1rem, 5%, 2rem)", 
                width: "100%",
                maxWidth: "420px",
                textAlign: "center"
              }}>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span className="badge badge-rust" style={{ fontSize: "0.75rem" }}>
                    {t("homepage.heroCountdownLabel")}
                  </span>
                </div>
                <h2 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)", marginBottom: "1.5rem", fontWeight: 700 }}>
                  {t("countdown.title")}
                </h2>
                <CountdownTimer />
                <p style={{ 
                  fontSize: "0.8125rem", 
                  color: "var(--text-muted)", 
                  marginTop: "1.25rem", 
                  marginBottom: 0,
                  maxWidth: "none" 
                }}>
                  {t("homepage.heroCountdownDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section section-alt" id="stats" aria-label="Statistiques clés">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <p className="section-label">{t("homepage.statsLabel")}</p>
            <h2>{t("homepage.statsTitle")}</h2>
            <p>
              {t("homepage.statsDesc")}
            </p>
          </div>

          <div className="stats-grid">
            <div className="card stat-card animate-fade-in-up delay-100">
              <div className="stat-number rust">{t("homepage.statsCard1Num")}</div>
              <p className="stat-text">
                {t("homepage.statsCard1Text")}
              </p>
            </div>

            <div className="card stat-card animate-fade-in-up delay-200" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <div className="stat-number rust">{t("homepage.statsCard2Num")}</div>
                <p className="stat-text" style={{ marginBottom: "1.25rem" }}>
                  {t("homepage.statsCard2Text")}
                </p>
              </div>
              <Link href="/validateur" className="btn btn-secondary btn-sm" style={{ alignSelf: "start", marginTop: "auto", fontSize: "0.8125rem", padding: "0.5rem 1.25rem" }}>
                {t("homepage.statsCard2Cta")}
              </Link>
            </div>

            <div className="card stat-card animate-fade-in-up delay-300">
              <div className="stat-number teal">{t("homepage.statsCard3Num")}</div>
              <p className="stat-text">
                {t("homepage.statsCard3Text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" id="how-it-works" aria-label="Comment ça marche">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <p className="section-label">{t("homepage.howLabel")}</p>
            <h2>{t("homepage.howTitle")}</h2>
            <p>
              {t("homepage.howDesc")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div className="card card-flat animate-fade-in-up delay-100" style={{ textAlign: "center" }}>
              <div style={{ 
                fontSize: "2rem", 
                marginBottom: "1rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--teal-bg)",
                borderRadius: "var(--radius-md)",
                margin: "0 auto 1rem"
              }}>
                📋
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>{t("homepage.howStep1Title")}</h3>
              <p style={{ fontSize: "0.875rem", margin: "0 auto" }}>
                {t("homepage.howStep1Desc")}
              </p>
            </div>

            <div className="card card-flat animate-fade-in-up delay-200" style={{ textAlign: "center" }}>
              <div style={{ 
                fontSize: "2rem", 
                marginBottom: "1rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--teal-bg)",
                borderRadius: "var(--radius-md)",
                margin: "0 auto 1rem"
              }}>
                🎯
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>{t("homepage.howStep2Title")}</h3>
              <p style={{ fontSize: "0.875rem", margin: "0 auto" }}>
                {t("homepage.howStep2Desc")}
              </p>
            </div>

            <div className="card card-flat animate-fade-in-up delay-300" style={{ textAlign: "center" }}>
              <div style={{ 
                fontSize: "2rem", 
                marginBottom: "1rem",
                width: "3.5rem",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--teal-bg)",
                borderRadius: "var(--radius-md)",
                margin: "0 auto 1rem"
              }}>
                ✅
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>{t("homepage.howStep3Title")}</h3>
              <p style={{ fontSize: "0.875rem", margin: "0 auto" }}>
                {t("homepage.howStep3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="section" id="testimonials" aria-label="Témoignages clients">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <p className="section-label">{t("homepage.testiLabel")}</p>
            <h2>{t("homepage.testiTitle")}</h2>
            <p>
              {t("homepage.testiDesc")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div className="card animate-fade-in-up delay-100">
              <div style={{ display: "flex", gap: "2px", marginBottom: "0.75rem" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="hero-trust-star" style={{ width: "16px", height: "16px" }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: "0.9375rem", fontStyle: "italic", marginBottom: "1.25rem", color: "var(--text-secondary)" }}>
                {t("homepage.testiCard1Text")}
              </p>
              <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "0.75rem" }}>
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-deep)", display: "block" }}>{t("homepage.testiCard1Author")}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t("homepage.testiCard1Role")}</span>
              </div>
            </div>

            <div className="card animate-fade-in-up delay-200">
              <div style={{ display: "flex", gap: "2px", marginBottom: "0.75rem" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="hero-trust-star" style={{ width: "16px", height: "16px" }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: "0.9375rem", fontStyle: "italic", marginBottom: "1.25rem", color: "var(--text-secondary)" }}>
                {t("homepage.testiCard2Text")}
              </p>
              <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "0.75rem" }}>
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-deep)", display: "block" }}>{t("homepage.testiCard2Author")}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t("homepage.testiCard2Role")}</span>
              </div>
            </div>

            <div className="card animate-fade-in-up delay-300">
              <div style={{ display: "flex", gap: "2px", marginBottom: "0.75rem" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="hero-trust-star" style={{ width: "16px", height: "16px" }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: "0.9375rem", fontStyle: "italic", marginBottom: "1.25rem", color: "var(--text-secondary)" }}>
                {t("homepage.testiCard3Text")}
              </p>
              <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "0.75rem" }}>
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-deep)", display: "block" }}>{t("homepage.testiCard3Author")}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t("homepage.testiCard3Role")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONS PREVIEW ===== */}
      <section className="section section-alt" id="professions-preview" aria-label="Guides par métier">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <p className="section-label">{t("homepage.guidesLabel")}</p>
            <h2>{t("homepage.guidesTitle")}</h2>
            <p>
              {t("homepage.guidesDesc")}
            </p>
          </div>

          <div className="profession-grid">
            {professionPreviews.map((profession, index) => (
              <a
                key={profession.slug}
                href={`/metiers/${profession.slug}`}
                className={`profession-card animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="profession-card-icon" aria-hidden="true">
                  {profession.icon}
                </div>
                <h3>{profession.name}</h3>
                <p>{profession.description}</p>
                <span className="profession-card-arrow">
                  {t("homepage.guideRead")} <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }} className="animate-fade-in-up delay-500">
            <Link href="/metiers" className="btn btn-secondary">
              {t("homepage.guidesCta")}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SUPPORT SECTION ===== */}
      <section className="section" id="support" aria-label="Support direct" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container animate-fade-in-up">
          <div className="card" style={{ 
            background: "var(--teal-bg)", 
            borderColor: "var(--teal)", 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "space-between", 
            alignItems: "center", 
            gap: "1.5rem",
            padding: "2rem" 
          }}>
            <div>
              <h3 style={{ color: "var(--teal-dark)", margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>
                {t("homepage.supportLabel")}
              </h3>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", color: "var(--text-secondary)", maxWidth: "55ch" }}>
                {t("homepage.supportDesc")}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a href={`tel:${t("navbar.phone").replace(/\s/g, "")}`} className="btn btn-accent" style={{ fontWeight: 700 }}>
                {t("homepage.supportCta")}
              </a>
              <span style={{ fontSize: "0.8125rem", color: "var(--teal-dark)", fontWeight: "500" }}>
                {t("homepage.supportHours")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEAD CAPTURE ===== */}
      <section className="section" id="lead-capture" aria-label="Inscription newsletter">
        <div className="container">
          <div className="lead-capture animate-fade-in-up">
            <h2>{t("leadCapture.title")}</h2>
            <p>
              {t("leadCapture.description")}
            </p>
            <LeadCaptureForm />
            <p style={{ 
              fontSize: "0.75rem", 
              color: "rgba(255,255,255,0.35)", 
              marginTop: "1rem",
              maxWidth: "none"
            }}>
              {t("leadCapture.disclaimer")}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";
import { Locale } from "@/lib/translations";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { locale, t, setLocale } = useLanguage();

  const [user, setUser] = useState<{ email: string; companyName?: string | null } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user/profile")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Unauthorized");
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const navItems = [
    { href: "/", label: t("navbar.home") },
    { href: "/validateur", label: t("navbar.validator") },
    { href: "/generateur", label: t("navbar.generator") },
    { href: "/tarifs", label: t("navbar.pricing") },
    { href: "/metiers", label: t("navbar.guides") },
    { href: "/quiz", label: t("navbar.quiz") },
  ];

  const languages: { code: Locale; label: string }[] = [
    { code: "fr", label: "Français (FR)" },
    { code: "en", label: "English (EN)" },
    { code: "ar", label: "العربية (AR)" },
    { code: "pl", label: "Polski (PL)" },
    { code: "pt", label: "Português (PT)" },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Navigation principale">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-logo" aria-label="e-independant.fr — Accueil">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navbar-logo-svg"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--teal-light)" />
                <stop offset="100%" stopColor="var(--teal)" />
              </linearGradient>
            </defs>
            {/* Base block with warm gradient */}
            <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
            {/* Invoice sheet silhouette */}
            <path
              d="M9 7C9 6.44772 9.44772 6 10 6H19L23 10V24C23 24.5523 22.5523 25 22 25H10C9.44772 25 9 24.5523 9 24V7Z"
              fill="white"
              fillOpacity="0.18"
            />
            {/* Folded paper corner */}
            <path
              d="M19 6V9C19 9.55228 19.4477 10 20 10H23"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.4"
              fill="none"
            />
            {/* Minimal invoice lines */}
            <line x1="12" y1="13" x2="17" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
            <line x1="12" y1="17" x2="15" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
            {/* Trust badge (secure validation check) */}
            <circle cx="21" cy="20" r="5.5" fill="#ffffff" />
            <path
              d="M18.5 20L20 21.5L23.5 18"
              stroke="var(--teal)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="navbar-logo-text">
            eindependant<span style={{ color: "var(--teal)" }}>.</span>
          </span>

        </Link>

        <ul className={`navbar-links${mobileOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {mobileOpen && (
            <>
              <li>
                <a href={`tel:${t("navbar.phone").replace(/\s/g, "")}`} className="navbar-phone-mobile">
                  📞 {t("navbar.phoneMobile")}
                </a>
              </li>
              {!loading && (
                <li>
                  {user ? (
                    <Link
                      href="/generateur"
                      className={pathname === "/generateur" ? "active" : ""}
                      onClick={() => setMobileOpen(false)}
                    >
                      👤 {t("navbar.profile")}
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className={pathname === "/login" ? "active" : ""}
                      onClick={() => setMobileOpen(false)}
                    >
                      🔑 {t("navbar.login")}
                    </Link>
                  )}
                </li>
              )}
            </>
          )}
        </ul>

        <div className="navbar-cta" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {/* Premium Language Dropdown */}
          <div style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="btn btn-secondary btn-sm"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                fontWeight: 600,
                padding: "0.375rem 0.625rem",
                cursor: "pointer",
              }}
            >
              <span>🌐</span>
              <span>{locale.toUpperCase()}</span>
              <span style={{ fontSize: "0.6rem", transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "105%",
                  right: locale === "ar" ? "auto" : 0,
                  left: locale === "ar" ? 0 : "auto",
                  backgroundColor: "var(--bg-white)",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-md)",
                  zIndex: 1000,
                  minWidth: "120px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code);
                      setLangOpen(false);
                    }}
                    style={{
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.8125rem",
                      textAlign: locale === "ar" ? "right" : "left",
                      border: "none",
                      background: locale === lang.code ? "var(--teal-bg)" : "transparent",
                      color: locale === lang.code ? "var(--teal-dark)" : "var(--text-deep)",
                      fontWeight: locale === lang.code ? 700 : 500,
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href={`tel:${t("navbar.phone").replace(/\s/g, "")}`} className="navbar-phone-desktop" title={t("navbar.phoneTitle")}>
            📞 {t("navbar.phone")}
          </a>
          <Link href="/quiz" className="btn btn-primary btn-sm" style={{ display: "none" }} id="nav-cta-desktop">
            {t("navbar.quiz")} →
          </Link>

          {/* Auth State Component */}
          {!loading && (
            user ? (
              <Link
                href="/generateur"
                className="navbar-profile"
                title={t("navbar.profile")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "var(--teal-bg)",
                  color: "var(--teal)",
                  border: "2px solid var(--teal)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "var(--shadow-glow-teal)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>
            ) : (
              <Link
                href="/login"
                className="btn btn-secondary btn-sm"
                style={{
                  padding: "0.375rem 0.75rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  borderRadius: "var(--radius-full)",
                }}
              >
                {t("navbar.login")}
              </Link>
            )
          )}

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}


"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>e-independant.fr</h4>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: "30ch", marginBottom: "1rem" }}>
              {t("footer.description")}
            </p>
            <div style={{ fontSize: "0.875rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              <a href={`tel:${t("navbar.phone").replace(/\s/g, "")}`} style={{ color: "#ffffff", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <span>📞</span> {t("navbar.phone")}
              </a>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>{t("footer.callSupport")}</span>
              <a href="https://wa.me/33184604020" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "#25D366", fontWeight: "500", marginTop: "0.25rem" }}>
                <span>💬</span> {t("footer.whatsapp")}
              </a>
            </div>
          </div>

          <div>
            <h4>{t("footer.guidesTitle")}</h4>
            <ul className="footer-links">
              <li>
                <Link href="/metiers/artisan-btp">{t("homepage.guideArtisan")}</Link>
              </li>
              <li>
                <Link href="/metiers/freelance-tech">{t("homepage.guideFreelance")}</Link>
              </li>
              <li>
                <Link href="/metiers/restaurateur">{t("homepage.guideResto")}</Link>
              </li>
              <li>
                <Link href="/metiers/auto-entrepreneur">{t("homepage.guideAuto")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>{t("footer.toolsTitle")}</h4>
            <ul className="footer-links">
              <li>
                <Link href="/quiz">{t("navbar.quiz")}</Link>
              </li>
              <li>
                <Link href="/validateur">{t("navbar.validator")}</Link>
              </li>
              <li>
                <Link href="/generateur">{t("navbar.generator")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>{t("footer.infoTitle")}</h4>
            <ul className="footer-links">
              <li>
                <Link href="/legal">{t("footer.legal")}</Link>
              </li>
              <li>
                <Link href="/legal/confidentialite">{t("footer.privacy")}</Link>
              </li>
              <li>
                <Link href="/legal/cgv">{t("footer.cgv")}</Link>
              </li>
              <li>
                <Link href="/legal/cookies">{t("footer.cookies")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} e-independant.fr — {t("footer.copyright")}</span>
          <span>{t("footer.madeWithCare")}</span>
        </div>
      </div>
    </footer>
  );
}


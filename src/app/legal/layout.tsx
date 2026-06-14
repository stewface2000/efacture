import type { Metadata } from "next";
import LegalNav from "@/components/LegalNav";

export const metadata: Metadata = {
  title: "Informations Légales",
  description:
    "Mentions légales, politique de confidentialité RGPD, conditions générales de vente et politique de cookies du site efacture-independant.fr.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="legal-page">
      <div className="container container-narrow">
        <div className="legal-header animate-fade-in-up">
          <span className="section-label">Informations légales</span>
          <h1>Cadre juridique &amp; transparence</h1>
          <p className="legal-header-description">
            Nous prenons la protection de vos données et la transparence très au
            sérieux. Retrouvez ici toutes les informations légales relatives à
            l'utilisation du site efacture-independant.fr.
          </p>
        </div>
        <LegalNav />
        <div className="legal-content animate-fade-in-up delay-200">
          {children}
        </div>
      </div>
    </div>
  );
}

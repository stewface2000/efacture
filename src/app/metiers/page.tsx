import type { Metadata } from "next";
import Link from "next/link";
import ProfessionFilters from "@/components/ProfessionFilters";

export const metadata: Metadata = {
  title: "Guides par Métier — Facturation Électronique 2026",
  description:
    "Trouvez le guide de facturation électronique adapté à votre profession : artisan, freelance, commerçant ou auto-entrepreneur.",
};

export default function MetiersPage() {
  return (
    <article>
      {/* Header */}
      <section className="section" id="metiers-header" aria-label="En-tête des guides">
        <div className="container">
          <div className="animate-fade-in-up" style={{ maxWidth: "640px" }}>
            <p className="section-label">Guides spécialisés</p>
            <h1>Guides par métier</h1>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              Chaque profession a ses spécificités face à la réforme de la 
              facture électronique. Sélectionnez votre catégorie et trouvez le 
              guide qui parle votre langue — <strong>sans jargon</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Grid */}
      <section className="section section-alt" id="metiers-hub" aria-label="Hub des métiers" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <ProfessionFilters />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section" id="metiers-cta" aria-label="Quiz CTA">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="animate-fade-in-up" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <h2>Vous ne savez pas quel guide choisir ?</h2>
            <p style={{ margin: "0.75rem auto 2rem" }}>
              Notre quiz gratuit analyse votre situation en 5 questions et vous 
              recommande la solution idéale.
            </p>
            <Link href="/quiz" className="btn btn-primary btn-lg">
              Faire le quiz gratuit →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

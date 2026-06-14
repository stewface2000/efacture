"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "all", label: "Tous les métiers" },
  { id: "Artisanat", label: "Artisanat" },
  { id: "Professions Libérales", label: "Professions Libérales" },
  { id: "Commerce", label: "Commerce" },
  { id: "Freelance", label: "Freelance / Micro" },
];

const professions = [
  {
    slug: "artisan-btp",
    name: "Artisan du BTP",
    category: "Artisanat",
    icon: "🏗️",
    description:
      "Maçons, plombiers, électriciens, peintres : ce qui change concrètement pour vos devis et factures de chantier.",
  },
  {
    slug: "boulanger-patissier",
    name: "Boulanger / Pâtissier",
    category: "Commerce",
    icon: "🥐",
    description:
      "Commerçants de bouche : gérez vos factures fournisseurs et votre conformité au quotidien.",
  },
  {
    slug: "freelance-tech",
    name: "Freelance Tech",
    category: "Freelance",
    icon: "💻",
    description:
      "Développeurs, designers, consultants IT : la facturation électronique adaptée au travail indépendant.",
  },
  {
    slug: "restaurateur",
    name: "Restaurateur",
    category: "Commerce",
    icon: "🍽️",
    description:
      "Restaurateurs et traiteurs : gérer les factures fournisseurs et la conformité fiscale simplement.",
  },
  {
    slug: "auto-entrepreneur",
    name: "Auto-entrepreneur",
    category: "Freelance",
    icon: "🚀",
    description:
      "Micro-entreprise : les solutions les plus simples et souvent gratuites pour être conforme dès 2026.",
  },
  {
    slug: "infirmier-liberal",
    name: "Infirmier libéral",
    category: "Professions Libérales",
    icon: "🩺",
    description:
      "Professionnels de santé en libéral : comprendre les spécificités de la facturation dans le médical.",
  },
  {
    slug: "architecte",
    name: "Architecte",
    category: "Professions Libérales",
    icon: "📐",
    description:
      "Architectes et bureaux d'études : honoraires, acomptes et facturation de projets longs.",
  },
  {
    slug: "coiffeur-estheticien",
    name: "Coiffeur / Esthéticien",
    category: "Commerce",
    icon: "✂️",
    description:
      "Professionnels de la beauté : les solutions adaptées aux petits volumes de factures.",
  },
  {
    slug: "consultant-rh",
    name: "Consultant RH / Formation",
    category: "Freelance",
    icon: "📊",
    description:
      "Consultants et formateurs : facturation de missions, sous-traitance et conventions.",
  },
  {
    slug: "photographe-videaste",
    name: "Photographe / Vidéaste",
    category: "Freelance",
    icon: "📸",
    description:
      "Créatifs indépendants : devis, acomptes et facturation de prestations artistiques.",
  },
  {
    slug: "plombier-chauffagiste",
    name: "Plombier / Chauffagiste",
    category: "Artisanat",
    icon: "🔧",
    description:
      "Artisans du bâtiment : facturation d'interventions, pièces détachées et main-d'œuvre.",
  },
  {
    slug: "avocat",
    name: "Avocat",
    category: "Professions Libérales",
    icon: "⚖️",
    description:
      "Avocats et juristes : honoraires, provisions et spécificités de la profession réglementée.",
  },
];

export default function ProfessionFilters() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProfessions =
    activeCategory === "all"
      ? professions
      : professions.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="filter-chips" role="group" aria-label="Filtrer par catégorie">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-chip${activeCategory === cat.id ? " active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
            aria-pressed={activeCategory === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="profession-grid" id="profession-grid">
        {filteredProfessions.map((profession) => (
          <Link
            key={profession.slug}
            href={`/metiers/${profession.slug}`}
            className="profession-card"
          >
            <div className="profession-card-icon" aria-hidden="true">
              {profession.icon}
            </div>
            <h3>{profession.name}</h3>
            <span className="badge badge-muted" style={{ alignSelf: "flex-start" }}>
              {profession.category}
            </span>
            <p>{profession.description}</p>
            <span className="profession-card-arrow">
              Lire le guide <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>

      {filteredProfessions.length === 0 && (
        <div style={{ textAlign: "center", padding: "3rem 0", color: "var(--text-muted)" }}>
          <p>Aucun métier trouvé pour cette catégorie.</p>
        </div>
      )}
    </>
  );
}

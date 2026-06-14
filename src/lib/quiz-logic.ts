// Quiz recommendation matching logic — spec §5.3
// Maps user answers to the best-fit solution

export interface QuizAnswers {
  "q1-statut": string;
  "q2-volume": string;
  "q3-outils": string;
  "q4-clients": string;
  "q5-critere": string;
}

export interface SolutionRecommendation {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  pricing: string;
  discountHook: string;
  affiliateUrl: string;
  logoEmoji: string;
  matchScore: number;
  matchReasons: string[];
  alternatives: AlternativeSolution[];
}

export interface AlternativeSolution {
  name: string;
  tagline: string;
  affiliateUrl: string;
  logoEmoji: string;
}

// Solution database (will come from Prisma in production)
const solutions = {
  freebe: {
    id: "freebe",
    name: "Freebe",
    slug: "freebe",
    tagline: "La solution gratuite et simple pour les micro-entrepreneurs",
    description:
      "Freebe est spécialement conçu pour les auto-entrepreneurs et micro-entreprises. Interface ultra-simple, conformité automatique, et surtout : gratuit pour les petits volumes.",
    features: [
      "Gratuit jusqu'à 10 factures/mois",
      "Interface simplissime, prise en main en 5 minutes",
      "Conformité e-facture automatique",
      "Envoi direct aux impôts via PDP intégrée",
      "Tableau de bord CA en temps réel",
    ],
    pricing: "Gratuit (offre premium à partir de 9€/mois)",
    discountHook:
      "🎁 Offre exclusive : 3 mois premium offerts via notre lien",
    affiliateUrl: "https://www.freebe.me/?ref=efacture",
    logoEmoji: "🟢",
    goodForVol: ["LOW", "MEDIUM"],
    goodForType: ["MICRO", "EI"],
    goodForCriteria: ["PRICE", "SIMPLICITY"],
  },
  indy: {
    id: "indy",
    name: "Indy",
    slug: "indy",
    tagline: "Comptabilité et facturation tout-en-un pour les indépendants",
    description:
      "Indy combine comptabilité automatisée et facturation électronique dans une seule app. Idéal pour ceux qui veulent tout gérer sans comptable, avec une IA qui catégorise vos dépenses.",
    features: [
      "Comptabilité + facturation dans une seule app",
      "IA de catégorisation automatique des dépenses",
      "Déclarations fiscales pré-remplies",
      "E-facture conforme intégrée",
      "Support réactif par chat",
    ],
    pricing: "À partir de 12€/mois (essai gratuit 14 jours)",
    discountHook:
      "🎁 2 mois offerts avec notre code partenaire EFACTURE2026",
    affiliateUrl: "https://www.indy.fr/?ref=efacture",
    logoEmoji: "🔵",
    goodForVol: ["LOW", "MEDIUM"],
    goodForType: ["MICRO", "EI"],
    goodForCriteria: ["SIMPLICITY", "PRICE"],
  },
  pennylane: {
    id: "pennylane",
    name: "Pennylane",
    slug: "pennylane",
    tagline:
      "La plateforme comptable collaborative pour PME et leurs experts-comptables",
    description:
      "Pennylane est la solution de référence pour les structures qui veulent une intégration parfaite avec leur expert-comptable. Facturation, comptabilité, trésorerie : tout est connecté et en temps réel.",
    features: [
      "Collaboration en temps réel avec votre comptable",
      "Facturation e-conforme + rapprochement bancaire",
      "Tableau de bord trésorerie complet",
      "Connexion bancaire automatique",
      "Multi-utilisateurs et gestion des rôles",
    ],
    pricing: "À partir de 14€/mois HT (essai gratuit)",
    discountHook:
      "🎁 Premier mois offert + onboarding personnalisé via notre lien",
    affiliateUrl: "https://www.pennylane.com/?ref=efacture",
    logoEmoji: "🟡",
    goodForVol: ["MEDIUM", "HIGH"],
    goodForType: ["SOCIETE", "EI"],
    goodForCriteria: ["INTEGRATION"],
  },
  tiime: {
    id: "tiime",
    name: "Tiime",
    slug: "tiime",
    tagline:
      "Facturation gratuite et compte pro pour les créateurs d'entreprise",
    description:
      "Tiime propose une suite complète gratuite : facturation, compte pro, et notes de frais. Parfait pour les nouveaux entrepreneurs qui démarrent avec un budget limité.",
    features: [
      "Facturation 100% gratuite, sans limite",
      "Compte pro intégré",
      "Notes de frais automatisées",
      "E-facture conforme dès 2026",
      "Application mobile complète",
    ],
    pricing: "Gratuit (compte pro optionnel)",
    discountHook: "🎁 Inscription gratuite + compte pro offert 3 mois",
    affiliateUrl: "https://www.tiime.fr/?ref=efacture",
    logoEmoji: "🟣",
    goodForVol: ["LOW", "MEDIUM", "HIGH"],
    goodForType: ["MICRO", "EI", "SOCIETE"],
    goodForCriteria: ["PRICE", "SIMPLICITY"],
  },
};

type SolutionKey = keyof typeof solutions;

export function getRecommendation(answers: QuizAnswers): SolutionRecommendation {
  const status = answers["q1-statut"];
  const volume = answers["q2-volume"];
  const criteria = answers["q5-critere"];

  // Score each solution
  const scores: { key: SolutionKey; score: number; reasons: string[] }[] = [];

  for (const [key, sol] of Object.entries(solutions)) {
    let score = 0;
    const reasons: string[] = [];

    // Match by business type
    if (sol.goodForType.includes(status)) {
      score += 30;
      reasons.push(`Adapté à votre statut (${formatStatus(status)})`);
    }

    // Match by volume
    if (sol.goodForVol.includes(volume)) {
      score += 25;
      reasons.push(`Conçu pour votre volume de facturation`);
    }

    // Match by primary criteria
    if (sol.goodForCriteria.includes(criteria)) {
      score += 35;
      reasons.push(`Correspond à votre priorité : ${formatCriteria(criteria)}`);
    }

    // Bonus: spec-defined rules
    // "Micro-entrepreneur + Low Volume → Freebe or Indy"
    if (status === "MICRO" && volume === "LOW") {
      if (key === "freebe") {
        score += 15;
        reasons.push("Solution idéale pour les micro-entrepreneurs à faible volume");
      }
      if (key === "indy") {
        score += 10;
      }
    }

    // "SARL/SASU + Accounting Integration → Pennylane"
    if (status === "SOCIETE" && criteria === "INTEGRATION") {
      if (key === "pennylane") {
        score += 20;
        reasons.push("Recommandé pour les sociétés avec besoin d'intégration comptable");
      }
    }

    // Bonus for new entrepreneurs
    if (answers["q3-outils"] === "NONE") {
      if (key === "tiime" || key === "freebe") {
        score += 5;
      }
    }

    // Bonus for price-seekers
    if (criteria === "PRICE" && (key === "freebe" || key === "tiime")) {
      score += 10;
    }

    scores.push({ key: key as SolutionKey, score, reasons });
  }

  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);

  const winner = scores[0];
  const winnerSol = solutions[winner.key];

  // Build alternatives (next 2)
  const alternatives: AlternativeSolution[] = scores.slice(1, 3).map((s) => {
    const sol = solutions[s.key];
    return {
      name: sol.name,
      tagline: sol.tagline,
      affiliateUrl: sol.affiliateUrl,
      logoEmoji: sol.logoEmoji,
    };
  });

  return {
    id: winnerSol.id,
    name: winnerSol.name,
    slug: winnerSol.slug,
    tagline: winnerSol.tagline,
    description: winnerSol.description,
    features: winnerSol.features,
    pricing: winnerSol.pricing,
    discountHook: winnerSol.discountHook,
    affiliateUrl: winnerSol.affiliateUrl,
    logoEmoji: winnerSol.logoEmoji,
    matchScore: Math.min(winner.score, 100),
    matchReasons: winner.reasons,
    alternatives,
  };
}

function formatStatus(status: string): string {
  const map: Record<string, string> = {
    MICRO: "Auto-entrepreneur / Micro-entreprise",
    EI: "Entreprise Individuelle",
    SOCIETE: "SARL / SASU / EURL",
  };
  return map[status] || status;
}

function formatCriteria(criteria: string): string {
  const map: Record<string, string> = {
    PRICE: "prix minimum",
    SIMPLICITY: "simplicité",
    INTEGRATION: "intégration comptable",
  };
  return map[criteria] || criteria;
}

export function buildUserProfile(answers: QuizAnswers): string {
  return JSON.stringify({
    statut: answers["q1-statut"],
    volume: answers["q2-volume"],
    outils: answers["q3-outils"],
    clients: answers["q4-clients"],
    critere: answers["q5-critere"],
  });
}

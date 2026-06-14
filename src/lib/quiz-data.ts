// Quiz questions and options — spec §5.3
// 5 progressive questions for the solution recommendation quiz

export interface QuizOptionData {
  id: string;
  text: string;
  value: string;
  icon?: string;
}

export interface QuizQuestionData {
  id: string;
  step: number;
  question: string;
  helpText?: string;
  options: QuizOptionData[];
}

export const quizQuestions: QuizQuestionData[] = [
  {
    id: "q1-statut",
    step: 1,
    question: "Quel est votre statut juridique ?",
    helpText:
      "Votre statut détermine vos obligations en matière de facturation électronique.",
    options: [
      {
        id: "q1-micro",
        text: "Auto-entrepreneur / Micro-entreprise",
        value: "MICRO",
        icon: "🚀",
      },
      {
        id: "q1-ei",
        text: "Entreprise Individuelle (EI)",
        value: "EI",
        icon: "👤",
      },
      {
        id: "q1-societe",
        text: "Sociétés : SARL / SASU / EURL",
        value: "SOCIETE",
        icon: "🏢",
      },
    ],
  },
  {
    id: "q2-volume",
    step: 2,
    question: "Quel est votre volume mensuel estimé de factures émises ?",
    helpText:
      "Le nombre de factures que vous émettez chaque mois influence le type de solution adaptée.",
    options: [
      {
        id: "q2-low",
        text: "Moins de 5 factures",
        value: "LOW",
        icon: "📄",
      },
      {
        id: "q2-medium",
        text: "5 à 20 factures",
        value: "MEDIUM",
        icon: "📑",
      },
      {
        id: "q2-high",
        text: "Plus de 20 factures",
        value: "HIGH",
        icon: "📚",
      },
    ],
  },
  {
    id: "q3-outils",
    step: 3,
    question: "Comment gérez-vous votre facturation aujourd'hui ?",
    helpText:
      "Cela nous aide à évaluer l'effort de transition nécessaire.",
    options: [
      {
        id: "q3-manual",
        text: "Papier / Word / Excel",
        value: "MANUAL",
        icon: "📝",
      },
      {
        id: "q3-software",
        text: "Un logiciel de facturation non connecté",
        value: "SOFTWARE",
        icon: "💽",
      },
      {
        id: "q3-none",
        text: "Je n'ai pas encore d'activité",
        value: "NONE",
        icon: "🆕",
      },
    ],
  },
  {
    id: "q4-clients",
    step: 4,
    question:
      "Travaillez-vous principalement avec des particuliers (B2C) ou des entreprises (B2B) ?",
    helpText:
      "Important : la e-facture concerne les transactions B2B. Le B2C relève du e-reporting.",
    options: [
      {
        id: "q4-b2b",
        text: "Uniquement des entreprises (B2B)",
        value: "B2B",
        icon: "🏢",
      },
      {
        id: "q4-b2c",
        text: "Uniquement des particuliers (B2C)",
        value: "B2C",
        icon: "👥",
      },
      {
        id: "q4-mix",
        text: "Un mix des deux",
        value: "MIX",
        icon: "🔄",
      },
    ],
  },
  {
    id: "q5-critere",
    step: 5,
    question:
      "Quel est votre critère principal pour votre future solution ?",
    helpText:
      "Cela nous permet de trouver la solution la plus adaptée à vos priorités.",
    options: [
      {
        id: "q5-price",
        text: "Le prix minimum / Gratuit",
        value: "PRICE",
        icon: "💰",
      },
      {
        id: "q5-simplicity",
        text: "La simplicité d'utilisation absolue",
        value: "SIMPLICITY",
        icon: "✨",
      },
      {
        id: "q5-integration",
        text: "L'intégration complète avec mon comptable",
        value: "INTEGRATION",
        icon: "🔗",
      },
    ],
  },
];

export const TOTAL_STEPS = quizQuestions.length;

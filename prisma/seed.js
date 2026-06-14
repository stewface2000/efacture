const { PrismaClient } = require("../generated/prisma");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
const path = require("path");

let dbUrl = process.env.DATABASE_URL || `file:${path.join(__dirname, "dev.db")}`;
if (!dbUrl.startsWith("file:")) {
  dbUrl = `file:${dbUrl}`;
}
const dbPath = dbUrl.substring(5);
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

const solutionsData = [
  {
    name: "Freebe",
    logoUrl: "🟢",
    affiliateUrl: "https://www.freebe.me/?ref=efacture",
    payoutDetails: "Up to €200 per conversion",
    isGoodForVol: "LOW",
    isGoodForType: "MICRO",
    description: "Freebe est la solution de référence des auto-entrepreneurs et micro-entreprises. Son interface est minimaliste et simplissime. Elle permet de gérer sa facturation conforme à la e-facture et de suivre son chiffre d'affaires en temps réel."
  },
  {
    name: "Indy",
    logoUrl: "🔵",
    affiliateUrl: "https://www.indy.fr/?ref=efacture",
    payoutDetails: "Up to €200 per conversion",
    isGoodForVol: "MEDIUM",
    isGoodForType: "EI",
    description: "Indy est un outil complet de facturation et de comptabilité automatisée pour les indépendants (EI et micro-entreprises). Il catégorise automatiquement vos transactions bancaires et pré-remplit vos déclarations fiscales d'une manière extrêmement fluide."
  },
  {
    name: "Pennylane",
    logoUrl: "🟡",
    affiliateUrl: "https://www.pennylane.com/?ref=efacture",
    payoutDetails: "Up to €200 per conversion",
    isGoodForVol: "HIGH",
    isGoodForType: "SOCIETE",
    description: "Pennylane est la plateforme collaborative par excellence pour les PME et les sociétés (SARL, SASU, EURL). Elle permet une intégration totale avec votre expert-comptable, gère les factures fournisseurs et clients en conformité, avec un tableau de bord de trésorerie puissant."
  },
  {
    name: "Tiime",
    logoUrl: "🟣",
    affiliateUrl: "https://www.tiime.fr/?ref=efacture",
    payoutDetails: "Up to €200 per conversion",
    isGoodForVol: "MEDIUM",
    isGoodForType: "ALL",
    description: "Tiime propose une suite de facturation 100% gratuite et illimitée ainsi qu'un compte professionnel. C'est l'outil parfait pour les créateurs d'entreprise et les indépendants qui souhaitent démarrer proprement sans aucun frais récurrent."
  }
];

const professionsData = [
  {
    slug: "artisan-btp",
    name: "Artisan du BTP",
    category: "Artisanat",
    icon: "🏗️",
    description: "Maçons, plombiers, électriciens, peintres : ce qui change concrètement pour vos devis et factures de chantier.",
    contentHtml: `
<h2>La facture électronique pour les Artisans du BTP : Ce qui change</h2>
<p>Dès le <strong>1er septembre 2026</strong>, l'envoi de factures au format PDF par email ou de factures papier ne sera plus autorisé pour vos clients professionnels (entreprises, syndics, commerces). Vous devrez obligatoirement passer par une plateforme de facturation électronique (Portail Public de Facturation ou une plateforme partenaire certifiée) qui transmettra directement les données aux impôts.</p>

<div class="border-accent-left">
  <strong>Ce qui change pour vos chantiers :</strong>
  <ul>
    <li><strong>Acomptes de chantiers :</strong> Chaque acompte devra faire l'objet d'une facture de dépôt électronique certifiée.</li>
    <li><strong>Sous-traitance :</strong> Si vous travaillez en sous-traitance pour un donneur d'ordre, la transmission des factures doit également respecter le format structuré.</li>
    <li><strong>Rapprochement simplifié :</strong> Fini les retards de paiement dus à des factures perdues : le système certifie la réception instantanée.</li>
  </ul>
</div>

<h3>Comment vous préparer en 3 étapes ?</h3>
<ol>
  <li><strong>Choisissez un outil adapté :</strong> Optez pour un logiciel de facturation qui intègre nativement la gestion des chantiers (devis, acomptes, situations de travaux) et qui est connecté au réseau de facturation électronique.</li>
  <li><strong>Centralisez vos données clients :</strong> Récupérez le numéro SIRET et l'adresse de facturation exacte de tous vos clients professionnels.</li>
  <li><strong>Formez vos équipes :</strong> Prenez en main l'outil pour éviter le stress de la rentrée 2026.</li>
</ol>
`
  },
  {
    slug: "boulanger-patissier",
    name: "Boulanger / Pâtissier",
    category: "Commerce",
    icon: "🥐",
    description: "Commerçants de bouche : gérez vos factures fournisseurs et votre conformité au quotidien.",
    contentHtml: `
<h2>La facture électronique pour les Boulangers et Pâtissiers</h2>
<p>En tant que commerçant de bouche, votre activité se divise entre les ventes aux particuliers (B2C) et les fournitures à des clients professionnels (B2B, comme des restaurants, des écoles ou des mairies). La réforme de 2026 introduit des obligations distinctes pour ces deux flux.</p>

<div class="border-accent-left">
  <strong>Les deux obligations clés :</strong>
  <ul>
    <li><strong>E-invoicing (B2B) :</strong> Obligation d'émettre et de recevoir des factures électroniques structurées pour toutes vos ventes à des clients professionnels.</li>
    <li><strong>E-reporting (B2C) :</strong> Transmission périodique aux impôts du récapitulatif de vos ventes quotidiennes aux particuliers (généralement issu de votre logiciel de caisse certifié).</li>
  </ul>
</div>

<h3>Comment vous préparer au quotidien ?</h3>
<p>Vous devez vous assurer que votre logiciel de caisse enregistreuse et votre logiciel de facturation sont prêts à communiquer les données de ventes de manière automatisée. C'est également une opportunité de simplifier le traitement de vos factures de matières premières (farine, beurre, emballages) qui arriveront toutes au format électronique.</p>
`
  },
  {
    slug: "freelance-tech",
    name: "Freelance Tech",
    category: "Freelance",
    icon: "💻",
    description: "Développeurs, designers, consultants IT : la facturation électronique adaptée au travail indépendant.",
    contentHtml: `
<h2>La facture électronique pour les Freelances du secteur Tech</h2>
<p>Développeurs, designers web, chefs de projet ou consultants IT, votre activité est déjà très digitalisée. La réforme e-facture de 2026 s'inscrit naturellement dans vos habitudes de travail, mais elle requiert de remplacer vos factures PDF classiques (générées sur Canva, Word ou un outil non connecté) par des factures électroniques conformes.</p>

<div class="border-accent-left">
  <strong>Ce qui change pour vos missions de conseil et dev :</strong>
  <ul>
    <li><strong>Fin des PDF simples par email :</strong> Vos factures devront transiter par une plateforme sécurisée (comme Freebe, Indy ou le PPF) pour être valides.</li>
    <li><strong>Format structuré obligatoire :</strong> Les factures contiendront des métadonnées XML invisibles mais requises par l'administration (format Factur-X).</li>
    <li><strong>Suivi des statuts en temps réel :</strong> Vous saurez exactement quand votre client a reçu et approuvé votre facture.</li>
  </ul>
</div>

<h3>3 étapes simples pour être prêt</h3>
<ol>
  <li><strong>Régularisez vos outils :</strong> Laissez tomber les templates Excel/Word et passez sur un outil d'automatisation de facturation connecté.</li>
  <li><strong>Renseignez les SIRET de vos clients :</strong> Le SIRET sera la clé unique permettant d'acheminer vos factures vers le bon destinataire.</li>
  <li><strong>Automatisez votre compta :</strong> Profitez-en pour synchroniser vos factures avec votre compte bancaire professionnel.</li>
</ol>
`
  },
  {
    slug: "restaurateur",
    name: "Restaurateur",
    category: "Commerce",
    icon: "🍽️",
    description: "Restaurateurs et traiteurs : gérer les factures fournisseurs et la conformité fiscale simplement.",
    contentHtml: `
<h2>La facture électronique dans la Restauration</h2>
<p>Pour les restaurateurs, la gestion des factures fournisseurs représente une charge administrative lourde (factures de boissons, d'ingrédients frais, de blanchisserie, d'énergie). Dès le 1er septembre 2026, l'obligation de **réceptionner** toutes ces factures au format électronique s'imposera à vous.</p>

<div class="border-accent-left">
  <strong>Ce que la réforme va simplifier pour vous :</strong>
  <ul>
    <li><strong>Saisie comptable automatisée :</strong> Les plateformes liront automatiquement les lignes de vos factures de matières premières, éliminant les erreurs de saisie.</li>
    <li><strong>Centralisation :</strong> Toutes vos factures fournisseurs seront regroupées sur un portail unique, facilitant la recherche et le calcul de la TVA déductible.</li>
    <li><strong>E-reporting :</strong> Vos ventes quotidiennes à des particuliers (via votre logiciel de caisse certifié NF525) seront transmises automatiquement à l'administration fiscale.</li>
  </ul>
</div>

<h3>Comment configurer votre établissement ?</h3>
<p>Assurez-vous de choisir une plateforme de facturation capable de se connecter avec votre logiciel de caisse et de récupérer automatiquement les factures de vos fournisseurs réguliers (Metro, grossistes, etc.).</p>
`
  },
  {
    slug: "auto-entrepreneur",
    name: "Auto-entrepreneur",
    category: "Freelance",
    icon: "🚀",
    description: "Micro-entreprise : les solutions les plus simples et souvent gratuites pour être conforme dès 2026.",
    contentHtml: `
<h2>Micro-entreprises & Auto-entrepreneurs : Vos obligations simplifiées</h2>
<p>Il existe beaucoup d'idées reçues sur la facture électronique pour les auto-entrepreneurs. La règle est pourtant simple : même si vous bénéficiez de la franchise en base de TVA (non assujetti), vous devez respecter les obligations de la réforme si vous facturez des professionnels.</p>

<div class="border-accent-left">
  <strong>Le récapitulatif de vos obligations :</strong>
  <ul>
    <li><strong>Dès le 1er septembre 2026 :</strong> Vous devez obligatoirement être en mesure de **recevoir** des factures électroniques de vos fournisseurs (banque, hébergement web, achats de matériel).</li>
    <li><strong>Émission :</strong> Si vos clients sont des professionnels, vous devez émettre des factures électroniques conformes. Si vous ne facturez que des particuliers, la facture papier ou PDF classique reste autorisée.</li>
    <li><strong>Franchise de TVA :</strong> La mention "TVA non applicable, art. 293 B du CGI" sera automatiquement intégrée dans les métadonnées de la facture électronique.</li>
  </ul>
</div>

<h3>Les solutions recommandées</h3>
<p>Ne payez pas pour des usines à gaz de comptabilité. Des outils gratuits ou à très bas coût comme Freebe ou Tiime sont parfaits pour gérer vos devis, vos factures et déclarer votre chiffre d'affaires mensuel ou trimestriel à l'URSSAF en quelques clics.</p>
`
  },
  {
    slug: "infirmier-liberal",
    name: "Infirmier libéral",
    category: "Professions Libérales",
    icon: "🩺",
    description: "Professionnels de santé en libéral : comprendre les spécificités de la facturation dans le médical.",
    contentHtml: `
<h2>Facturation électronique pour les Infirmiers et Professionnels de Santé</h2>
<p>Les professionnels de santé en libéral ont un mode de fonctionnement très spécifique. L'essentiel de vos honoraires provient de la facturation aux caisses de sécurité sociale et aux mutuelles via le système de télétransmission SESAM-Vitale.</p>

<div class="border-accent-left">
  <strong>Ce qui est exclu de la réforme :</strong>
  <ul>
    <li>Les feuilles de soins électroniques (FSE) envoyées via votre lecteur de carte vitale ne sont pas concernées par la réforme de la facture électronique. Vos relations avec vos patients particuliers restent inchangées.</li>
  </ul>
  <strong>Ce qui change obligatoirement :</strong>
  <ul>
    <li><strong>Factures fournisseurs :</strong> Vous devrez réceptionner sous format électronique certifié les factures de vos fournisseurs de matériel médical, vos abonnements de logiciels professionnels, ou les loyers de votre cabinet.</li>
    <li><strong>Remplacements / Collaborations :</strong> Les contrats de remplacement et rétrocessions d'honoraires entre professionnels doivent faire l'objet de facturations électroniques réglementaires.</li>
  </ul>
</div>

<h3>Quelle organisation adopter ?</h3>
<p>Un logiciel de comptabilité libérale comme Indy ou un outil adapté aux professions de santé vous permettra de gérer vos dépenses professionnelles conformes et vos déclarations 2035 sans stress.</p>
`
  },
  {
    slug: "architecte",
    name: "Architecte",
    category: "Professions Libérales",
    icon: "📐",
    description: "Architectes et bureaux d'études : honoraires, acomptes et facturation de projets longs.",
    contentHtml: `
<h2>La facture électronique pour les Architectes et Maîtres d'Œuvre</h2>
<p>La gestion de projets d'architecture implique des contrats sur le long terme, des facturations à l'avancement, des situations de travaux et des co-traitances. La transition vers la e-facture en 2026 nécessite des outils solides pour préserver votre gestion de trésorerie.</p>

<div class="border-accent-left">
  <strong>Spécificités pour votre cabinet d'architecture :</strong>
  <ul>
    <li><strong>Facturation Chorus Pro :</strong> Si vous travaillez pour des marchés publics, vous utilisez déjà le portail Chorus Pro. La réforme de 2026 va unifier ces flux B2G (secteur public) avec le B2B (secteur privé).</li>
    <li><strong>Gestion des honoraires par phases :</strong> Vos appels d'offres, acomptes de démarrage et situations d'honoraires devront être formalisés sous forme de factures structurées conformes.</li>
  </ul>
</div>

<h3>Comment s'équiper ?</h3>
<p>Il vous faut une solution collaborative permettant de lier vos devis complexes et vos jalons de facturation directement à votre comptabilité. Pennylane ou Tiime offrent des modules robustes et conformes.</p>
`
  },
  {
    slug: "coiffeur-estheticien",
    name: "Coiffeur / Esthéticien",
    category: "Commerce",
    icon: "✂️",
    description: "Professionnels de la beauté : les solutions adaptées aux petits volumes de factures.",
    contentHtml: `
<h2>Salons de coiffure & Instituts de beauté face à la réforme</h2>
<p>Les salons de coiffure et instituts de beauté effectuent 99% de leurs ventes auprès de particuliers (B2C). À ce titre, vos tickets de caisse ne sont pas soumis à l'obligation d'émission de factures électroniques (e-invoicing). En revanche, la réforme vous impacte de deux manières.</p>

<div class="border-accent-left">
  <strong>Vos deux points d'attention :</strong>
  <ul>
    <li><strong>Réception des factures de vos marques partenaires :</strong> Vos achats de shampoings, cires, matériel professionnel et fournitures auprès de vos grossistes devront être réceptionnés au format électronique.</li>
    <li><strong>Obligation de e-reporting :</strong> Si vous utilisez un système de caisse, les totaux de vos ventes de prestations et produits devront être transmis de façon sécurisée aux impôts par le biais d'un flux automatisé.</li>
  </ul>
</div>

<h3>Comment s'y préparer ?</h3>
<p>Vérifiez auprès de votre éditeur de logiciel de caisse (ex: Shortcut, Wavy, Flexy) sa feuille de route de conformité pour le e-reporting de 2026. Pour vos factures d'achat, optez pour une boîte de réception électronique simplifiée.</p>
`
  },
  {
    slug: "consultant-rh",
    name: "Consultant RH / Formation",
    category: "Freelance",
    icon: "📊",
    description: "Consultants et formateurs : facturation de missions, sous-traitance et conventions.",
    contentHtml: `
<h2>Facture électronique : Guide pour les Consultants RH et Formateurs</h2>
<p>Les professionnels du conseil et de la formation facturent exclusivement des entreprises (B2B) ou des organismes collecteurs (OPCO). Vous êtes donc pleinement concerné par l'obligation d'émission et de réception des factures électroniques dès le 1er septembre 2026.</p>

<div class="border-accent-left">
  <strong>Ce qui change pour vos missions de conseil et d'animation :</strong>
  <ul>
    <li><strong>Conventions et sous-traitance :</strong> Vos factures de sous-traitance pour d'autres organismes de formation doivent respecter le protocole e-facture.</li>
    <li><strong>Mention du numéro de déclaration d'activité (NDA) :</strong> Les mentions spécifiques liées à l'exonération de TVA pour la formation professionnelle continue doivent figurer textuellement et dans les métadonnées de vos factures électroniques.</li>
  </ul>
</div>

<h3>3 recommandations pratiques</h3>
<ol>
  <li><strong>Sélectionnez un outil adapté :</strong> Privilégiez des outils de facturation gérant les cas d'exonération de TVA de manière native.</li>
  <li><strong>Identifiez vos clients B2B :</strong> Notez soigneusement les numéros SIRET de vos clients entreprises pour assurer le bon routage de vos factures.</li>
  <li><strong>Passez à la comptabilité automatisée :</strong> Automatisez votre suivi de trésorerie pour gagner du temps de facturation.</li>
</ol>
`
  },
  {
    slug: "photographe-videaste",
    name: "Photographe / Vidéaste",
    category: "Freelance",
    icon: "📸",
    description: "Créatifs indépendants : devis, acomptes et facturation de prestations artistiques.",
    contentHtml: `
<h2>La facture électronique pour les Créateurs Visuels & Photographes</h2>
<p>Les photographes et vidéastes indépendants travaillent souvent avec un mix de clients professionnels (entreprises pour des shootings corporate, événements) et de particuliers (mariages, portraits). Vous devez donc jongler avec deux flux différents.</p>

<div class="border-accent-left">
  <strong>Votre plan de conformité :</strong>
  <ul>
    <li><strong>Flux B2B (Shooting d'entreprise) :</strong> Obligation d'émettre une facture électronique structurée (Factur-X) via une plateforme connectée.</li>
    <li><strong>Flux B2C (Mariage, shooting particulier) :</strong> Facture classique possible, mais soumise au e-reporting (transmission des données de chiffre d'affaires).</li>
    <li><strong>Droits d'auteur et Agessa :</strong> Les mentions relatives aux droits d'auteur devront être intégrées sans encombre dans vos modèles électroniques certifiés.</li>
  </ul>
</div>

<h3>S'équiper avec les bons outils</h3>
<p>Pour éviter la complexité de deux systèmes, adoptez dès maintenant un outil comme Freebe ou Tiime, qui centralise la gestion de vos clients, vos devis d'acompte et gère automatiquement l'envoi de vos factures sur les réseaux de facturation électronique.</p>
`
  },
  {
    slug: "plombier-chauffagiste",
    name: "Plombier / Chauffagiste",
    category: "Artisanat",
    icon: "🔧",
    description: "Artisans du bâtiment : facturation d'interventions, pièces détachées et main-d'œuvre.",
    contentHtml: `
<h2>La facture électronique pour les Plombiers-Chauffagistes</h2>
<p>Vos interventions quotidiennes se partagent entre le dépannage d'urgence chez les particuliers, les contrats d'entretien de chaudières, et les chantiers de rénovation pour des constructeurs ou des entreprises. La facturation électronique de 2026 s'appliquera à toutes vos transactions B2B.</p>

<div class="border-accent-left">
  <strong>Les points clés pour votre activité :</strong>
  <ul>
    <li><strong>Dépannage d'urgence (B2C) :</strong> Le e-reporting s'applique pour transmettre votre chiffre d'affaires, mais la facturette traditionnelle est conservée pour le client.</li>
    <li><strong>Sous-traitance et chantiers (B2B) :</strong> Devis d'acompte, situations de travaux et factures finales doivent être 100% électroniques structurés.</li>
  </ul>
</div>

<h3>Avantages et Plan d'action</h3>
<p>La dématérialisation obligatoire va réduire les délais de paiement et éviter la paperasse perdue dans la camionnette. Choisissez une application mobile de facturation conforme pour créer et envoyer vos factures électroniques directement depuis vos chantiers.</p>
`
  },
  {
    slug: "avocat",
    name: "Avocat",
    category: "Professions Libérales",
    icon: "⚖️",
    description: "Avocats et juristes : honoraires, provisions et spécificités de la profession réglementée.",
    contentHtml: `
<h2>La facture électronique pour les Cabinets d'Avocats</h2>
<p>La profession d'avocat comporte des particularités de facturation importantes : provisions sur honoraires, frais de plaidoirie, débours de procédure (droits d'enregistrement, huissiers), et aides juridictionnelles (facturées à l'État).</p>

<div class="border-accent-left">
  <strong>Ce qui change pour vos factures d'honoraires :</strong>
  <ul>
    <li><strong>Débours et Provisions :</strong> Les appels de provisions et les remboursements de débours devront être formalisés de manière claire pour correspondre aux schémas de données XML de la e-facture.</li>
    <li><strong>Clients Professionnels vs Particuliers :</strong> Vos honoraires de conseil aux entreprises (B2B) relèvent de la e-facture obligatoire, tandis que la défense des particuliers relève du e-reporting.</li>
    <li><strong>Aide juridictionnelle :</strong> Vos facturations à l'État seront gérées de manière unifiée avec le système Chorus Pro intégré à la réforme.</li>
  </ul>
</div>

<h3>Comment s'organiser ?</h3>
<p>Adoptez une solution comptable moderne qui gère le traitement des débours et provisions en conformité fiscale et propose une collaboration étroite avec votre cabinet comptable. Indy ou Pennylane constituent des choix idéaux.</p>
`
  }
];

// Mapping helper to connect Professions to Solutions
const relations = [
  { profession: "artisan-btp", solutions: ["Tiime", "Indy", "Pennylane"] },
  { profession: "boulanger-patissier", solutions: ["Pennylane", "Tiime"] },
  { profession: "freelance-tech", solutions: ["Freebe", "Indy", "Tiime"] },
  { profession: "restaurateur", solutions: ["Pennylane", "Tiime"] },
  { profession: "auto-entrepreneur", solutions: ["Freebe", "Tiime", "Indy"] },
  { profession: "infirmier-liberal", solutions: ["Indy", "Tiime"] },
  { profession: "architecte", solutions: ["Pennylane", "Tiime", "Indy"] },
  { profession: "coiffeur-estheticien", solutions: ["Tiime", "Freebe"] },
  { profession: "consultant-rh", solutions: ["Indy", "Tiime", "Pennylane"] },
  { profession: "photographe-videaste", solutions: ["Freebe", "Tiime", "Indy"] },
  { profession: "plombier-chauffagiste", solutions: ["Tiime", "Indy", "Pennylane"] },
  { profession: "avocat", solutions: ["Indy", "Pennylane", "Tiime"] }
];

async function main() {
  console.log("Starting seeding process...");

  // Skip seeding if already populated
  const count = await prisma.profession.count();
  if (count > 0) {
    console.log("Database already seeded. Skipping...");
    return;
  }

  // 1. Clear database
  await prisma.solutionToProfession.deleteMany();
  await prisma.profession.deleteMany();
  await prisma.solution.deleteMany();

  console.log("Database cleared.");

  // 2. Insert Solutions
  const createdSolutions = {};
  for (const sol of solutionsData) {
    const created = await prisma.solution.create({
      data: sol
    });
    createdSolutions[created.name] = created;
    console.log(`Created Solution: ${created.name}`);
  }

  // 3. Insert Professions
  const createdProfessions = {};
  for (const prof of professionsData) {
    const created = await prisma.profession.create({
      data: prof
    });
    createdProfessions[created.slug] = created;
    console.log(`Created Profession: ${created.name}`);
  }

  // 4. Create Relations
  for (const rel of relations) {
    const prof = createdProfessions[rel.profession];
    if (!prof) continue;

    for (const solName of rel.solutions) {
      const sol = createdSolutions[solName];
      if (!sol) continue;

      await prisma.solutionToProfession.create({
        data: {
          professionId: prof.id,
          solutionId: sol.id
        }
      });
      console.log(`Linked ${prof.name} <--> ${sol.name}`);
    }
  }

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

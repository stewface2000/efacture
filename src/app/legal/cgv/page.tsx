import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente et d'utilisation du site efacture-independant.fr — quiz, générateur, newsletter et affiliation.",
};

export default function CGVPage() {
  return (
    <article className="legal-article" id="cgv">
      <section className="legal-section">
        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les 
          droits et obligations des parties dans le cadre de l'utilisation du site 
          efacture-independant.fr et de la vente de prestations de service proposées par 
          l'éditeur.
        </p>
        <p>
          Toute commande passée sur le site implique l'acceptation entière et sans réserve 
          des présentes CGV.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Services proposés</h2>
        <p>Le site efacture-independant.fr propose les services suivants :</p>

        <div className="legal-services-grid">
          <div className="legal-service-card">
            <div className="legal-service-badge badge badge-teal">Gratuit</div>
            <h4>Quiz de recommandation</h4>
            <p>
              Outil gratuit permettant de déterminer la solution de facturation 
              électronique la plus adaptée à votre profil professionnel, en fonction 
              de votre statut juridique, volume de factures et besoins spécifiques.
            </p>
          </div>
          <div className="legal-service-card">
            <div className="legal-service-badge badge badge-rust">9 € / mois</div>
            <h4>Générateur Factur-X</h4>
            <p>
              Outil intégré permettant de créer, valider et télécharger des factures
              conformes à la norme Factur-X (format hybride PDF/A-3). Comprend un quota
              gratuit de 3 factures à vie.
            </p>
          </div>
          <div className="legal-service-card">
            <div className="legal-service-badge badge badge-muted">9 € — 15 €</div>
            <h4>Guide PDF téléchargeable</h4>
            <p>
              Document pratique « Passer à la e-facture en 1h » disponible au 
              téléchargement via la plateforme Gumroad.
            </p>
          </div>
          <div className="legal-service-card">
            <div className="legal-service-badge badge badge-teal">Gratuit</div>
            <h4>Newsletter informative</h4>
            <p>
              Séquence d'emails pédagogiques sur la réforme de la facturation 
              électronique. Inscription volontaire avec désinscription possible 
              à tout moment.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h2>3. Prix et paiement</h2>
        <p>
          Les prix des services payants sont indiqués en euros (€) TTC. L'éditeur étant 
          non assujetti à la TVA (article 293 B du CGI), les prix affichés correspondent 
          aux montants nets.
        </p>
        <p>
          Le paiement s'effectue exclusivement en ligne via la plateforme sécurisée Stripe. 
          Les données bancaires sont traitées directement par Stripe et ne transitent 
          jamais par les serveurs du site.
        </p>
        <div className="legal-callout">
          <div className="legal-callout-icon">🔐</div>
          <p>
            Stripe est certifié PCI-DSS Level 1, le plus haut niveau de sécurité 
            dans l'industrie du paiement. Vos données bancaires sont chiffrées 
            de bout en bout.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <h2>4. Délai de livraison</h2>
        <ul className="legal-list">
          <li>
            <strong>Générateur Factur-X :</strong> Génération et téléchargement immédiats de la facture PDF après saisie et validation.
          </li>
          <li>
            <strong>Guide PDF :</strong> Téléchargement immédiat après paiement via Gumroad.
          </li>
          <li>
            <strong>Résultat du quiz :</strong> Affichage instantané après soumission des réponses.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. Droit de rétractation</h2>
        <p>
          Conformément à l'article L221-28 du Code de la consommation, le droit de 
          rétractation ne s'applique pas aux contrats de fourniture de contenu 
          numérique fourni sur un support non matériel dont l'exécution a commencé 
          avec l'accord du consommateur.
        </p>
        <div className="legal-callout legal-callout-warning">
          <div className="legal-callout-icon">⚠️</div>
          <p>
            <strong>Abonnement Générateur :</strong> En souscrivant à l'abonnement du Générateur Factur-X, 
            vous bénéficiez d'un accès immédiat aux services de création illimitée de factures. 
            Vous renoncez ainsi expressément à votre droit de rétractation pour ce contenu numérique fourni sur support immatériel.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <h2>6. Liens d'affiliation — Transparence</h2>
        <p>
          Le site efacture-independant.fr participe à des programmes d'affiliation avec 
          des éditeurs de solutions de facturation électronique (notamment Indy, Pennylane, 
          Freebe). Cela signifie que :
        </p>
        <ul className="legal-list">
          <li>
            Certains liens présents sur le site sont des liens affiliés menant vers des 
            services tiers.
          </li>
          <li>
            En cas de souscription via ces liens, le site peut percevoir une commission, 
            sans aucun coût supplémentaire pour l'utilisateur.
          </li>
          <li>
            Les recommandations sont fondées sur une analyse objective des besoins de 
            chaque profil utilisateur. L'existence de liens affiliés n'altère en aucun 
            cas la pertinence des recommandations.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>7. Responsabilité</h2>
        <p>
          Les contenus du site (guides, quiz, recommandations) sont fournis à titre 
          informatif et ne sauraient se substituer à un conseil professionnel 
          personnalisé (expert-comptable, avocat fiscaliste).
        </p>
        <p>
          L'éditeur ne pourra être tenu responsable :
        </p>
        <ul className="legal-list">
          <li>
            Des dysfonctionnements éventuels des solutions tierces recommandées.
          </li>
          <li>
            De l'évolution de la réglementation postérieure à la rédaction des contenus.
          </li>
          <li>
            De l'interruption temporaire du site pour maintenance ou force majeure.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>8. Propriété intellectuelle</h2>
        <p>
          L'éditeur n'exerce aucun droit de propriété intellectuelle sur les factures et 
          données saisies par l'utilisateur dans le cadre de l'utilisation du Générateur Factur-X.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Données personnelles</h2>
        <p>
          Les données collectées dans le cadre des services sont traitées conformément à 
          notre{" "}
          <a href="/legal/confidentialite" className="legal-link">
            Politique de Confidentialité
          </a>
          . Pour toute question relative à vos données, contactez{" "}
          <a href="mailto:rgpd@efacture-independant.fr" className="legal-link">
            rgpd@efacture-independant.fr
          </a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Médiation et litiges</h2>
        <p>
          En cas de litige, le client peut recourir gratuitement à un médiateur de la 
          consommation conformément aux articles L611-1 et suivants du Code de la 
          consommation. Le médiateur compétent sera communiqué sur simple demande.
        </p>
        <p>
          Plateforme de règlement en ligne des litiges de la Commission européenne :{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            ec.europa.eu/consumers/odr
          </a>
        </p>
        <p>
          À défaut de résolution amiable, les tribunaux compétents seront ceux du ressort 
          du domicile du défendeur, conformément au droit français.
        </p>
      </section>

      <section className="legal-section">
        <h2>11. Modification des CGV</h2>
        <p>
          L'éditeur se réserve le droit de modifier les présentes CGV à tout moment. Les 
          CGV applicables sont celles en vigueur à la date de la commande. L'utilisateur 
          est invité à consulter régulièrement cette page.
        </p>
        <p className="legal-update-date">
          Dernière mise à jour : Juin 2026
        </p>
      </section>
    </article>
  );
}

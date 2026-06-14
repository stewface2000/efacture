import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — RGPD",
  description:
    "Politique de confidentialité et de protection des données personnelles conforme au RGPD du site efacture-independant.fr.",
};

export default function ConfidentialitePage() {
  return (
    <article className="legal-article" id="rgpd">
      <section className="legal-section">
        <h2>1. Introduction</h2>
        <p>
          La protection de vos données personnelles est une priorité pour efacture-independant.fr. 
          La présente politique de confidentialité a pour objet de vous informer sur la manière dont 
          nous collectons, traitons et protégeons vos données personnelles, conformément au 
          Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la 
          loi Informatique et Libertés du 6 janvier 1978 modifiée.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Responsable du traitement</h2>
        <div className="legal-info-card">
          <div className="legal-info-row">
            <span className="legal-info-label">Responsable</span>
            <span className="legal-info-value">Stéphane Martin</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Email de contact</span>
            <span className="legal-info-value">
              <a href="mailto:rgpd@efacture-independant.fr" className="legal-link">
                rgpd@efacture-independant.fr
              </a>
            </span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Adresse</span>
            <span className="legal-info-value">12 Rue de la Paix, 75002 Paris</span>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h2>3. Données collectées</h2>
        <p>Nous collectons uniquement les données strictement nécessaires au bon fonctionnement 
          de nos services :</p>

        <div className="legal-data-table">
          <div className="legal-data-header">
            <span>Donnée</span>
            <span>Finalité</span>
            <span>Base légale</span>
            <span>Durée de conservation</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Donnée">Adresse email</span>
            <span className="legal-data-cell" data-label="Finalité">Newsletter, envoi du diagnostic quiz</span>
            <span className="legal-data-cell" data-label="Base légale">Consentement</span>
            <span className="legal-data-cell" data-label="Durée">3 ans après le dernier contact</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Donnée">Réponses au quiz</span>
            <span className="legal-data-cell" data-label="Finalité">Personnalisation de la recommandation</span>
            <span className="legal-data-cell" data-label="Base légale">Consentement</span>
            <span className="legal-data-cell" data-label="Durée">12 mois</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Donnée">Données de facturation (SIRET, adresse, factures émises)</span>
            <span className="legal-data-cell" data-label="Finalité">Génération et stockage des factures Factur-X</span>
            <span className="legal-data-cell" data-label="Base légale">Exécution contractuelle</span>
            <span className="legal-data-cell" data-label="Durée">Durée de vie du compte (puis 10 ans d'obligation légale pour les factures)</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Donnée">Données d'abonnement &amp; paiement</span>
            <span className="legal-data-cell" data-label="Finalité">Traitement de l'abonnement au Générateur</span>
            <span className="legal-data-cell" data-label="Base légale">Exécution contractuelle</span>
            <span className="legal-data-cell" data-label="Durée">Traitées exclusivement par Stripe</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Donnée">Cookies techniques &amp; analytiques</span>
            <span className="legal-data-cell" data-label="Finalité">Fonctionnement du site, mesures d'audience</span>
            <span className="legal-data-cell" data-label="Base légale">Intérêt légitime / Consentement</span>
            <span className="legal-data-cell" data-label="Durée">13 mois maximum</span>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h2>4. Finalités des traitements</h2>
        <p>Vos données sont utilisées exclusivement pour :</p>
        <ul className="legal-list">
          <li>
            <strong>Recommandation personnalisée :</strong> Traiter vos réponses au quiz pour vous 
            orienter vers la solution de facturation la plus adaptée.
          </li>
          <li>
            <strong>Générateur Factur-X :</strong> Vous permettre d'éditer, de stocker et de télécharger vos factures conformes Factur-X.
          </li>
          <li>
            <strong>Newsletter :</strong> Vous envoyer des contenus informatifs sur la réforme de 
            la facturation électronique (uniquement avec votre consentement explicite).
          </li>
          <li>
            <strong>Amélioration du site :</strong> Analyser la fréquentation et les parcours 
            utilisateurs de manière anonymisée.
          </li>
          <li>
            <strong>Obligations légales :</strong> Conserver les données de facturation conformément 
            aux obligations comptables et fiscales françaises.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. Partage des données</h2>
        <p>
          Vos données personnelles ne sont jamais vendues ni cédées à des tiers à des fins 
          commerciales. Elles peuvent être transmises aux sous-traitants suivants, strictement 
          dans le cadre des finalités décrites ci-dessus :
        </p>
        <div className="legal-partners-grid">
          <div className="legal-partner-card">
            <h4>Brevo (ex-Sendinblue)</h4>
            <p>Envoi d'emails transactionnels et newsletter</p>
            <span className="badge badge-teal">Hébergement UE</span>
          </div>
          <div className="legal-partner-card">
            <h4>Stripe</h4>
            <p>Traitement sécurisé des paiements</p>
            <span className="badge badge-teal">Certifié PCI-DSS</span>
          </div>
          <div className="legal-partner-card">
            <h4>Vercel</h4>
            <p>Hébergement de l'application web</p>
            <span className="badge badge-muted">CDN mondial</span>
          </div>
          <div className="legal-partner-card">
            <h4>Prisma / SQLite</h4>
            <p>Base de données applicative</p>
            <span className="badge badge-teal">Données locales</span>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h2>6. Vos droits (RGPD)</h2>
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
        </p>
        <div className="legal-rights-grid">
          <div className="legal-right-card">
            <div className="legal-right-icon">👁️</div>
            <h4>Droit d'accès</h4>
            <p>Obtenir la confirmation que vos données sont traitées et en obtenir une copie.</p>
          </div>
          <div className="legal-right-card">
            <div className="legal-right-icon">✏️</div>
            <h4>Droit de rectification</h4>
            <p>Corriger des données inexactes ou incomplètes vous concernant.</p>
          </div>
          <div className="legal-right-card">
            <div className="legal-right-icon">🗑️</div>
            <h4>Droit à l'effacement</h4>
            <p>Demander la suppression de vos données personnelles.</p>
          </div>
          <div className="legal-right-card">
            <div className="legal-right-icon">⏸️</div>
            <h4>Droit à la limitation</h4>
            <p>Limiter le traitement de vos données dans certains cas.</p>
          </div>
          <div className="legal-right-card">
            <div className="legal-right-icon">📦</div>
            <h4>Droit à la portabilité</h4>
            <p>Recevoir vos données dans un format structuré et couramment utilisé.</p>
          </div>
          <div className="legal-right-card">
            <div className="legal-right-icon">🚫</div>
            <h4>Droit d'opposition</h4>
            <p>Vous opposer au traitement de vos données à tout moment.</p>
          </div>
        </div>

        <div className="legal-callout">
          <div className="legal-callout-icon">📩</div>
          <p>
            Pour exercer vos droits, envoyez un email à{" "}
            <a href="mailto:rgpd@efacture-independant.fr" className="legal-link">
              rgpd@efacture-independant.fr
            </a>{" "}
            en précisant votre demande et en joignant un justificatif d'identité. 
            Nous nous engageons à répondre dans un délai de 30 jours.
          </p>
        </div>

        <p>
          En cas de désaccord avec notre traitement, vous pouvez introduire une réclamation 
          auprès de la{" "}
          <a
            href="https://www.cnil.fr/fr/plaintes"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            CNIL (Commission Nationale de l'Informatique et des Libertés)
          </a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
          protéger vos données contre tout accès non autorisé, altération, divulgation ou 
          destruction :
        </p>
        <ul className="legal-list">
          <li>Chiffrement SSL/TLS sur l'ensemble du site (HTTPS)</li>
          <li>Accès restreint aux données par authentification sécurisée</li>
          <li>Sous-traitants conformes au RGPD ou certifiés</li>
          <li>Aucun stockage de données bancaires sur nos serveurs</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>8. Transferts hors UE</h2>
        <p>
          Certains de nos sous-traitants (Vercel, Stripe) peuvent traiter des données en dehors 
          de l'Union européenne. Ces transferts sont encadrés par des clauses contractuelles types 
          approuvées par la Commission européenne (article 46 du RGPD) ou par la décision 
          d'adéquation EU-US Data Privacy Framework.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Modifications</h2>
        <p>
          Nous nous réservons le droit de modifier la présente politique de confidentialité à tout 
          moment. Toute modification substantielle sera signalée sur le site. La date de dernière 
          mise à jour est indiquée ci-dessous.
        </p>
        <p className="legal-update-date">
          Dernière mise à jour : Juin 2026
        </p>
      </section>
    </article>
  );
}

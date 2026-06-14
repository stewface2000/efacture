import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Cookies",
  description:
    "Politique de cookies du site efacture-independant.fr — informations sur l'utilisation des cookies et le paramétrage de vos préférences.",
};

export default function CookiesPage() {
  return (
    <article className="legal-article" id="cookies">
      <section className="legal-section">
        <h2>1. Qu'est-ce qu'un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, 
          smartphone) lors de la visite d'un site web. Il permet au site de mémoriser certaines 
          informations relatives à votre navigation afin de faciliter vos visites ultérieures 
          et de rendre le site plus ergonomique.
        </p>
        <div className="legal-callout">
          <div className="legal-callout-icon">💡</div>
          <p>
            Les cookies ne contiennent pas de virus et ne peuvent pas accéder aux informations 
            stockées sur votre appareil. Ils servent uniquement à améliorer votre expérience 
            de navigation.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <h2>2. Types de cookies utilisés</h2>
        <p>
          Le site efacture-independant.fr utilise différentes catégories de cookies, 
          chacune ayant une finalité spécifique :
        </p>

        <div className="legal-cookie-categories">
          <div className="legal-cookie-card">
            <div className="legal-cookie-header">
              <span className="legal-cookie-icon">⚙️</span>
              <div>
                <h4>Cookies strictement nécessaires</h4>
                <span className="badge badge-teal">Toujours actifs</span>
              </div>
            </div>
            <p>
              Indispensables au fonctionnement du site. Ils permettent la navigation sur le site 
              et l'utilisation de ses fonctionnalités essentielles (sécurité, accessibilité). 
              Sans ces cookies, le site ne peut pas fonctionner correctement.
            </p>
            <div className="legal-cookie-examples">
              <h5>Exemples :</h5>
              <ul>
                <li>Mémorisation de vos préférences de cookies</li>
                <li>Maintien de la session de navigation</li>
                <li>Sécurisation des formulaires (protection CSRF)</li>
              </ul>
            </div>
          </div>

          <div className="legal-cookie-card">
            <div className="legal-cookie-header">
              <span className="legal-cookie-icon">📊</span>
              <div>
                <h4>Cookies analytiques / de mesure d'audience</h4>
                <span className="badge badge-rust">Consentement requis</span>
              </div>
            </div>
            <p>
              Ils nous aident à comprendre comment les visiteurs interagissent avec le site en 
              collectant des données de manière anonyme. Ces informations nous permettent 
              d'améliorer continuellement l'ergonomie et le contenu du site.
            </p>
            <div className="legal-cookie-examples">
              <h5>Exemples :</h5>
              <ul>
                <li>Nombre de pages visitées</li>
                <li>Temps passé sur chaque page</li>
                <li>Taux de rebond et parcours de navigation</li>
                <li>Source d'arrivée (moteur de recherche, lien direct, etc.)</li>
              </ul>
            </div>
          </div>

          <div className="legal-cookie-card">
            <div className="legal-cookie-header">
              <span className="legal-cookie-icon">🎯</span>
              <div>
                <h4>Cookies fonctionnels</h4>
                <span className="badge badge-rust">Consentement requis</span>
              </div>
            </div>
            <p>
              Ils permettent de mémoriser vos choix et préférences pour personnaliser 
              votre expérience sur le site (par exemple, les réponses au quiz pour 
              retrouver vos résultats).
            </p>
            <div className="legal-cookie-examples">
              <h5>Exemples :</h5>
              <ul>
                <li>Sauvegarde de la progression dans le quiz</li>
                <li>Mémorisation du profil professionnel sélectionné</li>
              </ul>
            </div>
          </div>

          <div className="legal-cookie-card">
            <div className="legal-cookie-header">
              <span className="legal-cookie-icon">🤝</span>
              <div>
                <h4>Cookies tiers / affiliation</h4>
                <span className="badge badge-rust">Consentement requis</span>
              </div>
            </div>
            <p>
              Certains de nos partenaires affiliés peuvent déposer des cookies lors de 
              votre navigation afin de suivre l'attribution des recommandations. Ces 
              cookies sont strictement limités au suivi de conversion et ne servent 
              pas au profilage publicitaire.
            </p>
            <div className="legal-cookie-examples">
              <h5>Partenaires concernés :</h5>
              <ul>
                <li>Indy — suivi d'affiliation</li>
                <li>Pennylane — suivi d'affiliation</li>
                <li>Freebe — suivi d'affiliation</li>
                <li>Stripe — sécurisation du paiement</li>
                <li>Gumroad — vente de produits numériques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h2>3. Liste détaillée des cookies</h2>
        <div className="legal-data-table">
          <div className="legal-data-header">
            <span>Nom du cookie</span>
            <span>Catégorie</span>
            <span>Finalité</span>
            <span>Durée</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Nom">cookie_consent</span>
            <span className="legal-data-cell" data-label="Catégorie">Nécessaire</span>
            <span className="legal-data-cell" data-label="Finalité">Stocke vos préférences de consentement</span>
            <span className="legal-data-cell" data-label="Durée">12 mois</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Nom">_session</span>
            <span className="legal-data-cell" data-label="Catégorie">Nécessaire</span>
            <span className="legal-data-cell" data-label="Finalité">Identifiant de session</span>
            <span className="legal-data-cell" data-label="Durée">Session</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Nom">_ga / _ga_*</span>
            <span className="legal-data-cell" data-label="Catégorie">Analytique</span>
            <span className="legal-data-cell" data-label="Finalité">Google Analytics — mesure d'audience</span>
            <span className="legal-data-cell" data-label="Durée">13 mois</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Nom">quiz_progress</span>
            <span className="legal-data-cell" data-label="Catégorie">Fonctionnel</span>
            <span className="legal-data-cell" data-label="Finalité">Sauvegarde de la progression quiz</span>
            <span className="legal-data-cell" data-label="Durée">30 jours</span>
          </div>
          <div className="legal-data-row">
            <span className="legal-data-cell" data-label="Nom">__stripe_*</span>
            <span className="legal-data-cell" data-label="Catégorie">Tiers</span>
            <span className="legal-data-cell" data-label="Finalité">Sécurisation du paiement Stripe</span>
            <span className="legal-data-cell" data-label="Durée">Session</span>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h2>4. Gestion de vos préférences</h2>
        <p>
          Lors de votre première visite, un bandeau de consentement vous permet d'accepter 
          ou de refuser les cookies non essentiels. Vous pouvez modifier vos préférences 
          à tout moment :
        </p>

        <div className="legal-manage-grid">
          <div className="legal-manage-card">
            <h4>🍪 Depuis notre bandeau</h4>
            <p>
              Cliquez sur le bouton ci-dessous pour ouvrir à nouveau le panneau de 
              gestion des cookies et modifier vos choix.
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              id="legal-cookie-settings-btn"
              aria-label="Gérer mes préférences de cookies"
            >
              Gérer mes cookies
            </button>
          </div>
          <div className="legal-manage-card">
            <h4>🌐 Depuis votre navigateur</h4>
            <p>
              Vous pouvez également configurer votre navigateur pour bloquer ou supprimer 
              les cookies. Voici les liens vers les instructions des navigateurs les 
              plus courants :
            </p>
            <ul className="legal-browser-list">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-link"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-link"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-link"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-link"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal-callout legal-callout-warning">
          <div className="legal-callout-icon">⚠️</div>
          <p>
            La désactivation de certains cookies peut affecter votre expérience de navigation 
            et limiter l'accès à certaines fonctionnalités du site (notamment le quiz et le 
            système de paiement).
          </p>
        </div>
      </section>

      <section className="legal-section">
        <h2>5. Base légale</h2>
        <p>
          Conformément à la directive ePrivacy (2002/58/CE) et aux recommandations de la CNIL, 
          le dépôt de cookies non essentiels nécessite votre consentement préalable, libre, 
          spécifique, éclairé et univoque. Les cookies strictement nécessaires au fonctionnement 
          du site sont exemptés de consentement (article 82 de la loi Informatique et Libertés).
        </p>
        <p>
          Votre consentement est conservé pour une durée de 12 mois, après quoi nous vous 
          solliciterons à nouveau.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Contact</h2>
        <p>
          Pour toute question concernant notre utilisation des cookies, vous pouvez nous 
          contacter à{" "}
          <a href="mailto:rgpd@efacture-independant.fr" className="legal-link">
            rgpd@efacture-independant.fr
          </a>.
        </p>
        <p className="legal-update-date">
          Dernière mise à jour : Juin 2026
        </p>
      </section>
    </article>
  );
}

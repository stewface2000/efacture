export default function MentionsLegalesPage() {
  return (
    <article className="legal-article" id="mentions-legales">
      <section className="legal-section">
        <h2>1. Éditeur du site</h2>
        <div className="legal-info-card">
          <div className="legal-info-row">
            <span className="legal-info-label">Raison sociale</span>
            <span className="legal-info-value">efacture-independant.fr</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Forme juridique</span>
            <span className="legal-info-value">Micro-entreprise / Entrepreneur individuel</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Responsable de la publication</span>
            <span className="legal-info-value">Stéphane Martin</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Adresse</span>
            <span className="legal-info-value">12 Rue de la Paix, 75002 Paris</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">SIRET</span>
            <span className="legal-info-value">987 654 321 00012</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Email</span>
            <span className="legal-info-value">contact@efacture-independant.fr</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Numéro de TVA</span>
            <span className="legal-info-value">Non assujetti (article 293 B du CGI)</span>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h2>2. Hébergement</h2>
        <div className="legal-info-card">
          <div className="legal-info-row">
            <span className="legal-info-label">Hébergeur</span>
            <span className="legal-info-value">Vercel Inc.</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Adresse</span>
            <span className="legal-info-value">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</span>
          </div>
          <div className="legal-info-row">
            <span className="legal-info-label">Site web</span>
            <span className="legal-info-value">
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="legal-link">
                vercel.com
              </a>
            </span>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <h2>3. Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu du site efacture-independant.fr (textes, images, graphismes, logo, 
          icônes, mise en page, logiciels, et tout autre élément susceptible de protection par le droit 
          de la propriété intellectuelle) est la propriété exclusive de l'éditeur ou de ses partenaires, 
          sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, distribution, retransmission, 
          ou exploitation commerciale de tout ou partie du contenu du site, par quelque procédé que ce 
          soit et sur quelque support que ce soit, est strictement interdite sans l'autorisation écrite 
          préalable de l'éditeur.
        </p>
        <div className="legal-callout">
          <div className="legal-callout-icon">ℹ️</div>
          <p>
            Les marques, logos et noms de produits tiers mentionnés sur ce site (Indy, Pennylane, 
            Freebe, Sage, Cegid, etc.) sont la propriété de leurs détenteurs respectifs. Leur mention 
            n'implique aucune affiliation ni approbation de leur part.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <h2>4. Liens d'affiliation</h2>
        <p>
          Le site efacture-independant.fr contient des liens affiliés vers des solutions de facturation 
          électronique. Lorsqu'un utilisateur souscrit à un service via l'un de ces liens, le site 
          peut percevoir une commission de la part du partenaire concerné, sans coût supplémentaire 
          pour l'utilisateur.
        </p>
        <p>
          Cette relation commerciale n'influence en aucun cas l'objectivité de nos recommandations. 
          Nos analyses et comparatifs sont réalisés de manière indépendante, dans le seul intérêt 
          de nos lecteurs.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Limitation de responsabilité</h2>
        <p>
          Les informations fournies sur le site efacture-independant.fr sont présentées à titre 
          informatif et pédagogique. Elles ne constituent en aucun cas un conseil juridique, 
          fiscal ou comptable personnalisé.
        </p>
        <p>
          L'éditeur s'efforce de maintenir les informations à jour et exactes, mais ne saurait 
          être tenu responsable d'éventuelles erreurs, omissions, ou des résultats obtenus suite 
          à l'utilisation de ces informations. L'utilisateur reste seul responsable de l'utilisation 
          qu'il fait des contenus du site.
        </p>
        <p>
          Le site peut contenir des liens vers des sites tiers. L'éditeur décline toute 
          responsabilité quant au contenu de ces sites externes.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Crédits</h2>
        <p>
          Conception et développement : efacture-independant.fr<br />
          Typographie : Inter (Google Fonts, licence OFL)<br />
          Icônes : Lucide Icons (licence ISC)
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En cas de litige, 
          et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
        </p>
        <p className="legal-update-date">
          Dernière mise à jour : Juin 2026
        </p>
      </section>
    </article>
  );
}

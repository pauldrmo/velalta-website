import LegalCloseButton from "../components/LegalCloseButton";

export default function Confidentialite() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <LegalCloseButton />
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <div className="mb-12">
          <span className="text-[12px] font-semibold tracking-widest uppercase text-blue-400">Légal</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-white/50 text-[15px]">Dernière mise à jour : 3 juin 2026</p>
        </div>

        <div className="space-y-10 text-white/70 text-[15px] leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées sur scanpay.fr est <strong className="text-white">Scanpay Technologies SAS</strong>, représentée par Paul Dormeau. Contact : <a href="mailto:pauldormeau@icloud.com" className="text-blue-400 hover:text-blue-300 transition-colors">pauldormeau@icloud.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Données collectées</h2>
            <p>Nous collectons les données suivantes dans le cadre de l'utilisation de notre site et de nos services :</p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone",
                "Données professionnelles : nom de l'enseigne, poste occupé, taille de l'entreprise",
                "Données de navigation : adresse IP, type de navigateur, pages consultées, durée de visite",
                "Données de communication : contenu des messages envoyés via le formulaire de contact",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. Finalités du traitement</h2>
            <p>Vos données sont collectées pour les finalités suivantes :</p>
            <div className="mt-4 space-y-3">
              {[
                { base: "Intérêt légitime", desc: "Répondre à vos demandes de contact, démonstrations ou partenariats" },
                { base: "Intérêt légitime", desc: "Améliorer les performances et le contenu du site" },
                { base: "Consentement", desc: "Vous envoyer des informations sur Scanpay si vous en avez fait la demande" },
                { base: "Obligation légale", desc: "Respect de nos obligations légales et réglementaires" },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-lg px-4 py-3 flex items-start gap-4">
                  <span className="text-[11px] font-semibold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full whitespace-nowrap mt-0.5">{item.base}</span>
                  <span className="text-[14px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées, et au maximum :
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "3 ans à compter du dernier contact pour les données de prospection commerciale",
                "5 ans pour les données relatives aux obligations légales et comptables",
                "13 mois pour les cookies et traceurs de navigation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">5. Destinataires des données</h2>
            <p>
              Vos données personnelles sont destinées aux équipes internes de Scanpay Technologies SAS. Elles peuvent être transmises à des sous-traitants techniques (hébergement, envoi d'e-mails) dans le strict cadre de l'exécution de leurs missions et sous garantie contractuelle de confidentialité.
            </p>
            <p className="mt-3">
              Nous ne vendons, ne louons et ne cédons jamais vos données personnelles à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">6. Vos droits</h2>
            <p>Conformément au RGPD (Règlement Général sur la Protection des Données), vous disposez des droits suivants :</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { droit: "Accès", desc: "Obtenir une copie de vos données" },
                { droit: "Rectification", desc: "Corriger des données inexactes" },
                { droit: "Effacement", desc: "Demander la suppression de vos données" },
                { droit: "Opposition", desc: "Vous opposer à un traitement" },
                { droit: "Limitation", desc: "Limiter l'utilisation de vos données" },
                { droit: "Portabilité", desc: "Recevoir vos données dans un format structuré" },
              ].map((item) => (
                <div key={item.droit} className="glass-card rounded-lg px-4 py-3">
                  <p className="text-white font-medium text-[14px]">Droit d'{item.droit}</p>
                  <p className="text-white/50 text-[13px] mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:pauldormeau@icloud.com" className="text-blue-400 hover:text-blue-300 transition-colors">pauldormeau@icloud.com</a>. Vous disposez également du droit d'introduire une réclamation auprès de la <strong className="text-white">CNIL</strong> (www.cnil.fr).
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">7. Cookies</h2>
            <p>
              Le site scanpay.fr utilise des cookies strictement nécessaires au fonctionnement du site. Aucun cookie de traçage publicitaire ou de profilage n'est déposé sans votre consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">8. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier la présente politique à tout moment. La date de dernière mise à jour figurant en haut de page sera actualisée en conséquence.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

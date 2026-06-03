import LegalCloseButton from "../components/LegalCloseButton";

export default function CGU() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <LegalCloseButton />
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <div className="mb-12">
          <span className="text-[12px] font-semibold tracking-widest uppercase text-blue-400">Légal</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
            Conditions Générales d'Utilisation
          </h1>
          <p className="mt-4 text-white/50 text-[15px]">Dernière mise à jour : 3 juin 2026</p>
        </div>

        <div className="space-y-10 text-white/70 text-[15px] leading-relaxed">

          <div className="glass-card rounded-xl p-5 border border-blue-500/20">
            <p className="text-[14px] text-white/60">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site <strong className="text-white">velalta.fr</strong> et des services proposés par Velalta Technologies SAS. En accédant au site, vous acceptez sans réserve les présentes CGU.
            </p>
          </div>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Objet</h2>
            <p>
              Le site velalta.fr présente la solution de self-checkout mobile Velalta, destinée aux enseignes de distribution physique. Il permet de consulter les fonctionnalités, les tarifs, et de prendre contact avec l'équipe Velalta.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Accès au site</h2>
            <p>
              L'accès au site est libre et gratuit. Velalta Technologies SAS se réserve le droit de suspendre, modifier ou interrompre l'accès au site à tout moment, notamment pour maintenance, sans préavis ni indemnité.
            </p>
            <p className="mt-3">
              L'utilisateur est seul responsable de son équipement informatique et de sa connexion à internet nécessaires pour accéder au site.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. Utilisation du site</h2>
            <p>L'utilisateur s'engage à :</p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "Utiliser le site uniquement à des fins licites et conformes aux présentes CGU",
                "Ne pas tenter d'accéder à des zones non autorisées du site ou de ses systèmes informatiques",
                "Ne pas diffuser de contenu illicite, diffamatoire, obscène ou contraire à l'ordre public via les formulaires de contact",
                "Ne pas perturber le fonctionnement normal du site par des attaques, scripts automatisés ou tout autre moyen",
                "Respecter les droits de propriété intellectuelle de Velalta Technologies SAS",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Nature des services présentés</h2>
            <p>
              Le site velalta.fr est un site de présentation d'un projet en phase de lancement. Les fonctionnalités, tarifs, délais et caractéristiques techniques décrits sont prévisionnels et fournis à titre indicatif.
            </p>
            <p className="mt-3">
              Velalta Technologies SAS ne saurait être tenue responsable de l'absence de mise en production des services décrits dans les délais annoncés. Tout intérêt exprimé (via le formulaire de contact, demande de démo, etc.) ne constitue pas un engagement contractuel entre les parties.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">5. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu du site (textes, visuels, logo, charte graphique, code source) est la propriété exclusive de Velalta Technologies SAS et est protégé par le droit de la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, totale ou partielle, est interdite sans autorisation écrite préalable de Velalta Technologies SAS.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">6. Liens hypertextes</h2>
            <p>
              La création de liens hypertextes vers le site velalta.fr est autorisée sous réserve que ces liens ne portent pas atteinte à l'image de Velalta. Les liens vers des sites tiers présents sur velalta.fr sont fournis à titre informatif uniquement.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">7. Limitation de responsabilité</h2>
            <p>
              Velalta Technologies SAS ne peut être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder, de la présence de virus sur le site, ou de l'inexactitude des informations qui y sont publiées.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">8. Modification des CGU</h2>
            <p>
              Velalta Technologies SAS se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site. L'utilisation continue du site après modification vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">9. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du ressort de Paris seront saisis.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">10. Contact</h2>
            <p>
              Pour toute question relative aux présentes CGU : <a href="mailto:pauldormeau@icloud.com" className="text-blue-400 hover:text-blue-300 transition-colors">pauldormeau@icloud.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

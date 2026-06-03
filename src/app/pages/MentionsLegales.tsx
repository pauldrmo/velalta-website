import LegalCloseButton from "../components/LegalCloseButton";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <LegalCloseButton />
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <div className="mb-12">
          <span className="text-[12px] font-semibold tracking-widest uppercase text-blue-400">Légal</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
            Mentions légales
          </h1>
          <p className="mt-4 text-white/50 text-[15px]">Dernière mise à jour : 3 juin 2026</p>
        </div>

        <div className="space-y-10 text-white/70 text-[15px] leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Éditeur du site</h2>
            <p>Le site <strong className="text-white">velalta.fr</strong> est édité par :</p>
            <div className="mt-4 glass-card rounded-xl p-6 space-y-2 text-[14px]">
              <p><span className="text-white/40">Dénomination sociale</span> <span className="text-white ml-2">Velalta Technologies SAS</span></p>
              <p><span className="text-white/40">Forme juridique</span> <span className="text-white ml-2">Société par Actions Simplifiée (SAS)</span></p>
              <p><span className="text-white/40">Capital social</span> <span className="text-white ml-2">En cours de constitution</span></p>
              <p><span className="text-white/40">Siège social</span> <span className="text-white ml-2">Paris & Rouen, France</span></p>
              <p><span className="text-white/40">SIREN / SIRET</span> <span className="text-white ml-2">En cours d'immatriculation</span></p>
              <p><span className="text-white/40">N° TVA intracommunautaire</span> <span className="text-white ml-2">En cours d'attribution</span></p>
              <p><span className="text-white/40">Directeur de publication</span> <span className="text-white ml-2">Paul Dormeau</span></p>
              <p><span className="text-white/40">Contact</span> <span className="text-white ml-2">pauldormeau@icloud.com</span></p>
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <div className="mt-4 glass-card rounded-xl p-6 space-y-2 text-[14px]">
              <p><span className="text-white/40">Prestataire</span> <span className="text-white ml-2">Vercel Inc.</span></p>
              <p><span className="text-white/40">Adresse</span> <span className="text-white ml-2">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</span></p>
              <p><span className="text-white/40">Site</span> <span className="text-white ml-2">vercel.com</span></p>
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant le site velalta.fr (textes, images, logos, graphismes, icônes, sons, logiciels, etc.) sont la propriété exclusive de Velalta Technologies SAS ou de ses partenaires, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation préalable et écrite de Velalta Technologies SAS.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Limitation de responsabilité</h2>
            <p>
              Velalta Technologies SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, Velalta décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
            </p>
            <p className="mt-3">
              Ce site est un projet pilote en phase de lancement. Les fonctionnalités, tarifs et services décrits sont prévisionnels et peuvent évoluer sans préavis.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">5. Liens hypertextes</h2>
            <p>
              Le site velalta.fr peut contenir des liens vers des sites tiers. Velalta Technologies SAS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leurs pratiques en matière de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">7. Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:pauldormeau@icloud.com" className="text-blue-400 hover:text-blue-300 transition-colors">pauldormeau@icloud.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

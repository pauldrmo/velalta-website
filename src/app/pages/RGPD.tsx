import LegalCloseButton from "../components/LegalCloseButton";

export default function RGPD() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      <LegalCloseButton />
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <div className="mb-12">
          <span className="text-[12px] font-semibold tracking-widest uppercase text-blue-400">Légal</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
            Politique RGPD
          </h1>
          <p className="mt-4 text-white/50 text-[15px]">Dernière mise à jour : 3 juin 2026</p>
        </div>

        <div className="space-y-10 text-white/70 text-[15px] leading-relaxed">

          <div className="glass-card rounded-xl p-5 border border-blue-500/20">
            <p className="text-[14px] text-white/60">
              Scanpay Technologies SAS s'engage à respecter le <strong className="text-white">Règlement Général sur la Protection des Données (RGPD)</strong> — Règlement UE 2016/679 du Parlement européen et du Conseil du 27 avril 2016. Cette page détaille notre approche de la conformité RGPD.
            </p>
          </div>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Principes fondamentaux respectés</h2>
            <div className="space-y-3">
              {[
                { titre: "Licéité, loyauté, transparence", desc: "Vos données sont traitées de manière légale, équitable et transparente." },
                { titre: "Limitation des finalités", desc: "Vos données sont collectées pour des finalités déterminées, explicites et légitimes." },
                { titre: "Minimisation des données", desc: "Seules les données strictement nécessaires sont collectées." },
                { titre: "Exactitude", desc: "Les données sont maintenues à jour et exactes dans la mesure du possible." },
                { titre: "Limitation de la conservation", desc: "Les données ne sont pas conservées au-delà de la durée nécessaire." },
                { titre: "Intégrité et confidentialité", desc: "Des mesures techniques et organisationnelles assurent la sécurité de vos données." },
              ].map((item) => (
                <div key={item.titre} className="glass-card rounded-lg px-5 py-4">
                  <p className="text-white font-medium text-[14px]">{item.titre}</p>
                  <p className="text-white/50 text-[13px] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Bases légales de traitement</h2>
            <p>Scanpay Technologies SAS fonde ses traitements de données sur les bases légales suivantes :</p>
            <div className="mt-4 space-y-3">
              {[
                {
                  base: "Consentement (Art. 6.1.a)",
                  desc: "Pour l'envoi de communications marketing ou d'actualités Scanpay, uniquement si vous y avez explicitement consenti.",
                },
                {
                  base: "Exécution d'un contrat (Art. 6.1.b)",
                  desc: "Pour traiter vos demandes de démo, de partenariat ou toute démarche précontractuelle.",
                },
                {
                  base: "Intérêt légitime (Art. 6.1.f)",
                  desc: "Pour améliorer notre site, analyser les performances et assurer la sécurité informatique de nos systèmes.",
                },
                {
                  base: "Obligation légale (Art. 6.1.c)",
                  desc: "Pour respecter nos obligations légales et réglementaires (comptabilité, obligations fiscales, etc.).",
                },
              ].map((item) => (
                <div key={item.base} className="glass-card rounded-lg px-5 py-4">
                  <p className="text-blue-300 font-semibold text-[13px] mb-1">{item.base}</p>
                  <p className="text-white/60 text-[14px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. Transferts hors UE</h2>
            <p>
              Certains de nos prestataires techniques (hébergement Vercel) peuvent traiter des données hors de l'Union européenne, notamment aux États-Unis. Ces transferts sont encadrés par des garanties appropriées conformes au RGPD, notamment les Clauses Contractuelles Types (CCT) approuvées par la Commission européenne.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Mesures de sécurité</h2>
            <p>Scanpay Technologies SAS met en œuvre les mesures techniques et organisationnelles suivantes :</p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "Chiffrement HTTPS (TLS) sur l'ensemble du site",
                "Accès aux données restreint aux personnes autorisées",
                "Absence de stockage des données de formulaire en clair sur des serveurs non sécurisés",
                "Revue régulière des accès et des pratiques de sécurité",
                "Sensibilisation de l'équipe aux bonnes pratiques RGPD",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">5. Droits des personnes concernées</h2>
            <p>Conformément aux Articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { article: "Art. 15", droit: "Droit d'accès", desc: "Savoir quelles données nous détenons sur vous" },
                { article: "Art. 16", droit: "Droit de rectification", desc: "Corriger vos données inexactes ou incomplètes" },
                { article: "Art. 17", droit: "Droit à l'effacement", desc: "\"Droit à l'oubli\" — suppression de vos données" },
                { article: "Art. 18", droit: "Droit à la limitation", desc: "Restreindre l'utilisation de vos données" },
                { article: "Art. 20", droit: "Droit à la portabilité", desc: "Recevoir vos données dans un format lisible" },
                { article: "Art. 21", droit: "Droit d'opposition", desc: "Vous opposer à tout traitement fondé sur l'intérêt légitime" },
              ].map((item) => (
                <div key={item.article} className="glass-card rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] text-blue-400 font-mono">{item.article}</span>
                    <p className="text-white font-medium text-[13px]">{item.droit}</p>
                  </div>
                  <p className="text-white/50 text-[12px]">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5">
              Pour exercer vos droits, adressez votre demande à : <a href="mailto:pauldormeau@icloud.com" className="text-blue-400 hover:text-blue-300 transition-colors">pauldormeau@icloud.com</a>. Nous répondrons dans un délai d'un mois (Article 12 RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">6. Réclamation auprès de la CNIL</h2>
            <p>
              Si vous estimez que le traitement de vos données personnelles ne respecte pas la réglementation en vigueur, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <div className="mt-4 glass-card rounded-xl p-5 space-y-1 text-[14px]">
              <p className="text-white font-medium">CNIL — Commission Nationale de l'Informatique et des Libertés</p>
              <p className="text-white/50">3 Place de Fontenoy — TSA 80715 — 75334 Paris Cedex 07</p>
              <p className="text-white/50">Tél. : 01 53 73 22 22</p>
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">www.cnil.fr</a>
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">7. Délégué à la Protection des Données (DPO)</h2>
            <p>
              En tant que startup en phase de lancement, Scanpay Technologies SAS n'est pas tenue de désigner un DPO obligatoire. Le responsable de la conformité RGPD est actuellement Paul Dormeau, contactable à : <a href="mailto:pauldormeau@icloud.com" className="text-blue-400 hover:text-blue-300 transition-colors">pauldormeau@icloud.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">8. Mise à jour de la politique</h2>
            <p>
              Cette politique RGPD sera mise à jour au fur et à mesure du développement de Scanpay Technologies SAS, notamment lors de la mise en production des services, de l'obtention de certifications ou de l'évolution de la réglementation applicable.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

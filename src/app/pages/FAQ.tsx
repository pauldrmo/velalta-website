import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Le produit",
    faqs: [
      { q: "Qu'est-ce que Velalta ?", a: "Velalta est une solution de self-checkout mobile qui permet aux clients de scanner leurs produits en rayon, payer dans l'application et sortir du magasin sans passer par une caisse traditionnelle." },
      { q: "Est-ce que ça fonctionne sur tous les smartphones ?", a: "Oui. Velalta est compatible avec tous les smartphones iOS (iPhone 11 et +) et Android (Android 8.0 et +) disposant d'un appareil photo." },
      { q: "Et si un produit ne scanne pas ?", a: "L'application permet d'ajouter manuellement un produit via sa recherche ou son code-barres saisi. Un assistant vous guide à chaque étape." },
      { q: "Et si je perds le réseau ?", a: "L'application fonctionne en mode hors ligne. Vos scans sont enregistrés localement et synchronisés une fois la connexion rétablie." },
    ],
  },
  {
    title: "Paiements",
    faqs: [
      { q: "Quels modes de paiement sont acceptés ?", a: "Apple Pay, Google Pay, carte bancaire Visa/Mastercard et American Express. Le paiement en espèces n'est pas disponible via l'app Velalta." },
      { q: "Mes données de carte sont-elles sécurisées ?", a: "Oui. Velalta ne stocke jamais les numéros de carte bancaire. Seul un token sécurisé est conservé, via nos partenaires certifiés PCI-DSS." },
      { q: "Comment se passe le remboursement ?", a: "En cas de retour produit, le remboursement est effectué sur le mode de paiement d'origine dans un délai de 3 à 5 jours ouvrés." },
    ],
  },
  {
    title: "Pour les enseignes",
    faqs: [
      { q: "Combien de temps pour intégrer Velalta ?", a: "L'intégration complète prend entre 2 et 4 semaines selon la complexité de votre infrastructure existante. Notre équipe vous accompagne à chaque étape." },
      { q: "Velalta est-il compatible avec mon ERP ?", a: "Velalta dispose d'une API REST complète compatible avec Cegid, Sage, SAP Retail, Odoo et la plupart des systèmes POS du marché. Pour un ERP custom, nos équipes peuvent réaliser l'intégration." },
      { q: "Comment gérer les promotions ?", a: "Les promotions sont automatiquement appliquées lors du scan via la synchronisation de votre catalogue produits. Le client voit le prix réduit en temps réel." },
      { q: "Comment éviter la fraude ?", a: "Velalta combine plusieurs couches anti-fraude : contrôles aléatoires à la sortie, logs des transactions, détection comportementale par IA et vérifications croisées avec votre stock." },
    ],
  },
  {
    title: "Conformité & sécurité",
    faqs: [
      { q: "Velalta est-il conforme au RGPD ?", a: "Oui. Velalta collecte uniquement les données strictement nécessaires, conformément au principe de minimisation du RGPD. Aucune donnée personnelle n'est revendue." },
      { q: "Quelles données Velalta collecte-t-il ?", a: "Velalta collecte uniquement les données de transaction (produits, montant, horodatage), un email si le client crée un compte, et des données comportementales anonymisées." },
    ],
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="bg-[#050A14]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
            FAQ
          </div>
          <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
            Questions<br />
            <span className="gradient-text">fréquentes</span>
          </h1>
          <p className="text-[20px] text-white/55 leading-relaxed max-w-xl mx-auto">
            Tout ce que vous devez savoir sur Velalta. Vous ne trouvez pas votre réponse ? Contactez-nous.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 pb-28">
        <div className="max-w-[900px] mx-auto px-6 md:px-8">
          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <div key={ci}>
                <h2 className="text-[22px] font-black text-white mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center text-[13px] font-black text-blue-400">
                    {ci + 1}
                  </span>
                  {cat.title}
                </h2>
                <div className="space-y-2">
                  {cat.faqs.map((faq, fi) => {
                    const key = `${ci}-${fi}`;
                    return (
                      <div key={fi} className="glass-card rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenItem(openItem === key ? null : key)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                        >
                          <span className="text-[16px] font-semibold text-white/90 pr-4">{faq.q}</span>
                          <ChevronDown
                            className={`text-white/30 flex-shrink-0 transition-transform duration-200 ${openItem === key ? "rotate-180" : ""}`}
                            size={18}
                          />
                        </button>
                        {openItem === key && (
                          <div className="px-6 pb-5 border-t border-white/[0.06]">
                            <p className="text-[15px] text-white/55 leading-relaxed pt-4">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#040810]">
        <div className="max-w-[600px] mx-auto px-6 md:px-8 text-center">
          <div className="glass-card rounded-2xl p-8">
            <div className="text-[32px] font-black text-white mb-3">Vous avez une autre question ?</div>
            <p className="text-[16px] text-white/50 mb-6">Notre équipe répond sous 24h.</p>
            <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Velalta" className="btn-primary text-[15px] inline-block">
              <span>Nous contacter →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

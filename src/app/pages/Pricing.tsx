import { Link } from "react-router";
import { CheckCircle, Zap, ArrowRight, Shield, BarChart3, Database, Globe, Users, Clock } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-[#07070F]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
            Tarification
          </div>
          <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
            Simple,<br />
            <span className="gradient-text">transparent.</span>
          </h1>
          <p className="text-[20px] text-white/55 leading-relaxed max-w-2xl mx-auto">
            Aucun frais pour l'enseigne. La micro-surcharge de 0,8% est assumée par le client — dont 0,2% vous revient directement en revenu additionnel.
          </p>
        </div>
      </section>

      {/* Commission breakdown */}
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-8">
          <div className="relative gradient-border rounded-3xl p-8 md:p-12 glass-card">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full text-white text-[13px] font-bold uppercase tracking-wider">
                Offre unique · Tout inclus
              </div>
            </div>

            <div className="text-center mb-10 pt-4">
              <div className="text-[80px] font-black text-white leading-none mb-2">Gratuit</div>
              <div className="text-[18px] text-white/50">Zéro frais fixe, zéro abonnement</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {[
                { val: "0,8%", label: "Commission totale", sub: "par transaction client", color: "text-white", bg: "bg-white/[0.04]" },
                { val: "0,6%", label: "Pour Scanpay", sub: "coût de la plateforme", color: "text-blue-400", bg: "bg-blue-500/[0.08]" },
                { val: "0,2%", label: "Pour vous", sub: "revenu additionnel garanti", color: "text-emerald-400", bg: "bg-emerald-500/[0.08]" },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} rounded-2xl p-6 text-center border border-white/[0.06]`}>
                  <div className={`text-[48px] font-black ${item.color} mb-2`}>{item.val}</div>
                  <div className="text-[14px] font-semibold text-white/70">{item.label}</div>
                  <div className="text-[12px] text-white/35 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Zap className="text-emerald-400" size={18} />
                <span className="text-emerald-400 text-[15px] font-semibold">
                  Le commerçant génère +0,2% de revenus sur chaque vente
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "Magasins illimités",
                "Dashboard analytics complet",
                "Support prioritaire",
                "Intégrations ERP/POS incluses",
                "Mises à jour automatiques",
                "Formation et onboarding",
                "API complète documentée",
                "Multi-utilisateurs",
                "Exports comptables",
                "SLA 99,9% garanti",
                "Gestion anti-fraude IA",
                "Conformité RGPD & PCI-DSS",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-blue-400" />
                  </div>
                  <span className="text-[14px] text-white/65">{feature}</span>
                </div>
              ))}
            </div>

            <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-primary text-[16px] block text-center w-full py-4">
              <span>Commencer maintenant — Gratuit →</span>
            </a>
            <p className="text-center text-[12px] text-white/25 mt-4">
              Aucun engagement · Résiliation à tout moment · Réponse sous 24h
            </p>
          </div>
        </div>
      </section>

      {/* Example calculation */}
      <section className="py-20 bg-[#0C0C14]">
        <div className="max-w-[900px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-black text-white mb-4">Simulez vos revenus</h2>
            <p className="text-[16px] text-white/50">Avec 0,2% de commission sur chaque transaction, vos revenus additionnels s'accumulent rapidement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: "Petit magasin", transactions: "100 transactions via Scanpay / jour", revenu: "+9 €/jour", annuel: "+3 285 €/an" },
              { label: "Supermarché moyen", transactions: "300 transactions via Scanpay / jour", revenu: "+27 €/jour", annuel: "+9 855 €/an", featured: true },
              { label: "Grande surface", transactions: "700 transactions via Scanpay / jour", revenu: "+63 €/jour", annuel: "+22 995 €/an" },
            ].map((ex, i) => (
              <div key={i} className={`glass-card rounded-2xl p-6 ${ex.featured ? "border border-blue-500/30 bg-blue-500/[0.05]" : ""}`}>
                {ex.featured && (
                  <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-3">Plus populaire</div>
                )}
                <div className="text-[16px] font-bold text-white mb-4">{ex.label}</div>
                <div className="space-y-2.5 text-[14px]">
                  <div className="flex justify-between text-white/50">
                    <span>Volume</span>
                    <span className="text-white/80">{ex.transactions}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Panier moyen</span>
                    <span className="text-white/80">45 €</span>
                  </div>
                  <div className="border-t border-white/[0.07] pt-2.5">
                    <div className="flex justify-between">
                      <span className="text-white/50">Revenu quotidien</span>
                      <span className="text-emerald-400 font-bold">{ex.revenu}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-white/50">Revenu annuel</span>
                      <span className="text-emerald-400 font-black text-[16px]">{ex.annuel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[12px] text-white/25 mt-6">* Estimations basées sur un panier moyen de 45 € et une commission de 0,2 % sur les transactions réalisées via Scanpay. Pour plus d'informations, contactez notre équipe commerciale.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-black text-white mb-4">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Y a-t-il des frais cachés ?", a: "Non, absolument aucun. L'enseigne ne paie rien — ni à l'installation, ni en abonnement, ni par transaction. C'est le client qui s'acquitte d'une micro-surcharge de 0,8%, dont 0,2% est reversé directement à l'enseigne en revenu additionnel." },
              { q: "Comment fonctionne le reversement du 0,2% ?", a: "Le 0,2% généré sur chaque transaction est comptabilisé en temps réel dans votre dashboard. Un relevé mensuel détaillé vous est envoyé et le montant est crédité automatiquement." },
              { q: "Puis-je négocier une meilleure part de commission ?", a: "Oui, pour les grandes enseignes avec des volumes importants, nous pouvons étudier une répartition personnalisée. Contactez notre équipe commerciale." },
              { q: "Y a-t-il un engagement minimum ?", a: "Non, aucun. Vous pouvez tester Scanpay sans engagement et l'arrêter à tout moment." },
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="text-[16px] font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0C0C14]">
        <div className="max-w-[600px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[40px] font-black text-white mb-5">Commencez gratuitement</h2>
          <p className="text-[18px] text-white/50 mb-8">Aucun engagement. Aucun frais fixe. Intégrez Scanpay gratuitement et générez des revenus sur chaque transaction client.</p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-primary text-[16px] inline-block">
            <span>Demander une proposition →</span>
          </a>
        </div>
      </section>
    </div>
  );
}

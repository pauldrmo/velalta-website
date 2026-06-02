import { Link } from "react-router";
import { TrendingUp, Globe, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, DollarSign, Target, Layers, Rocket } from "lucide-react";

export default function ForInvestors() {
  return (
    <div className="bg-[#050A14]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/12 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
              Investisseurs
            </div>
            <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
              Le retail de demain<br />
              <span className="gradient-text">se paie mobile.</span>
            </h1>
            <p className="text-[20px] text-white/55 leading-relaxed max-w-2xl mb-10">
              Velalta s'attaque à un marché de 3 000 Md€ avec un modèle économique scalable, un premier-mover advantage et une équipe technique expérimentée.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary text-[15px]">
                <span>Demander un pitch deck</span>
              </Link>
              <Link to="/contact" className="btn-secondary text-[15px] inline-flex items-center gap-2">
                Prendre contact
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market size */}
      <section className="py-20 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "3 000 Md€", label: "Retail EU annuel", sub: "Marché total (TAM)" },
              { val: "50 Md€", label: "Self-checkout mobile", sub: "Marché adressable (SAM)" },
              { val: "85 M€", label: "Objectif Année 3", sub: "Volume transactions (SOM)" },
              { val: "0,6%", label: "Commission Velalta", sub: "Par transaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[32px] md:text-[40px] font-black gradient-text mb-1">{stat.val}</div>
                <div className="text-[15px] font-semibold text-white mb-0.5">{stat.label}</div>
                <div className="text-[12px] text-white/35">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-6">
                L'opportunité
              </div>
              <h2 className="text-[40px] md:text-[48px] font-black text-white leading-tight mb-6">
                Une fenêtre de marché<br />historique
              </h2>
              <p className="text-[16px] text-white/55 leading-relaxed mb-8">
                Le self-checkout représente moins de 5% des transactions en France aujourd'hui. Les solutions existantes (bornes physiques) coûtent 20 à 40k€ par installation, sont peu fiables et frustrantes. Velalta propose un modèle 100% logiciel, sans investissement matériel pour les enseignes.
              </p>
              <div className="space-y-4">
                {[
                  { title: "First-mover advantage", desc: "Peu de concurrents directs sur le mobile self-checkout en France." },
                  { title: "Switching costs élevés", desc: "Une fois intégré dans l'ERP d'une enseigne, Velalta devient critique." },
                  { title: "Effet réseau", desc: "Plus d'enseignes partenaires = plus d'attractivité pour les clients." },
                  { title: "Modèle asset-light", desc: "100% logiciel, coûts marginaux proches de zéro à l'échelle." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 glass-card rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-violet-400" />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-white">{item.title}</div>
                      <div className="text-[13px] text-white/45 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Revenue model */}
              <div className="glass-card rounded-2xl p-6">
                <div className="text-[13px] font-semibold text-white/40 uppercase tracking-wide mb-4">Modèle économique</div>
                <div className="space-y-3">
                  {[
                    { label: "Commission totale par transaction", val: "0,8%", color: "text-white" },
                    { label: "Part Velalta", val: "0,6%", color: "text-blue-400" },
                    { label: "Part commerçant (incentive)", val: "0,2%", color: "text-emerald-400" },
                    { label: "Abonnement", val: "0 €", color: "text-white/50" },
                    { label: "Frais d'intégration", val: "0 €", color: "text-white/50" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                      <span className="text-[14px] text-white/55">{item.label}</span>
                      <span className={`text-[16px] font-bold ${item.color}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projection */}
              <div className="glass-card rounded-2xl p-6">
                <div className="text-[13px] font-semibold text-white/40 uppercase tracking-wide mb-4">Projections de revenus</div>
                <div className="space-y-3">
                  {[
                    { year: "Année 1", stores: "10 magasins", rev: "0,5 M€", transactions: "85 K" },
                    { year: "Année 2", stores: "50 magasins", rev: "3 M€", transactions: "500 K" },
                    { year: "Année 3", stores: "200 magasins", rev: "14 M€", transactions: "2,3 M" },
                  ].map((p, i) => (
                    <div key={i} className={`p-4 rounded-xl ${i === 2 ? "bg-gradient-to-r from-blue-600/15 to-violet-600/15 border border-blue-500/20" : "bg-white/[0.03]"}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[14px] font-bold text-white">{p.year}</span>
                        <span className={`text-[16px] font-black gradient-text`}>{p.rev}</span>
                      </div>
                      <div className="flex gap-4 text-[12px] text-white/40">
                        <span>{p.stores}</span>
                        <span>·</span>
                        <span>{p.transactions} transactions/an</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-white/25 mt-3">* Projections indicatives basées sur une croissance conservatrice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-28 bg-[#040810]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] font-black text-white tracking-tight mb-4">
              Pourquoi maintenant
            </h2>
            <p className="text-[18px] text-white/50 max-w-2xl mx-auto">
              Quatre facteurs convergent pour créer une fenêtre d'opportunité unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Rocket, num: "01",
                title: "Post-COVID, les comportements ont changé",
                desc: "90% des Français possèdent un smartphone. Après la pandémie, le sans-contact est devenu la norme. Le marché est prêt.",
                color: "from-blue-600/15 to-cyan-600/10",
              },
              {
                icon: TrendingUp, num: "02",
                title: "Pression sur les marges retail",
                desc: "L'inflation et la hausse des coûts de l'énergie poussent les enseignes à réduire leurs coûts opérationnels. La caisse est la cible évidente.",
                color: "from-violet-600/15 to-purple-600/10",
              },
              {
                icon: Globe, num: "03",
                title: "Réglementation favorable",
                desc: "Le cadre RGPD européen favorise les acteurs locaux. Velalta est conçu conformément aux exigences réglementaires dès le départ.",
                color: "from-emerald-600/15 to-teal-600/10",
              },
              {
                icon: Zap, num: "04",
                title: "Technologie mature",
                desc: "Les APIs de paiement (Stripe, Adyen), le scan mobile et les systèmes ERP modernes permettent une intégration rapide et fiable.",
                color: "from-orange-600/15 to-amber-600/10",
              },
            ].map((item, i) => (
              <div key={i} className={`glass-card glass-card-hover rounded-2xl p-8 bg-gradient-to-br ${item.color}`}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white/70" size={22} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-white/30 uppercase tracking-widest mb-2">{item.num}</div>
                    <h3 className="text-[20px] font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment thesis */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="relative gradient-border rounded-3xl p-8 md:p-12 glass-card text-center">
            <h2 className="text-[40px] md:text-[48px] font-black text-white mb-6">
              Investir dans Velalta
            </h2>
            <p className="text-[18px] text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed">
              Nous cherchons des partenaires investisseurs alignés avec notre vision long terme pour financer notre phase d'accélération commerciale et le développement de nouvelles fonctionnalités.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Target, title: "Seed round", desc: "Phase de levée de fonds initiale pour accélérer le déploiement en France." },
                { icon: BarChart3, title: "Traction pilote", desc: "Premières enseignes partenaires validant le modèle économique en conditions réelles." },
                { icon: Globe, title: "Expansion EU", desc: "Feuille de route vers les marchés belge, suisse et ibérique à 24 mois." },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="text-blue-400" size={22} />
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary text-[16px] inline-block">
              <span>Demander le pitch deck complet →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router";
import { CheckCircle, BarChart3, Store, TrendingUp, Clock, Users, ArrowRight, Shield, Zap, Database, Layers, ChevronRight } from "lucide-react";

export default function ForRetailers() {
  return (
    <div className="bg-[#07070F]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
              Pour les enseignes
            </div>
            <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
              Réduisez vos coûts.<br />
              <span className="gradient-text">Augmentez vos revenus.</span>
            </h1>
            <p className="text-[20px] text-white/55 leading-relaxed max-w-2xl mb-10">
              Scanpay permet à vos enseignes de transformer les caisses en un avantage compétitif. Moins de personnel, plus de fluidité, plus de revenus.
            </p>
            <div className="flex gap-4">
              <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-primary text-[15px]">
                <span>Demander une démo</span>
              </a>
              <Link to="/tarifs" className="btn-secondary text-[15px] inline-flex items-center gap-2">
                Voir les tarifs
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="py-20 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "↓", label: "Coût de caisse", desc: "Réduction des coûts liés aux caisses traditionnelles" },
              { val: "+0,2%", label: "Revenu additionnel", desc: "Par transaction" },
              { val: "2-4 sem", label: "Intégration", desc: "Délai de déploiement" },
              { val: "99,9%", label: "Uptime SLA", desc: "Garanti contractuellement" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[42px] font-black gradient-text mb-1">{stat.val}</div>
                <div className="text-[15px] font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-[13px] text-white/40">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[40px] md:text-[52px] font-black text-white tracking-tight mb-4">
              Pourquoi les enseignes<br />choisissent Scanpay
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp, title: "Revenu additionnel",
                desc: "0,2% de commission sur chaque transaction client va directement dans votre poche. Plus vos clients achètent, plus vous gagnez.",
                color: "from-emerald-600/15 to-teal-600/10", iconColor: "text-emerald-400",
              },
              {
                icon: Clock, title: "Fluidité maximale",
                desc: "Éliminez les files d'attente aux heures de pointe. Vos clients passent en moins de 30 secondes, même le samedi après-midi.",
                color: "from-blue-600/15 to-cyan-600/10", iconColor: "text-blue-400",
              },
              {
                icon: Users, title: "Optimisation RH",
                desc: "Réaffectez votre personnel de caisse vers des missions à plus haute valeur : conseil, rayonnage, service client.",
                color: "from-blue-600/15 to-blue-800/10", iconColor: "text-blue-400",
              },
              {
                icon: BarChart3, title: "Analytics avancés",
                desc: "Dashboard en temps réel : flux clients, comportements d'achat, heures de pointe, alertes automatiques.",
                color: "from-orange-600/15 to-amber-600/10", iconColor: "text-orange-400",
              },
              {
                icon: Database, title: "Intégration native",
                desc: "API REST complète. Compatible avec Cegid, Sage, SAP Retail, et les principaux ERP/POS du marché.",
                color: "from-pink-600/15 to-rose-600/10", iconColor: "text-pink-400",
              },
              {
                icon: Shield, title: "Zéro risque fraude",
                desc: "Contrôles aléatoires à la sortie, IA anti-fraude, logs complets. Niveau de sécurité équivalent aux caisses traditionnelles.",
                color: "from-cyan-600/15 to-blue-600/10", iconColor: "text-cyan-400",
              },
            ].map((item, i) => (
              <div key={i} className={`glass-card glass-card-hover rounded-2xl p-7 bg-gradient-to-br ${item.color}`}>
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center mb-5">
                  <item.icon className={item.iconColor} size={22} />
                </div>
                <h3 className="text-[20px] font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="py-28 bg-[#0C0C14]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-6">
                Dashboard Scanpay
              </div>
              <h2 className="text-[40px] md:text-[48px] font-black text-white leading-tight mb-6">
                Pilotez vos performances<br />en temps réel
              </h2>
              <p className="text-[16px] text-white/55 leading-relaxed mb-8">
                Votre dashboard Scanpay centralise toutes les métriques critiques de vos points de vente. Alertes en temps réel, rapports automatiques, export comptable.
              </p>
              <div className="space-y-3">
                {[
                  "Métriques live par magasin",
                  "Historique et tendances",
                  "Alertes personnalisées",
                  "Export CSV / intégration comptable",
                  "Gestion multi-utilisateurs",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <CheckCircle size={12} className="text-blue-400" />
                    </div>
                    <span className="text-[14px] text-white/65">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock dashboard */}
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] text-white/40 font-semibold uppercase tracking-wide">Dashboard</div>
                  <div className="text-[18px] font-bold text-white">Leclerc — Paris Opéra</div>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[12px] font-semibold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  En direct
                </div>
              </div>

              {/* Chart mock */}
              <div className="bg-white/[0.03] rounded-xl p-4">
                <div className="flex items-end gap-1 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/40 to-blue-600/30" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-white/25">
                  <span>08h</span><span>10h</span><span>12h</span><span>14h</span><span>16h</span><span>18h</span>
                </div>
              </div>

              {[
                { label: "Transactions (aujourd'hui)", val: "1 247", sub: "+18% vs hier", positive: true },
                { label: "CA généré", val: "21 840 €", sub: "+12%", positive: true },
                { label: "Revenu Scanpay/magasin", val: "+43,68 €", sub: "ce jour", positive: true },
                { label: "Temps moyen checkout", val: "27 sec", sub: "-8 sec", positive: true },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
                  <span className="text-[13px] text-white/50">{m.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold text-white">{m.val}</span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${m.positive ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`}>
                      {m.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] font-black text-white tracking-tight mb-4">
              Intégration simplifiée
            </h2>
            <p className="text-[18px] text-white/50 max-w-2xl mx-auto">
              Notre équipe technique vous accompagne à chaque étape du déploiement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Kick-off", desc: "Analyse de votre infrastructure, définition du périmètre et du calendrier.", icon: Layers },
              { num: "02", title: "Connexion API", desc: "Intégration avec votre ERP/POS existant via notre API REST documentée.", icon: Database },
              { num: "03", title: "Tests & pilote", desc: "Phase pilote sur un ou plusieurs magasins avec suivi temps réel.", icon: Zap },
              { num: "04", title: "Déploiement", desc: "Lancement progressif, formation équipes, support dédié 24/7.", icon: Store },
            ].map((step, i) => (
              <div key={i} className="relative glass-card glass-card-hover rounded-2xl p-6">
                <div className="text-[48px] font-black text-white/8 leading-none mb-4">{step.num}</div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <step.icon className="text-blue-400" size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[13px] text-white/45 leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ChevronRight size={16} className="text-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0C0C14]">
        <div className="relative max-w-[800px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[48px] font-black text-white tracking-tight mb-6">
            Rejoignez les enseignes<br />pilotes Scanpay
          </h2>
          <p className="text-[18px] text-white/50 mb-10 max-w-lg mx-auto">
            Accédez à l'offre pilote et transformez l'expérience d'achat de vos clients dès aujourd'hui.
          </p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-primary text-[16px] inline-block">
            <span>Demander une démo gratuite →</span>
          </a>
        </div>
      </section>
    </div>
  );
}

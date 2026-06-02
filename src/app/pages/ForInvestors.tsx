import { Link } from "react-router";
import { TrendingUp, Globe, Zap, BarChart3, CheckCircle, ArrowRight, Target, Rocket, Mail } from "lucide-react";

export default function ForInvestors() {
  return (
    <div className="bg-[#07070F]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
              Investisseurs
            </div>
            <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
              Une opportunité<br />
              <span className="gradient-text">de rupture.</span>
            </h1>
            <p className="text-[20px] text-white/55 leading-relaxed max-w-2xl mb-10">
              Velalta s'attaque à un marché de 3 000 Md€ encore dominé par des caisses physiques coûteuses et obsolètes. Le moment de lancer la révolution mobile du retail, c'est maintenant.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:pauldormeau@icloud.com?subject=Investissement%20Velalta%20%E2%80%94%20Pitch%20Deck&body=Bonjour%2C%0A%0AJe%20souhaite%20recevoir%20le%20pitch%20deck%20Velalta.%0A%0ACordialement%2C" className="btn-primary text-[15px]">
                <span>Demander le pitch deck →</span>
              </a>
              <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Investisseur%20%E2%80%94%20Velalta" className="btn-secondary text-[15px] inline-flex items-center gap-2">
                Prendre contact
                <ArrowRight size={15} />
              </a>
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
              { val: "<5%", label: "Pénétration actuelle", sub: "Du self-checkout en France" },
              { val: "0,6%", label: "Commission Velalta", sub: "Par transaction — modèle SaaS" },
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
                Le self-checkout représente moins de 5% des transactions en France. Les solutions existantes — bornes physiques à 20-40 k€ par installation — sont coûteuses, peu fiables et frustrantes. Velalta propose un modèle 100% logiciel, sans investissement matériel, déployable en quelques semaines.
              </p>
              <div className="space-y-4">
                {[
                  { title: "First-mover advantage", desc: "Aucun acteur dominant sur le mobile self-checkout en France : la place est à prendre." },
                  { title: "Modèle asset-light", desc: "100% logiciel, zéro infrastructure physique. Les coûts marginaux tendent vers zéro à l'échelle." },
                  { title: "Switching costs élevés", desc: "Une fois intégré dans l'ERP d'une enseigne, Velalta devient une infrastructure critique." },
                  { title: "Effet réseau", desc: "Plus d'enseignes partenaires = plus d'attractivité pour les clients finaux, et vice versa." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 glass-card rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-blue-400" />
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
                    { label: "Part Velalta (revenus SaaS)", val: "0,6%", color: "text-blue-400" },
                    { label: "Part commerçant (incentive adoption)", val: "0,2%", color: "text-emerald-400" },
                    { label: "Abonnement ou frais fixes", val: "0 €", color: "text-white/50" },
                    { label: "Frais d'intégration", val: "0 €", color: "text-white/50" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                      <span className="text-[14px] text-white/55">{item.label}</span>
                      <span className={`text-[16px] font-bold ${item.color}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use of funds */}
              <div className="glass-card rounded-2xl p-6">
                <div className="text-[13px] font-semibold text-white/40 uppercase tracking-wide mb-4">Utilisation des fonds levés</div>
                <div className="space-y-4">
                  {[
                    { label: "Développement produit & tech", pct: "40%", w: "w-[40%]" },
                    { label: "Commercial & déploiement pilotes", pct: "30%", w: "w-[30%]" },
                    { label: "Infrastructure & sécurité", pct: "20%", w: "w-[20%]" },
                    { label: "Marketing & acquisition enseignes", pct: "10%", w: "w-[10%]" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[13px] text-white/60">{item.label}</span>
                        <span className="text-[13px] font-bold text-white">{item.pct}</span>
                      </div>
                      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className={`h-full ${item.w} bg-gradient-to-r from-blue-500 to-blue-400 rounded-full`} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-white/25 mt-4">Détail complet disponible dans le pitch deck — contactez-nous pour y accéder.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-28 bg-[#0C0C14]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] font-black text-white tracking-tight mb-4">
              Pourquoi maintenant
            </h2>
            <p className="text-[18px] text-white/50 max-w-2xl mx-auto">
              Quatre forces convergent pour créer une fenêtre d'entrée unique sur ce marché.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Rocket, num: "01",
                title: "Les comportements ont définitivement changé",
                desc: "90% des Français possèdent un smartphone. Le sans-contact est devenu la norme post-COVID. Le marché est culturellement prêt pour le self-checkout mobile.",
                color: "from-blue-600/15 to-cyan-600/10",
              },
              {
                icon: TrendingUp, num: "02",
                title: "Pression massive sur les marges retail",
                desc: "L'inflation et la hausse des charges poussent les enseignes à réduire leurs coûts opérationnels en urgence. La caisse traditionnelle est la cible évidente.",
                color: "from-blue-700/15 to-blue-600/10",
              },
              {
                icon: Globe, num: "03",
                title: "Cadre réglementaire favorable",
                desc: "Le RGPD européen avantage les acteurs locaux face aux géants américains. Velalta est conçu dès l'origine dans le respect de la réglementation européenne.",
                color: "from-slate-600/15 to-blue-800/10",
              },
              {
                icon: Zap, num: "04",
                title: "Technologie enfin mature",
                desc: "APIs de paiement (Stripe, Adyen), scan mobile précis, ERP modernes ouverts : les briques technologiques pour construire Velalta à grande échelle existent et sont fiables.",
                color: "from-blue-600/12 to-slate-600/10",
              },
            ].map((item, i) => (
              <div key={i} className={`glass-card glass-card-hover rounded-2xl p-8 bg-gradient-to-br ${item.color}`}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-blue-400" size={22} />
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
          <div className="relative gradient-border rounded-3xl p-8 md:p-12 glass-card">
            <div className="text-center mb-12">
              <h2 className="text-[40px] md:text-[52px] font-black text-white mb-5">
                Investir dans Velalta,<br />c'est financer un lancement.
              </h2>
              <p className="text-[18px] text-white/55 max-w-2xl mx-auto leading-relaxed">
                Nous recherchons des partenaires investisseurs pour financer le lancement commercial de Velalta : premiers déploiements pilotes en France, développement du produit et structuration des premières équipes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Target,
                  title: "Seed / Pré-seed",
                  desc: "Financer les premiers magasins pilotes, valider le product-market fit et construire les fondations commerciales de Velalta en France.",
                },
                {
                  icon: BarChart3,
                  title: "Vision long terme",
                  desc: "Construire la référence européenne du self-checkout mobile. Un positionnement de rupture sur un marché vierge, avec un modèle scalable dès le premier euro.",
                },
                {
                  icon: Globe,
                  title: "Expansion EU",
                  desc: "Feuille de route vers les marchés belge, suisse et ibérique dans les 24 mois suivant le lancement commercial en France.",
                },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="text-blue-400" size={22} />
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA block */}
            <div className="max-w-xl mx-auto text-center">
              <p className="text-[15px] text-white/40 mb-6">
                Les informations financières détaillées, les termes d'investissement et les données de marché complètes sont disponibles exclusivement dans notre pitch deck confidentiel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:pauldormeau@icloud.com?subject=Investissement%20Velalta%20%E2%80%94%20Pitch%20Deck&body=Bonjour%2C%0A%0AJe%20souhaite%20recevoir%20le%20pitch%20deck%20Velalta.%0A%0ACordialement%2C" className="btn-primary text-[15px] inline-block">
                  <span>Demander le pitch deck complet →</span>
                </a>
                <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Investisseur%20%E2%80%94%20Velalta" className="btn-secondary text-[15px] inline-flex items-center justify-center gap-2">
                  <Mail size={15} />
                  Échange informel
                </a>
              </div>
              <p className="text-[12px] text-white/20 mt-4">NDA disponible sur demande · Réponse sous 48h</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

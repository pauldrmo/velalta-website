import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import {
  QrCode, Scan, CreditCard, Receipt, Shield, Database, BarChart3,
  CheckCircle, Smartphone, Store, Users, TrendingUp, Clock, Zap,
  ArrowRight, ChevronDown, Star, ExternalLink, Lock, Globe,
  Activity, Package, Bell, LayoutDashboard,
} from "lucide-react";

// Phone mockup component
function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="absolute inset-0 -m-8 bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-cyan-600/15 rounded-full blur-3xl" />

      {/* Phone frame */}
      <div className="relative w-[280px] mx-auto">
        <svg viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
          {/* Phone body */}
          <rect x="2" y="2" width="276" height="556" rx="38" fill="#0D1B2E" stroke="url(#phone-border)" strokeWidth="2" />
          {/* Dynamic island */}
          <rect x="95" y="16" width="90" height="24" rx="12" fill="#050A14" />
          {/* Screen area */}
          <rect x="12" y="52" width="256" height="496" rx="28" fill="#060E1A" />
          {/* Status bar */}
          <text x="24" y="80" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">9:41</text>
          <text x="208" y="80" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="Inter, sans-serif">▮▮▮ ◆</text>

          {/* App header */}
          <rect x="12" y="92" width="256" height="52" fill="url(#app-header-grad)" />
          <text x="28" y="122" fill="white" fontSize="16" fontFamily="Inter, sans-serif" fontWeight="700">Velalta</text>
          <text x="28" y="136" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="Inter, sans-serif">Mon panier • Leclerc Paris 15</text>
          {/* QR icon */}
          <rect x="226" y="102" width="32" height="32" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="234" y="122" fill="white" fontSize="14">⊞</text>

          {/* Product list header */}
          <text x="28" y="168" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="1">4 ARTICLES</text>

          {/* Product items */}
          {[
            { name: "Yaourt nature x2", brand: "Danone", price: "2,40 €", y: 185 },
            { name: "Pain de mie complet", brand: "Harry's", price: "1,85 €", y: 227 },
            { name: "Jus d'orange 1L", brand: "Tropicana", price: "3,20 €", y: 269 },
            { name: "Fromage Saint-Nectaire", brand: "Reflets de France", price: "4,50 €", y: 311 },
          ].map((item, i) => (
            <g key={i}>
              <rect x="20" y={item.y} width="240" height="34" rx="8" fill="rgba(255,255,255,0.04)" />
              <circle cx="40" cy={item.y + 17} r="10" fill="url(#item-grad)" fillOpacity="0.3" />
              <text x="57" y={item.y + 13} fill="rgba(255,255,255,0.9)" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">{item.name}</text>
              <text x="57" y={item.y + 24} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter, sans-serif">{item.brand}</text>
              <text x="216" y={item.y + 19} fill="rgba(255,255,255,0.9)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700">{item.price}</text>
            </g>
          ))}

          {/* Divider */}
          <line x1="20" y1="358" x2="260" y2="358" stroke="rgba(255,255,255,0.07)" />

          {/* Total */}
          <text x="28" y="382" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="Inter, sans-serif">Sous-total</text>
          <text x="196" y="382" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">11,95 €</text>
          <text x="28" y="404" fill="white" fontSize="15" fontFamily="Inter, sans-serif" fontWeight="700">Total</text>
          <text x="180" y="404" fill="white" fontSize="18" fontFamily="Inter, sans-serif" fontWeight="800">11,95 €</text>

          {/* Security badge */}
          <rect x="62" y="415" width="156" height="22" rx="11" fill="rgba(16,185,129,0.15)" />
          <circle cx="76" cy="426" r="5" fill="#10B981" />
          <text x="86" y="430" fill="#34D399" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Transaction sécurisée</text>

          {/* Pay button */}
          <rect x="20" y="448" width="240" height="46" rx="14" fill="url(#pay-btn-grad)" />
          <text x="110" y="476" fill="white" fontSize="15" fontFamily="Inter, sans-serif" fontWeight="700">Payer maintenant</text>

          {/* Apple Pay / Card icons */}
          <text x="55" y="514" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Inter, sans-serif">Apple Pay</text>
          <text x="122" y="514" fill="rgba(255,255,255,0.15)" fontSize="10">·</text>
          <text x="130" y="514" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Inter, sans-serif">Google Pay</text>
          <text x="198" y="514" fill="rgba(255,255,255,0.15)" fontSize="10">·</text>
          <text x="206" y="514" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Inter, sans-serif">CB</text>

          {/* Home bar */}
          <rect x="100" y="534" width="80" height="4" rx="2" fill="rgba(255,255,255,0.3)" />

          <defs>
            <linearGradient id="phone-border" x1="0" y1="0" x2="280" y2="560" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="1" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="app-header-grad" x1="12" y1="92" x2="268" y2="144" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A6E" />
              <stop offset="1" stopColor="#2D1B6E" />
            </linearGradient>
            <linearGradient id="pay-btn-grad" x1="20" y1="448" x2="260" y2="494" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="item-grad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating cards */}
        <div className="absolute -left-14 top-20 glass-card rounded-xl p-3 shadow-xl min-w-[130px]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp size={12} className="text-emerald-400" />
            </div>
            <span className="text-white/50 text-[10px] font-medium">Revenus magasin</span>
          </div>
          <div className="text-white text-[18px] font-bold">+0,2%</div>
          <div className="text-emerald-400 text-[10px]">par transaction</div>
        </div>

        <div className="absolute -right-10 bottom-32 glass-card rounded-xl p-3 shadow-xl min-w-[120px]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Clock size={12} className="text-blue-400" />
            </div>
            <span className="text-white/50 text-[10px] font-medium">Temps checkout</span>
          </div>
          <div className="text-white text-[18px] font-bold">28 sec</div>
          <div className="text-blue-400 text-[10px]">vs 4 min en caisse</div>
        </div>
      </div>
    </div>
  );
}

// Animated counter
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"enseignes" | "clients" | "investisseurs">("enseignes");

  const faqs = [
    { q: "Et si un produit ne scanne pas ?", a: "L'application permet d'ajouter manuellement un produit via sa recherche ou son code-barres. Un assistant vous guide à chaque étape." },
    { q: "Comment se passe la sortie ?", a: "Présentez simplement le QR code de votre facture à la sortie. Un contrôle rapide peut être effectué aléatoirement." },
    { q: "C'est compatible avec quels paiements ?", a: "Apple Pay, Google Pay, carte bancaire et tous les moyens de paiement standards sont acceptés." },
    { q: "Comment éviter la fraude ?", a: "Contrôles aléatoires à la sortie, logs des transactions, détection des comportements suspects et vérifications par IA." },
    { q: "Combien de temps pour intégrer ?", a: "L'intégration complète prend entre 2 et 4 semaines selon la complexité de votre infrastructure existante." },
  ];

  return (
    <div className="bg-[#050A14]">

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] orb-animate" />
          <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[100px] orb-animate-delayed" />
          <div className="absolute top-3/4 left-1/3 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[80px] orb-animate-slow" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 pt-24 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 badge-pulse">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-blue-300 text-[13px] font-semibold">Offre pilote disponible</span>
                <span className="text-blue-400/60 text-[13px]">→</span>
                <span className="text-blue-300/80 text-[13px]">Rejoignez les premiers partenaires</span>
              </div>

              <h1 className="text-[56px] md:text-[68px] font-black leading-[0.98] tracking-[-0.03em] text-white mb-8">
                Réinventez<br />
                <span className="gradient-text">l'expérience</span><br />
                d'achat
              </h1>

              <p className="text-[18px] md:text-[20px] text-white/55 leading-relaxed mb-10 max-w-lg">
                Velalta transforme le passage en caisse en une expérience mobile ultra-fluide. Scan, paie, et pars — zéro file d'attente, zéro friction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/contact" className="btn-primary text-[15px]">
                  <span>Demander une démo gratuite</span>
                </Link>
                <Link to="/produit" className="btn-secondary text-[15px] inline-flex items-center justify-center gap-2">
                  Découvrir le produit
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Shield, label: "PCI-DSS" },
                  { icon: CheckCircle, label: "RGPD conforme" },
                  { icon: Smartphone, label: "iOS & Android" },
                  { icon: Lock, label: "Chiffrement E2E" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-white/40 text-[13px]">
                    <item.icon size={14} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Phone */}
            <div className="relative flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[12px]">
          <span>Découvrir</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────────────── */}
      <section className="border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { display: "99,9%", label: "Disponibilité garantie", icon: Activity },
              { display: "28 sec", label: "Checkout moyen", icon: Clock },
              { display: "0,8%", label: "Commission totale", icon: CreditCard },
              { display: "100+", label: "Magasins potentiels", icon: Store },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left md:px-8 md:border-l border-white/[0.08] first:border-0">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <stat.icon size={16} className="text-blue-400/70" />
                </div>
                <div className="text-[36px] md:text-[44px] font-black text-white leading-none mb-1">
                  {stat.display}
                </div>
                <div className="text-[14px] text-white/45">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-6">
              Le problème
            </div>
            <h2 className="text-[40px] md:text-[52px] font-black text-white leading-tight tracking-tight mb-6">
              Les caisses traditionnelles<br />coûtent cher à tout le monde
            </h2>
            <p className="text-[18px] text-white/50 max-w-2xl mx-auto">
              Files d'attente, coûts de personnel, abandon de panier. Le retail moderne a besoin d'une révolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Clock, color: "from-red-500/20 to-orange-500/10", border: "border-red-500/20", iconColor: "text-red-400", title: "4 minutes", sub: "Temps moyen en caisse traditionnelle", desc: "Les clients perdent en moyenne 4 minutes à faire la queue — 40 min par semaine." },
              { icon: Users, color: "from-orange-500/20 to-yellow-500/10", border: "border-orange-500/20", iconColor: "text-orange-400", title: "30% du coût", sub: "Des coûts opérationnels en caisse", desc: "Le personnel de caisse représente l'un des postes de coûts les plus importants." },
              { icon: TrendingUp, color: "from-yellow-500/20 to-amber-500/10", border: "border-yellow-500/20", iconColor: "text-yellow-400", title: "15% perdu", sub: "En abandons de panier", desc: "1 client sur 6 abandonne ses achats face aux files d'attente." },
            ].map((item, i) => (
              <div key={i} className={`glass-card glass-card-hover rounded-2xl p-6 border ${item.border} bg-gradient-to-br ${item.color}`}>
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center mb-5">
                  <item.icon className={item.iconColor} size={22} />
                </div>
                <div className={`text-[28px] font-black ${item.iconColor} mb-1`}>{item.title}</div>
                <div className="text-[13px] font-semibold text-white/50 mb-3 uppercase tracking-wide">{item.sub}</div>
                <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution card */}
          <div className="relative gradient-border rounded-3xl p-8 md:p-12 glass-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/25 mb-6">
                  <CheckCircle size={15} className="text-emerald-400" />
                  <span className="text-emerald-400 text-[13px] font-semibold">La solution Velalta</span>
                </div>
                <h3 className="text-[36px] font-black text-white leading-tight mb-5">
                  Self-checkout mobile.<br />Sans friction.
                </h3>
                <p className="text-[16px] text-white/55 leading-relaxed mb-8">
                  Vos clients scannent les produits directement en rayon, paient dans l'app et repartent avec leur QR code de facture. Zéro file d'attente, satisfaction maximale, revenus additionnels.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "-87%", label: "Temps checkout" },
                    { val: "+0,2%", label: "Revenu commerçant" },
                    { val: "100%", label: "Satisfaction client" },
                    { val: "0 €", label: "Abonnement" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/[0.04] rounded-xl p-4">
                      <div className="text-[24px] font-black gradient-text">{s.val}</div>
                      <div className="text-[12px] text-white/45 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: QrCode, title: "QR d'entrée magasin", desc: "Le client scanne le QR à l'entrée pour ouvrir sa session." },
                  { icon: Scan, title: "Scan produits en rayon", desc: "Ajout direct au panier mobile à chaque produit scanné." },
                  { icon: CreditCard, title: "Paiement in-app", desc: "Apple Pay, Google Pay, CB — paiement sécurisé instantané." },
                  { icon: Receipt, title: "QR facture à la sortie", desc: "Contrôle rapide et traçabilité totale pour le magasin." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <step.icon className="text-blue-400" size={18} />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-white">{step.title}</div>
                      <div className="text-[13px] text-white/45 mt-0.5">{step.desc}</div>
                    </div>
                    <div className="ml-auto text-white/20 text-[12px] font-bold self-center">{i + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOR WHO — TABS ────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-transparent to-[#040810]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-6">
              Pour qui
            </div>
            <h2 className="text-[40px] md:text-[52px] font-black text-white tracking-tight mb-4">
              Une solution, trois publics
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex glass-card rounded-xl p-1">
              {(["enseignes", "clients", "investisseurs"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200 capitalize ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {tab === "enseignes" ? "Enseignes" : tab === "clients" ? "Clients" : "Investisseurs"}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          {activeTab === "enseignes" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center mb-6">
                  <Store className="text-blue-400" size={26} />
                </div>
                <h3 className="text-[36px] font-black text-white mb-5">Boostez vos revenus<br />tout en réduisant vos coûts</h3>
                <p className="text-[16px] text-white/55 leading-relaxed mb-8">
                  Velalta permet à vos enseignes de réduire drastiquement les coûts liés aux caisses tout en générant un revenu additionnel sur chaque transaction.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Réduction charge caisse de 40 à 70%",
                    "Revenu additionnel de 0,2% par transaction",
                    "Dashboard analytics en temps réel",
                    "Intégration ERP/POS en 2-4 semaines",
                    "Gestion anti-fraude par IA",
                    "Support dédié et onboarding guidé",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={12} className="text-blue-400" />
                      </div>
                      <span className="text-[14px] text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/pour-les-enseignes" className="btn-primary text-[14px] inline-block">
                  <span>En savoir plus →</span>
                </Link>
              </div>
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] text-white/50 font-semibold uppercase tracking-wide">Dashboard Velalta</span>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[12px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </div>
                </div>
                {[
                  { label: "Transactions aujourd'hui", value: "847", change: "+12%", positive: true },
                  { label: "CA journalier", value: "14 238 €", change: "+8%", positive: true },
                  { label: "Temps moyen checkout", value: "28 sec", change: "-65%", positive: true },
                  { label: "Taux satisfaction", value: "96,4%", change: "+3%", positive: true },
                ].map((metric, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
                    <span className="text-[13px] text-white/50">{metric.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[15px] font-bold text-white">{metric.value}</span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${metric.positive ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "clients" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center mb-6">
                  <Smartphone className="text-cyan-400" size={26} />
                </div>
                <h3 className="text-[36px] font-black text-white mb-5">Shopping fluide,<br />zéro file d'attente</h3>
                <p className="text-[16px] text-white/55 leading-relaxed mb-8">
                  Avec Velalta, vos courses deviennent un plaisir. Scannez les produits en rayon, payez en quelques secondes et repartez sans attendre.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Zéro attente, zéro stress",
                    "Panier en temps réel dans l'app",
                    "Promos appliquées automatiquement",
                    "Historique des achats accessible",
                    "Facture numérique instantanée",
                    "Compatible Apple Pay, Google Pay",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={12} className="text-cyan-400" />
                      </div>
                      <span className="text-[14px] text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "28 secondes", sub: "Checkout moyen", color: "from-cyan-500/15 to-blue-500/10" },
                  { icon: Star, title: "96%", sub: "Satisfaction client", color: "from-violet-500/15 to-pink-500/10" },
                  { icon: Receipt, title: "100%", sub: "Facture numérique", color: "from-blue-500/15 to-cyan-500/10" },
                  { icon: Bell, title: "0 €", sub: "Frais pour le client", color: "from-emerald-500/15 to-green-500/10" },
                ].map((card, i) => (
                  <div key={i} className={`glass-card rounded-2xl p-5 bg-gradient-to-br ${card.color}`}>
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center mb-3">
                      <card.icon size={18} className="text-white/70" />
                    </div>
                    <div className="text-[26px] font-black text-white">{card.title}</div>
                    <div className="text-[12px] text-white/45 mt-1">{card.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "investisseurs" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center mb-6">
                  <TrendingUp className="text-violet-400" size={26} />
                </div>
                <h3 className="text-[36px] font-black text-white mb-5">Un marché de 50 Md€<br />à transformer</h3>
                <p className="text-[16px] text-white/55 leading-relaxed mb-8">
                  Le retail européen génère plus de 3 000 milliards d'euros par an. Velalta capture une commission sur chaque transaction mobile — un modèle SaaS-like à forte scalabilité.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Modèle économique : commission sur transaction",
                    "Marché adressable : 50 Md€ (Europe)",
                    "Coûts marginaux quasi-nuls à l'échelle",
                    "Effet réseau et switching costs élevés",
                    "First-mover advantage en France",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={12} className="text-violet-400" />
                      </div>
                      <span className="text-[14px] text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/pour-les-investisseurs" className="btn-primary text-[14px] inline-block">
                  <span>Voir le dossier investisseur →</span>
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Marché total (TAM)", value: "50 Md€", desc: "Transactions retail EU/an" },
                  { label: "Marché adressable (SAM)", value: "4,2 Md€", desc: "Self-checkout mobile EU" },
                  { label: "Objectif Y3 (SOM)", value: "85 M€", desc: "Volume transactions" },
                  { label: "Commission sur transactions", value: "0,6%", desc: "Revenue Velalta" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-xl border border-violet-500/10">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0 text-violet-400 font-black text-[13px]">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-[12px] text-white/40 font-semibold uppercase tracking-wide">{item.label}</div>
                      <div className="text-[20px] font-black text-white">{item.value}</div>
                      <div className="text-[11px] text-white/35">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── FEATURES GRID ─────────────────────────────────────────────── */}
      <section className="py-28 bg-[#040810]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-6">
              Fonctionnalités
            </div>
            <h2 className="text-[40px] md:text-[52px] font-black text-white tracking-tight mb-4">
              Tout ce qu'il faut pour<br />réinventer le checkout
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: QrCode, title: "QR d'entrée", desc: "Identification de session magasin instantanée en un scan.", gradient: "from-blue-600/15 to-cyan-600/10" },
              { icon: Scan, title: "Scan code-barres", desc: "Rapide, fiable et précis. Gestion des codes EAN-13, QR, DataMatrix.", gradient: "from-violet-600/15 to-blue-600/10" },
              { icon: Package, title: "Panier intelligent", desc: "Quantités, suppression, promotions appliquées automatiquement.", gradient: "from-cyan-600/15 to-teal-600/10" },
              { icon: CreditCard, title: "Paiement in-app", desc: "Apple Pay, Google Pay, CB. Instantané, sécurisé, tokenisé.", gradient: "from-emerald-600/15 to-cyan-600/10" },
              { icon: Receipt, title: "Facture QR sortie", desc: "Contrôle anti-fraude rapide. Historique complet disponible.", gradient: "from-orange-600/15 to-amber-600/10" },
              { icon: BarChart3, title: "Analytics temps réel", desc: "Dashboard complet : CA, flux, comportements, alertes.", gradient: "from-pink-600/15 to-violet-600/10" },
              { icon: Database, title: "Intégration ERP/POS", desc: "API REST complète. Compatible avec les principaux systèmes.", gradient: "from-blue-600/15 to-indigo-600/10" },
              { icon: Shield, title: "Anti-fraude IA", desc: "Détection comportementale, contrôles aléatoires, logs sécurisés.", gradient: "from-red-600/15 to-orange-600/10" },
              { icon: Globe, title: "Multi-magasins", desc: "Gérez tous vos points de vente depuis un dashboard central.", gradient: "from-teal-600/15 to-green-600/10" },
            ].map((feature, i) => (
              <div
                key={i}
                className={`glass-card glass-card-hover rounded-2xl p-6 bg-gradient-to-br ${feature.gradient}`}
              >
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center mb-5">
                  <feature.icon className="text-white/80" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECURITY ──────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-6">
                Sécurité & Conformité
              </div>
              <h2 className="text-[40px] md:text-[48px] font-black text-white leading-tight mb-6">
                Votre confiance est<br />notre priorité absolue
              </h2>
              <p className="text-[16px] text-white/55 leading-relaxed mb-10">
                Velalta est conçu dès la conception avec une approche security-by-design. Chaque transaction est protégée par des couches de sécurité multiples.
              </p>
              <Link to="/securite" className="btn-secondary text-[14px] inline-flex items-center gap-2">
                Voir notre politique sécurité
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "PCI-DSS", desc: "Prestataire de paiement certifié", color: "text-blue-400" },
                { icon: Lock, title: "Chiffrement E2E", desc: "Données chiffrées de bout en bout", color: "text-violet-400" },
                { icon: Database, title: "Logs complets", desc: "Traçabilité totale des transactions", color: "text-cyan-400" },
                { icon: CheckCircle, title: "RGPD", desc: "Données minimisées et protégées", color: "text-emerald-400" },
                { icon: Activity, title: "99,9% SLA", desc: "Uptime garanti contractuellement", color: "text-orange-400" },
                { icon: Users, title: "Anti-fraude IA", desc: "Détection comportementale en temps réel", color: "text-pink-400" },
              ].map((item, i) => (
                <div key={i} className="glass-card glass-card-hover rounded-xl p-5">
                  <item.icon className={`${item.color} mb-3`} size={22} strokeWidth={1.5} />
                  <div className="text-[15px] font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-[12px] text-white/45 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING TEASER ────────────────────────────────────────────── */}
      <section className="py-28 bg-[#040810]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-6">
              Tarification
            </div>
            <h2 className="text-[40px] md:text-[52px] font-black text-white tracking-tight mb-4">
              Simple, transparent, aligné<br />sur votre succès
            </h2>
            <p className="text-[18px] text-white/50 max-w-2xl mx-auto">
              Pas d'abonnement. Pas de frais cachés. Vous ne payez que sur les transactions réussies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative gradient-border rounded-3xl p-8 md:p-12 glass-card text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full text-white text-[12px] font-bold uppercase tracking-wider shadow-lg">
                  Offre unique tout inclus
                </div>
              </div>

              <div className="mb-8 pt-4">
                <div className="text-[72px] font-black text-white leading-none">Gratuit</div>
                <div className="text-white/50 text-[16px] mt-2">Aucun abonnement, aucun frais fixe</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {[
                  { val: "0,8%", label: "Commission totale", sub: "par transaction", color: "text-white" },
                  { val: "0,6%", label: "Pour Velalta", sub: "coût plateforme", color: "text-blue-400" },
                  { val: "0,2%", label: "Pour vous", sub: "revenu additionnel", color: "text-emerald-400" },
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-xl p-5">
                    <div className={`text-[40px] font-black ${item.color} mb-1`}>{item.val}</div>
                    <div className="text-[13px] font-semibold text-white/70">{item.label}</div>
                    <div className="text-[11px] text-white/35 mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <Zap className="text-emerald-400" size={16} />
                <span className="text-emerald-400 text-[14px] font-semibold">
                  Le commerçant génère un revenu sur chaque transaction client
                </span>
              </div>

              <Link to="/tarifs" className="btn-primary text-[15px] inline-block">
                <span>Voir les détails →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] font-black text-white tracking-tight mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-[16px] font-semibold text-white/90 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-white/30 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-white/[0.06]">
                    <p className="text-[15px] text-white/55 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/faq" className="text-blue-400 hover:text-blue-300 text-[15px] font-semibold transition-colors inline-flex items-center gap-1">
              Voir toutes les questions
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-[#040810]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-cyan-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[800px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[48px] md:text-[60px] font-black text-white leading-tight tracking-tight mb-6">
            Prêt à transformer<br />votre magasin ?
          </h2>
          <p className="text-[18px] text-white/55 mb-12 max-w-xl mx-auto leading-relaxed">
            Rejoignez les enseignes pilotes et offrez à vos clients l'expérience d'achat de demain — dès aujourd'hui.
          </p>

          <div className="glass-card rounded-3xl p-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Votre nom" className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px]" />
              <input type="text" placeholder="Nom de l'enseigne" className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="email" placeholder="Email professionnel" className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px]" />
              <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px]" />
            </div>
            <select className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white/70 focus:outline-none focus:border-blue-500/50 transition-all mb-5 text-[15px]">
              <option value="" className="bg-[#050A14]">Nombre de magasins</option>
              <option value="1" className="bg-[#050A14]">1 magasin</option>
              <option value="2-5" className="bg-[#050A14]">2 à 5 magasins</option>
              <option value="6-20" className="bg-[#050A14]">6 à 20 magasins</option>
              <option value="20+" className="bg-[#050A14]">Plus de 20 magasins</option>
            </select>
            <button className="btn-primary w-full text-[16px] py-4">
              <span>Planifier une démo gratuite →</span>
            </button>
            <p className="text-[12px] text-white/30 mt-4 text-center">
              Réponse sous 24h · Aucun engagement · 100% gratuit
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

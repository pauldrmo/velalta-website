import { Link } from "react-router";
import { QrCode, Scan, CreditCard, Receipt, Shield, BarChart3, Database, Globe, Bell, CheckCircle, ArrowRight, Package, Layers } from "lucide-react";

export default function Product() {
  return (
    <div className="bg-[#07070F]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
            Le produit
          </div>
          <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
            Scanpay, de A à Z
          </h1>
          <p className="text-[20px] text-white/55 leading-relaxed max-w-2xl mx-auto">
            Découvrez toutes les fonctionnalités qui font de Scanpay la solution de self-checkout mobile la plus complète du marché.
          </p>
        </div>
      </section>

      {/* Core flow */}
      <section className="py-20 border-y border-white/[0.06] bg-[#0C0C14]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-black text-white mb-3">Le parcours client en 4 étapes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", icon: QrCode, title: "Entrée magasin", desc: "Le client scanne le QR code affiché à l'entrée. Sa session démarre instantanément.", color: "text-blue-400" },
              { num: "2", icon: Scan, title: "Scan en rayon", desc: "Chaque produit est scanné directement avec la caméra du smartphone.", color: "text-blue-400" },
              { num: "3", icon: CreditCard, title: "Paiement in-app", desc: "Apple Pay, Google Pay ou CB. Paiement sécurisé en un geste.", color: "text-cyan-400" },
              { num: "4", icon: Receipt, title: "QR de sortie", desc: "Un QR code généré pour le contrôle à la sortie. C'est tout.", color: "text-emerald-400" },
            ].map((step, i) => (
              <div key={i} className="relative glass-card glass-card-hover rounded-2xl p-6 text-center">
                <div className="text-[64px] font-black text-white/[0.04] absolute top-4 right-4 leading-none">{step.num}</div>
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mb-5 mx-auto">
                  <step.icon className={step.color} size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features deep dive */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="space-y-24">
            {[
              {
                title: "Scan ultra-fiable", badge: "Technologie de scan",
                desc: "Notre moteur de scan est optimisé pour les conditions réelles de magasin : faible luminosité, codes abîmés, emballages brillants. Compatible EAN-13, EAN-8, QR, DataMatrix, Code 128.",
                features: ["Scan continu ou manuel", "Ajout produit par recherche", "Détection des doublons", "Gestion des quantités", "Catalogue produits synchronisé en temps réel"],
                icon: Scan, iconColor: "text-blue-400",
                gradient: "from-blue-600/10 to-transparent",
              },
              {
                title: "Paiements sécurisés", badge: "Module de paiement",
                desc: "Scanpay s'appuie sur les meilleurs prestataires de paiement du marché (Stripe, Adyen, Wero, Worldline) pour garantir des transactions sécurisées, instantanées et conformes PCI-DSS.",
                features: ["Apple Pay & Google Pay", "Carte bancaire physique", "3D Secure automatique", "Tokenisation des cartes", "Gestion des remboursements"],
                icon: CreditCard, iconColor: "text-blue-400",
                gradient: "from-blue-600/10 to-transparent",
              },
              {
                title: "Analytics & reporting", badge: "Dashboard",
                desc: "Un tableau de bord complet pour piloter vos performances. Données en temps réel, rapports automatiques, alertes configurables.",
                features: ["Métriques live par magasin", "Heatmaps horaires", "Analyse du panier moyen", "Export CSV & comptabilité", "Alertes personnalisées par email/SMS"],
                icon: BarChart3, iconColor: "text-cyan-400",
                gradient: "from-cyan-600/10 to-transparent",
              },
            ].map((section, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-block px-3 py-1 rounded-full glass-card text-white/40 text-[11px] font-semibold uppercase tracking-widest mb-5">
                    {section.badge}
                  </div>
                  <h2 className="text-[36px] md:text-[44px] font-black text-white mb-5">{section.title}</h2>
                  <p className="text-[16px] text-white/55 leading-relaxed mb-7">{section.desc}</p>
                  <div className="space-y-2.5">
                    {section.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={12} className={section.iconColor} />
                        </div>
                        <span className="text-[14px] text-white/65">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`glass-card rounded-2xl p-8 bg-gradient-to-br ${section.gradient} flex items-center justify-center min-h-[280px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-24 h-24 rounded-3xl glass-card flex items-center justify-center">
                    <section.icon className={section.iconColor} size={48} strokeWidth={1} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-28 bg-[#0C0C14]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[40px] font-black text-white mb-4">Compatible avec votre stack</h2>
          <p className="text-[18px] text-white/50 mb-12 max-w-xl mx-auto">
            API REST documentée, webhooks, SDKs. Scanpay s'intègre dans votre environnement existant.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {["Cegid", "Sage Retail", "SAP", "Odoo", "Lightspeed", "WooCommerce", "Custom ERP", "API REST"].map((name, i) => (
              <div key={i} className="glass-card rounded-xl p-4 text-[14px] font-semibold text-white/60 hover:text-white transition-colors">
                {name}
              </div>
            ))}
          </div>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-primary text-[15px] inline-block">
            <span>Parler à l'équipe technique →</span>
          </a>
        </div>
      </section>
    </div>
  );
}

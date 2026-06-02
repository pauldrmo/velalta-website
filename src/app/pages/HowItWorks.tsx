import { Link } from "react-router";
import { QrCode, Scan, ShoppingCart, CreditCard, Receipt, ArrowRight, CheckCircle, Clock } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="bg-[#050A14]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
            Comment ça marche
          </div>
          <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
            Simple comme<br />
            <span className="gradient-text">bonjour.</span>
          </h1>
          <p className="text-[20px] text-white/55 leading-relaxed max-w-2xl mx-auto">
            4 étapes. 28 secondes. Zéro file d'attente. Voilà Velalta.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 pb-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="space-y-6">
            {[
              {
                num: "01", icon: QrCode, iconColor: "text-blue-400",
                title: "Vous scannez le QR à l'entrée",
                desc: "À l'entrée du magasin, un QR code Velalta vous attend. Scannez-le avec votre téléphone pour ouvrir votre session d'achat instantanément. Aucune inscription préalable requise.",
                gradient: "from-blue-600/15 to-cyan-600/5",
                details: ["Ouverture de session en 1 seconde", "Identification du magasin automatique", "Panier vide prêt à l'emploi"],
              },
              {
                num: "02", icon: Scan, iconColor: "text-violet-400",
                title: "Vous scannez les produits en rayon",
                desc: "Prenez un produit, scannez son code-barres avec la caméra de votre téléphone. Il s'ajoute instantanément à votre panier avec le prix exact, les promotions applicables et les informations produit.",
                gradient: "from-violet-600/15 to-blue-600/5",
                details: ["Ajout instantané au panier", "Prix et promos en temps réel", "Ajout manuel si code absent"],
              },
              {
                num: "03", icon: CreditCard, iconColor: "text-cyan-400",
                title: "Vous payez dans l'app",
                desc: "Une fois vos courses terminées, accédez à votre panier et procédez au paiement. Apple Pay, Google Pay ou carte bancaire — le paiement est sécurisé et instantané.",
                gradient: "from-cyan-600/15 to-teal-600/5",
                details: ["Apple Pay & Google Pay", "Carte bancaire sécurisée", "Reçu numérique immédiat"],
              },
              {
                num: "04", icon: Receipt, iconColor: "text-emerald-400",
                title: "Vous présentez le QR facture à la sortie",
                desc: "Un QR code de facture est généré automatiquement après votre paiement. Présentez-le au passage en sortie pour un contrôle rapide. C'est tout — vous êtes libre !",
                gradient: "from-emerald-600/15 to-teal-600/5",
                details: ["QR code facture instantané", "Contrôle anti-fraude rapide", "Facture envoyée par email"],
              },
            ].map((step, i) => (
              <div key={i} className={`relative glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br ${step.gradient} overflow-hidden`}>
                <div className="absolute top-4 right-6 text-[80px] font-black text-white/[0.04] leading-none select-none">{step.num}</div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center">
                        <step.icon className={step.iconColor} size={24} strokeWidth={1.5} />
                      </div>
                      <h2 className="text-[26px] md:text-[32px] font-black text-white leading-tight">{step.title}</h2>
                    </div>
                    <p className="text-[16px] text-white/55 leading-relaxed mb-6">{step.desc}</p>
                  </div>
                  <div className="space-y-3">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/[0.08] flex items-center justify-center">
                          <CheckCircle size={11} className={step.iconColor} />
                        </div>
                        <span className="text-[14px] text-white/60">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Time comparison */}
          <div className="mt-16 glass-card rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
              <div>
                <div className="text-[20px] text-white/40 mb-2 font-semibold">Caisse traditionnelle</div>
                <div className="text-[56px] font-black text-red-400">4 min</div>
                <div className="text-[14px] text-white/40 mt-1">temps moyen d'attente</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center">
                  <span className="text-white/40 text-[24px] font-black">vs</span>
                </div>
              </div>
              <div>
                <div className="text-[20px] text-white/40 mb-2 font-semibold">Velalta</div>
                <div className="text-[56px] font-black gradient-text">28 sec</div>
                <div className="text-[14px] text-white/40 mt-1">checkout moyen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#040810]">
        <div className="max-w-[600px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[40px] font-black text-white mb-5">Prêt à l'essayer ?</h2>
          <p className="text-[18px] text-white/50 mb-8">Rejoignez les premières enseignes pilotes et transformez l'expérience d'achat dès aujourd'hui.</p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Velalta" className="btn-primary text-[16px] inline-block">
            <span>Demander une démo →</span>
          </a>
        </div>
      </section>
    </div>
  );
}

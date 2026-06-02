import { Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const type = "demo";

  return (
    <div className="bg-[#050A14]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
            Contact
          </div>
          <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
            Parlons de<br />
            <span className="gradient-text">votre projet</span>
          </h1>
          <p className="text-[20px] text-white/55 leading-relaxed max-w-xl mx-auto">
            Que vous soyez une enseigne, un investisseur ou simplement curieux — nous répondons sous 24h.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="pb-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left */}
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", val: "pauldormeau@icloud.com", sub: "Réponse sous 24h" },
                { icon: MapPin, title: "Adresse", val: "Paris & Rouen", sub: "Disponible partout en France" },
                { icon: Clock, title: "Disponibilité", val: "Lun — Ven", sub: "9h00 — 18h00" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <div className="text-[13px] text-white/40 font-semibold uppercase tracking-wide">{item.title}</div>
                    <div className="text-[16px] font-semibold text-white mt-0.5">{item.val}</div>
                    <div className="text-[13px] text-white/40 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-2xl p-6 mt-4">
                <div className="text-[14px] font-semibold text-white mb-3">Ce que vous obtenez</div>
                <div className="space-y-2.5">
                  {[
                    "Démo personnalisée en 30 min",
                    "Analyse de votre cas d'usage",
                    "Proposition commerciale sur mesure",
                    "Aucun engagement",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-[13px] text-white/55">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-3xl p-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-blue-400" size={30} />
                </div>
                <h2 className="text-[28px] font-black text-white mb-3">Écrivez-nous directement</h2>
                <p className="text-[16px] text-white/50 leading-relaxed mb-8 max-w-sm mx-auto">
                  Un clic pour ouvrir votre messagerie. Nous répondons sous 24h pour organiser votre démo.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    {
                      label: "Démo enseigne",
                      href: "mailto:pauldormeau@icloud.com?subject=Demande%20de%20d%C3%A9mo%20%E2%80%94%20Velalta&body=Bonjour%2C%0A%0AJe%20souhaite%20planifier%20une%20d%C3%A9mo%20Velalta.%0A%0ANom%20%3A%0AEnseigne%20%3A%0ANombre%20de%20magasins%20%3A%0AT%C3%A9l%C3%A9phone%20%3A%0A",
                      primary: true,
                    },
                    {
                      label: "Dossier investisseur",
                      href: "mailto:pauldormeau@icloud.com?subject=Investissement%20Velalta%20%E2%80%94%20Pitch%20Deck&body=Bonjour%2C%0A%0AJe%20souhaite%20en%20savoir%20plus%20sur%20Velalta%20dans%20le%20cadre%20d%27un%20investissement.%0A%0ANom%20%3A%0ASoci%C3%A9t%C3%A9%2FFonds%20%3A%0A",
                      primary: false,
                    },
                    {
                      label: "Autre demande",
                      href: "mailto:pauldormeau@icloud.com?subject=Contact%20Velalta",
                      primary: false,
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`block w-full py-3.5 rounded-xl text-[15px] font-semibold transition-all ${
                        item.primary
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                    >
                      <span>{item.label} →</span>
                    </a>
                  ))}
                </div>

                <p className="text-[12px] text-white/25">
                  Réponse sous 24h · Aucun engagement · Données protégées
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

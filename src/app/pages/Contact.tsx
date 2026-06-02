import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState<"demo" | "investor" | "other">("demo");

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
                { icon: MapPin, title: "Adresse", val: "Paris, France", sub: "Disponible partout en France" },
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
              {submitted ? (
                <div className="glass-card rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-emerald-400" size={32} />
                  </div>
                  <h2 className="text-[32px] font-black text-white mb-3">Message envoyé !</h2>
                  <p className="text-[16px] text-white/55">Notre équipe vous répondra dans les 24 heures. Merci pour votre intérêt pour Velalta.</p>
                </div>
              ) : (
                <div className="glass-card rounded-3xl p-8">
                  {/* Type selector */}
                  <div className="mb-6">
                    <div className="text-[13px] font-semibold text-white/40 uppercase tracking-wide mb-3">Objet du contact</div>
                    <div className="flex gap-2 flex-wrap">
                      {[
                        { val: "demo" as const, label: "Demande de démo" },
                        { val: "investor" as const, label: "Investisseur" },
                        { val: "other" as const, label: "Autre" },
                      ].map((t) => (
                        <button
                          key={t.val}
                          onClick={() => setType(t.val)}
                          className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-all ${
                            type === t.val
                              ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                              : "glass-card text-white/50 hover:text-white"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[12px] font-semibold text-white/40 uppercase tracking-wide mb-2">Prénom & Nom</label>
                      <input type="text" placeholder="Jean Dupont" className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px]" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-white/40 uppercase tracking-wide mb-2">
                        {type === "investor" ? "Société / Fonds" : "Enseigne / Société"}
                      </label>
                      <input type="text" placeholder={type === "investor" ? "Votre fonds d'investissement" : "Nom de votre enseigne"} className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[12px] font-semibold text-white/40 uppercase tracking-wide mb-2">Email professionnel</label>
                      <input type="email" placeholder="jean@enseigne.fr" className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px]" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-white/40 uppercase tracking-wide mb-2">Téléphone</label>
                      <input type="tel" placeholder="+33 6 00 00 00 00" className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px]" />
                    </div>
                  </div>

                  {type === "demo" && (
                    <div className="mb-4">
                      <label className="block text-[12px] font-semibold text-white/40 uppercase tracking-wide mb-2">Nombre de magasins</label>
                      <select className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white/70 focus:outline-none focus:border-blue-500/50 transition-all text-[15px]">
                        <option value="" className="bg-[#050A14]">Sélectionnez...</option>
                        <option value="1" className="bg-[#050A14]">1 magasin</option>
                        <option value="2-5" className="bg-[#050A14]">2 à 5 magasins</option>
                        <option value="6-20" className="bg-[#050A14]">6 à 20 magasins</option>
                        <option value="20+" className="bg-[#050A14]">Plus de 20 magasins</option>
                      </select>
                    </div>
                  )}

                  <div className="mb-6">
                    <label className="block text-[12px] font-semibold text-white/40 uppercase tracking-wide mb-2">Message</label>
                    <textarea
                      placeholder={
                        type === "demo"
                          ? "Décrivez votre enseigne, vos besoins et vos questions..."
                          : type === "investor"
                          ? "Décrivez votre thèse d'investissement et vos questions..."
                          : "Votre message..."
                      }
                      rows={4}
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-[15px] resize-none"
                    />
                  </div>

                  <button
                    onClick={() => setSubmitted(true)}
                    className="btn-primary w-full text-[16px] py-4"
                  >
                    <span>
                      {type === "demo" ? "Planifier ma démo gratuite →" : type === "investor" ? "Demander le pitch deck →" : "Envoyer le message →"}
                    </span>
                  </button>

                  <p className="text-center text-[12px] text-white/25 mt-4">
                    Réponse sous 24h · Aucun engagement · Données protégées
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

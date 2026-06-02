import { Link } from "react-router";
import { Shield, Lock, Database, CheckCircle, ArrowRight, Eye, Activity, Users, Globe, Server } from "lucide-react";

export default function Security() {
  return (
    <div className="bg-[#07070F]">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full glass-card text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-8">
              Sécurité & Conformité
            </div>
            <h1 className="text-[56px] md:text-[72px] font-black text-white leading-[0.95] tracking-tight mb-8">
              Security by<br />
              <span className="gradient-text">design.</span>
            </h1>
            <p className="text-[20px] text-white/55 leading-relaxed max-w-2xl">
              Velalta a été conçu dès le départ avec une architecture security-first. Chaque couche du système est protégée, auditée et conforme aux standards internationaux.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "PCI-DSS", sub: "Niveau 1", desc: "Conformité paiement", icon: Shield },
              { title: "RGPD", sub: "Article 25", desc: "Privacy by design", icon: Lock },
              { title: "ISO 27001", sub: "En cours", desc: "Sécurité de l'info", icon: CheckCircle },
              { title: "99,9%", sub: "SLA garanti", desc: "Uptime contractuel", icon: Activity },
            ].map((cert, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto">
                  <cert.icon className="text-blue-400" size={22} />
                </div>
                <div className="text-[22px] font-black text-white mb-0.5">{cert.title}</div>
                <div className="text-[13px] font-semibold text-blue-400 mb-1">{cert.sub}</div>
                <div className="text-[12px] text-white/40">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security layers */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] font-black text-white mb-4">Architecture de sécurité multicouche</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: CreditCardIcon, title: "Paiements PCI-DSS", desc: "Partenariat avec des prestataires certifiés PCI-DSS niveau 1. Tokenisation des données carte. Aucune donnée sensible stockée côté Velalta.", color: "text-blue-400", bg: "from-blue-600/12 to-cyan-600/6" },
              { icon: Lock, title: "Chiffrement E2E", desc: "Toutes les données sont chiffrées de bout en bout avec AES-256. Les communications sont protégées par TLS 1.3.", color: "text-blue-400", bg: "from-blue-600/10 to-blue-800/6" },
              { icon: Database, title: "Logs & traçabilité", desc: "Chaque transaction est loguée de manière immuable. Audit trail complet disponible pour les enseignes.", color: "text-cyan-400", bg: "from-cyan-600/12 to-teal-600/6" },
              { icon: CheckCircle, title: "Conformité RGPD", desc: "Collecte minimale de données, droit à l'effacement, consentement explicite. Aucune donnée personnelle revendue.", color: "text-emerald-400", bg: "from-emerald-600/12 to-green-600/6" },
              { icon: Eye, title: "Anti-fraude IA", desc: "Algorithmes de détection comportementale en temps réel. Contrôles aléatoires à la sortie. Score de confiance par session.", color: "text-orange-400", bg: "from-orange-600/12 to-amber-600/6" },
              { icon: Server, title: "Infrastructure sécurisée", desc: "Hébergement EU (AWS Paris). Isolation des données par enseigne. Backups chiffrés toutes les heures.", color: "text-pink-400", bg: "from-pink-600/12 to-rose-600/6" },
            ].map((item, i) => (
              <div key={i} className={`glass-card glass-card-hover rounded-2xl p-6 bg-gradient-to-br ${item.bg}`}>
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center mb-5">
                  <item.icon className={item.color} size={22} />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RGPD */}
      <section className="py-28 bg-[#0C0C14]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[40px] font-black text-white mb-6">Vos données vous appartiennent</h2>
              <p className="text-[16px] text-white/55 leading-relaxed mb-8">
                Velalta ne monétise pas les données de vos clients. Nous collectons uniquement les informations strictement nécessaires au fonctionnement du service, conformément au principe de minimisation du RGPD.
              </p>
              <div className="space-y-3">
                {[
                  "Aucune donnée personnelle revendue à des tiers",
                  "Droit à l'effacement disponible dans l'app",
                  "Consentement explicite avant toute collecte",
                  "Registre des activités de traitement disponible",
                  "DPO désigné (en cours de nomination)",
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
            <div className="glass-card rounded-2xl p-8">
              <div className="text-[13px] font-semibold text-white/40 uppercase tracking-wide mb-6">Données collectées par Velalta</div>
              <div className="space-y-4">
                {[
                  { type: "Données de transaction", detail: "Produits, montants, horodatage", keep: "3 ans", icon: "📦" },
                  { type: "Données de paiement", detail: "Token uniquement (jamais les numéros)", keep: "Jamais stockées", icon: "💳" },
                  { type: "Données comportementales", detail: "Anonymisées, agrégées", keep: "12 mois", icon: "📊" },
                  { type: "Données personnelles", detail: "Email si compte créé", keep: "Sur demande client", icon: "👤" },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white/[0.03] rounded-xl">
                    <span className="text-[20px]">{d.icon}</span>
                    <div className="flex-1">
                      <div className="text-[14px] font-semibold text-white">{d.type}</div>
                      <div className="text-[12px] text-white/40 mt-0.5">{d.detail}</div>
                    </div>
                    <div className="text-[11px] font-semibold text-blue-400 whitespace-nowrap">{d.keep}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[600px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[36px] font-black text-white mb-4">Des questions sur notre sécurité ?</h2>
          <p className="text-[16px] text-white/50 mb-8">Notre équipe technique est disponible pour répondre à toutes vos questions et partager notre documentation sécurité.</p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Velalta" className="btn-primary text-[15px] inline-block">
            <span>Contacter l'équipe sécurité →</span>
          </a>
        </div>
      </section>
    </div>
  );
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement> & { size?: number; className?: string }) {
  return <Lock className={props.className} size={props.size} />;
}

import { CheckCircle, TrendingUp, Clock, Users, Shield, Zap, Database, BarChart3 } from "lucide-react";

const benefits = [
  { icon: TrendingUp, label: "Revenus additionnels", desc: "0,2 % de commission sur chaque transaction Scanpay. Une source de revenu passive intégrée directement dans votre flux de caisse." },
  { icon: Clock, label: "Débit client amélioré", desc: "Le temps de passage en caisse passe de 4 minutes à moins de 30 secondes. Moins de files, plus de rotations." },
  { icon: Users, label: "Satisfaction client", desc: "L'expérience d'achat devient fluide et autonome. Les clients reviennent pour l'expérience, pas malgré elle." },
  { icon: Shield, label: "Anti-fraude intégré", desc: "Contrôles aléatoires, logs de transactions, détection comportementale IA. La sécurité est dans le système, pas dans la file." },
  { icon: Database, label: "Data en temps réel", desc: "Tableau de bord en direct : taux de conversion Scanpay, panier moyen, produits populaires, pics d'affluence." },
  { icon: BarChart3, label: "Intégration ERP", desc: "Compatible Cegid, Sage, SAP Retail, Odoo et la plupart des systèmes POS. API REST complète disponible." },
];

const steps = [
  { num: "01", title: "Signature du contrat", desc: "Définition du périmètre, des intégrations ERP nécessaires et du calendrier de déploiement." },
  { num: "02", title: "Intégration technique", desc: "Connexion à votre catalogue produits, votre système de stock et votre solution de paiement. 2 à 4 semaines." },
  { num: "03", title: "Formation équipe", desc: "Formation de vos équipes en magasin : gestion des contrôles, supervision du tableau de bord, support client." },
  { num: "04", title: "Lancement pilote", desc: "Déploiement sur un ou plusieurs magasins pilotes. Suivi des métriques et ajustements en temps réel." },
  { num: "05", title: "Déploiement complet", desc: "Extension à l'ensemble de votre réseau. Support dédié et mises à jour continues inclus." },
];

export default function ForRetailers() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 56 }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--rule)", padding: "80px 40px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="sp-badge" style={{ marginBottom: 24, display: "inline-block" }}>Pour les enseignes</span>
          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            maxWidth: 800,
            marginBottom: 24,
          }}>
            La caisse de demain,<br />
            <em style={{ color: "var(--signal)" }}>déployée aujourd'hui.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
            Scanpay s'intègre à votre infrastructure existante. Vos clients scannent, paient et sortent. Vous percevez une commission sur chaque transaction.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay%20-%20Enseigne" className="btn-primary">
              Demander une démo →
            </a>
            <a href="https://group-skid-95043529.figma.site" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Voir la démo MVP
            </a>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section style={{ borderBottom: "1px solid var(--rule)", background: "var(--bg-alt)" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        }}>
          {[
            { val: "+0,2 %", label: "Commission par transaction Scanpay" },
            { val: "< 30 sec", label: "Durée de checkout client" },
            { val: "2–4 sem.", label: "Délai d'intégration" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: "40px 32px",
              borderRight: i < 2 ? "1px solid var(--rule)" : "none",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "var(--signal)",
                lineHeight: 1,
                marginBottom: 8,
              }}>{s.val}</div>
              <div className="sp-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Bénéfices</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--ink)",
            }}>Ce que Scanpay apporte à votre enseigne</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}>
            {benefits.map((b, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover"
                style={{ padding: 28, borderRadius: 14 }}
              >
                <div style={{
                  width: 40, height: 40,
                  background: "var(--signal-light)",
                  border: "1px solid var(--signal-mid)",
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <b.icon size={18} color="var(--signal)" />
                </div>
                <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: 10,
                }}>{b.label}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding steps */}
      <section style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Intégration</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "var(--ink)",
            }}>De zéro à actif en 5 étapes</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                borderBottom: i < steps.length - 1 ? "1px solid var(--rule)" : "none",
                paddingBottom: 32,
                marginBottom: 32,
              }}>
                <span style={{
                  fontFamily: "var(--mono)",
                  fontSize: 28,
                  fontWeight: 400,
                  color: "var(--rule)",
                  lineHeight: 1.2,
                  paddingTop: 4,
                }}>{s.num}</span>
                <div>
                  <h3 style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: 8,
                  }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Inclus dans l'offre</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "var(--ink)",
            }}>Tout pour démarrer</h2>
          </div>
          <div style={{
            background: "var(--bg)",
            border: "1px solid var(--rule)",
            borderRadius: 16,
            boxShadow: "var(--sh-md)",
            overflow: "hidden",
          }}>
            {[
              "Application mobile client (iOS & Android)",
              "Tableau de bord enseigne en temps réel",
              "Intégration ERP / POS sur mesure",
              "API REST complète avec documentation",
              "Système anti-fraude multi-couches",
              "Support dédié et SLA garanti",
              "Mises à jour continues incluses",
              "Formation équipe en magasin",
            ].map((item, i, arr) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "18px 28px",
                borderBottom: i < arr.length - 1 ? "1px solid var(--rule-subtle)" : "none",
              }}>
                <CheckCircle size={16} color="var(--signal)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "var(--ink-2)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: 16,
          }}>Votre magasin, prêt demain.</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 36 }}>
            Rejoignez les premières enseignes pilotes et transformez l'expérience de vos clients.
          </p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay%20-%20Enseigne" className="btn-primary">
            Nous contacter →
          </a>
        </div>
      </section>
    </div>
  );
}

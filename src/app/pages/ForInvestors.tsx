import { TrendingUp, Globe, Zap, Target, Rocket, CheckCircle } from "lucide-react";

const metrics = [
  { val: "3 000 Md€", label: "Marché européen du retail", sub: "Valeur adressable totale" },
  { val: "< 5 %", label: "Taux d'adoption actuel", sub: "Du self-checkout en Europe" },
  { val: "0,8 %", label: "Surcharge par transaction", sub: "0,2 % enseigne · 0,6 % Scanpay" },
  { val: "28 sec", label: "Durée de checkout", sub: "Vs 4 min en caisse traditionnelle" },
];

const thesis = [
  {
    icon: Globe,
    title: "Un marché sous-digitalisé",
    desc: "Le retail européen génère 3 000 milliards d'euros de transactions par an. Moins de 5 % passent par un système de self-checkout. Le potentiel d'adoption est structurellement élevé.",
  },
  {
    icon: Zap,
    title: "Un modèle sans friction",
    desc: "Scanpay ne remplace pas les caisses — il les complète. Zéro CAPEX pour l'enseigne, déploiement en 2 à 4 semaines. La surcharge de 0,8 % est portée par le client : 0,2 % au magasin, 0,6 % à Scanpay.",
  },
  {
    icon: Target,
    title: "Un alignement d'intérêts rare",
    desc: "L'enseigne gagne de l'argent à chaque transaction Scanpay. Le client gagne du temps. Scanpay génère un revenu sur le flux. Les trois parties ont intérêt à ce que le volume croisse.",
  },
  {
    icon: TrendingUp,
    title: "Des revenus scalables",
    desc: "Le modèle à la transaction crée une courbe de revenus corrélée au volume retail. Chaque nouveau magasin activé ajoute de la récurrence sans coût marginal significatif.",
  },
  {
    icon: Rocket,
    title: "Un timing de marché",
    desc: "Post-COVID, les comportements d'achat autonomes sont normalisés. Les enseignes cherchent à réduire leurs coûts de caisse. Les consommateurs attendent un parcours fluide.",
  },
];

const roadmap = [
  { phase: "Phase 1", title: "Pilote & validation", desc: "3 à 5 enseignes pilotes en France. Validation du NPS client, du taux d'adoption et de la robustesse technique.", status: "En cours" },
  { phase: "Phase 2", title: "Déploiement national", desc: "Extension aux 50 premières enseignes partenaires. Recrutement commercial et construction de l'équipe support.", status: "T3 2026" },
  { phase: "Phase 3", title: "Expansion européenne", desc: "Entrée sur les marchés Benelux, Espagne et Italie. Partenariats avec les grands groupes retail continentaux.", status: "2027" },
];

export default function ForInvestors() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 56 }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--rule)", padding: "80px 40px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="sp-badge" style={{ marginBottom: 24, display: "inline-block" }}>Pour les investisseurs</span>
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
            Le checkout est cassé.<br />
            <em style={{ color: "var(--signal)" }}>Nous le reconstruisons.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 600, marginBottom: 40 }}>
            Scanpay est une infrastructure de paiement mobile pour le retail physique. Nous résolvons le dernier point de friction du parcours d'achat avec un modèle économique aligné sur les intérêts de tous.
          </p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay%20-%20Investisseurs" className="btn-primary">
            Nous contacter →
          </a>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ borderBottom: "1px solid var(--rule)", background: "var(--ink)" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        }}>
          {metrics.map((m, i) => (
            <div key={i} style={{
              padding: "48px 32px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 700,
                color: "var(--signal)",
                lineHeight: 1,
                marginBottom: 8,
              }}>{m.val}</div>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: 4,
              }}>{m.label}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment thesis */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Thèse d'investissement</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--ink)",
            }}>Pourquoi maintenant</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}>
            {thesis.map((t, i) => (
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
                  <t.icon size={18} color="var(--signal)" />
                </div>
                <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: 10,
                }}>{t.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Roadmap</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "var(--ink)",
            }}>Le plan de développement</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {roadmap.map((r, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr 100px",
                borderBottom: i < roadmap.length - 1 ? "1px solid var(--rule)" : "none",
                paddingBottom: i < roadmap.length - 1 ? 32 : 0,
                marginBottom: i < roadmap.length - 1 ? 32 : 0,
                alignItems: "start",
                gap: 24,
              }}>
                <div>
                  <div style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--signal)",
                    marginBottom: 4,
                  }}>{r.phase}</div>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: 8,
                  }}>{r.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.75 }}>{r.desc}</p>
                </div>
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: i === 0 ? "var(--signal)" : "var(--ink-3)",
                  background: i === 0 ? "var(--signal-light)" : "var(--rule-subtle)",
                  border: `1px solid ${i === 0 ? "var(--signal-mid)" : "var(--rule)"}`,
                  borderRadius: 4,
                  padding: "5px 10px",
                  textAlign: "center",
                  alignSelf: "start",
                  marginTop: 4,
                }}>{r.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: 16,
          }}>Construire l'avenir du retail, ensemble.</h2>
          <p style={{ fontSize: 15, color: "var(--ink-2)", marginBottom: 36, maxWidth: 440, margin: "0 auto 36px" }}>
            Pour toute question sur Scanpay, notre modèle ou nos perspectives de développement, contactez-nous directement.
          </p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay%20-%20Investisseurs" className="btn-primary">
            Prendre contact →
          </a>
        </div>
      </section>
    </div>
  );
}

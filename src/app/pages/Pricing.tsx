import { CheckCircle } from "lucide-react";

const tiers = [
  {
    label: "Petit magasin",
    volume: "100",
    unit: "transactions Scanpay / jour",
    daily: "+9 €",
    annual: "+3 285 €",
    featured: false,
  },
  {
    label: "Supermarché moyen",
    volume: "300",
    unit: "transactions Scanpay / jour",
    daily: "+27 €",
    annual: "+9 855 €",
    featured: true,
  },
  {
    label: "Grande surface",
    volume: "700",
    unit: "transactions Scanpay / jour",
    daily: "+63 €",
    annual: "+22 995 €",
    featured: false,
  },
];

const included = [
  "Application mobile client (iOS & Android)",
  "Tableau de bord enseigne en temps réel",
  "Intégration ERP / POS sur mesure",
  "API REST complète avec documentation",
  "Système anti-fraude multi-couches",
  "Support dédié 7j/7",
  "Formation équipe en magasin",
  "Mises à jour continues incluses",
];

export default function Pricing() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 56 }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--rule)", padding: "80px 40px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span className="sp-badge" style={{ marginBottom: 24, display: "inline-block" }}>Tarification</span>
          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 24,
          }}>
            Zéro abonnement.<br />
            <em style={{ color: "var(--signal)" }}>100 % à la transaction.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 560 }}>
            Scanpay est gratuit pour les enseignes. Le client paie une surcharge de +0,8 % par transaction : 0,2 % sont reversés au magasin, 0,6 % reviennent à Scanpay.
          </p>
        </div>
      </section>

      {/* Model */}
      <section style={{ borderBottom: "1px solid var(--rule)", background: "var(--bg-alt)", padding: "56px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 32 }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Modèle économique</span>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "var(--ink)" }}>Comment ça se répartit</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            background: "var(--bg)",
            border: "1px solid var(--rule)",
            borderRadius: 16,
            boxShadow: "var(--sh-md)",
            overflow: "hidden",
          }}>
            {[
              { party: "Le client", rate: "+0,8 %", sub: "Surcharge totale par transaction", accent: false },
              { party: "L'enseigne", rate: "0,2 %", sub: "Reversés au magasin", accent: true },
              { party: "Scanpay", rate: "0,6 %", sub: "Part Scanpay sur la transaction", accent: false },
            ].map((r, i) => (
              <div key={i} style={{
                padding: "36px 24px",
                textAlign: "center",
                borderRight: i < 2 ? "1px solid var(--rule)" : "none",
                background: r.accent ? "var(--signal-light)" : "transparent",
              }}>
                <div className="sp-label" style={{ marginBottom: 12, color: r.accent ? "var(--signal)" : "var(--ink-3)" }}>{r.party}</div>
                <div style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 700,
                  color: r.accent ? "var(--signal)" : "var(--ink)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>{r.rate}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Simulateur</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "var(--ink)",
              marginBottom: 12,
            }}>Estimez votre revenu additionnel</h2>
            <p style={{ fontSize: 14, color: "var(--ink-3)", fontFamily: "var(--mono)" }}>
              * Basé sur un panier moyen de 45 € et 0,2 % de commission sur les transactions Scanpay
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {tiers.map((t, i) => (
              <div
                key={i}
                style={{
                  background: t.featured ? "var(--signal)" : "var(--bg)",
                  border: `1px solid ${t.featured ? "var(--signal)" : "var(--rule)"}`,
                  borderRadius: 16,
                  padding: "32px 28px",
                  boxShadow: t.featured ? "var(--sh-blue)" : "var(--sh-sm)",
                  position: "relative",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                className={t.featured ? "" : "glass-card-hover"}
              >
                {t.featured && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "var(--ink)",
                    color: "#fff",
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    padding: "5px 14px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  }}>PLUS POPULAIRE</div>
                )}
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: t.featured ? "rgba(255,255,255,0.7)" : "var(--ink-3)",
                  marginBottom: 16,
                }}>{t.label}</div>
                <div style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: t.featured ? "#fff" : "var(--signal)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}>{t.volume}</div>
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: t.featured ? "rgba(255,255,255,0.6)" : "var(--ink-3)",
                  marginBottom: 24,
                }}>{t.unit}</div>
                <div style={{ borderTop: `1px solid ${t.featured ? "rgba(255,255,255,0.2)" : "var(--rule)"}`, paddingTop: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.7)" : "var(--ink-3)" }}>Revenu quotidien</span>
                    <span style={{
                      fontFamily: "var(--mono)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: t.featured ? "#fff" : "var(--ink)",
                    }}>{t.daily}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.7)" : "var(--ink-3)" }}>Revenu annuel</span>
                    <span style={{
                      fontFamily: "var(--mono)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: t.featured ? "#fff" : "var(--ink)",
                    }}>{t.annual}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "80px 40px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <span className="sp-badge" style={{ marginBottom: 24, display: "inline-block" }}>Tout inclus</span>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: 40,
          }}>Sans frais cachés</h2>
          <div style={{
            background: "var(--bg)",
            border: "1px solid var(--rule)",
            borderRadius: 16,
            boxShadow: "var(--sh-md)",
            overflow: "hidden",
            textAlign: "left",
          }}>
            {included.map((item, i, arr) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "16px 28px",
                borderBottom: i < arr.length - 1 ? "1px solid var(--rule-subtle)" : "none",
              }}>
                <CheckCircle size={15} color="var(--signal)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "var(--ink-2)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: 16,
          }}>Aucun frais pour démarrer.</h2>
          <p style={{ fontSize: 15, color: "var(--ink-2)", marginBottom: 36 }}>
            Contactez-nous pour rejoindre les premières enseignes pilotes.
          </p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay%20-%20Tarification" className="btn-primary">
            Nous contacter →
          </a>
        </div>
      </section>
    </div>
  );
}

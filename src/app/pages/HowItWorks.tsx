import { CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01", step: "SCAN",
    title: "Vous scannez le QR code à l'entrée",
    desc: "À l'entrée du magasin, un QR code Scanpay ouvre instantanément votre session d'achat. Aucune inscription préalable requise. Le magasin est reconnu automatiquement.",
    details: ["Ouverture de session en 1 seconde", "Identification automatique du magasin", "Panier vide prêt à l'emploi"],
  },
  {
    num: "02", step: "IDENTIFY",
    title: "Vous scannez les produits en rayon",
    desc: "Prenez un produit, scannez son code-barres avec la caméra de votre téléphone. Il s'ajoute instantanément à votre panier avec le prix exact et les promotions applicables.",
    details: ["Ajout instantané au panier", "Prix et promos en temps réel", "Ajout manuel si code absent"],
  },
  {
    num: "03", step: "PAY",
    title: "Vous payez dans l'application",
    desc: "Une fois vos courses terminées, procédez au paiement en un geste. Apple Pay, Google Pay ou carte bancaire — le paiement est sécurisé, tokenisé et instantané.",
    details: ["Apple Pay & Google Pay", "Carte bancaire sécurisée (3D Secure)", "Reçu numérique immédiat"],
  },
  {
    num: "04", step: "VERIFY",
    title: "Vous présentez le QR de facture",
    desc: "Un QR code de facture est généré automatiquement après votre paiement. Présentez-le au contrôle à la sortie — c'est rapide, et c'est tout.",
    details: ["QR code de sortie instantané", "Contrôle anti-fraude rapide", "Facture envoyée par email"],
  },
  {
    num: "05", step: "EXIT",
    title: "Vous sortez. Sans attendre.",
    desc: "La transaction est complète. Vous quittez le magasin librement avec votre reçu numérique. Le commerçant reçoit 0,2 % de revenu additionnel sur la transaction.",
    details: ["< 30 secondes au total", "Zéro file d'attente", "Commission +0,2 % pour l'enseigne"],
  },
];

export default function HowItWorks() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 56 }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--rule)", padding: "80px 40px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="sp-badge" style={{ marginBottom: 24, display: "inline-block" }}>
            Comment ça marche
          </span>
          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            maxWidth: 700,
            marginBottom: 24,
          }}>
            Cinq étapes.<br />
            <em style={{ color: "var(--signal)" }}>Vingt-huit secondes.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 520 }}>
            Scanpay transforme le parcours d'achat en une séquence fluide et sans friction — du scan du premier produit à la sortie du magasin.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr 280px",
                borderBottom: "1px solid var(--rule)",
              }}
              className="flex-col md:grid"
            >
              {/* Number / step */}
              <div style={{
                padding: "36px 32px",
                borderRight: "1px solid var(--rule)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 8,
              }}>
                <span style={{
                  fontFamily: "var(--mono)",
                  fontSize: 36,
                  fontWeight: 400,
                  color: "var(--rule)",
                  lineHeight: 1,
                }}>{step.num}</span>
                <span style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--signal)",
                  textTransform: "uppercase",
                }}>{step.step}</span>
              </div>

              {/* Main content */}
              <div style={{ padding: "36px 48px", borderRight: "1px solid var(--rule)" }}>
                <h2 style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.3,
                  marginBottom: 14,
                }}>{step.title}</h2>
                <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.75 }}>{step.desc}</p>
              </div>

              {/* Details */}
              <div style={{
                padding: "36px 32px",
                background: i % 2 === 0 ? "var(--bg-alt)" : "var(--bg)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 10,
              }}>
                {step.details.map((d) => (
                  <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle size={14} color="var(--signal)" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sp-badge" style={{ marginBottom: 20, display: "inline-block" }}>Avant / Après</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--ink)",
            }}>La différence en chiffres</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            background: "var(--bg)",
            border: "1px solid var(--rule)",
            borderRadius: 16,
            boxShadow: "var(--sh-md)",
            overflow: "hidden",
          }}>
            <div style={{ padding: "48px 32px", textAlign: "center", borderRight: "1px solid var(--rule)" }}>
              <div className="sp-label" style={{ marginBottom: 16 }}>Caisse traditionnelle</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 64, fontWeight: 700, color: "#D44", lineHeight: 1 }}>4 min</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 10 }}>temps moyen d'attente</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", padding: "0 28px" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 18, color: "var(--rule)" }}>→</span>
            </div>
            <div style={{ padding: "48px 32px", textAlign: "center", background: "var(--signal-light)" }}>
              <div className="sp-label" style={{ color: "var(--signal)", marginBottom: 16 }}>Scanpay</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 64, fontWeight: 700, color: "var(--signal)", lineHeight: 1 }}>28 sec</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 10 }}>checkout moyen</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700,
          color: "var(--ink)",
          marginBottom: 20,
        }}>Prêt à essayer Scanpay ?</h2>
        <p style={{ fontSize: 16, color: "var(--ink-2)", marginBottom: 36, maxWidth: 400, margin: "0 auto 36px" }}>
          Rejoignez les premières enseignes pilotes et transformez l'expérience d'achat.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://group-skid-95043529.figma.site" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Tester la démo MVP →
          </a>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-secondary">
            Demander une démo
          </a>
        </div>
      </section>
    </div>
  );
}

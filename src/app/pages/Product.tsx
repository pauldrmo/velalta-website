import { QrCode, Scan, CreditCard, Receipt, Shield, BarChart3, Database, Bell, CheckCircle } from "lucide-react";

const features = [
  {
    icon: QrCode,
    label: "QR d'entrée",
    step: "INIT",
    desc: "Un QR code à l'entrée du magasin ouvre instantanément la session d'achat. Aucun téléchargement requis — un lien suffit.",
    details: ["Ouverture en < 1 seconde", "Aucun compte requis", "Session sécurisée par token"],
  },
  {
    icon: Scan,
    label: "Scan produits",
    step: "SCAN",
    desc: "La caméra du smartphone devient un scanner. Chaque code-barres est reconnu en temps réel avec le prix, les promotions et les informations produit.",
    details: ["Code-barres EAN-13 / QR", "Ajout manuel possible", "Prix et promos live"],
  },
  {
    icon: CreditCard,
    label: "Paiement intégré",
    step: "PAY",
    desc: "Apple Pay, Google Pay, carte bancaire — le paiement est tokenisé, certifié PCI-DSS et instantané. Micro-surcharge de +0,8 % portée par le client.",
    details: ["Apple Pay & Google Pay", "Visa / Mastercard / Amex", "Stripe, Adyen, Wero, Worldline"],
  },
  {
    icon: Receipt,
    label: "QR de sortie",
    step: "EXIT",
    desc: "Un QR code de facture est généré après le paiement. Il est scanné au contrôle de sortie — en moins de 3 secondes.",
    details: ["QR unique par transaction", "Reçu email automatique", "Archivé dans l'application"],
  },
  {
    icon: Shield,
    label: "Anti-fraude",
    step: "VERIFY",
    desc: "Contrôles aléatoires, détection comportementale par IA, logs de transactions complets. La fraude est détectée sans ralentir les clients honnêtes.",
    details: ["Contrôles aléatoires discrets", "IA comportementale", "Logs temps réel"],
  },
  {
    icon: BarChart3,
    label: "Dashboard enseigne",
    step: "DATA",
    desc: "Les commerçants disposent d'un tableau de bord en temps réel : taux d'adoption, panier moyen, heures de pointe, revenus Scanpay.",
    details: ["Temps réel", "Export CSV / PDF", "Alertes configurables"],
  },
];

const techSpecs = [
  { label: "Compatibilité", val: "iOS 14+ / Android 8+" },
  { label: "Protocole", val: "HTTPS / TLS 1.3" },
  { label: "Certification", val: "PCI-DSS Level 1" },
  { label: "Disponibilité", val: "99,9 % SLA" },
  { label: "Latence paiement", val: "< 2 secondes" },
  { label: "API", val: "REST / JSON / Webhooks" },
];

export default function Product() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 56 }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--rule)", padding: "80px 40px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="sp-badge" style={{ marginBottom: 24, display: "inline-block" }}>Le produit</span>
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
            Ce que fait<br />
            <em style={{ color: "var(--signal)" }}>Scanpay.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
            Scanpay remplace la caisse traditionnelle par une séquence mobile : scan → paiement → sortie. Cinq étapes, moins de trente secondes, zéro file d'attente.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://group-skid-95043529.figma.site" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Tester la démo MVP →
            </a>
            <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-secondary">
              Demander une démo
            </a>
          </div>
        </div>
      </section>

      {/* Transaction sequence */}
      <section style={{ borderBottom: "1px solid var(--rule)", background: "var(--surface-dark)", padding: "32px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 12, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          {["SCAN", "IDENTIFY", "AUTHORIZE", "PAY", "VERIFY", "EXIT"].map((step, i, arr) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)" }}>{step}</span>
              {i < arr.length - 1 && <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(255,255,255,0.2)" }}>→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Fonctionnalités</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--ink)",
            }}>Six modules, un seul flux</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {features.map((f, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr 280px",
                borderBottom: "1px solid var(--rule)",
                background: i % 2 === 0 ? "var(--bg)" : "var(--bg-alt)",
              }}>
                {/* Icon + step */}
                <div style={{
                  padding: "32px 20px",
                  borderRight: "1px solid var(--rule)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}>
                  <div style={{
                    width: 36, height: 36,
                    background: "var(--signal-light)",
                    borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--signal-mid)",
                  }}>
                    <f.icon size={16} color="var(--signal)" />
                  </div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--signal)", textTransform: "uppercase" }}>{f.step}</span>
                </div>

                {/* Main */}
                <div style={{ padding: "32px 40px", borderRight: "1px solid var(--rule)" }}>
                  <h3 style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: 10,
                  }}>{f.label}</h3>
                  <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.75 }}>{f.desc}</p>
                </div>

                {/* Details */}
                <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
                  {f.details.map((d) => (
                    <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle size={13} color="var(--signal)" style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech specs */}
      <section style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span className="sp-badge" style={{ marginBottom: 16, display: "inline-block" }}>Spécifications</span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "var(--ink)",
            }}>Architecture technique</h2>
          </div>
          <div style={{
            background: "var(--bg)",
            border: "1px solid var(--rule)",
            borderRadius: 16,
            boxShadow: "var(--sh-md)",
            overflow: "hidden",
          }}>
            {techSpecs.map((s, i, arr) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 28px",
                borderBottom: i < arr.length - 1 ? "1px solid var(--rule-subtle)" : "none",
              }}>
                <span className="sp-label">{s.label}</span>
                <span style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--ink)",
                  fontWeight: 500,
                }}>{s.val}</span>
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
          }}>Prêt à voir le produit ?</h2>
          <p style={{ fontSize: 15, color: "var(--ink-2)", marginBottom: 36 }}>
            Testez la démo ou contactez-nous pour une démonstration en magasin.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://group-skid-95043529.figma.site" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Tester la démo →
            </a>
            <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-secondary">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

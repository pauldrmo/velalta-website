import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

function LiveClock() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("fr-FR", { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

const STATUS_CYCLE = ["PENDING", "AUTHORIZED", "COMPLETED"] as const;
type TxStatus = (typeof STATUS_CYCLE)[number];

function TransactionBlock() {
  const [status, setStatus] = useState<TxStatus>("PENDING");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => {
        const next = (i + 1) % STATUS_CYCLE.length;
        setStatus(STATUS_CYCLE[next]);
        return next;
      });
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const statusColor =
    status === "COMPLETED" ? "#22C55E" : status === "AUTHORIZED" ? "var(--signal)" : "var(--ink-3)";

  const rows = [
    ["TRANSACTION ID", "#VL-0482917"],
    ["STORE", "PARIS 15 — 00482"],
    ["DATE", "2026.09.14 / 14:38:21"],
    ["ITEMS", "07"],
    ["TOTAL", "€ 84.72"],
    ["PAYMENT", "APPLE PAY"],
    ["AUTHORIZATION", "GRANTED"],
  ];

  return (
    <div
      style={{
        background: "var(--surface-dark)",
        color: "var(--dark-text)",
        padding: "40px 48px",
        fontFamily: "var(--mono)",
      }}
    >
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.14em",
          color: "#555",
          marginBottom: 28,
          textTransform: "uppercase",
        }}
      >
        TRANSACTION RECORD — SCANPAY SYSTEM
      </div>
      {rows.map(([k, v]) => (
        <div
          key={k}
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #1E1E1E",
            padding: "9px 0",
            fontSize: 12,
          }}
        >
          <span style={{ color: "#555" }}>{k}</span>
          <span>{v}</span>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 16,
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        <span style={{ color: "#555" }}>STATUS</span>
        <span style={{ color: statusColor, letterSpacing: "0.06em" }}>{status}</span>
      </div>
    </div>
  );
}

function RevealSection({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const MONO: React.CSSProperties = { fontFamily: "var(--mono)" };
const RULE: React.CSSProperties = { height: 1, background: "var(--rule)", border: "none", margin: 0 };
const RULE_SUBTLE: React.CSSProperties = { height: 1, background: "var(--rule-subtle)", border: "none", margin: 0 };
const PAD = "clamp(24px, 4vw, 56px)";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 56 }}>

      {/* ── 01 HERO ─────────────────────────────────── */}
      <section
        style={{
          minHeight: "calc(100vh - 56px)",
          display: "flex",
          flexDirection: "column",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `16px ${PAD}`,
            borderBottom: "1px solid var(--rule-subtle)",
          }}
        >
          <span className="sp-label" style={{ color: "var(--signal)" }}>
            01 — THE OLD STORE
          </span>
          <span className="sp-label">PHYSICAL RETAIL TRANSACTION INFRASTRUCTURE</span>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            padding: `clamp(48px, 8vw, 96px) ${PAD}`,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "clamp(64px, 11vw, 152px)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
                marginBottom: 48,
              }}
            >
              THE STORE
              <br />
              WITHOUT
              <br />
              <span style={{ color: "var(--signal)" }}>THE LINE.</span>
            </h1>

            <p
              style={{
                ...MONO,
                fontSize: 13,
                color: "var(--ink-3)",
                lineHeight: 1.8,
                maxWidth: 440,
                marginBottom: 36,
              }}
            >
              Scanpay supprime la caisse du retail physique. Le client scanne ses produits, paie sur son téléphone, et quitte le magasin. Sans file d'attente. En toute simplicité.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="mailto:pauldormeau@icloud.com?subject=Demande%20de%20d%C3%A9mo%20%E2%80%94%20Scanpay"
                className="btn-primary"
              >
                DEMANDER UNE DÉMO
              </a>
              <a
                href="https://group-skid-95043529.figma.site"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                TESTER LA DÉMO MVP
              </a>
            </div>
          </div>

          {/* Right: live system indicator */}
          <div
            style={{
              ...MONO,
              fontSize: 11,
              letterSpacing: "0.1em",
              color: "var(--ink-3)",
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignSelf: "flex-end",
              paddingBottom: 4,
              whiteSpace: "nowrap",
            }}
            className="hidden lg:flex"
          >
            <span>
              <span className="blink-mech" style={{ color: "var(--signal)" }}>■</span>{" "}
              LIVE SYSTEM
            </span>
            <span>
              <LiveClock /> CET
            </span>
            <span>PARIS, FR</span>
          </div>
        </div>

        {/* Bottom bar: sequence */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `14px ${PAD}`,
            borderTop: "1px solid var(--rule)",
          }}
        >
          <div style={{ display: "flex", gap: 0, alignItems: "center" }}>
            {["SCAN", "IDENTIFY", "PAY", "VERIFY", "EXIT"].map((step, i) => (
              <span key={step} className="sp-label" style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && (
                  <span style={{ margin: "0 12px", color: "var(--rule)" }}>→</span>
                )}
                {step}
              </span>
            ))}
          </div>
          <span className="sp-label">01 / 08</span>
        </div>
      </section>

      {/* ── 02 THE SHIFT ─────────────────────────────── */}
      <section
        style={{
          background: "var(--surface-dark)",
          color: "var(--dark-text)",
          padding: `clamp(64px, 10vw, 120px) ${PAD}`,
          borderBottom: "1px solid #222",
        }}
      >
        <RevealSection>
          <span
            style={{
              ...MONO,
              fontSize: 11,
              letterSpacing: "0.1em",
              color: "#555",
              display: "block",
              marginBottom: 40,
            }}
          >
            02 — THE SHIFT
          </span>

          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 84px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: 900,
              marginBottom: 56,
            }}
          >
            "THE LINE IS A<br />
            LEGACY INTERFACE."
          </h2>

          <hr style={{ ...RULE_SUBTLE, background: "#222", marginBottom: 48 }} />

          <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" }}>
            {["SCAN", "PAY", "EXIT"].map((step, i) => (
              <span key={step} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && (
                  <span
                    style={{
                      ...MONO,
                      fontSize: "clamp(20px, 3vw, 36px)",
                      color: "#333",
                      margin: "0 24px",
                    }}
                  >
                    →
                  </span>
                )}
                <span
                  style={{
                    fontSize: "clamp(28px, 5vw, 64px)",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    color: i === 0 ? "var(--signal)" : "var(--dark-text)",
                  }}
                >
                  {step}
                </span>
              </span>
            ))}
          </div>

          <p
            style={{
              ...MONO,
              fontSize: 13,
              color: "#555",
              marginTop: 48,
              maxWidth: 500,
              lineHeight: 1.7,
            }}
          >
            La file d'attente n'est pas une fatalité. C'est une contrainte technologique héritée du XXe siècle. Scanpay la remplace par une interface mobile instantanée.
          </p>
        </RevealSection>
      </section>

      {/* ── 03 THE EXPERIENCE ────────────────────────── */}
      <section style={{ borderBottom: "1px solid var(--rule)" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: `16px ${PAD}`,
            borderBottom: "1px solid var(--rule)",
          }}
        >
          <span className="sp-label" style={{ color: "var(--signal)" }}>
            03 — THE EXPERIENCE
          </span>
          <span className="sp-label">CHECKOUT SEQUENCE / 5 STEPS</span>
        </div>

        {[
          {
            num: "01",
            step: "SCAN",
            title: "Vous entrez dans le magasin",
            desc: "À l'entrée, un QR code Scanpay ouvre instantanément votre session d'achat. Aucune inscription préalable. Aucun téléchargement obligatoire. Le magasin vous reconnaît.",
            detail: "Identification du point de vente — Ouverture du panier — Session sécurisée",
          },
          {
            num: "02",
            step: "IDENTIFY",
            title: "Chaque produit rejoint votre panier",
            desc: "Vous scannez les codes-barres directement en rayon avec votre téléphone. Le prix exact, les promotions actives et les informations produit s'affichent en temps réel.",
            detail: "EAN-13 / EAN-8 / QR / DataMatrix — Promos synchronisées — Ajout manuel possible",
          },
          {
            num: "03",
            step: "AUTHORIZE",
            title: "Le paiement s'autorise en une seconde",
            desc: "Apple Pay, Google Pay ou carte bancaire. Le paiement est sécurisé, tokenisé et conforme PCI-DSS. Aucun terminal physique. Aucune interaction avec un caissier.",
            detail: "Stripe · Adyen · Wero · Worldline — 3D Secure automatique — Tokenisation",
          },
          {
            num: "04",
            step: "VERIFY",
            title: "Un QR code de facture est généré",
            desc: "Immédiatement après le paiement, un QR code certifiant la transaction apparaît sur votre écran. Présentez-le au passage en sortie pour un contrôle anti-fraude rapide.",
            detail: "Reçu numérique — Contrôle anti-fraude — Facture envoyée par email",
          },
          {
            num: "05",
            step: "EXIT",
            title: "Vous sortez. Sans attendre.",
            desc: "La transaction est complète. Vous quittez le magasin avec votre reçu numérique. Le commerçant perçoit en retour une commission de 0,2 % sur chaque transaction Scanpay.",
            detail: "Durée totale : < 30 secondes — Commission commerçant : +0,2% / transaction",
          },
        ].map((item, i) => (
          <RevealSection key={item.num}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: i < 4 ? "1px solid var(--rule)" : "none",
              }}
              className="grid-cols-1 md:grid-cols-2"
            >
              {/* Left */}
              <div
                style={{
                  padding: `clamp(40px, 6vw, 72px) ${PAD}`,
                  borderRight: "1px solid var(--rule)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 32,
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "clamp(72px, 10vw, 120px)",
                      fontWeight: 900,
                      letterSpacing: "-0.05em",
                      color: "var(--rule)",
                      lineHeight: 1,
                      display: "block",
                      marginBottom: 16,
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(32px, 5vw, 60px)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      color: "var(--signal)",
                      display: "block",
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <span className="sp-label">{item.detail}</span>
              </div>

              {/* Right */}
              <div
                style={{
                  padding: `clamp(40px, 6vw, 72px) ${PAD}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 30px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--ink-2)",
                    lineHeight: 1.75,
                    maxWidth: 460,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </RevealSection>
        ))}
      </section>

      {/* ── 04 THE SYSTEM ────────────────────────────── */}
      <section
        style={{
          padding: `clamp(64px, 10vw, 120px) ${PAD}`,
          borderBottom: "1px solid var(--rule)",
          background: "var(--bg-alt)",
        }}
      >
        <RevealSection>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 56,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div>
              <span className="sp-label" style={{ color: "var(--signal)", display: "block", marginBottom: 16 }}>
                04 — THE SYSTEM
              </span>
              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 64px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "var(--ink)",
                }}
              >
                COMMENT ÇA<br />FONCTIONNE.
              </h2>
            </div>
            <div style={{ maxWidth: 400 }}>
              <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.75 }}>
                Scanpay est une infrastructure SaaS 100 % logicielle. Aucun matériel à installer. Aucun abonnement. L'intégration avec votre ERP existant se fait en 2 à 4 semaines.
              </p>
            </div>
          </div>

          <hr style={RULE} />

          {/* System grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }} className="grid-cols-1 md:grid-cols-3">
            {[
              {
                index: "A",
                title: "Application mobile",
                points: [
                  "PWA + app native iOS / Android",
                  "Scan continu haute performance",
                  "Paiement intégré (Apple / Google Pay)",
                  "Mode hors-ligne avec synchronisation",
                  "QR code de sortie certifié",
                ],
              },
              {
                index: "B",
                title: "Plateforme commerçant",
                points: [
                  "API REST compatible ERP / POS",
                  "Catalogue produits synchronisé",
                  "Dashboard analytics temps réel",
                  "Gestion des promotions automatique",
                  "Alertes et rapports configurables",
                ],
              },
              {
                index: "C",
                title: "Infrastructure paiement",
                points: [
                  "Stripe · Adyen · Wero · Worldline",
                  "Tokenisation PCI-DSS niveau 1",
                  "3D Secure automatique",
                  "Remboursements en 1 clic",
                  "Réconciliation comptable automatique",
                ],
              },
            ].map((col, i) => (
              <div
                key={col.index}
                style={{
                  padding: `40px ${PAD}`,
                  borderLeft: i > 0 ? "1px solid var(--rule)" : "none",
                }}
              >
                <div
                  style={{
                    ...MONO,
                    fontSize: 28,
                    fontWeight: 500,
                    color: "var(--rule)",
                    marginBottom: 12,
                  }}
                >
                  {col.index}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "var(--ink)",
                    marginBottom: 24,
                  }}
                >
                  {col.title}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.points.map((p) => (
                    <div
                      key={p}
                      style={{
                        ...MONO,
                        fontSize: 11,
                        color: "var(--ink-3)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: "var(--rule)", flexShrink: 0 }}>—</span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <hr style={{ ...RULE, marginTop: 0 }} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              paddingTop: 32,
            }}
            className="grid-cols-2 md:grid-cols-4"
          >
            {[
              { val: "2–4 SEM.", label: "Intégration" },
              { val: "99,9%", label: "Uptime SLA" },
              { val: "0 €", label: "Abonnement" },
              { val: "< 30 SEC.", label: "Checkout moyen" },
            ].map((s) => (
              <div
                key={s.label}
                style={{ textAlign: "center", padding: "16px 0" }}
              >
                <div
                  style={{
                    ...MONO,
                    fontSize: "clamp(20px, 3vw, 32px)",
                    fontWeight: 500,
                    color: "var(--signal)",
                    marginBottom: 6,
                  }}
                >
                  {s.val}
                </div>
                <div className="sp-label">{s.label}</div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ── 05 THE TRANSACTION ───────────────────────── */}
      <section
        style={{
          borderBottom: "1px solid var(--rule)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Left */}
        <div
          style={{
            padding: `clamp(64px, 10vw, 120px) ${PAD}`,
            borderRight: "1px solid var(--rule)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <RevealSection>
            <span className="sp-label" style={{ color: "var(--signal)", display: "block", marginBottom: 32 }}>
              05 — THE TRANSACTION
            </span>
            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 80px)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "var(--ink)",
                marginBottom: 32,
              }}
            >
              CHAQUE<br />
              <span style={{ color: "var(--signal)" }}>TRANSACTION</span><br />
              EST UN SIGNAL.
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 400 }}>
              Pour le client : une sortie immédiate. Pour le commerçant : un revenu additionnel de 0,2 % et une couche de données précieuse sur chaque achat.
            </p>
          </RevealSection>
        </div>

        {/* Right: animated transaction */}
        <div
          style={{
            padding: `clamp(64px, 10vw, 120px) ${PAD}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-alt)",
          }}
        >
          <RevealSection style={{ width: "100%", maxWidth: 480 }}>
            <TransactionBlock />
          </RevealSection>
        </div>
      </section>

      {/* ── 06 THE DATA ──────────────────────────────── */}
      <section
        style={{
          padding: `clamp(64px, 10vw, 120px) ${PAD}`,
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <RevealSection>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <span className="sp-label" style={{ color: "var(--signal)" }}>06 — THE DATA</span>
            <span className="sp-label">MARCHÉ / OPPORTUNITÉ / IMPACT</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
            }}
            className="grid-cols-1 md:grid-cols-3"
          >
            {[
              {
                val: "3 000",
                unit: "Md€",
                label: "Retail EU annuel",
                sub: "TAM — marché total adressable",
              },
              {
                val: "< 5",
                unit: "%",
                label: "Pénétration self-checkout",
                sub: "En France — la place est à prendre",
              },
              {
                val: "0,2",
                unit: "%",
                label: "Commission Scanpay",
                sub: "Par transaction via Scanpay",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: `48px ${PAD}`,
                  borderLeft: i > 0 ? "1px solid var(--rule)" : "none",
                  borderTop: "1px solid var(--rule)",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(56px, 9vw, 112px)",
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    lineHeight: 0.9,
                    color: "var(--ink)",
                    marginBottom: 4,
                  }}
                >
                  {item.val}
                  <span style={{ fontSize: "0.4em", color: "var(--signal)", marginLeft: 4 }}>
                    {item.unit}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: 8,
                    marginTop: 16,
                  }}
                >
                  {item.label}
                </div>
                <div className="sp-label">{item.sub}</div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ── 07 THE NETWORK ───────────────────────────── */}
      <section
        style={{
          background: "var(--bg-alt)",
          borderBottom: "1px solid var(--rule)",
          padding: `clamp(64px, 10vw, 120px) ${PAD}`,
        }}
      >
        <RevealSection>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <span className="sp-label" style={{ color: "var(--signal)" }}>07 — THE NETWORK</span>
            <span className="sp-label">INFRASTRUCTURE EN CONSTRUCTION</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 80px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "var(--ink)",
              marginBottom: 64,
            }}
          >
            SCANPAY EST UNE<br />
            INFRASTRUCTURE,<br />
            PAS UNE APPLICATION.
          </h2>

          {/* Network grid: store codes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              borderTop: "1px solid var(--rule)",
            }}
            className="grid-cols-2 md:grid-cols-4"
          >
            {[
              { code: "FR-PAR-001", city: "Paris 1er", status: "PILOT" },
              { code: "FR-PAR-015", city: "Paris 15e", status: "PILOT" },
              { code: "FR-LYO-003", city: "Lyon", status: "SOON" },
              { code: "FR-ROU-001", city: "Rouen", status: "SOON" },
              { code: "BE-BRU-002", city: "Bruxelles", status: "ROADMAP" },
              { code: "CH-ZRH-001", city: "Zürich", status: "ROADMAP" },
              { code: "ES-MAD-004", city: "Madrid", status: "ROADMAP" },
              { code: "FR-MAR-001", city: "Marseille", status: "SOON" },
            ].map((s, i) => (
              <div
                key={s.code}
                style={{
                  padding: "24px 20px",
                  borderBottom: "1px solid var(--rule)",
                  borderRight: i % 4 < 3 ? "1px solid var(--rule)" : "none",
                }}
              >
                <div
                  className="sp-label"
                  style={{
                    color:
                      s.status === "PILOT"
                        ? "var(--signal)"
                        : s.status === "SOON"
                        ? "var(--ink)"
                        : "var(--ink-3)",
                    marginBottom: 8,
                  }}
                >
                  {s.status}
                </div>
                <div style={{ ...MONO, fontSize: 11, color: "var(--ink-3)", marginBottom: 6 }}>{s.code}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{s.city}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <p style={{ ...MONO, fontSize: 12, color: "var(--ink-3)", lineHeight: 1.7 }}>
              Chaque enseigne partenaire devient un nœud du réseau Scanpay. Plus le réseau grandit, plus la valeur est forte pour chaque commerçant — et pour chaque client.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ── 08 THE FUTURE ────────────────────────────── */}
      <section
        style={{
          background: "var(--surface-dark)",
          color: "var(--dark-text)",
          padding: `clamp(80px, 12vw, 160px) ${PAD}`,
        }}
      >
        <RevealSection>
          <span
            style={{
              ...MONO,
              fontSize: 11,
              letterSpacing: "0.1em",
              color: "#555",
              display: "block",
              marginBottom: 48,
            }}
          >
            08 — THE FUTURE
          </span>

          <h2
            style={{
              fontSize: "clamp(40px, 7vw, 100px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              marginBottom: 48,
            }}
          >
            THE PHYSICAL STORE
            <br />
            IS CHANGING.
          </h2>

          <hr style={{ height: 1, background: "#222", border: "none", marginBottom: 48 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end" }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <h3
                style={{
                  fontSize: "clamp(28px, 4vw, 56px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  color: "var(--signal)",
                  marginBottom: 32,
                }}
              >
                SCANPAY IS THE<br />
                TRANSACTION LAYER.
              </h3>
              <p
                style={{
                  ...MONO,
                  fontSize: 13,
                  color: "#555",
                  lineHeight: 1.8,
                  maxWidth: 440,
                  marginBottom: 40,
                }}
              >
                Nous ne construisons pas une application de paiement. Nous construisons l'infrastructure transactionnelle du retail physique de demain.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="mailto:pauldormeau@icloud.com?subject=Investissement%20Scanpay%20%E2%80%94%20Pitch%20Deck"
                  style={{
                    ...MONO,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    padding: "13px 24px",
                    background: "var(--signal)",
                    color: "white",
                    border: "1px solid var(--signal)",
                    transition: "opacity 0.12s",
                  }}
                >
                  INVESTIR DANS SCANPAY →
                </a>
                <a
                  href="mailto:pauldormeau@icloud.com?subject=Demande%20de%20d%C3%A9mo%20%E2%80%94%20Scanpay"
                  style={{
                    ...MONO,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    padding: "12px 24px",
                    background: "transparent",
                    color: "#555",
                    border: "1px solid #333",
                    transition: "border-color 0.12s, color 0.12s",
                  }}
                >
                  DÉMO COMMERÇANT
                </a>
              </div>
            </div>

            {/* Right: key proposition */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                ["MODÈLE", "100 % SaaS — 0 € d'abonnement"],
                ["COMMISSION", "0,2 % / transaction via Scanpay"],
                ["INTÉGRATION", "2 à 4 semaines"],
                ["SÉCURITÉ", "PCI-DSS · RGPD · 3D Secure"],
                ["PAIEMENT", "Stripe · Adyen · Wero · Worldline"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: i === 0 ? "1px solid #222" : "none",
                    borderBottom: "1px solid #222",
                    padding: "14px 0",
                    ...MONO,
                    fontSize: 12,
                  }}
                >
                  <span style={{ color: "#555" }}>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}

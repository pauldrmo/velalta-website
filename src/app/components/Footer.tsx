import { Link } from "react-router";

const MONO: React.CSSProperties = { fontFamily: "var(--mono)" };

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const socials = [
  {
    label: "LI",
    href: "https://www.linkedin.com/in/paul-dormeau-681288270/",
    aria: "LinkedIn",
  },
  {
    label: "IG",
    href: "https://www.instagram.com/scanpay.app",
    aria: "Instagram",
  },
  {
    label: "ML",
    href: "mailto:pauldormeau@icloud.com",
    aria: "Email",
  },
];

const links = [
  {
    heading: "PRODUIT",
    items: [
      { label: "Fonctionnalités", path: "/produit" },
      { label: "Comment ça marche", path: "/comment-ca-marche" },
      { label: "Sécurité", path: "/securite" },
      { label: "Tarifs", path: "/tarifs" },
    ],
  },
  {
    heading: "SOLUTIONS",
    items: [
      { label: "Pour les enseignes", path: "/pour-les-enseignes" },
      { label: "Pour les investisseurs", path: "/pour-les-investisseurs" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    heading: "LÉGAL",
    items: [
      { label: "Mentions légales", path: "/mentions-legales" },
      { label: "Confidentialité", path: "/confidentialite" },
      { label: "CGU", path: "/cgu" },
      { label: "RGPD", path: "/rgpd" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark-bg)", color: "var(--dark-text)", borderTop: "1px solid #1E1E1E" }}>
      {/* Main grid */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 40px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
        }}
        className="grid-cols-1 md:grid-cols-4"
      >
        {/* Brand */}
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                ...MONO,
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--dark-text)",
              }}
            >
              SCANPAY
            </span>
          </Link>
          <p
            style={{
              ...MONO,
              fontSize: 11,
              color: "#555",
              lineHeight: 1.8,
              marginTop: 20,
              maxWidth: 280,
            }}
          >
            Physical retail transaction infrastructure. Scan. Pay. Exit.
          </p>
          <div style={{ display: "flex", gap: 0, marginTop: 28 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.aria}
                style={{
                  ...MONO,
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  color: "#555",
                  textDecoration: "none",
                  padding: "8px 14px 8px 0",
                  transition: "color 0.12s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {s.label}
              </a>
            ))}
          </div>
          <p style={{ ...MONO, fontSize: 10, color: "#444", marginTop: 20 }}>
            PARIS & ROUEN, FR
          </p>
        </div>

        {/* Link columns */}
        {links.map((col) => (
          <div key={col.heading}>
            <div
              style={{
                ...MONO,
                fontSize: 10,
                letterSpacing: "0.12em",
                color: "#444",
                marginBottom: 20,
              }}
            >
              {col.heading}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    fontSize: 13,
                    color: "#888",
                    textDecoration: "none",
                    transition: "color 0.12s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--dark-text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{ borderTop: "1px solid #1A1A1A" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "20px 40px",
          }}
        >
          <p style={{ ...MONO, fontSize: 10, color: "#333", lineHeight: 1.7 }}>
            Scanpay est une startup en phase de lancement. Les certifications mentionnées sont en cours de validation. Ce site est un projet pilote destiné à recueillir l'intérêt des partenaires. Toutes les fonctionnalités décrites sont prévues mais non encore déployées en production.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #151515" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "16px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ ...MONO, fontSize: 10, color: "#333" }}>
            © 2026 SCANPAY TECHNOLOGIES SAS
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--signal)", display: "inline-block" }} />
            <span style={{ ...MONO, fontSize: 10, color: "#333" }}>SYSTÈMES OPÉRATIONNELS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

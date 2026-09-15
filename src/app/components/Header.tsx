import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "PRODUCT",  path: "/produit" },
  { label: "SYSTEM",   path: "/comment-ca-marche" },
  { label: "NETWORK",  path: "/pour-les-enseignes" },
  { label: "COMPANY",  path: "/pour-les-investisseurs" },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "var(--bg)",
      borderBottom: "1px solid var(--rule)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56,
      }}>

        {/* Wordmark */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 900,
            letterSpacing: "0.04em",
            color: "var(--ink)",
          }}>
            SCANPAY
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex" style={{ gap: 0, alignItems: "center" }}>
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  padding: "0 20px",
                  color: active ? "var(--signal)" : "var(--ink-3)",
                  transition: "color 0.12s",
                  lineHeight: "56px",
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "var(--ink)"; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "var(--ink-3)"; }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay"
          className="hidden lg:inline-flex"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textDecoration: "none",
            padding: "9px 18px",
            border: "1px solid var(--ink)",
            color: "var(--ink)",
            transition: "background 0.12s, color 0.12s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--bg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ink)"; }}
        >
          CONTACT →
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--ink)", padding: 8, display: "flex" }}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid var(--rule)", background: "var(--bg)", padding: "0 40px 24px" }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "block",
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: "0.1em",
                textDecoration: "none",
                color: location.pathname === item.path ? "var(--signal)" : "var(--ink)",
                padding: "14px 0",
                borderBottom: "1px solid var(--rule-subtle)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay"
            style={{
              display: "block",
              marginTop: 20,
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textDecoration: "none",
              color: "var(--bg)",
              background: "var(--ink)",
              padding: "14px 20px",
              textAlign: "center",
            }}
          >
            CONTACT →
          </a>
        </div>
      )}
    </header>
  );
}

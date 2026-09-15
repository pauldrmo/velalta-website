import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    title: "Le produit",
    faqs: [
      { q: "Qu'est-ce que Scanpay ?", a: "Scanpay est une solution de self-checkout mobile qui permet aux clients de scanner leurs produits en rayon, payer dans l'application et sortir du magasin sans passer par une caisse traditionnelle." },
      { q: "Est-ce que ça fonctionne sur tous les smartphones ?", a: "Oui. Scanpay est compatible avec tous les smartphones iOS (iPhone 11 et +) et Android (Android 8.0 et +) disposant d'un appareil photo." },
      { q: "Et si un produit ne scanne pas ?", a: "L'application permet d'ajouter manuellement un produit via sa recherche ou son code-barres saisi. Un assistant vous guide à chaque étape." },
      { q: "Et si vous perdez le réseau ?", a: "L'application fonctionne en mode hors ligne. Vos scans sont enregistrés localement et synchronisés une fois la connexion rétablie." },
    ],
  },
  {
    title: "Paiements",
    faqs: [
      { q: "Quels modes de paiement sont acceptés ?", a: "Apple Pay, Google Pay, carte bancaire Visa/Mastercard et American Express. Stripe, Adyen, Wero et Worldline sont nos partenaires certifiés." },
      { q: "Mes données de carte sont-elles sécurisées ?", a: "Oui. Scanpay ne stocke jamais les numéros de carte bancaire. Seul un token sécurisé est conservé, via nos partenaires certifiés PCI-DSS." },
      { q: "Comment se passe le remboursement ?", a: "En cas de retour produit, le remboursement est effectué sur le mode de paiement d'origine dans un délai de 3 à 5 jours ouvrés." },
    ],
  },
  {
    title: "Pour les enseignes",
    faqs: [
      { q: "Combien de temps pour intégrer Scanpay ?", a: "L'intégration complète prend entre 2 et 4 semaines selon la complexité de votre infrastructure existante. Notre équipe vous accompagne à chaque étape." },
      { q: "Scanpay est-il compatible avec mon ERP ?", a: "Scanpay dispose d'une API REST complète compatible avec Cegid, Sage, SAP Retail, Odoo et la plupart des systèmes POS du marché. Pour un ERP custom, nos équipes peuvent réaliser l'intégration." },
      { q: "Comment gérer les promotions ?", a: "Les promotions sont automatiquement appliquées lors du scan via la synchronisation de votre catalogue produits. Le client voit le prix réduit en temps réel." },
      { q: "Comment éviter la fraude ?", a: "Scanpay combine plusieurs couches anti-fraude : contrôles aléatoires à la sortie, logs des transactions, détection comportementale par IA et vérifications croisées avec votre stock." },
    ],
  },
  {
    title: "Conformité & sécurité",
    faqs: [
      { q: "Scanpay est-il conforme au RGPD ?", a: "Oui. Scanpay collecte uniquement les données strictement nécessaires, conformément au principe de minimisation du RGPD. Aucune donnée personnelle n'est revendue." },
      { q: "Quelles données Scanpay collecte-t-il ?", a: "Scanpay collecte uniquement les données de transaction (produits, montant, horodatage), un email si le client crée un compte, et des données comportementales anonymisées." },
    ],
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div style={{ background: "var(--bg)", paddingTop: 56 }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--rule)", padding: "80px 40px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span className="sp-badge" style={{ marginBottom: 24, display: "inline-block" }}>FAQ</span>
          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(42px, 7vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 24,
          }}>
            Questions<br />
            <em style={{ color: "var(--signal)" }}>fréquentes.</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 480 }}>
            Tout ce que vous devez savoir sur Scanpay. Vous ne trouvez pas votre réponse ? Contactez-nous directement.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section style={{ padding: "64px 40px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
          {categories.map((cat, ci) => (
            <div key={ci}>
              {/* Category header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
                paddingBottom: 16,
                borderBottom: "2px solid var(--signal)",
              }}>
                <span style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--signal)",
                  background: "var(--signal-light)",
                  border: "1px solid var(--signal-mid)",
                  borderRadius: 4,
                  padding: "4px 10px",
                }}>0{ci + 1}</span>
                <h2 style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 700,
                  color: "var(--ink)",
                }}>{cat.title}</h2>
              </div>

              {/* FAQ items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {cat.faqs.map((faq, fi) => {
                  const key = `${ci}-${fi}`;
                  const open = openItem === key;
                  return (
                    <div
                      key={fi}
                      style={{
                        background: "var(--bg)",
                        border: `1px solid ${open ? "var(--signal-mid)" : "var(--rule)"}`,
                        borderRadius: 10,
                        overflow: "hidden",
                        boxShadow: open ? "var(--sh-sm)" : "var(--sh-xs)",
                        transition: "box-shadow 0.2s, border-color 0.2s",
                      }}
                    >
                      <button
                        onClick={() => setOpenItem(open ? null : key)}
                        style={{
                          width: "100%",
                          padding: "20px 24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          gap: 16,
                        }}
                      >
                        <span style={{
                          fontFamily: "var(--serif)",
                          fontSize: 16,
                          fontWeight: 600,
                          color: "var(--ink)",
                          lineHeight: 1.4,
                        }}>{faq.q}</span>
                        <ChevronDown
                          size={18}
                          color={open ? "var(--signal)" : "var(--ink-3)"}
                          style={{
                            flexShrink: 0,
                            transition: "transform 0.2s",
                            transform: open ? "rotate(180deg)" : "none",
                          }}
                        />
                      </button>
                      {open && (
                        <div style={{
                          padding: "0 24px 20px",
                          borderTop: "1px solid var(--rule-subtle)",
                        }}>
                          <p style={{
                            fontSize: 14,
                            color: "var(--ink-2)",
                            lineHeight: 1.8,
                            paddingTop: 16,
                          }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--rule)", padding: "64px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: 16,
          }}>Vous avez une autre question ?</h2>
          <p style={{ fontSize: 15, color: "var(--ink-2)", marginBottom: 32 }}>Notre équipe répond sous 24h.</p>
          <a href="mailto:pauldormeau@icloud.com?subject=Contact%20Scanpay" className="btn-primary">
            Nous contacter →
          </a>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router";
import { Linkedin, Mail, MapPin } from "lucide-react";

const VelaltaLogo = () => (
  <div className="flex items-center gap-2.5">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="9" fill="url(#footer-logo-grad)" />
      <path d="M7 16 L13 23 L27 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M23 9 L27 8 L26 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <defs>
        <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
    <span className="text-[19px] font-bold text-white tracking-tight">Velalta</span>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#020609] border-t border-white/[0.06]">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <VelaltaLogo />
            </Link>
            <p className="mt-5 text-white/50 text-[15px] leading-relaxed max-w-xs">
              La plateforme de self-checkout mobile qui réinvente l'expérience d'achat en magasin.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/paul-dormeau-681288270/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:pauldormeau@icloud.com"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <div className="mt-5 flex items-start gap-2 text-white/30 text-[13px]">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              <span>Paris &amp; Rouen, France</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[13px] font-semibold text-white/40 uppercase tracking-widest mb-5">Produit</h4>
            <ul className="space-y-3">
              {[
                { label: "Fonctionnalités", path: "/produit" },
                { label: "Comment ça marche", path: "/comment-ca-marche" },
                { label: "Sécurité", path: "/securite" },
                { label: "Tarifs", path: "/tarifs" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/55 hover:text-white text-[14px] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[13px] font-semibold text-white/40 uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: "Pour les enseignes", path: "/pour-les-enseignes" },
                { label: "Pour les investisseurs", path: "/pour-les-investisseurs" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/55 hover:text-white text-[14px] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[13px] font-semibold text-white/40 uppercase tracking-widest mb-5">Légal</h4>
            <ul className="space-y-3">
              {[
                "Mentions légales",
                "Confidentialité",
                "CGU",
                "RGPD",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/55 hover:text-white text-[14px] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Startup disclaimer */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-6">
          <p className="text-white/25 text-[12px] leading-relaxed text-center">
            Velalta est une startup en phase de lancement. Les certifications et conformités mentionnées sont en cours de validation. Ce site est un projet pilote destiné à recueillir l'intérêt des partenaires potentiels. Toutes les fonctionnalités décrites sont prévues mais non encore déployées en production.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[13px]">
            © 2026 Velalta Technologies SAS. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-white/25 text-[13px]">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tous les systèmes opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

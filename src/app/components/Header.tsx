import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const VelaltaLogo = () => (
  <div className="flex items-center gap-2.5">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="9" fill="url(#logo-grad)" />
      {/* Checkmark body = validation ✓ + velocity V shape */}
      <path d="M7 16 L13 23 L27 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Arrow tip = velocity vector → */}
      <path d="M23 9 L27 8 L26 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
    <span className="text-[20px] font-bold text-white tracking-tight">Velalta</span>
  </div>
);

const navItems = [
  { label: "Produit", path: "/produit" },
  { label: "Pour les enseignes", path: "/pour-les-enseignes" },
  { label: "Investisseurs", path: "/pour-les-investisseurs" },
  { label: "Sécurité", path: "/securite" },
  { label: "Tarifs", path: "/tarifs" },
  { label: "FAQ", path: "/faq" },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050A14]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <VelaltaLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-150 ${
                  location.pathname === item.path
                    ? "text-white bg-white/[0.08]"
                    : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 text-[14px] font-medium text-white/70 hover:text-white transition-colors"
            >
              Connexion
            </Link>
            <Link
              to="/contact"
              className="btn-primary text-[14px] py-2.5 px-5"
            >
              <span>Demander une démo</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#050A14]/98 backdrop-blur-xl border-t border-white/[0.07]">
          <nav className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-white bg-white/[0.08]"
                    : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/[0.07] mt-4">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary block text-center text-[15px]"
              >
                <span>Demander une démo</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

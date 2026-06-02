import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#050A14] min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-[120px] font-black gradient-text leading-none mb-6">404</div>
        <h1 className="text-[36px] font-black text-white mb-4">Page introuvable</h1>
        <p className="text-[18px] text-white/50 mb-10 max-w-md mx-auto">
          Cette page n'existe pas ou a été déplacée. Retournez à l'accueil pour continuer votre exploration.
        </p>
        <Link to="/" className="btn-primary text-[15px] inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}

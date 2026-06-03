import { useNavigate } from "react-router";
import { X } from "lucide-react";

export default function LegalCloseButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Fermer"
      className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.12] border border-white/[0.08] transition-all"
    >
      <X size={18} />
    </button>
  );
}

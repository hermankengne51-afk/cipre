import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FloatingDonateButton() {
  const { t } = useLanguage();

  return (
    <Link
      to="/donate"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={t("Donate", "Faire un Don")}
    >
      <div className="relative">
        {/* Animated Pulse Ring */}
        <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-75"></div>

        {/* Main Button */}
        <div className="relative flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <Heart className="w-5 h-5 fill-current animate-pulse" />
          <span className="font-bold text-sm hidden sm:inline">
            {t("Donate", "Faire un Don")}
          </span>
        </div>
      </div>
    </Link>
  );
}

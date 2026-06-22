import { useLanguage } from "@/contexts/LanguageContext";

// lucide-react n'expose plus d'icônes de marques (Facebook) depuis la v1 —
// glyphe Facebook officiel reconstitué en SVG inline.
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function Footer() {
  const { language } = useLanguage();

  const translations = {
    en: {
      coordinates: "OUR CONTACT INFORMATION",
      generalDirection: "General Direction",
      followUs: "Follow us on social media",
      copyright:
        "Copyright © 2018 - CIPCRE. All rights reserved. Powered by DASER-TELECOM Sarl",
    },
    fr: {
      coordinates: "NOS COORDONNEES",
      generalDirection: "Direction Générale",
      followUs: "Suivez nous sur les réseaux sociaux",
      copyright:
        "Copyright © 2018 - CIPCRE. Tous droits réservés. Propulsé par DASER-TELECOM Sarl",
    },
  };

  const t = translations[language];

  return (
    <footer>
      {/* Green Top Bar */}
      <div className="bg-[#1B5E20] h-2"></div>

      {/* Main Footer Content */}
      <div className="bg-[#1a1a1a] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
          {/* Title */}
          <h2 className="text-xl lg:text-2xl font-bold text-center mb-8 lg:mb-10 tracking-wider">
            {t.coordinates}
          </h2>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            {/* Direction Générale */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#1B5E20] font-semibold mb-3 text-base">
                {t.generalDirection}
              </h3>
              <div className="space-y-1.5 text-sm text-neutral-300">
                <p>B.P. 1256 Bafoussam</p>
                <p>Tel: +237 6 94 03 30 42</p>
                <a
                  href="mailto:cipcre_dg@cipcre.org"
                  className="text-[#4A9EFF] hover:text-[#6AB3FF] transition-colors block"
                >
                  cipcre_dg@cipcre.org
                </a>
              </div>
            </div>

            {/* CIPCRE-Cameroun */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#4A9EFF] font-semibold mb-3 text-base">
                CIPCRE-Cameroun
              </h3>
              <div className="space-y-1.5 text-sm text-neutral-300">
                <p>B.P. 1256 Bafoussam,</p>
                <p>Cameroun</p>
                <p>Tel: +237 6 94 02 14 74</p>
                <a
                  href="mailto:cipcre_cameroun@cipcre.org"
                  className="text-[#4A9EFF] hover:text-[#6AB3FF] transition-colors block"
                >
                  cipcre_cameroun@cipcre.org
                </a>
              </div>
            </div>

            {/* CIPCRE-Bénin */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#4A9EFF] font-semibold mb-3 text-base">
                CIPCRE-Bénin
              </h3>
              <div className="space-y-1.5 text-sm text-neutral-300">
                <p>B.P. 287 Porto-Novo, Bénin</p>
                <p>Tel: +229 97 63 77 87</p>
                <a
                  href="https://www.cipcre.org/cipcrebenin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A9EFF] hover:text-[#6AB3FF] transition-colors block"
                >
                  www.cipcre.org/cipcrebenin
                </a>
                <a
                  href="mailto:cipcre-benin@cipcre.org"
                  className="text-[#4A9EFF] hover:text-[#6AB3FF] transition-colors block"
                >
                  cipcre-benin@cipcre.org
                </a>
              </div>
            </div>

            {/* CIPCRE-Togo */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#4A9EFF] font-semibold mb-3 text-base">
                CIPCRE-Togo
              </h3>
              <div className="space-y-1.5 text-sm text-neutral-300">
                <p>149, Rue de l'Ojou Kodjoviakoé</p>
                <p>01 B.P. Lomé, Togo</p>
                <p>Tél: +228 90 26 33 36</p>
                <a
                  href="https://www.cipcre.org/cipcretogo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A9EFF] hover:text-[#6AB3FF] transition-colors block"
                >
                  www.cipcre.org/cipcretogo
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center py-4 border-t border-neutral-700">
            <p className="text-xs text-neutral-400 italic mb-3">{t.followUs}</p>
            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/cipcre"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3b5998] hover:bg-[#4c6baa] p-2 rounded transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-neutral-700">
            <p className="text-xs text-neutral-500">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

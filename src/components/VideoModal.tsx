import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoModalProps) {
  // Empêcher le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Détecter le type de contenu
  const isNotebookLM = videoUrl.includes("notebooklm.google.com");
  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  // Extraire l'ID de la vidéo YouTube si c'est un lien YouTube
  const getYouTubeEmbedUrl = (url: string) => {
    // Si c'est déjà une URL embed, la retourner telle quelle
    if (url.includes("embed")) {
      return url;
    }

    // Extraire l'ID de différents formats d'URL YouTube
    let videoId = "";

    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("embed/")[1].split("?")[0];
    }

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  };

  const embedUrl = isYouTube ? getYouTubeEmbedUrl(videoUrl) : videoUrl;

  // Pour NotebookLM, on affiche un message et un bouton pour ouvrir dans un nouvel onglet
  if (isNotebookLM) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#1B5E20] px-4 sm:px-6 py-4 sm:py-5">
            <h3 className="font-semibold text-base sm:text-lg text-white pr-4">
              {title || "CIPCRE Guided Tour"}
            </h3>
            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <ExternalLink className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
              Découvrez le CIPCRE
            </h4>

            <p className="text-neutral-600 mb-6 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Cette visite guidée interactive s'ouvrira dans un nouvel onglet.
              Vous découvrirez notre organisation, nos projets et notre impact à
              travers une présentation audio immersive.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => {
                  window.open(videoUrl, "_blank", "noopener,noreferrer");
                  onClose();
                }}
                size="lg"
                className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white shadow-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ouvrir la Visite Guidée
              </Button>

              <Button
                onClick={onClose}
                size="lg"
                variant="outline"
                className="border-2 border-neutral-300 hover:bg-neutral-100"
              >
                Fermer
              </Button>
            </div>

            <p className="text-xs text-neutral-500 mt-6">
              💡 Assurez-vous d'avoir autorisé les fenêtres pop-up dans votre
              navigateur
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Pour YouTube et autres vidéos, afficher l'iframe
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-neutral-900 rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-neutral-800/95 px-4 sm:px-6 py-3 sm:py-4">
          <h3 className="font-semibold text-sm sm:text-base text-white truncate pr-4">
            {title || "Video"}
          </h3>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
            aria-label="Close video"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative bg-black" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title={title || "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Target } from "lucide-react";
import { Route } from "@/routes/programs";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1666987571351-737b29874697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function ProgramsPage() {
  const programs = Route.useLoaderData();
  const { language, t } = useLanguage();

  const title = (fr: string, en: string) => (language === "fr" ? fr : en);

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-linear-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="relative max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide uppercase">
              {programs.length}{" "}
              {t("Strategic Programs", "Programmes Stratégiques")}
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight max-w-4xl">
            {t("Our Programs", "Nos Programmes")}
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            {t(
              "We implement integrated, multi-sectoral programs that address critical development challenges and create sustainable impact for communities across Central Africa.",
              "Nous mettons en œuvre des programmes intégrés et multi-sectoriels qui répondent aux défis critiques du développement et créent un impact durable pour les communautés d'Afrique Centrale.",
            )}
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-20">
        {programs.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500 text-lg">
              {t(
                "No programs published yet.",
                "Aucun programme publié pour le moment.",
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Link
                key={program.slug}
                to="/programs/$slug"
                params={{ slug: program.slug }}
                className="block"
              >
                <Card className="group relative overflow-hidden border-2 border-neutral-100 hover:border-[#1B5E20]/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={program.coverImageUrl ?? FALLBACK_IMAGE}
                      alt={title(program.titleFr, program.titleEn)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#1B5E20] text-white border-0 text-xs font-bold px-3 py-1">
                        {program.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-neutral-900 group-hover:text-[#1B5E20] transition-colors leading-snug">
                      {title(program.titleFr, program.titleEn)}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm mb-6 line-clamp-3">
                      {title(program.summaryFr, program.summaryEn)}
                    </p>

                    <Button className="w-full bg-[#1B5E20] hover:bg-[#2E7D32] text-white pointer-events-none">
                      {t(
                        "Learn More About This Program",
                        "En savoir plus sur ce programme",
                      )}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="relative bg-linear-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute top-8 left-8 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-8 right-8 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-360 mx-auto px-6 sm:px-12 py-12 lg:py-16 text-center relative z-10">
          <h2 className="mb-3 text-white text-2xl lg:text-3xl">
            {t("Interested in Partnering With Us?", "Intéressé par un Partenariat ?")}
          </h2>
          <p className="text-base lg:text-lg text-white/85 mb-6 max-w-2xl mx-auto leading-relaxed">
            {t(
              "We collaborate with governments, donors, NGOs, and community organizations to scale impact.",
              "Nous collaborons avec des gouvernements, donateurs, ONG et organisations communautaires pour amplifier l'impact.",
            )}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#1B5E20] hover:bg-white/95 shadow-xl px-6 py-5 font-bold group"
          >
            <Link to="/partnerships" className="inline-flex items-center">
              {t("Explore Partnership Opportunities", "Explorer les Opportunités de Partenariat")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

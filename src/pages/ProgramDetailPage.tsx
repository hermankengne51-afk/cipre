import { Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Calendar, FileText, Tag } from "lucide-react";
import type { DrizzleProgram } from "@/integrations/drizzle/schema/programs.drizzle";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1666987571351-737b29874697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

interface Props {
  program: DrizzleProgram;
}

export function ProgramDetailPage({ program }: Props) {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const title = isFr ? program.titleFr : program.titleEn;
  const summary = isFr ? program.summaryFr : program.summaryEn;
  const content = isFr ? program.contentFr : program.contentEn;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 pt-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/programs">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {isFr ? "Retour aux Programmes" : "Back to Programs"}
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={program.coverImageUrl ?? FALLBACK_IMAGE}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 pb-12 w-full">
            <Badge className="bg-[#1B5E20] text-white border-0 mb-4 text-sm px-4 py-1">
              {program.category}
            </Badge>
            <h1 className="mb-4 text-white max-w-4xl leading-tight">{title}</h1>
            {program.publishedAt && (
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(program.publishedAt).toLocaleDateString(
                    isFr ? "fr-FR" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" },
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            {summary && (
              <div className="mb-10 p-6 bg-[#E8F5E9] rounded-xl border-l-4 border-[#1B5E20]">
                <p className="text-neutral-800 text-lg leading-relaxed">
                  {summary}
                </p>
              </div>
            )}

            {content ? (
              <div
                className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-neutral-700 prose-p:leading-relaxed prose-ul:text-neutral-700 prose-li:my-2 prose-strong:text-neutral-900"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="text-center py-16 text-neutral-400">
                <BookOpen className="w-12 h-12 mx-auto mb-3" />
                <p>
                  {isFr
                    ? "Contenu détaillé à venir."
                    : "Detailed content coming soon."}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white border-2 border-neutral-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-5 h-5 text-[#1B5E20]" />
                  <h3 className="text-neutral-900 font-semibold">
                    {isFr ? "Programme" : "Program"}
                  </h3>
                </div>
                <p className="text-2xl font-bold text-[#1B5E20]">
                  {program.category}
                </p>
              </div>

              <div className="bg-linear-to-br from-[#1B5E20] to-[#2E7D32] text-white rounded-xl p-6">
                <h3 className="mb-3 text-white font-semibold">
                  {isFr ? "Documentation" : "Documentation"}
                </h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {isFr
                    ? "Accédez aux rapports, études et documents du programme."
                    : "Access program reports, studies and documents."}
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="w-full bg-white text-[#1B5E20] hover:bg-white/90"
                >
                  <Link to="/documentation">
                    <FileText className="mr-2 w-4 h-4" />
                    {isFr ? "Voir les Documents" : "View Documents"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

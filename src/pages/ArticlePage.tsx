import { Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Calendar, User } from "lucide-react";
import type { DrizzleNewsArticle } from "@/integrations/drizzle/schema/news-articles.drizzle";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1563457012475-13cf086fd600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

interface Props {
  article: DrizzleNewsArticle;
}

export function ArticlePage({ article }: Props) {
  const { language, t } = useLanguage();
  const isFr = language === "fr";

  const title = isFr ? article.titleFr : article.titleEn;
  const excerpt = isFr ? article.excerptFr : article.excerptEn;
  const content = isFr ? article.contentFr : article.contentEn;

  return (
    <div className="min-h-screen bg-white">
      {/* Back */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 pt-8">
        <Button asChild variant="ghost">
          <Link to="/news">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t("Back to News", "Retour aux Actualités")}
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="relative h-80 overflow-hidden mt-4">
        <img
          src={article.coverImageUrl ?? FALLBACK_IMAGE}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 pb-10 w-full">
            <Badge className="bg-[#1B5E20] text-white border-0 mb-3">
              {article.category}
            </Badge>
            <h1 className="text-white max-w-3xl leading-tight">{title}</h1>
          </div>
        </div>
      </section>

      {/* Meta */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-6 border-b border-neutral-100">
        <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
          {article.publishedAt && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(article.publishedAt).toLocaleDateString(
                isFr ? "fr-FR" : "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </span>
          )}
          {article.author && (
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {article.author}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-3xl mx-auto">
          {excerpt && (
            <p className="text-xl text-neutral-700 leading-relaxed mb-8 font-medium border-l-4 border-[#1B5E20] pl-5">
              {excerpt}
            </p>
          )}

          {content ? (
            <div
              className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-headings:font-semibold prose-p:text-neutral-700 prose-p:leading-relaxed prose-ul:text-neutral-700 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <div className="text-center py-12 text-neutral-400">
              <BookOpen className="w-10 h-10 mx-auto mb-3" />
              <p>{t("Full article content coming soon.", "Contenu complet à venir.")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import { useState } from "react";
import { Route } from "@/routes/news";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1563457012475-13cf086fd600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const MOCK_NEWS = [
  { id: "n1", slug: "hub-entrepreneuriat-feminin-yaounde", titleFr: "Le CIPCRE Lance un Hub d'Entrepreneuriat Féminin à Yaoundé", titleEn: "CIPCRE Launches Women's Entrepreneurship Hub in Yaoundé", excerptFr: "Le nouveau hub offrira formation, mentorat et accès au financement pour 500 femmes entrepreneures à travers le Cameroun.", excerptEn: "The new hub will provide training, mentorship, and access to financing for 500 women entrepreneurs across Cameroon.", category: "Lancement de Programme", coverImageUrl: "https://images.unsplash.com/photo-1610626295085-aa8d6ae8daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", author: "Équipe CIPCRE", publishedAt: new Date("2026-01-15") },
  { id: "n2", slug: "partenariat-ue-education", titleFr: "Partenariat avec l'UE pour une Initiative Régionale en Éducation", titleEn: "Partnership with EU for Regional Education Initiative", excerptFr: "Un nouveau partenariat de 12 millions d'euros améliorera la qualité et l'accès à l'éducation pour 200 000 enfants en Afrique Centrale.", excerptEn: "New €12 million partnership will improve education quality and access for 200,000 children across Central Africa.", category: "Partenariat", coverImageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", author: "Direction CIPCRE", publishedAt: new Date("2025-12-20") },
  { id: "n3", slug: "recherche-resilience-climatique", titleFr: "Nouvelles Recherches sur la Résilience Climatique en Agriculture", titleEn: "New Research Published on Climate Resilience in Agriculture", excerptFr: "Une étude de cinq ans révèle des stratégies efficaces pour aider les petits agriculteurs à s'adapter aux changements climatiques.", excerptEn: "Five-year study reveals effective strategies for smallholder farmers to adapt to climate change.", category: "Recherche", coverImageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", author: "Dept. Recherche", publishedAt: new Date("2025-11-30") },
  { id: "n4", slug: "conference-societe-civile", titleFr: "Le CIPCRE Accueille la Conférence Régionale sur la Société Civile", titleEn: "CIPCRE Hosts Regional Conference on Civil Society Strengthening", excerptFr: "200 leaders de la société civile de 12 pays se sont réunis pour discuter des défis et opportunités de gouvernance.", excerptEn: "200 civil society leaders from 12 countries convened to discuss governance challenges and opportunities.", category: "Événement", coverImageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", author: "Équipe Communication", publishedAt: new Date("2025-11-10") },
  { id: "n5", slug: "impact-emploi-jeunes", titleFr: "Évaluation d'Impact : 78% d'Augmentation de l'Emploi des Jeunes", titleEn: "Impact Evaluation Shows 78% Increase in Youth Employment", excerptFr: "L'évaluation indépendante du programme de compétences pour les jeunes montre des améliorations significatives en matière d'emploi.", excerptEn: "Independent evaluation of our youth skills program shows significant improvements in employment outcomes.", category: "Impact", coverImageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", author: "Dept. M&E", publishedAt: new Date("2025-10-25") },
  { id: "n6", slug: "cooperative-femmes-revenus", titleFr: "La Coopérative de Femmes Augmente ses Revenus de 65%", titleEn: "Women's Cooperative Increases Income by 65%", excerptFr: "Le modèle d'entreprise collective et la formation aux compétences transforment les opportunités économiques pour 300 femmes.", excerptEn: "Collective business model and skills training transform economic opportunities for 300 women.", category: "Impact", coverImageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", author: "Programme Genre", publishedAt: new Date("2025-09-05") },
];


export function NewsPublicationsPage() {
  const dbArticles = Route.useLoaderData();
  const articles = dbArticles.length > 0 ? dbArticles : MOCK_NEWS;
  const { language, t } = useLanguage();
  const isFr = language === "fr";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const title = (fr: string, en: string) => (isFr ? fr : en);

  const categories = [
    "all",
    ...Array.from(new Set(articles.map((a) => a.category))).sort(),
  ];

  const filtered =
    selectedCategory === "all"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div>
      {/* Header */}
      <section className="relative bg-linear-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="flex items-center gap-2 mb-3">
            <Newspaper className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide uppercase">
              {t("Latest News", "Dernières Actualités")}
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight">
            {t("News & Publications", "Actualités & Publications")}
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            {t(
              "Stay informed about CIPCRE's latest activities, research, partnerships, and impact across Central Africa.",
              "Restez informé des dernières activités, recherches, partenariats et impacts du CIPCRE en Afrique Centrale.",
            )}
          </p>
        </div>
      </section>

      {/* Filters */}
      {categories.length > 1 && (
        <div className="border-b bg-white sticky top-0 z-10">
          <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-3 flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#1B5E20] text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat === "all" ? t("All", "Tous") : cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <section className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Newspaper className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500 text-lg">
              {t(
                "No articles published yet.",
                "Aucun article publié pour le moment.",
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                to="/news/$slug"
                params={{ slug: article.slug }}
                className="block"
              >
                <Card className="group overflow-hidden border border-neutral-200 hover:border-[#1B5E20]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img
                      src={article.coverImageUrl ?? FALLBACK_IMAGE}
                      alt={title(article.titleFr, article.titleEn)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-[#1B5E20] text-white border-0 text-xs">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-neutral-900 group-hover:text-[#1B5E20] transition-colors mb-2 line-clamp-2 leading-snug">
                      {title(article.titleFr, article.titleEn)}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                      {title(article.excerptFr, article.excerptEn)}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100">
                      {article.publishedAt && (
                        <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {new Date(article.publishedAt).toLocaleDateString(
                              isFr ? "fr-FR" : "en-US",
                              { year: "numeric", month: "short", day: "numeric" },
                            )}
                          </span>
                        </div>
                      )}
                      <span className="text-xs font-medium text-[#1B5E20] flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t("Read", "Lire")}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

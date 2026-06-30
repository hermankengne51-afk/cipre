import { Download, FileText, FolderOpen, Search } from "lucide-react";
import { useState } from "react";
import { Route } from "@/routes/documentation";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { useLanguage } from "../contexts/LanguageContext";

const MOCK_DOCUMENTS = [
  { id: "m1", titleFr: "Rapport Annuel 2024", titleEn: "Annual Report 2024", category: "Rapport Annuel", fileUrl: "#", language: "fr", status: "published", publishedAt: new Date("2025-03-01"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "m2", titleFr: "Rapport Annuel 2023", titleEn: "Annual Report 2023", category: "Rapport Annuel", fileUrl: "#", language: "fr", status: "published", publishedAt: new Date("2024-03-15"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "m3", titleFr: "Note de Politique — Agroécologie et Sécurité Alimentaire", titleEn: "Policy Brief — Agroecology and Food Security", category: "Note de Politique", fileUrl: "#", language: "fr", status: "published", publishedAt: new Date("2024-11-10"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "m4", titleFr: "Note de Politique — Participation des Jeunes aux Élections", titleEn: "Policy Brief — Youth Participation in Elections", category: "Note de Politique", fileUrl: "#", language: "en", status: "published", publishedAt: new Date("2024-09-05"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "m5", titleFr: "Étude : Résilience Climatique dans les Communautés Rurales", titleEn: "Study: Climate Resilience in Rural Communities", category: "Recherche", fileUrl: "#", language: "fr", status: "published", publishedAt: new Date("2024-06-20"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "m6", titleFr: "Évaluation d'Impact — Programme PADEHCOM 2021–2023", titleEn: "Impact Evaluation — PADEHCOM Program 2021–2023", category: "Recherche", fileUrl: "#", language: "fr", status: "published", publishedAt: new Date("2024-02-28"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "m7", titleFr: "Cadre Stratégique RECOS-DHI 2024–2026", titleEn: "RECOS-DHI Strategic Framework 2024–2026", category: "Document Institutionnel", fileUrl: "#", language: "fr", status: "published", publishedAt: new Date("2024-01-10"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "m8", titleFr: "Manuel de Formation — Médiation Communautaire", titleEn: "Training Manual — Community Mediation", category: "Guide Pratique", fileUrl: "#", language: "fr", status: "published", publishedAt: new Date("2023-08-15"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "m9", titleFr: "Guide Pratique — Jardins Biologiques en Milieu Scolaire", titleEn: "Practical Guide — Organic Gardens in Schools", category: "Guide Pratique", fileUrl: "#", language: "fr", status: "published", publishedAt: new Date("2023-05-20"), createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
];

export function DocumentationCenterPage() {
  const dbDocuments = Route.useLoaderData();
  const documents = dbDocuments.length > 0 ? dbDocuments : MOCK_DOCUMENTS;
  const { language, t } = useLanguage();
  const isFr = language === "fr";
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const title = (fr: string, en: string) => (isFr ? fr : en);

  const categories = [
    "all",
    ...Array.from(new Set(documents.map((d) => d.category))).sort(),
  ];

  const filtered = documents.filter((doc) => {
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      doc.titleFr.toLowerCase().includes(q) ||
      doc.titleEn.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="relative bg-linear-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide uppercase">
              {t("Documentation Center", "Centre de Documentation")}
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight">
            {t("Documents & Resources", "Documents & Ressources")}
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            {t(
              "Access CIPCRE's reports, research publications, policy briefs, and institutional documents.",
              "Accédez aux rapports, publications de recherche, notes de politique et documents institutionnels du CIPCRE.",
            )}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              placeholder={t("Search documents...", "Rechercher des documents...")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          {categories.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#1B5E20] text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {cat === "all" ? t("All", "Tous") : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <FolderOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500 text-lg">
              {search
                ? t("No documents match your search.", "Aucun document ne correspond à votre recherche.")
                : t("No documents published yet.", "Aucun document publié pour le moment.")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((doc) => (
              <Card
                key={doc.id}
                className="group p-5 border border-neutral-200 hover:border-[#1B5E20]/20 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-neutral-900 leading-snug line-clamp-2">
                      {title(doc.titleFr, doc.titleEn)}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-neutral-100 text-neutral-600 border-0 text-xs">
                        {doc.category}
                      </Badge>
                      <span className="text-xs text-neutral-400 uppercase">
                        {doc.language}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-[#1B5E20] hover:bg-[#2E7D32] text-white text-xs"
                  >
                    <a href={doc.fileUrl} target="_blank" rel="noreferrer" download>
                      <Download className="mr-1.5 w-3.5 h-3.5" />
                      {t("Download", "Télécharger")}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

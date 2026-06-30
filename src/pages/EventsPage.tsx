import { CalendarDays, MapPin } from "lucide-react";
import { Route } from "@/routes/events";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useLanguage } from "../contexts/LanguageContext";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const base = { status: "published" as const, createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null, endDate: null, coverImageUrl: null };

const MOCK_UPCOMING = [
  { ...base, id: "e1", slug: "atelier-agriculture-climatique-2026", titleFr: "Atelier Régional sur l'Agriculture Climatosensible", titleEn: "Regional Workshop on Climate-Smart Agriculture", descriptionFr: "Atelier intensif de trois jours réunissant agriculteurs, chercheurs et décideurs pour partager des connaissances sur les stratégies d'adaptation au climat.", descriptionEn: "Three-day intensive workshop bringing together farmers, researchers and policymakers to share knowledge on climate adaptation strategies.", location: "Yaoundé, Cameroun", startDate: new Date("2026-02-20") },
  { ...base, id: "e2", slug: "sommet-jeunesse-leadership-2026", titleFr: "Sommet de Leadership des Jeunes 2026", titleEn: "Youth Leadership Summit 2026", descriptionFr: "Sommet annuel réunissant les jeunes acteurs du changement en Afrique Centrale pour discuter d'emploi, d'entrepreneuriat et d'engagement civique.", descriptionEn: "Annual summit connecting young change-makers across Central Africa to discuss employment, entrepreneurship and civic engagement.", location: "N'Djamena, Tchad", startDate: new Date("2026-03-15") },
  { ...base, id: "e3", slug: "rencontre-entrepreneuriat-feminin", titleFr: "Rencontre d'Entrepreneuriat Féminin", titleEn: "Women's Entrepreneurship Networking Event", descriptionFr: "Espace de networking permettant aux femmes entrepreneures de se connecter, partager des expériences et accéder à des opportunités de financement.", descriptionEn: "Networking space for women entrepreneurs to connect, share experiences and access financing opportunities.", location: "Libreville, Gabon", startDate: new Date("2026-03-28") },
  { ...base, id: "e4", slug: "formation-mediation-communautaire", titleFr: "Formation en Médiation Communautaire", titleEn: "Community Mediation Training", descriptionFr: "Formation certifiante de cinq jours sur les techniques de médiation et de résolution pacifique des conflits agropastoraux.", descriptionEn: "Five-day certified training on mediation techniques and peaceful resolution of agropastoral conflicts.", location: "Bafoussam, Cameroun", startDate: new Date("2026-04-10") },
];

const MOCK_PAST = [
  { ...base, id: "e5", slug: "dialogue-citoyen-national-2025", titleFr: "Dialogue Citoyen National — Chaîne de Valeur Agroécologique", titleEn: "National Citizen Dialogue — Agroecological Value Chain", descriptionFr: "Dialogue entre la société civile et les acteurs institutionnels sur les stratégies de développement de la chaîne de valeur agroécologique au Cameroun.", descriptionEn: "Dialogue between civil society and institutional actors on strategies for developing the agroecological value chain in Cameroon.", location: "Yaoundé, Cameroun", startDate: new Date("2025-10-15") },
  { ...base, id: "e6", slug: "conference-paix-cohesion-sociale", titleFr: "Conférence Régionale Paix & Cohésion Sociale", titleEn: "Regional Conference on Peace & Social Cohesion", descriptionFr: "Trois jours de rencontres inter-confessionnelles et inter-communautaires pour renforcer les mécanismes locaux de prévention des conflits.", descriptionEn: "Three days of inter-faith and inter-community meetings to strengthen local conflict prevention mechanisms.", location: "Dschang, Cameroun", startDate: new Date("2025-07-22") },
  { ...base, id: "e7", slug: "atelier-protection-enfants-2025", titleFr: "Atelier sur la Protection de l'Enfant", titleEn: "Child Protection Workshop", descriptionFr: "Formation des acteurs communautaires sur les mécanismes de signalement et de prise en charge des enfants victimes de violences.", descriptionEn: "Training of community actors on reporting mechanisms and support for children victims of violence.", location: "Foumban, Cameroun", startDate: new Date("2025-05-08") },
];

export function EventsPage() {
  const db = Route.useLoaderData();
  const hasData = db.upcoming.length > 0 || db.past.length > 0;
  const upcoming = hasData ? db.upcoming : MOCK_UPCOMING;
  const past = hasData ? db.past : MOCK_PAST;
  const { language, t } = useLanguage();
  const isFr = language === "fr";

  const title = (fr: string, en: string) => (isFr ? fr : en);

  const formatDate = (date: Date | string) =>
    new Date(date).toLocaleDateString(isFr ? "fr-FR" : "en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  function EventCard({
    event,
    isPast,
  }: {
    event: (typeof upcoming)[number];
    isPast?: boolean;
  }) {
    return (
      <Card
        className={`overflow-hidden border border-neutral-200 hover:shadow-lg transition-all duration-300 ${isPast ? "opacity-80" : "hover:-translate-y-0.5"}`}
      >
        <div className="flex flex-col sm:flex-row">
          <div className="relative sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
            <img
              src={event.coverImageUrl ?? FALLBACK_IMAGE}
              alt={title(event.titleFr, event.titleEn)}
              className="w-full h-full object-cover"
            />
            {isPast && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Badge className="bg-white/90 text-neutral-700 border-0">
                  {t("Past", "Passé")}
                </Badge>
              </div>
            )}
          </div>
          <div className="p-5 flex-1">
            <h3 className="font-semibold text-neutral-900 mb-2 leading-snug">
              {title(event.titleFr, event.titleEn)}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-2">
              {title(event.descriptionFr, event.descriptionEn)}
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-[#1B5E20]" />
                {formatDate(event.startDate)}
              </span>
              {event.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1B5E20]" />
                  {event.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  const Empty = () => (
    <div className="text-center py-16 text-neutral-400">
      <CalendarDays className="w-12 h-12 mx-auto mb-3" />
      <p>
        {t("No events to display.", "Aucun événement à afficher.")}
      </p>
    </div>
  );

  return (
    <div>
      {/* Header */}
      <section className="relative bg-linear-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="flex items-center gap-2 mb-3">
            <CalendarDays className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide uppercase">
              {t("Events & Activities", "Événements & Activités")}
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight">
            {t("Events", "Événements")}
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            {t(
              "Discover CIPCRE's upcoming workshops, conferences, and community events across Central Africa.",
              "Découvrez les ateliers, conférences et événements communautaires du CIPCRE en Afrique Centrale.",
            )}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-8">
            <TabsTrigger value="upcoming">
              {t("Upcoming", "À venir")} ({upcoming.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              {t("Past Events", "Événements Passés")} ({past.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcoming.length === 0 ? (
              <Empty />
            ) : (
              upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {past.length === 0 ? (
              <Empty />
            ) : (
              past.map((event) => (
                <EventCard key={event.id} event={event} isPast />
              ))
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

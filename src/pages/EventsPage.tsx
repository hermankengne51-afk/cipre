import {
  ArrowRight,
  Bot,
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  Search,
  Send,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useLanguage } from "../contexts/LanguageContext";

export function EventsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeChatEvent, setActiveChatEvent] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<
    Record<string, Array<{ role: "user" | "assistant"; content: string }>>
  >({});
  const [inputMessage, setInputMessage] = useState("");

  const upcomingEvents = [
    {
      title: "Regional Workshop on Climate-Smart Agriculture",
      date: "February 20-22, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Yaoundé, Cameroon",
      type: "Workshop",
      participants: "150 participants expected",
      description:
        "Three-day intensive workshop bringing together farmers, researchers, and policymakers to share knowledge on climate adaptation strategies.",
    },
    {
      title: "Youth Leadership Summit 2026",
      date: "March 15-16, 2026",
      time: "8:30 AM - 6:00 PM",
      location: "N'Djamena, Chad",
      type: "Conference",
      participants: "300+ young leaders",
      description:
        "Annual summit connecting young change-makers across Central Africa to discuss employment, entrepreneurship, and civic engagement.",
    },
    {
      title: "Women's Entrepreneurship Networking Event",
      date: "March 28, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "Libreville, Gabon",
      type: "Networking",
      participants: "80 women entrepreneurs",
      description:
        "Networking event for women business owners to connect, share experiences, and explore partnership opportunities.",
    },
    {
      title: "Research Symposium: Education Quality in Central Africa",
      date: "April 10-11, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Bangui, CAR",
      type: "Symposium",
      participants: "200 researchers & educators",
      description:
        "Academic symposium presenting latest research findings on education quality, access, and innovation in the region.",
    },
  ];

  const pastEvents = [
    {
      title: "Civil Society Strengthening Conference",
      date: "November 10-12, 2025",
      location: "Yaoundé, Cameroon",
      type: "Conference",
      participants: "200 CSO leaders",
      summary:
        "Successfully convened civil society leaders from 12 countries to discuss governance challenges and collaboration opportunities.",
    },
    {
      title: "Agricultural Value Chain Workshop",
      date: "October 5-7, 2025",
      location: "Brazzaville, Congo",
      type: "Workshop",
      participants: "120 farmers & stakeholders",
      summary:
        "Practical workshop on improving value chain efficiency for smallholder farmers, with focus on post-harvest management.",
    },
    {
      title: "Gender in Education Forum",
      date: "September 18-19, 2025",
      location: "Douala, Cameroon",
      type: "Forum",
      participants: "180 education professionals",
      summary:
        "Forum discussing strategies to promote gender equality in education, featuring presentation of our five-year research study.",
    },
    {
      title: "Annual General Assembly 2025",
      date: "August 25-26, 2025",
      location: "Yaoundé, Cameroon",
      type: "Assembly",
      participants: "Board members & partners",
      summary:
        "Annual meeting reviewing organizational performance, approving strategic directions, and planning for 2026.",
    },
  ];

  // Filter events based on search query
  const filterEvents = (events: any[]) => {
    if (!searchQuery.trim()) return events;

    const query = searchQuery.toLowerCase();
    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        (event.description &&
          event.description.toLowerCase().includes(query)) ||
        (event.summary && event.summary.toLowerCase().includes(query)),
    );
  };

  const filteredUpcomingEvents = filterEvents(upcomingEvents);
  const filteredPastEvents = filterEvents(pastEvents);

  const openChat = (eventTitle: string) => {
    setActiveChatEvent(eventTitle);
    if (!chatMessages[eventTitle]) {
      // Initialize chat with welcome message specific to the event
      const event = [...upcomingEvents, ...pastEvents].find(
        (e) => e.title === eventTitle,
      );
      if (event) {
        setChatMessages((prev) => ({
          ...prev,
          [eventTitle]: [
            {
              role: "assistant",
              content: `Bonjour! Je suis l'assistant IA pour l'événement "${event.title}". Je peux vous aider avec des informations détaillées sur cet événement. Posez-moi vos questions sur les dates, le lieu, les participants, le programme, l'inscription, etc.`,
            },
          ],
        }));
      }
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const newUserMessage = { role: "user" as const, content: inputMessage };
    setChatMessages((prev) => ({
      ...prev,
      [activeChatEvent as string]: [
        ...(prev[activeChatEvent as string] || []),
        newUserMessage,
      ],
    }));

    // Generate AI response (mock responses based on keywords)
    let aiResponse = "";
    const lowerInput = inputMessage.toLowerCase();

    if (lowerInput.includes("climat") || lowerInput.includes("agriculture")) {
      aiResponse =
        "L'atelier régional sur l'agriculture intelligente face au climat aura lieu du 20 au 22 février 2026 à Yaoundé, Cameroun. C'est un atelier intensif de trois jours qui réunira 150 participants incluant agriculteurs, chercheurs et décideurs politiques pour partager des connaissances sur les stratégies d'adaptation au changement climatique.";
    } else if (
      lowerInput.includes("jeune") ||
      lowerInput.includes("youth") ||
      lowerInput.includes("leadership")
    ) {
      aiResponse =
        "Le Sommet du Leadership des Jeunes 2026 se tiendra les 15-16 mars 2026 à N'Djamena, Tchad. Cet événement annuel connectera plus de 300 jeunes leaders d'Afrique centrale pour discuter d'emploi, d'entrepreneuriat et d'engagement civique. L'horaire est de 8h30 à 18h00.";
    } else if (
      lowerInput.includes("femme") ||
      lowerInput.includes("women") ||
      lowerInput.includes("entrepreneur")
    ) {
      aiResponse =
        "Nous avons un événement de réseautage pour l'entrepreneuriat féminin le 28 mars 2026 à Libreville, Gabon. Cet événement de 14h00 à 18h00 réunira 80 femmes entrepreneures pour se connecter, partager des expériences et explorer des opportunités de partenariat.";
    } else if (
      lowerInput.includes("éducation") ||
      lowerInput.includes("education") ||
      lowerInput.includes("recherche")
    ) {
      aiResponse =
        "Le Symposium de Recherche sur la Qualité de l'Éducation en Afrique Centrale aura lieu les 10-11 avril 2026 à Bangui, RCA. Ce symposium académique présentera les dernières découvertes de recherche sur la qualité, l'accès et l'innovation dans l'éducation régionale, avec 200 chercheurs et éducateurs attendus.";
    } else if (
      lowerInput.includes("inscription") ||
      lowerInput.includes("register") ||
      lowerInput.includes("participer")
    ) {
      aiResponse =
        "Pour vous inscrire à l'un de nos événements, cliquez simplement sur le bouton 'Register for Event' sur la carte de l'événement qui vous intéresse. Vous serez guidé à travers le processus d'inscription. Si vous avez des questions spécifiques, n'hésitez pas à nous contacter.";
    } else if (
      lowerInput.includes("passé") ||
      lowerInput.includes("past") ||
      lowerInput.includes("rapport")
    ) {
      aiResponse =
        "Vous pouvez consulter nos événements passés dans l'onglet 'Past Events'. Nous avons organisé plusieurs événements importants en 2025, notamment la Conférence de Renforcement de la Société Civile, l'Atelier sur la Chaîne de Valeur Agricale, et le Forum sur le Genre dans l'Éducation. Des rapports détaillés sont disponibles pour chaque événement.";
    } else if (
      lowerInput.includes("quand") ||
      lowerInput.includes("when") ||
      lowerInput.includes("date")
    ) {
      aiResponse =
        "Nos prochains événements incluent:\n- 20-22 février: Atelier sur l'Agriculture Intelligente (Yaoundé)\n- 15-16 mars: Sommet du Leadership des Jeunes (N'Djamena)\n- 28 mars: Événement de Réseautage Entrepreneuriat Féminin (Libreville)\n- 10-11 avril: Symposium de Recherche Éducation (Bangui)\n\nSur quel événement aimeriez-vous avoir plus d'informations?";
    } else if (
      lowerInput.includes("où") ||
      lowerInput.includes("where") ||
      lowerInput.includes("lieu") ||
      lowerInput.includes("location")
    ) {
      aiResponse =
        "Nos événements se déroulent dans différentes villes d'Afrique centrale:\n- Yaoundé, Cameroun\n- N'Djamena, Tchad\n- Libreville, Gabon\n- Bangui, République Centrafricaine\n- Brazzaville, Congo\n- Douala, Cameroun\n\nChaque événement est stratégiquement localisé pour maximiser l'accessibilité et l'impact régional.";
    } else {
      aiResponse =
        "Je peux vous aider avec des informations sur nos événements à venir et passés, les dates, lieux, types d'événements (ateliers, conférences, symposiums, réseautage), processus d'inscription, et plus encore. Pouvez-vous préciser ce que vous recherchez? Par exemple:\n- Événements sur un thème spécifique (agriculture, éducation, jeunesse, femmes)\n- Informations sur les dates et lieux\n- Comment s'inscrire\n- Rapports d'événements passés";
    }

    const newAiMessage = { role: "assistant" as const, content: aiResponse };
    setChatMessages((prev) => ({
      ...prev,
      [activeChatEvent as string]: [
        ...(prev[activeChatEvent as string] || []),
        newAiMessage,
      ],
    }));
    setInputMessage("");
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-2xl" />

        <div className="relative max-w-[1440px] mx-auto px-12 py-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-0.5 bg-[#D4AF37] rounded-full" />
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-2.5 py-0.5 text-xs">
              {t("events.hero.badge")}
            </Badge>
          </div>
          <h1 className="mb-2 text-2xl leading-tight max-w-4xl">
            {t("events.hero.title")}
          </h1>
          <p className="text-sm text-neutral-100 max-w-3xl leading-relaxed mb-4">
            {t("events.hero.description")}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 max-w-3xl mt-4">
            <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-xl font-bold text-[#D4AF37] mb-0.5">
                {upcomingEvents.length}
              </div>
              <div className="text-xs text-neutral-200">Upcoming Events</div>
            </div>
            <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-xl font-bold text-[#D4AF37] mb-0.5">
                {pastEvents.length}
              </div>
              <div className="text-xs text-neutral-200">Past Events</div>
            </div>
            <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-xl font-bold text-[#D4AF37] mb-0.5">12+</div>
              <div className="text-xs text-neutral-200">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1440px] mx-auto px-12 py-16">
        {/* Search Bar */}
        <div className="mb-14">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#1B5E20]/10 flex items-center justify-center">
                <Search className="w-6 h-6 text-[#1B5E20]" />
              </div>
            </div>
            <Input
              type="text"
              placeholder="Rechercher des événements par titre, type, lieu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-24 pr-6 py-8 text-lg border-2 border-neutral-200 rounded-2xl shadow-lg hover:border-[#1B5E20] focus:border-[#1B5E20] focus:shadow-xl transition-all bg-white"
            />
          </div>
          {searchQuery && (
            <div className="mt-5 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-[#1B5E20] font-semibold bg-gradient-to-r from-[#1B5E20]/10 via-[#1B5E20]/5 to-[#1B5E20]/10 px-6 py-3 rounded-full border-2 border-[#1B5E20]/20">
                <div className="w-2 h-2 rounded-full bg-[#1B5E20] animate-pulse" />
                {filteredUpcomingEvents.length + filteredPastEvents.length}{" "}
                événement(s) trouvé(s)
              </div>
            </div>
          )}
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white p-2 rounded-2xl shadow-lg border border-neutral-200">
              <TabsTrigger
                value="upcoming"
                className="rounded-xl px-8 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1B5E20] data-[state=active]:to-[#2E7D32] data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger
                value="past"
                className="rounded-xl px-8 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1B5E20] data-[state=active]:to-[#2E7D32] data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
              >
                <Clock className="w-4 h-4 mr-2" />
                Past Events
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Upcoming Events */}
          <TabsContent value="upcoming">
            <div className="space-y-8">
              {filteredUpcomingEvents.map((event) => (
                <Card
                  key={event.title}
                  className="group relative p-4 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-[#1B5E20] bg-white hover:bg-gradient-to-r hover:from-[#1B5E20]/[0.02] hover:to-white overflow-hidden rounded-xl"
                >
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-3xl -z-10 group-hover:from-[#1B5E20]/10 transition-all duration-500" />
                  <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="flex gap-4">
                    {/* Date Badge */}
                    <div className="shrink-0">
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] rounded-xl flex flex-col items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-xl" />
                        <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Calendar className="w-5 h-5 mb-0.5 drop-shadow-lg" />
                        <div className="text-[10px] font-bold tracking-wide drop-shadow-md">
                          {event.date.split(" ")[0]}
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Badge className="bg-gradient-to-r from-[#1B5E20]/10 to-[#2E7D32]/10 text-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] hover:text-white transition-all duration-300 px-2.5 py-0.5 text-[10px] font-semibold border border-[#1B5E20]/20">
                              {event.type}
                            </Badge>
                            <div className="h-0.5 w-6 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
                          </div>
                          <h3 className="mb-1.5 text-base group-hover:text-[#1B5E20] transition-colors duration-300 leading-tight">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-neutral-700 mb-2.5 leading-relaxed text-xs">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-3 gap-2 mb-2.5 bg-gradient-to-br from-neutral-50 to-white p-2 rounded-lg border border-neutral-100 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <Calendar className="w-3 h-3 text-[#1B5E20]" />
                          </div>
                          <div>
                            <div className="text-[9px] text-neutral-500 mb-0.5">
                              Date
                            </div>
                            <span className="font-semibold text-neutral-800 text-[10px]">
                              {event.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <Clock className="w-3 h-3 text-[#1B5E20]" />
                          </div>
                          <div>
                            <div className="text-[9px] text-neutral-500 mb-0.5">
                              Time
                            </div>
                            <span className="font-semibold text-neutral-800 text-[10px]">
                              {event.time}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <MapPin className="w-3 h-3 text-[#1B5E20]" />
                          </div>
                          <div>
                            <div className="text-[9px] text-neutral-500 mb-0.5">
                              Location
                            </div>
                            <span className="font-semibold text-neutral-800 text-[10px]">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 mb-3 bg-gradient-to-r from-amber-50 via-amber-50/50 to-transparent px-2 py-1.5 rounded-md border border-amber-100 shadow-sm">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-sm">
                          <Users className="w-3 h-3 text-amber-700" />
                        </div>
                        <div>
                          <div className="text-[9px] text-amber-700 mb-0.5 font-medium">
                            Expected Participants
                          </div>
                          <span className="font-bold text-amber-900 text-[10px]">
                            {event.participants}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] hover:from-[#2E7D32] hover:to-[#1B5E20] shadow-lg hover:shadow-xl transition-all duration-300 px-3 py-2.5 text-xs group/btn">
                          <span>Register for Event</span>
                          <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => openChat(event.title)}
                          className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white transition-all duration-300 px-3 py-2.5 shadow-md hover:shadow-lg text-xs group/btn"
                        >
                          <Bot className="mr-1.5 w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                          <span>Ask AI</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past">
            <div className="grid grid-cols-2 gap-8">
              {filteredPastEvents.map((event) => (
                <Card
                  key={event.title}
                  className="group p-8 hover:shadow-2xl transition-all duration-500 border-t-[6px] border-t-neutral-300 hover:border-t-[#1B5E20] bg-white hover:bg-gradient-to-br hover:from-white hover:to-neutral-50/50 relative overflow-hidden rounded-2xl"
                >
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <Badge className="bg-gradient-to-r from-neutral-100 to-neutral-50 text-neutral-700 hover:from-[#1B5E20] hover:to-[#2E7D32] hover:text-white transition-all duration-300 px-5 py-2 font-semibold border border-neutral-200 shadow-sm">
                        {event.type}
                      </Badge>
                      <div className="h-1 flex-1 max-w-[60px] bg-gradient-to-r from-neutral-300 to-transparent rounded-full group-hover:from-[#1B5E20] transition-colors" />
                    </div>
                    <h3 className="mb-5 text-2xl group-hover:text-[#1B5E20] transition-colors duration-300 leading-tight">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-6 bg-gradient-to-br from-neutral-50 to-white p-5 rounded-xl border border-neutral-100 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-lg bg-neutral-200 flex items-center justify-center group-hover:bg-[#1B5E20]/10 transition-colors">
                          <Calendar className="w-4 h-4 text-neutral-600 group-hover:text-[#1B5E20] transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500">Date</div>
                          <span className="font-semibold text-neutral-800 text-sm">
                            {event.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-lg bg-neutral-200 flex items-center justify-center group-hover:bg-[#1B5E20]/10 transition-colors">
                          <MapPin className="w-4 h-4 text-neutral-600 group-hover:text-[#1B5E20] transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500">
                            Location
                          </div>
                          <span className="font-semibold text-neutral-800 text-sm">
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-lg bg-neutral-200 flex items-center justify-center group-hover:bg-[#1B5E20]/10 transition-colors">
                          <Users className="w-4 h-4 text-neutral-600 group-hover:text-[#1B5E20] transition-colors" />
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500">
                            Participants
                          </div>
                          <span className="font-semibold text-neutral-800 text-sm">
                            {event.participants}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-700 leading-relaxed mb-7 border-l-4 border-l-[#1B5E20] pl-5 py-3 bg-gradient-to-r from-[#1B5E20]/5 to-transparent rounded-r-xl">
                      {event.summary}
                    </p>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-neutral-50 transition-all duration-300 shadow-sm hover:shadow-md border-neutral-300 py-5 group/btn"
                      >
                        <span>View Event Report</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openChat(event.title)}
                        className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md py-5 group/btn"
                      >
                        <Bot className="mr-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Ask AI</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Newsletter Signup */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Animated Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute top-8 left-8 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#D4AF37] rounded-full blur-2xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 py-12 lg:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-4 shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase">
              Stay Connected
            </span>
          </div>

          <h2 className="mb-3 text-white text-2xl lg:text-3xl max-w-3xl mx-auto">
            Stay Informed About Our Events
          </h2>
          <p className="text-base lg:text-lg text-white/85 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
            Subscribe to our newsletter to receive updates about upcoming
            workshops, conferences, and networking opportunities across Africa.
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-3xl mx-auto">
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              📅 Monthly Events Calendar
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              🎯 Early Registration Access
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              🌍 Regional Networking
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              📰 Impact Stories
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/60 py-5 px-5 rounded-xl focus:bg-white/20 focus:border-white/50 transition-all"
            />
            <Button
              size="lg"
              className="bg-white text-[#1B5E20] hover:bg-white/95 shadow-xl hover:shadow-2xl hover:scale-105 transition-all px-6 py-5 font-bold group whitespace-nowrap"
            >
              <span>Subscribe</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-xs text-white/70 flex items-center justify-center gap-1.5">
            <span className="inline-flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
              <strong className="text-white/90">5,000+</strong> subscribers
            </span>
            <span className="text-white/50">•</span>
            <span>Monthly updates</span>
            <span className="text-white/50">•</span>
            <span>Unsubscribe anytime</span>
          </p>
        </div>
      </section>

      {/* AI Assistant Floating Button */}
      {!activeChatEvent && (
        <button
          onClick={() => setActiveChatEvent("general")}
          className="fixed bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white rounded-2xl shadow-2xl hover:shadow-[#1B5E20]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center text-xs font-bold text-[#1B5E20] animate-pulse">
            AI
          </div>
        </button>
      )}

      {/* AI Assistant Chat Panel */}
      {activeChatEvent && (
        <div className="fixed bottom-8 right-8 w-[420px] h-[640px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border-2 border-[#1B5E20]/20 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white p-6 flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Assistant Événements</h3>
                <div className="flex items-center gap-2 text-xs text-neutral-200">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span>En ligne</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveChatEvent(null)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors relative z-10"
              aria-label="Close chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-neutral-50/50 to-white">
            {chatMessages[activeChatEvent]?.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white"
                      : "bg-white text-neutral-800 border border-neutral-200"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t-2 border-neutral-100 p-5 bg-white">
            <div className="flex gap-3 mb-3">
              <Input
                type="text"
                placeholder="Posez une question sur les événements..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 border-2 border-neutral-200 focus:border-[#1B5E20] rounded-xl py-6"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] hover:from-[#2E7D32] hover:to-[#1B5E20] shrink-0 w-14 h-14 shadow-lg hover:shadow-xl transition-all"
                size="icon"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-neutral-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B5E20]" />
              Appuyez sur Entrée pour envoyer
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

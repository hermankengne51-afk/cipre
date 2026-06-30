import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  FileText,
  HandHeart,
  Handshake,
  Image,
  Mail,
  Newspaper,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDashboardStats } from "@/server/admin/dashboard";

export const Route = createFileRoute("/admin/_authenticated/")({
  component: RouteComponent,
  loader: async () => ({ stats: await getDashboardStats() }),
});

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function RouteComponent() {
  const { stats } = Route.useLoaderData();

  const contentCards = [
    {
      title: "Actualités",
      icon: Newspaper,
      total: stats.news.total,
      published: stats.news.published,
      url: "/admin/news",
    },
    {
      title: "Programmes",
      icon: FileText,
      total: stats.programs.total,
      published: stats.programs.published,
      url: "/admin/programs",
    },
    {
      title: "Événements",
      icon: Calendar,
      total: stats.events.total,
      published: stats.events.published,
      url: "/admin/events",
    },
    {
      title: "Documentation",
      icon: FileText,
      total: stats.documents.total,
      published: stats.documents.published,
      url: "/admin/documents",
    },
    {
      title: "Médias",
      icon: Image,
      total: stats.media.total,
      published: stats.media.published,
      url: "/admin/media",
    },
    {
      title: "Partenaires",
      icon: Handshake,
      total: stats.partners.total,
      published: stats.partners.published,
      url: "/admin/partners",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground text-sm">
          Vue d'ensemble de l'activité de la plateforme CIPCRE
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/admin/messages">
          <Card className="hover:shadow-md transition-shadow border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Messages de contact
              </CardTitle>
              <Mail className="w-5 h-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.messages.total}</div>
              <p className="text-xs text-orange-600 mt-1">
                {stats.messages.unread} non lu
                {stats.messages.unread > 1 ? "s" : ""}
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/admin/volunteers">
          <Card className="hover:shadow-md transition-shadow border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Candidatures bénévoles
              </CardTitle>
              <HandHeart className="w-5 h-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.volunteers.total}</div>
              <p className="text-xs text-orange-600 mt-1">
                {stats.volunteers.new} nouvelle
                {stats.volunteers.new > 1 ? "s" : ""}
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Contenu de la plateforme</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {contentCards.map((card) => (
            <Link key={card.url} to={card.url}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <card.icon className="w-5 h-5 text-[#1B5E20]" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{card.total}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {card.published} publié{card.published > 1 ? "s" : ""}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Derniers messages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.recentMessages.length === 0 ? (
              <p className="text-sm text-muted-foreground">Aucun message</p>
            ) : (
              stats.recentMessages.map((message) => (
                <Link
                  key={message.id}
                  to="/admin/messages"
                  className="flex items-center justify-between gap-3 p-2 -mx-2 rounded-lg hover:bg-muted/50"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">
                      {message.firstName} {message.lastName}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {message.subject}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {message.status === "new" && (
                      <Badge className="bg-orange-100 text-orange-800">
                        Nouveau
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {formatDate(message.createdAt)}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-4 h-4" />
              Dernières candidatures
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.recentVolunteers.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Aucune candidature
              </p>
            ) : (
              stats.recentVolunteers.map((application) => (
                <Link
                  key={application.id}
                  to="/admin/volunteers"
                  className="flex items-center justify-between gap-3 p-2 -mx-2 rounded-lg hover:bg-muted/50"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">
                      {application.firstName} {application.lastName}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {application.city}, {application.country}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {formatDate(application.createdAt)}
                  </span>
                </Link>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

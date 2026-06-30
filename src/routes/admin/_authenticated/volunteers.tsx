import { createFileRoute, useRouter } from "@tanstack/react-router";
import {
  Calendar,
  ChevronLeft,
  ExternalLink,
  HandHeart,
  Loader2,
  Search,
  Send,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { DrizzleVolunteerApplication } from "@/integrations/drizzle/schema";
import {
  deleteVolunteerApplication,
  listVolunteerApplications,
  replyToVolunteerApplication,
  updateVolunteerApplicationStatus,
} from "@/server/admin/volunteers";

const STATUS_LABELS: Record<string, string> = {
  new: "Nouvelle",
  reviewed: "En revue",
  accepted: "Acceptée",
  rejected: "Refusée",
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-orange-100 text-orange-800",
  reviewed: "bg-blue-100 text-blue-800",
  accepted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

export const Route = createFileRoute("/admin/_authenticated/volunteers")({
  component: RouteComponent,
  loader: async () => ({ applications: await listVolunteerApplications() }),
});

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function RouteComponent() {
  const { applications } = Route.useLoaderData();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);

  const selected = applications.find((a) => a.id === selectedId);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setReplyText("");
  };

  const filtered = applications.filter((a) => {
    const haystack =
      `${a.firstName} ${a.lastName} ${a.email} ${a.country} ${a.city}`.toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });

  const handleStatusChange = async (
    application: DrizzleVolunteerApplication,
    status: string,
  ) => {
    setActionLoading(true);
    try {
      await updateVolunteerApplicationStatus({
        data: { id: application.id, status },
      });
      toast.success("Statut mis à jour");
      router.invalidate();
    } catch {
      toast.error("Erreur lors de la mise à jour");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setActionLoading(true);
    try {
      await deleteVolunteerApplication({ data: { id } });
      toast.success("Candidature supprimée");
      setSelectedId(null);
      setShowConfirmDelete(false);
      router.invalidate();
    } catch {
      toast.error("Erreur lors de la suppression");
    } finally {
      setActionLoading(false);
    }
  };

  const handleSendReply = async () => {
    if (!selected || !replyText.trim()) return;
    setSending(true);
    try {
      await replyToVolunteerApplication({
        data: { id: selected.id, body: replyText.trim() },
      });
      toast.success("Réponse envoyée par email");
      setReplyText("");
      await router.invalidate();
    } catch (error) {
      console.error("[volunteers] reply error:", error);
      toast.error(
        error instanceof Error ? error.message : "Échec de l'envoi de la réponse",
      );
    } finally {
      setSending(false);
    }
  };

  const newCount = applications.filter((a) => a.status === "new").length;

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Candidatures bénévoles
        </h1>
        <p className="text-muted-foreground text-sm">
          Consultez et gérez les candidatures reçues via le formulaire de
          bénévolat
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="py-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Total
            </span>
          </CardHeader>
          <CardContent className="py-2">
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
        <Card className="border-orange-200">
          <CardHeader className="py-4">
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              Nouvelles
            </span>
          </CardHeader>
          <CardContent className="py-2">
            <div className="text-2xl font-bold text-orange-600">{newCount}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-340px)] min-h-[420px]">
        <div
          className={`flex flex-col gap-4 md:col-span-1 bg-white border rounded-xl p-4 overflow-hidden h-full ${
            selectedId ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                <HandHeart className="h-8 w-8 mb-2 stroke-1" />
                <p className="text-sm">Aucune candidature</p>
              </div>
            ) : (
              filtered.map((application) => (
                <button
                  key={application.id}
                  type="button"
                  onClick={() => handleSelect(application.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex flex-col gap-1 ${
                    selectedId === application.id
                      ? "border-[#1B5E20] bg-[#1B5E20]/5"
                      : "border-neutral-100 hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold text-sm truncate">
                      {application.firstName} {application.lastName}
                    </div>
                    <span
                      className={`px-1.5 py-0.5 text-[10px] font-semibold rounded-full shrink-0 ${
                        STATUS_COLORS[application.status]
                      }`}
                    >
                      {STATUS_LABELS[application.status]}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {application.city}, {application.country}
                  </div>
                  <div className="text-[10px] text-muted-foreground self-end mt-1">
                    {formatDate(application.createdAt)}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        <div
          className={`md:col-span-2 bg-white border rounded-xl overflow-hidden h-full flex flex-col ${
            !selectedId ? "hidden md:flex" : "flex"
          }`}
        >
          {selected ? (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setSelectedId(null)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <div>
                    <h2 className="font-bold text-lg">
                      {selected.firstName} {selected.lastName}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mt-0.5">
                      <a
                        href={`mailto:${selected.email}`}
                        className="hover:underline text-[#1B5E20] flex items-center gap-1"
                      >
                        {selected.email}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <span>•</span>
                      <span>{selected.phone}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(selected.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
                <Select
                  value={selected.status}
                  onValueChange={(value) => handleStatusChange(selected, value)}
                >
                  <SelectTrigger className="w-[140px] shrink-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 p-6 overflow-y-auto bg-muted/5 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">
                      Localisation
                    </div>
                    <div>
                      {selected.city}, {selected.country}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">
                      Domaine d'intérêt
                    </div>
                    <div>{selected.areaOfInterest}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">
                      Disponibilité
                    </div>
                    <div>{selected.availability}</div>
                  </div>
                </div>

                {selected.experience && (
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                      Expérience
                    </div>
                    <div className="bg-white border rounded-lg p-4 text-sm whitespace-pre-wrap">
                      {selected.experience}
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                    Motivation
                  </div>
                  <div className="bg-white border rounded-lg p-4 text-sm whitespace-pre-wrap">
                    {selected.motivation}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                    Répondre par email à {selected.firstName}
                  </div>
                  <Textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Écrivez votre réponse..."
                    rows={5}
                  />
                  <div className="flex justify-end mt-2">
                    <Button
                      size="sm"
                      disabled={sending || !replyText.trim()}
                      onClick={handleSendReply}
                      className="bg-[#1B5E20] hover:bg-[#2E7D32]"
                    >
                      {sending ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4 mr-2" />
                      )}
                      Envoyer
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t flex items-center justify-end gap-4 bg-muted/10">
                {showConfirmDelete ? (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-red-500 font-medium">
                      Confirmer ?
                    </span>
                    <Button
                      variant="destructive"
                      size="sm"
                      disabled={actionLoading}
                      onClick={() => handleDelete(selected.id)}
                    >
                      Oui
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowConfirmDelete(false)}
                    >
                      Non
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => setShowConfirmDelete(true)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Supprimer
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-24 text-center text-muted-foreground bg-muted/5">
              <HandHeart className="h-16 w-16 mb-4 stroke-1 text-gray-300" />
              <h3 className="text-lg font-semibold mb-1">
                Aucune candidature sélectionnée
              </h3>
              <p className="text-sm max-w-xs px-4">
                Sélectionnez une candidature dans la liste de gauche pour
                l'afficher.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

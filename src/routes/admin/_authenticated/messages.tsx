import { createFileRoute, useRouter } from "@tanstack/react-router";
import {
  Calendar,
  ChevronLeft,
  ExternalLink,
  Inbox,
  Loader2,
  Mail,
  MailOpen,
  Search,
  Send,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { DrizzleContactMessage } from "@/integrations/drizzle/schema";
import {
  deleteContactMessage,
  listContactMessages,
  replyToContactMessage,
  updateContactMessageStatus,
} from "@/server/admin/messages";

export const Route = createFileRoute("/admin/_authenticated/messages")({
  component: RouteComponent,
  loader: async () => ({ messages: await listContactMessages() }),
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
  const { messages } = Route.useLoaderData();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "read">(
    "all",
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);

  const selected = messages.find((m) => m.id === selectedId);

  const filtered = messages.filter((m) => {
    const haystack =
      `${m.firstName} ${m.lastName} ${m.email} ${m.subject} ${m.message}`.toLowerCase();
    const matchesSearch = haystack.includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelect = async (message: DrizzleContactMessage) => {
    setSelectedId(message.id);
    setReplyText("");
    if (message.status === "new") {
      try {
        await updateContactMessageStatus({
          data: { id: message.id, status: "read" },
        });
        router.invalidate();
      } catch {
        // silencieux : le statut sera re-tenté à la prochaine ouverture
      }
    }
  };

  const handleToggleStatus = async (message: DrizzleContactMessage) => {
    setActionLoading(true);
    const newStatus = message.status === "read" ? "new" : "read";
    try {
      await updateContactMessageStatus({
        data: { id: message.id, status: newStatus },
      });
      toast.success(
        newStatus === "read" ? "Marqué comme lu" : "Marqué comme non lu",
      );
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
      await deleteContactMessage({ data: { id } });
      toast.success("Message supprimé");
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
      await replyToContactMessage({
        data: { id: selected.id, body: replyText.trim() },
      });
      toast.success("Réponse envoyée par email");
      setReplyText("");
      await router.invalidate();
    } catch (error) {
      console.error("[messages] reply error:", error);
      toast.error(
        error instanceof Error ? error.message : "Échec de l'envoi de la réponse",
      );
    } finally {
      setSending(false);
    }
  };

  const totalCount = messages.length;
  const newCount = messages.filter((m) => m.status === "new").length;
  const readCount = messages.filter((m) => m.status === "read").length;

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Messages de contact
        </h1>
        <p className="text-muted-foreground text-sm">
          Consultez et gérez les demandes reçues via le formulaire de contact
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="py-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Total
            </span>
          </CardHeader>
          <CardContent className="py-2">
            <div className="text-2xl font-bold">{totalCount}</div>
          </CardContent>
        </Card>
        <Card className="border-orange-200">
          <CardHeader className="py-4">
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              Non lus
            </span>
          </CardHeader>
          <CardContent className="py-2">
            <div className="text-2xl font-bold text-orange-600">{newCount}</div>
          </CardContent>
        </Card>
        <Card className="border-green-200">
          <CardHeader className="py-4">
            <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
              Lus
            </span>
          </CardHeader>
          <CardContent className="py-2">
            <div className="text-2xl font-bold text-green-600">{readCount}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-340px)] min-h-[420px]">
        <div
          className={`flex flex-col gap-4 md:col-span-1 bg-white border rounded-xl p-4 overflow-hidden h-full ${
            selectedId ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex border-b">
              {(["all", "new", "read"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setStatusFilter(tab)}
                  className={`flex-1 pb-2 text-sm font-medium border-b-2 transition-colors ${
                    statusFilter === tab
                      ? "border-[#1B5E20] text-[#1B5E20]"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "all" ? "Tous" : tab === "new" ? "Non lus" : "Lus"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                <Inbox className="h-8 w-8 mb-2 stroke-1" />
                <p className="text-sm">Aucun message</p>
              </div>
            ) : (
              filtered.map((message) => (
                <button
                  key={message.id}
                  type="button"
                  onClick={() => handleSelect(message)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex flex-col gap-1 relative ${
                    selectedId === message.id
                      ? "border-[#1B5E20] bg-[#1B5E20]/5"
                      : "border-neutral-100 hover:bg-muted/30"
                  }`}
                >
                  {message.status === "new" && (
                    <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-orange-500" />
                  )}
                  <div className="font-semibold text-sm truncate pr-4">
                    {message.firstName} {message.lastName}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {message.subject}
                  </div>
                  <div className="text-xs text-gray-600 line-clamp-2 mt-1">
                    {message.message}
                  </div>
                  <div className="text-[10px] text-muted-foreground self-end mt-1">
                    {formatDate(message.createdAt)}
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
                      {selected.phone && (
                        <>
                          <span>•</span>
                          <span>{selected.phone}</span>
                        </>
                      )}
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(selected.createdAt)}
                      </span>
                    </div>
                    {selected.organization && (
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {selected.organization}
                      </div>
                    )}
                  </div>
                </div>
                <span
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full shrink-0 ${
                    selected.status === "new"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {selected.status === "new" ? "Non lu" : "Lu"}
                </span>
              </div>

              <div className="flex-1 p-6 overflow-y-auto bg-muted/5 space-y-4">
                <div>
                  <div className="text-sm font-semibold text-neutral-500 mb-2">
                    {selected.subject}
                  </div>
                  <div className="bg-white border rounded-lg p-5 shadow-sm whitespace-pre-wrap text-sm leading-relaxed">
                    {selected.message}
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

              <div className="p-4 border-t flex items-center justify-between gap-4 bg-muted/10">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={actionLoading}
                    onClick={() => handleToggleStatus(selected)}
                  >
                    {selected.status === "read" ? (
                      <>
                        <Mail className="h-4 w-4 mr-2 text-orange-500" />
                        Marquer non-lu
                      </>
                    ) : (
                      <>
                        <MailOpen className="h-4 w-4 mr-2 text-green-500" />
                        Marquer lu
                      </>
                    )}
                  </Button>
                </div>

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
              <Mail className="h-16 w-16 mb-4 stroke-1 text-gray-300" />
              <h3 className="text-lg font-semibold mb-1">
                Aucun message sélectionné
              </h3>
              <p className="text-sm max-w-xs px-4">
                Sélectionnez un message dans la liste de gauche pour l'afficher.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

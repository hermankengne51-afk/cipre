import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Languages, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useAdminAuth } from "@/contexts/auth-context";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DrizzleMediaItem } from "@/integrations/drizzle/schema";
import {
  createMedia,
  deleteMedia,
  listMedia,
  updateMedia,
} from "@/server/admin/media";
import { translateFields } from "@/server/shared/translate";

type PrimaryLang = "fr" | "en";

const emptyForm = {
  type: "image" as "image" | "video",
  titleFr: "",
  titleEn: "",
  url: "",
  thumbnailUrl: "",
  gallery: "",
  status: "draft" as "draft" | "published",
};

export const Route = createFileRoute("/admin/_authenticated/media")({
  component: RouteComponent,
  loader: async () => ({ items: await listMedia() }),
});

function LangBanner({
  primaryLang,
  translating,
  onChangeLang,
  onTranslate,
}: {
  primaryLang: PrimaryLang;
  translating: boolean;
  onChangeLang: (l: PrimaryLang) => void;
  onTranslate: () => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50 px-3 py-2.5">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-blue-700">Langue de saisie</span>
        <div className="flex overflow-hidden rounded border border-blue-200 text-xs font-medium">
          <button
            type="button"
            onClick={() => onChangeLang("fr")}
            className={`px-2.5 py-1 transition-colors ${primaryLang === "fr" ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-50"}`}
          >
            🇫🇷 FR
          </button>
          <button
            type="button"
            onClick={() => onChangeLang("en")}
            className={`border-l border-blue-200 px-2.5 py-1 transition-colors ${primaryLang === "en" ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-50"}`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={onTranslate}
        disabled={translating}
        className="flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100 disabled:opacity-50"
      >
        {translating ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <Languages className="h-3 w-3" />
        )}
        Traduire vers {primaryLang === "fr" ? "EN" : "FR"}
      </button>
    </div>
  );
}

function RouteComponent() {
  const { items } = Route.useLoaderData();
  const router = useRouter();
  const auth = useAdminAuth();
  const canDelete = (createdBy: string | null) =>
    auth.role === "SUPER_ADMIN" || createdBy === auth.email;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<DrizzleMediaItem | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [primaryLang, setPrimaryLang] = useState<PrimaryLang>("fr");
  const [translating, setTranslating] = useState(false);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setPrimaryLang("fr");
    setOpen(true);
  };

  const openEdit = (item: DrizzleMediaItem) => {
    setEditing(item);
    setForm({
      type: item.type as "image" | "video",
      titleFr: item.titleFr,
      titleEn: item.titleEn,
      url: item.url,
      thumbnailUrl: item.thumbnailUrl ?? "",
      gallery: item.gallery ?? "",
      status: item.status as "draft" | "published",
    });
    setPrimaryLang("fr");
    setOpen(true);
  };

  const handleTranslate = async () => {
    setTranslating(true);
    try {
      const to: PrimaryLang = primaryLang === "fr" ? "en" : "fr";
      const texts: Record<string, string> =
        primaryLang === "fr"
          ? { titleEn: form.titleFr }
          : { titleFr: form.titleEn };
      const translated = await translateFields({ data: { texts, from: primaryLang, to } });
      setForm((f) => ({ ...f, ...translated }));
      toast.success(`Traduit vers ${to.toUpperCase()}`);
    } catch {
      toast.error("Erreur de traduction — vérifiez votre connexion");
    } finally {
      setTranslating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let currentForm = form;

      const to: PrimaryLang = primaryLang === "fr" ? "en" : "fr";
      const textsToTranslate: Record<string, string> =
        primaryLang === "fr"
          ? { ...(form.titleFr.trim() && !form.titleEn.trim() ? { titleEn: form.titleFr } : {}) }
          : { ...(form.titleEn.trim() && !form.titleFr.trim() ? { titleFr: form.titleEn } : {}) };

      if (Object.keys(textsToTranslate).length > 0) {
        const translated = await translateFields({ data: { texts: textsToTranslate, from: primaryLang, to } });
        currentForm = { ...currentForm, ...translated };
      }

      if (editing) {
        await updateMedia({ data: { id: editing.id, ...currentForm } });
        toast.success("Média mis à jour");
      } else {
        await createMedia({ data: currentForm });
        toast.success("Média créé");
      }
      setOpen(false);
      await router.invalidate();
    } catch (error) {
      console.error("[media] submit error:", error);
      toast.error("Une erreur est survenue (vérifiez que l'URL est valide)");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (item: DrizzleMediaItem) => {
    if (!confirm(`Supprimer le média « ${item.titleFr} » ?`)) return;
    try {
      await deleteMedia({ data: { id: item.id } });
      toast.success("Média supprimé");
      await router.invalidate();
    } catch (error) {
      console.error("[media] delete error:", error);
      toast.error("Une erreur est survenue");
    }
  };

  const isPrimary = (lang: "fr" | "en") => lang === primaryLang;
  const secondaryLabel = (label: string) => `${label} · auto`;

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Médias</h1>
          <p className="text-muted-foreground text-sm">
            {items.length} média{items.length > 1 ? "s" : ""}
          </p>
        </div>
        <Button onClick={openCreate} className="bg-[#1B5E20] hover:bg-[#2E7D32]">
          <Plus className="w-4 h-4 mr-2" />
          Nouveau média
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Galerie</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                Aucun média pour le moment
              </TableCell>
            </TableRow>
          ) : (
            items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.titleFr}</TableCell>
                <TableCell className="capitalize">{item.type}</TableCell>
                <TableCell>{item.gallery}</TableCell>
                <TableCell>
                  <Badge variant={item.status === "published" ? "default" : "outline"}>
                    {item.status === "published" ? "Publié" : "Brouillon"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-1">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(item)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  {canDelete(item.createdBy) && (
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(item)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {editing ? "Modifier le média" : "Nouveau média"}
            </SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 pb-4">
            <LangBanner
              primaryLang={primaryLang}
              translating={translating}
              onChangeLang={setPrimaryLang}
              onTranslate={handleTranslate}
            />

            <div>
              <Label htmlFor="type">Type</Label>
              <Select
                value={form.type}
                onValueChange={(value) =>
                  setForm({ ...form, type: value as "image" | "video" })
                }
              >
                <SelectTrigger id="type" className="mt-1.5 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Vidéo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="titleFr">
                  {isPrimary("fr") ? "Titre (FR) *" : secondaryLabel("Titre (FR)")}
                </Label>
                <Input
                  id="titleFr"
                  value={form.titleFr}
                  onChange={(e) => setForm({ ...form, titleFr: e.target.value })}
                  required={isPrimary("fr")}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="titleEn">
                  {isPrimary("en") ? "Titre (EN) *" : secondaryLabel("Titre (EN)")}
                </Label>
                <Input
                  id="titleEn"
                  value={form.titleEn}
                  onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                  required={isPrimary("en")}
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="url">URL du fichier</Label>
              <Input
                id="url"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                placeholder="https://..."
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="thumbnailUrl">URL de la miniature (vidéo)</Label>
              <Input
                id="thumbnailUrl"
                value={form.thumbnailUrl}
                onChange={(e) => setForm({ ...form, thumbnailUrl: e.target.value })}
                placeholder="https://..."
                className="mt-1.5"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="gallery">Galerie</Label>
                <Input
                  id="gallery"
                  value={form.gallery}
                  onChange={(e) => setForm({ ...form, gallery: e.target.value })}
                  placeholder="Terrain, Événements..."
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="status">Statut</Label>
                <Select
                  value={form.status}
                  onValueChange={(value) =>
                    setForm({ ...form, status: value as "draft" | "published" })
                  }
                >
                  <SelectTrigger id="status" className="mt-1.5 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Brouillon</SelectItem>
                    <SelectItem value="published">Publié</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <SheetFooter className="px-0">
              <Button
                type="submit"
                disabled={submitting || translating}
                className="bg-[#1B5E20] hover:bg-[#2E7D32]"
              >
                {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {editing ? "Enregistrer" : "Créer"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}

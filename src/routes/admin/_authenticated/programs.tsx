import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Languages, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import type { DrizzleProgram } from "@/integrations/drizzle/schema";
import {
  createProgram,
  deleteProgram,
  listPrograms,
  updateProgram,
} from "@/server/admin/programs";
import { translateFields } from "@/server/shared/translate";

type PrimaryLang = "fr" | "en";

const emptyForm = {
  slug: "",
  titleFr: "",
  titleEn: "",
  summaryFr: "",
  summaryEn: "",
  contentFr: "",
  contentEn: "",
  category: "",
  coverImageUrl: "",
  status: "draft" as "draft" | "published",
};

export const Route = createFileRoute("/admin/_authenticated/programs")({
  component: RouteComponent,
  loader: async () => ({ programs: await listPrograms() }),
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
  const { programs } = Route.useLoaderData();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<DrizzleProgram | null>(null);
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

  const openEdit = (program: DrizzleProgram) => {
    setEditing(program);
    setForm({
      slug: program.slug,
      titleFr: program.titleFr,
      titleEn: program.titleEn,
      summaryFr: program.summaryFr,
      summaryEn: program.summaryEn,
      contentFr: program.contentFr ?? "",
      contentEn: program.contentEn ?? "",
      category: program.category,
      coverImageUrl: program.coverImageUrl ?? "",
      status: program.status as "draft" | "published",
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
          ? { titleEn: form.titleFr, summaryEn: form.summaryFr }
          : { titleFr: form.titleEn, summaryFr: form.summaryEn };
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

      // Auto-translate empty secondary fields before saving
      const to: PrimaryLang = primaryLang === "fr" ? "en" : "fr";
      const textsToTranslate: Record<string, string> =
        primaryLang === "fr"
          ? {
              ...(form.titleFr.trim() && !form.titleEn.trim() ? { titleEn: form.titleFr } : {}),
              ...(form.summaryFr.trim() && !form.summaryEn.trim() ? { summaryEn: form.summaryFr } : {}),
            }
          : {
              ...(form.titleEn.trim() && !form.titleFr.trim() ? { titleFr: form.titleEn } : {}),
              ...(form.summaryEn.trim() && !form.summaryFr.trim() ? { summaryFr: form.summaryEn } : {}),
            };

      if (Object.keys(textsToTranslate).length > 0) {
        const translated = await translateFields({ data: { texts: textsToTranslate, from: primaryLang, to } });
        currentForm = { ...currentForm, ...translated };
      }

      if (editing) {
        await updateProgram({ data: { id: editing.id, ...currentForm } });
        toast.success("Programme mis à jour");
      } else {
        await createProgram({ data: currentForm });
        toast.success("Programme créé");
      }
      setOpen(false);
      await router.invalidate();
    } catch (error) {
      console.error("[programs] submit error:", error);
      toast.error("Une erreur est survenue");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (program: DrizzleProgram) => {
    if (!confirm(`Supprimer le programme « ${program.titleFr} » ?`)) return;
    try {
      await deleteProgram({ data: { id: program.id } });
      toast.success("Programme supprimé");
      await router.invalidate();
    } catch (error) {
      console.error("[programs] delete error:", error);
      toast.error("Une erreur est survenue");
    }
  };

  const isPrimary = (lang: "fr" | "en") => lang === primaryLang;
  const secondaryLabel = (label: string) => `${label} · auto`;

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Programmes</h1>
          <p className="text-muted-foreground text-sm">
            {programs.length} programme{programs.length > 1 ? "s" : ""}
          </p>
        </div>
        <Button onClick={openCreate} className="bg-[#1B5E20] hover:bg-[#2E7D32]">
          <Plus className="w-4 h-4 mr-2" />
          Nouveau programme
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead>Catégorie</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Créé le</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                Aucun programme pour le moment
              </TableCell>
            </TableRow>
          ) : (
            programs.map((program) => (
              <TableRow key={program.id}>
                <TableCell className="font-medium">{program.titleFr}</TableCell>
                <TableCell>{program.category}</TableCell>
                <TableCell>
                  <Badge variant={program.status === "published" ? "default" : "outline"}>
                    {program.status === "published" ? "Publié" : "Brouillon"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(program.createdAt).toLocaleDateString("fr-FR")}
                </TableCell>
                <TableCell className="text-right space-x-1">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(program)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(program)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
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
              {editing ? "Modifier le programme" : "Nouveau programme"}
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
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="mon-programme"
                required
                className="mt-1.5"
              />
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

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="summaryFr">
                  {isPrimary("fr") ? "Résumé (FR) *" : secondaryLabel("Résumé (FR)")}
                </Label>
                <Textarea
                  id="summaryFr"
                  value={form.summaryFr}
                  onChange={(e) => setForm({ ...form, summaryFr: e.target.value })}
                  required={isPrimary("fr")}
                  rows={3}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="summaryEn">
                  {isPrimary("en") ? "Résumé (EN) *" : secondaryLabel("Résumé (EN)")}
                </Label>
                <Textarea
                  id="summaryEn"
                  value={form.summaryEn}
                  onChange={(e) => setForm({ ...form, summaryEn: e.target.value })}
                  required={isPrimary("en")}
                  rows={3}
                  className="mt-1.5"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="contentFr">Contenu (FR) · optionnel</Label>
                <Textarea
                  id="contentFr"
                  value={form.contentFr}
                  onChange={(e) => setForm({ ...form, contentFr: e.target.value })}
                  rows={5}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="contentEn">Contenu (EN) · optionnel</Label>
                <Textarea
                  id="contentEn"
                  value={form.contentEn}
                  onChange={(e) => setForm({ ...form, contentEn: e.target.value })}
                  rows={5}
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="category">Catégorie</Label>
              <Input
                id="category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="coverImageUrl">URL image de couverture</Label>
              <Input
                id="coverImageUrl"
                value={form.coverImageUrl}
                onChange={(e) => setForm({ ...form, coverImageUrl: e.target.value })}
                placeholder="https://..."
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

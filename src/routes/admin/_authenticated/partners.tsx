import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
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
import type { DrizzlePartner } from "@/integrations/drizzle/schema";
import {
  createPartner,
  deletePartner,
  listPartners,
  updatePartner,
} from "@/server/admin/partners";

const emptyForm = {
  name: "",
  logoUrl: "",
  websiteUrl: "",
  type: "partenaire",
  country: "",
  status: "draft" as "draft" | "published",
};

export const Route = createFileRoute("/admin/_authenticated/partners")({
  component: RouteComponent,
  loader: async () => ({ partners: await listPartners() }),
});

function RouteComponent() {
  const { partners } = Route.useLoaderData();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<DrizzlePartner | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setOpen(true);
  };

  const openEdit = (partner: DrizzlePartner) => {
    setEditing(partner);
    setForm({
      name: partner.name,
      logoUrl: partner.logoUrl ?? "",
      websiteUrl: partner.websiteUrl ?? "",
      type: partner.type,
      country: partner.country ?? "",
      status: partner.status as "draft" | "published",
    });
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editing) {
        await updatePartner({ data: { id: editing.id, ...form } });
        toast.success("Partenaire mis à jour");
      } else {
        await createPartner({ data: form });
        toast.success("Partenaire créé");
      }
      setOpen(false);
      router.invalidate();
    } catch {
      toast.error("Une erreur est survenue");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (partner: DrizzlePartner) => {
    if (!confirm(`Supprimer le partenaire « ${partner.name} » ?`)) return;
    try {
      await deletePartner({ data: { id: partner.id } });
      toast.success("Partenaire supprimé");
      router.invalidate();
    } catch {
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Partenaires</h1>
          <p className="text-muted-foreground text-sm">
            {partners.length} partenaire{partners.length > 1 ? "s" : ""}
          </p>
        </div>
        <Button
          onClick={openCreate}
          className="bg-[#1B5E20] hover:bg-[#2E7D32]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouveau partenaire
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Pays</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {partners.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center text-muted-foreground py-8"
              >
                Aucun partenaire pour le moment
              </TableCell>
            </TableRow>
          ) : (
            partners.map((partner) => (
              <TableRow key={partner.id}>
                <TableCell className="font-medium">{partner.name}</TableCell>
                <TableCell className="capitalize">{partner.type}</TableCell>
                <TableCell>{partner.country}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      partner.status === "published" ? "default" : "outline"
                    }
                  >
                    {partner.status === "published" ? "Publié" : "Brouillon"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => openEdit(partner)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(partner)}
                  >
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
              {editing ? "Modifier le partenaire" : "Nouveau partenaire"}
            </SheetTitle>
          </SheetHeader>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 px-4 pb-4"
          >
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="logoUrl">URL du logo</Label>
              <Input
                id="logoUrl"
                value={form.logoUrl}
                onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
                placeholder="https://..."
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="websiteUrl">Site web</Label>
              <Input
                id="websiteUrl"
                value={form.websiteUrl}
                onChange={(e) =>
                  setForm({ ...form, websiteUrl: e.target.value })
                }
                placeholder="https://..."
                className="mt-1.5"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="type">Type</Label>
                <Input
                  id="type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  placeholder="bailleur, partenaire, ONG..."
                  required
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="country">Pays</Label>
                <Input
                  id="country"
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  className="mt-1.5"
                />
              </div>
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
                disabled={submitting}
                className="bg-[#1B5E20] hover:bg-[#2E7D32]"
              >
                {submitting && (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                )}
                {editing ? "Enregistrer" : "Créer"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}

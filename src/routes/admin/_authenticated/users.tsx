import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2, Plus, RefreshCw, Trash2, UserCheck, UserX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import {
  createAdminUser,
  deleteAdminUser,
  listAdminUsers,
  resetAdminPassword,
  toggleAdminUser,
} from "@/server/admin/users";

export const Route = createFileRoute("/admin/_authenticated/users")({
  beforeLoad: ({ context }) => {
    if (context.auth?.role !== "SUPER_ADMIN") {
      throw redirect({ to: "/admin" });
    }
  },
  loader: async () => ({ users: await listAdminUsers() }),
  component: RouteComponent,
});

type AdminUser = Awaited<ReturnType<typeof listAdminUsers>>[number];

function RouteComponent() {
  const { users } = Route.useLoaderData();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const openCreate = () => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setOpen(true);
  };

  const openReset = (user: AdminUser) => {
    setSelectedUser(user);
    setPassword("");
    setShowPassword(false);
    setResetOpen(true);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createAdminUser({ data: { email, password } });
      toast.success("Administrateur créé avec succès");
      setOpen(false);
      await router.invalidate();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggle = async (user: AdminUser) => {
    try {
      await toggleAdminUser({ data: { id: user.id } });
      toast.success(user.isActive ? "Compte désactivé" : "Compte activé");
      await router.invalidate();
    } catch {
      toast.error("Une erreur est survenue");
    }
  };

  const handleDelete = async (user: AdminUser) => {
    if (!confirm(`Supprimer définitivement le compte de ${user.email} ?`)) return;
    try {
      await deleteAdminUser({ data: { id: user.id } });
      toast.success("Administrateur supprimé");
      await router.invalidate();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;
    setSubmitting(true);
    try {
      await resetAdminPassword({ data: { id: selectedUser.id, password } });
      toast.success("Mot de passe réinitialisé");
      setResetOpen(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Administrateurs</h1>
          <p className="text-muted-foreground text-sm">
            {users.length} compte{users.length > 1 ? "s" : ""} administrateur
          </p>
        </div>
        <Button onClick={openCreate} className="bg-[#1B5E20] hover:bg-[#2E7D32]">
          <Plus className="w-4 h-4 mr-2" />
          Nouvel administrateur
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Rôle</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Créé le</TableHead>
            <TableHead>Créé par</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                Aucun administrateur créé pour le moment
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={user.isActive ? "default" : "secondary"}
                    className={user.isActive ? "bg-green-100 text-green-800" : ""}
                  >
                    {user.isActive ? "Actif" : "Inactif"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(user.createdAt).toLocaleDateString("fr-FR")}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {user.createdBy}
                </TableCell>
                <TableCell className="text-right space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => openReset(user)}
                    title="Réinitialiser le mot de passe"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleToggle(user)}
                    title={user.isActive ? "Désactiver" : "Activer"}
                  >
                    {user.isActive ? (
                      <UserX className="w-4 h-4 text-orange-500" />
                    ) : (
                      <UserCheck className="w-4 h-4 text-green-600" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(user)}
                    title="Supprimer définitivement"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Formulaire création */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Nouvel administrateur</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleCreate} className="flex flex-col gap-4 px-4 pb-4">
            <div>
              <Label htmlFor="new-email">Adresse e-mail</Label>
              <Input
                id="new-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="new-password">Mot de passe (min. 8 caractères)</Label>
              <div className="relative mt-1.5">
                <Input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-0 top-0 h-9 w-9 flex items-center justify-center text-neutral-400 hover:text-neutral-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <SheetFooter className="px-0">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-[#1B5E20] hover:bg-[#2E7D32]"
              >
                {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Créer l'administrateur
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>

      {/* Formulaire réinitialisation mot de passe */}
      <Sheet open={resetOpen} onOpenChange={setResetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Réinitialiser le mot de passe</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleReset} className="flex flex-col gap-4 px-4 pb-4">
            <p className="text-sm text-muted-foreground">
              Nouveau mot de passe pour{" "}
              <span className="font-medium text-neutral-900">{selectedUser?.email}</span>
            </p>
            <div>
              <Label htmlFor="reset-password">Nouveau mot de passe (min. 8 caractères)</Label>
              <div className="relative mt-1.5">
                <Input
                  id="reset-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  autoFocus
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-0 top-0 h-9 w-9 flex items-center justify-center text-neutral-400 hover:text-neutral-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <SheetFooter className="px-0">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-[#1B5E20] hover:bg-[#2E7D32]"
              >
                {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Réinitialiser
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}

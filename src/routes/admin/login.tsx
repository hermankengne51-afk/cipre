import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { AlertCircle, Eye, EyeOff, Loader2, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAdminAuth, loginAdmin } from "@/lib/auth/admin.functions";

export const Route = createFileRoute("/admin/login")({
  beforeLoad: async () => {
    const isAuthenticated = await getAdminAuth();
    if (isAuthenticated) {
      throw redirect({ to: "/admin" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await loginAdmin({ data: { password } });
      navigate({ to: "/admin" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue",
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <Card className="w-full max-w-sm p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#1B5E20]/10 flex items-center justify-center mb-3">
            <Lock className="w-6 h-6 text-[#1B5E20]" />
          </div>
          <h1 className="text-xl font-bold text-neutral-900">
            Administration CIPCRE
          </h1>
          <p className="text-sm text-neutral-600 mt-1">
            Connectez-vous pour accéder au tableau de bord
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <Label htmlFor="password">Mot de passe</Label>
            <div className="relative mt-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={
                  showPassword
                    ? "Masquer le mot de passe"
                    : "Afficher le mot de passe"
                }
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

          <Button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[#1B5E20] hover:bg-[#2E7D32]"
          >
            {status === "submitting" && (
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            )}
            Se connecter
          </Button>
        </form>
      </Card>
    </div>
  );
}

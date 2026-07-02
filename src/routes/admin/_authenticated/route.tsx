import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { AdminAuthContext } from "@/contexts/auth-context";
import { getAdminAuth } from "@/lib/auth/admin.functions";
import { AppSidebar } from "@/components/admin/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const Route = createFileRoute("/admin/_authenticated")({
  beforeLoad: async () => {
    const auth = await getAdminAuth();
    if (!auth) {
      throw redirect({ to: "/admin/login" });
    }
    return { auth };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { auth } = Route.useRouteContext();

  return (
    <AdminAuthContext.Provider value={auth}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <span className="text-sm font-medium text-neutral-600">
              Administration CIPCRE
            </span>
            <div className="ml-auto flex items-center gap-2 text-xs text-neutral-400">
              <span>{auth.email}</span>
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-medium text-neutral-600">
                {auth.role === "SUPER_ADMIN"
                  ? "Super Admin"
                  : "Administrateur"}
              </span>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AdminAuthContext.Provider>
  );
}

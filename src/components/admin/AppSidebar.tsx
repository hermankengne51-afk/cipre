import { Link, useRouter } from "@tanstack/react-router";
import {
  Calendar,
  FileText,
  Folder,
  HandHeart,
  Handshake,
  Image,
  LayoutDashboard,
  LogOut,
  Mail,
  Newspaper,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { logoutAdmin } from "@/lib/auth/admin.functions";

const navItems = [
  { title: "Tableau de bord", url: "/admin", icon: LayoutDashboard },
  { title: "Messages", url: "/admin/messages", icon: Mail },
  { title: "Bénévoles", url: "/admin/volunteers", icon: HandHeart },
];

const contentItems = [
  { title: "Actualités", url: "/admin/news", icon: Newspaper },
  { title: "Programmes", url: "/admin/programs", icon: Folder },
  { title: "Événements", url: "/admin/events", icon: Calendar },
  { title: "Documentation", url: "/admin/documents", icon: FileText },
  { title: "Médias", url: "/admin/media", icon: Image },
  { title: "Partenaires", url: "/admin/partners", icon: Handshake },
];

export function AppSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAdmin();
    router.navigate({ to: "/admin/login" });
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/admin">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#1B5E20] text-white font-bold">
                  C
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">CIPCRE</span>
                  <span className="truncate text-xs">Administration</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Activité</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      activeProps={{ "data-active": true }}
                      activeOptions={{ exact: item.url === "/admin" }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Contenu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} activeProps={{ "data-active": true }}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout}>
              <LogOut />
              <span>Déconnexion</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

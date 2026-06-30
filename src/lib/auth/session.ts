import { useSession } from "@tanstack/react-start/server";

import { envServer } from "@/lib/env/server";

export type AdminSession =
  | { status: "authenticated" }
  | { status: "unauthenticated" };

export function getAdminSession() {
  return useSession<AdminSession>({
    name: "admin_session",
    password: envServer.AUTH_SECRET,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60, // 7 jours
      path: "/",
    },
  });
}

export async function requireAdminAuth() {
  const session = await getAdminSession();
  if (session.data.status !== "authenticated") {
    throw new Error("Non autorisé");
  }
}

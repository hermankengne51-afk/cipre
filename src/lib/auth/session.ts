import { useSession } from "@tanstack/react-start/server";

import { envServer } from "@/lib/env/server";

export type AdminRole = "SUPER_ADMIN" | "ADMIN";

export type AdminTokenPayload = {
  sub: string;
  email: string;
  role: AdminRole;
};

export type AdminSession =
  | ({ status: "authenticated" } & AdminTokenPayload)
  | { status: "unauthenticated" };

export function getAdminSession() {
  return useSession<AdminSession>({
    name: "admin_session",
    password: envServer.AUTH_SECRET,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    },
  });
}

export async function requireAdminAuth(): Promise<AdminTokenPayload> {
  const session = await getAdminSession();
  if (session.data.status !== "authenticated") {
    throw new Error("Non autorisé");
  }
  return {
    sub: session.data.sub,
    email: session.data.email,
    role: session.data.role,
  };
}

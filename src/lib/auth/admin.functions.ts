import { timingSafeEqual } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/integrations/drizzle/db";
import { adminUsersTable } from "@/integrations/drizzle/schema";
import { envServer } from "@/lib/env/server";

import { verifyPassword } from "./password";
import { getAdminSession, type AdminTokenPayload } from "./session";

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.alloc(256);
  const bufB = Buffer.alloc(256);
  bufA.write(a, 0, "utf8");
  bufB.write(b, 0, "utf8");
  return timingSafeEqual(bufA, bufB);
}

export const getAdminAuth = createServerFn({ method: "GET" }).handler(
  async (): Promise<AdminTokenPayload | null> => {
    const session = await getAdminSession();
    if (session.data.status !== "authenticated") return null;
    return {
      sub: session.data.sub,
      email: session.data.email,
      role: session.data.role,
    };
  },
);

export const loginAdmin = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({ email: z.string().email(), password: z.string().min(1) }),
  )
  .handler(async ({ data }) => {
    const { email, password } = data;

    // Vérification Super Admin (credentials reconnus directement par le système)
    if (
      safeEqual(email, envServer.SUPER_ADMIN_EMAIL) &&
      safeEqual(password, envServer.SUPER_ADMIN_PASSWORD)
    ) {
      const session = await getAdminSession();
      await session.update({
        status: "authenticated",
        sub: "SUPER_ADMIN",
        email,
        role: "SUPER_ADMIN",
      });
      return { success: true, role: "SUPER_ADMIN" as const };
    }

    // Vérification administrateur en base de données
    const [admin] = await db
      .select()
      .from(adminUsersTable)
      .where(eq(adminUsersTable.email, email))
      .limit(1);

    if (!admin || !admin.isActive) {
      throw new Error("Email ou mot de passe incorrect");
    }

    const valid = await verifyPassword(password, admin.passwordHash);
    if (!valid) {
      throw new Error("Email ou mot de passe incorrect");
    }

    const session = await getAdminSession();
    await session.update({
      status: "authenticated",
      sub: admin.id,
      email: admin.email,
      role: "ADMIN",
    });
    return { success: true, role: "ADMIN" as const };
  });

export const logoutAdmin = createServerFn({ method: "POST" }).handler(
  async () => {
    const session = await getAdminSession();
    await session.clear();
    return { success: true };
  },
);

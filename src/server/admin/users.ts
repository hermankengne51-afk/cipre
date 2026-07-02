import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/integrations/drizzle/db";
import { adminUsersTable } from "@/integrations/drizzle/schema";
import { hashPassword } from "@/lib/auth/password";
import { requireAdminAuth } from "@/lib/auth/session";

async function requireSuperAdmin() {
  const auth = await requireAdminAuth();
  if (auth.role !== "SUPER_ADMIN") {
    throw new Error("Réservé au super administrateur");
  }
  return auth;
}

export const listAdminUsers = createServerFn({ method: "GET" }).handler(
  async () => {
    await requireSuperAdmin();
    return db
      .select({
        id: adminUsersTable.id,
        email: adminUsersTable.email,
        role: adminUsersTable.role,
        isActive: adminUsersTable.isActive,
        createdAt: adminUsersTable.createdAt,
        createdBy: adminUsersTable.createdBy,
      })
      .from(adminUsersTable)
      .orderBy(desc(adminUsersTable.createdAt));
  },
);

export const createAdminUser = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().email(),
      password: z.string().min(8, "Le mot de passe doit faire au moins 8 caractères"),
    }),
  )
  .handler(async ({ data }) => {
    const auth = await requireSuperAdmin();
    const passwordHash = await hashPassword(data.password);
    const [user] = await db
      .insert(adminUsersTable)
      .values({
        email: data.email,
        passwordHash,
        role: "ADMIN",
        isActive: true,
        createdBy: auth.email,
        updatedBy: auth.email,
      })
      .returning({
        id: adminUsersTable.id,
        email: adminUsersTable.email,
        role: adminUsersTable.role,
        isActive: adminUsersTable.isActive,
        createdAt: adminUsersTable.createdAt,
      });
    return user;
  });

export const toggleAdminUser = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const auth = await requireSuperAdmin();
    const [current] = await db
      .select({ isActive: adminUsersTable.isActive })
      .from(adminUsersTable)
      .where(eq(adminUsersTable.id, data.id))
      .limit(1);
    if (!current) throw new Error("Administrateur introuvable");
    const [user] = await db
      .update(adminUsersTable)
      .set({ isActive: !current.isActive, updatedBy: auth.email })
      .where(eq(adminUsersTable.id, data.id))
      .returning({
        id: adminUsersTable.id,
        isActive: adminUsersTable.isActive,
      });
    return user;
  });

export const deleteAdminUser = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await requireSuperAdmin();
    await db.delete(adminUsersTable).where(eq(adminUsersTable.id, data.id));
    return { success: true };
  });

export const resetAdminPassword = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      id: z.string(),
      password: z.string().min(8, "Le mot de passe doit faire au moins 8 caractères"),
    }),
  )
  .handler(async ({ data }) => {
    const auth = await requireSuperAdmin();
    const passwordHash = await hashPassword(data.password);
    await db
      .update(adminUsersTable)
      .set({ passwordHash, updatedBy: auth.email })
      .where(eq(adminUsersTable.id, data.id));
    return { success: true };
  });

import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { partnersTable } from "@/integrations/drizzle/schema";
import { requireAdminAuth } from "@/lib/auth/session";

const partnerInput = z.object({
  name: z.string().min(1),
  logoUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  type: z.string().min(1),
  country: z.string().optional(),
  status: z.enum(["draft", "published"]),
});

export const listPartners = createServerFn({ method: "GET" }).handler(
  async () => {
    await requireAdminAuth();
    return db
      .select()
      .from(partnersTable)
      .orderBy(desc(partnersTable.createdAt));
  },
);

export const createPartner = createServerFn({ method: "POST" })
  .inputValidator(partnerInput)
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const [partner] = await db
      .insert(partnersTable)
      .values({ ...data, createdBy: auth.email, updatedBy: auth.email })
      .returning();
    return partner;
  });

export const updatePartner = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(partnerInput.shape))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const { id, ...values } = data;
    const [partner] = await db
      .update(partnersTable)
      .set({ ...values, updatedBy: auth.email })
      .where(eq(partnersTable.id, id))
      .returning();
    return partner;
  });

export const deletePartner = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();

    if (auth.role !== "SUPER_ADMIN") {
      const [partner] = await db
        .select({ createdBy: partnersTable.createdBy })
        .from(partnersTable)
        .where(eq(partnersTable.id, data.id))
        .limit(1);
      if (!partner) throw new Error("Partenaire introuvable");
      if (partner.createdBy !== auth.email) {
        throw new Error("Vous ne pouvez pas supprimer un partenaire créé par un autre administrateur");
      }
    }

    await db.delete(partnersTable).where(eq(partnersTable.id, data.id));
    return { success: true };
  });

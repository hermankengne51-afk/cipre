import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { mediaItemsTable } from "@/integrations/drizzle/schema";
import { requireAdminAuth } from "@/lib/auth/session";

const mediaInput = z.object({
  type: z.enum(["image", "video"]),
  titleFr: z.string(),
  titleEn: z.string(),
  url: z.url(),
  thumbnailUrl: z.string().optional(),
  gallery: z.string().optional(),
  status: z.enum(["draft", "published"]),
});

export const listMedia = createServerFn({ method: "GET" }).handler(async () => {
  await requireAdminAuth();
  return db
    .select()
    .from(mediaItemsTable)
    .orderBy(desc(mediaItemsTable.createdAt));
});

export const createMedia = createServerFn({ method: "POST" })
  .inputValidator(mediaInput)
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const [media] = await db
      .insert(mediaItemsTable)
      .values({
        ...data,
        publishedAt: data.status === "published" ? new Date() : null,
        createdBy: auth.email,
        updatedBy: auth.email,
      })
      .returning();
    return media;
  });

export const updateMedia = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(mediaInput.shape))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const { id, ...values } = data;
    const [media] = await db
      .update(mediaItemsTable)
      .set({
        ...values,
        publishedAt: values.status === "published" ? new Date() : null,
        updatedBy: auth.email,
      })
      .where(eq(mediaItemsTable.id, id))
      .returning();
    return media;
  });

export const deleteMedia = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();

    if (auth.role !== "SUPER_ADMIN") {
      const [item] = await db
        .select({ createdBy: mediaItemsTable.createdBy })
        .from(mediaItemsTable)
        .where(eq(mediaItemsTable.id, data.id))
        .limit(1);
      if (!item) throw new Error("Média introuvable");
      if (item.createdBy !== auth.email) {
        throw new Error("Vous ne pouvez pas supprimer un média créé par un autre administrateur");
      }
    }

    await db.delete(mediaItemsTable).where(eq(mediaItemsTable.id, data.id));
    return { success: true };
  });

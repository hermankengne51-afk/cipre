import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { mediaItemsTable } from "@/integrations/drizzle/schema";

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
  return db
    .select()
    .from(mediaItemsTable)
    .orderBy(desc(mediaItemsTable.createdAt));
});

export const createMedia = createServerFn({ method: "POST" })
  .inputValidator(mediaInput)
  .handler(async ({ data }) => {
    const [media] = await db
      .insert(mediaItemsTable)
      .values({
        ...data,
        publishedAt: data.status === "published" ? new Date() : null,
      })
      .returning();
    return media;
  });

export const updateMedia = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(mediaInput.shape))
  .handler(async ({ data }) => {
    const { id, ...values } = data;
    const [media] = await db
      .update(mediaItemsTable)
      .set({
        ...values,
        publishedAt: values.status === "published" ? new Date() : null,
      })
      .where(eq(mediaItemsTable.id, id))
      .returning();
    return media;
  });

export const deleteMedia = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await db.delete(mediaItemsTable).where(eq(mediaItemsTable.id, data.id));
    return { success: true };
  });

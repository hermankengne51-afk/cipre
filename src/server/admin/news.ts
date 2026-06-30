import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { newsArticlesTable } from "@/integrations/drizzle/schema";

const newsInput = z.object({
  slug: z.string().min(1),
  titleFr: z.string(),
  titleEn: z.string(),
  excerptFr: z.string(),
  excerptEn: z.string(),
  contentFr: z.string().optional(),
  contentEn: z.string().optional(),
  category: z.string().min(1),
  coverImageUrl: z.string().optional(),
  author: z.string().optional(),
  status: z.enum(["draft", "published"]),
});

export const listNews = createServerFn({ method: "GET" }).handler(async () => {
  return db
    .select()
    .from(newsArticlesTable)
    .orderBy(desc(newsArticlesTable.createdAt));
});

export const createNews = createServerFn({ method: "POST" })
  .inputValidator(newsInput)
  .handler(async ({ data }) => {
    const [article] = await db
      .insert(newsArticlesTable)
      .values({
        ...data,
        publishedAt: data.status === "published" ? new Date() : null,
      })
      .returning();
    return article;
  });

export const updateNews = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(newsInput.shape))
  .handler(async ({ data }) => {
    const { id, ...values } = data;
    const [article] = await db
      .update(newsArticlesTable)
      .set({
        ...values,
        publishedAt: values.status === "published" ? new Date() : null,
      })
      .where(eq(newsArticlesTable.id, id))
      .returning();
    return article;
  });

export const deleteNews = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await db.delete(newsArticlesTable).where(eq(newsArticlesTable.id, data.id));
    return { success: true };
  });

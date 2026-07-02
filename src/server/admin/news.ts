import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { newsArticlesTable } from "@/integrations/drizzle/schema";
import { requireAdminAuth } from "@/lib/auth/session";

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
  await requireAdminAuth();
  return db
    .select()
    .from(newsArticlesTable)
    .orderBy(desc(newsArticlesTable.createdAt));
});

export const createNews = createServerFn({ method: "POST" })
  .inputValidator(newsInput)
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const [article] = await db
      .insert(newsArticlesTable)
      .values({
        ...data,
        publishedAt: data.status === "published" ? new Date() : null,
        createdBy: auth.email,
        updatedBy: auth.email,
      })
      .returning();
    return article;
  });

export const updateNews = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(newsInput.shape))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const { id, ...values } = data;
    const [article] = await db
      .update(newsArticlesTable)
      .set({
        ...values,
        publishedAt: values.status === "published" ? new Date() : null,
        updatedBy: auth.email,
      })
      .where(eq(newsArticlesTable.id, id))
      .returning();
    return article;
  });

export const deleteNews = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();

    if (auth.role !== "SUPER_ADMIN") {
      const [article] = await db
        .select({ createdBy: newsArticlesTable.createdBy })
        .from(newsArticlesTable)
        .where(eq(newsArticlesTable.id, data.id))
        .limit(1);
      if (!article) throw new Error("Article introuvable");
      if (article.createdBy !== auth.email) {
        throw new Error("Vous ne pouvez pas supprimer un article créé par un autre administrateur");
      }
    }

    await db.delete(newsArticlesTable).where(eq(newsArticlesTable.id, data.id));
    return { success: true };
  });

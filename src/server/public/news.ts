import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { newsArticlesTable } from "@/integrations/drizzle/schema";

export const listPublishedNews = createServerFn({ method: "GET" }).handler(
  async () => {
    return db
      .select({
        id: newsArticlesTable.id,
        slug: newsArticlesTable.slug,
        titleFr: newsArticlesTable.titleFr,
        titleEn: newsArticlesTable.titleEn,
        excerptFr: newsArticlesTable.excerptFr,
        excerptEn: newsArticlesTable.excerptEn,
        category: newsArticlesTable.category,
        coverImageUrl: newsArticlesTable.coverImageUrl,
        author: newsArticlesTable.author,
        publishedAt: newsArticlesTable.publishedAt,
      })
      .from(newsArticlesTable)
      .where(eq(newsArticlesTable.status, "published"))
      .orderBy(newsArticlesTable.publishedAt);
  },
);

export const getPublishedNewsBySlug = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string() }))
  .handler(async ({ data }) => {
    const [article] = await db
      .select()
      .from(newsArticlesTable)
      .where(eq(newsArticlesTable.slug, data.slug));

    if (!article || article.status !== "published") return null;
    return article;
  });

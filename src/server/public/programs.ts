import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { programsTable } from "@/integrations/drizzle/schema";

export const listPublishedPrograms = createServerFn({ method: "GET" }).handler(
  async () => {
    return db
      .select({
        id: programsTable.id,
        slug: programsTable.slug,
        titleFr: programsTable.titleFr,
        titleEn: programsTable.titleEn,
        summaryFr: programsTable.summaryFr,
        summaryEn: programsTable.summaryEn,
        category: programsTable.category,
        coverImageUrl: programsTable.coverImageUrl,
        publishedAt: programsTable.publishedAt,
      })
      .from(programsTable)
      .where(eq(programsTable.status, "published"))
      .orderBy(programsTable.publishedAt);
  },
);

export const getPublishedProgramBySlug = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string() }))
  .handler(async ({ data }) => {
    const [program] = await db
      .select()
      .from(programsTable)
      .where(eq(programsTable.slug, data.slug));

    if (!program || program.status !== "published") return null;
    return program;
  });

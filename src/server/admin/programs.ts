import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { programsTable } from "@/integrations/drizzle/schema";

const programInput = z.object({
  slug: z.string().min(1),
  titleFr: z.string(),
  titleEn: z.string(),
  summaryFr: z.string(),
  summaryEn: z.string(),
  contentFr: z.string().optional(),
  contentEn: z.string().optional(),
  category: z.string().min(1),
  coverImageUrl: z.string().optional(),
  status: z.enum(["draft", "published"]),
});

export const listPrograms = createServerFn({ method: "GET" }).handler(
  async () => {
    return db
      .select()
      .from(programsTable)
      .orderBy(desc(programsTable.createdAt));
  },
);

export const createProgram = createServerFn({ method: "POST" })
  .inputValidator(programInput)
  .handler(async ({ data }) => {
    const [program] = await db
      .insert(programsTable)
      .values({
        ...data,
        publishedAt: data.status === "published" ? new Date() : null,
      })
      .returning();
    return program;
  });

export const updateProgram = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(programInput.shape))
  .handler(async ({ data }) => {
    const { id, ...values } = data;
    const [program] = await db
      .update(programsTable)
      .set({
        ...values,
        publishedAt: values.status === "published" ? new Date() : null,
      })
      .where(eq(programsTable.id, id))
      .returning();
    return program;
  });

export const deleteProgram = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await db.delete(programsTable).where(eq(programsTable.id, data.id));
    return { success: true };
  });

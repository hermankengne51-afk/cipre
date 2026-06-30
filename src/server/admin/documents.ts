import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { documentsTable } from "@/integrations/drizzle/schema";

const documentInput = z.object({
  titleFr: z.string(),
  titleEn: z.string(),
  category: z.string().min(1),
  fileUrl: z.url(),
  language: z.enum(["fr", "en"]),
  status: z.enum(["draft", "published"]),
});

export const listDocuments = createServerFn({ method: "GET" }).handler(
  async () => {
    return db
      .select()
      .from(documentsTable)
      .orderBy(desc(documentsTable.createdAt));
  },
);

export const createDocument = createServerFn({ method: "POST" })
  .inputValidator(documentInput)
  .handler(async ({ data }) => {
    const [document] = await db
      .insert(documentsTable)
      .values({
        ...data,
        publishedAt: data.status === "published" ? new Date() : null,
      })
      .returning();
    return document;
  });

export const updateDocument = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(documentInput.shape))
  .handler(async ({ data }) => {
    const { id, ...values } = data;
    const [document] = await db
      .update(documentsTable)
      .set({
        ...values,
        publishedAt: values.status === "published" ? new Date() : null,
      })
      .where(eq(documentsTable.id, id))
      .returning();
    return document;
  });

export const deleteDocument = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await db.delete(documentsTable).where(eq(documentsTable.id, data.id));
    return { success: true };
  });

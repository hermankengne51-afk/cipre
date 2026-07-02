import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { documentsTable } from "@/integrations/drizzle/schema";
import { requireAdminAuth } from "@/lib/auth/session";

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
    await requireAdminAuth();
    return db
      .select()
      .from(documentsTable)
      .orderBy(desc(documentsTable.createdAt));
  },
);

export const createDocument = createServerFn({ method: "POST" })
  .inputValidator(documentInput)
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const [document] = await db
      .insert(documentsTable)
      .values({
        ...data,
        publishedAt: data.status === "published" ? new Date() : null,
        createdBy: auth.email,
        updatedBy: auth.email,
      })
      .returning();
    return document;
  });

export const updateDocument = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(documentInput.shape))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const { id, ...values } = data;
    const [document] = await db
      .update(documentsTable)
      .set({
        ...values,
        publishedAt: values.status === "published" ? new Date() : null,
        updatedBy: auth.email,
      })
      .where(eq(documentsTable.id, id))
      .returning();
    return document;
  });

export const deleteDocument = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();

    if (auth.role !== "SUPER_ADMIN") {
      const [doc] = await db
        .select({ createdBy: documentsTable.createdBy })
        .from(documentsTable)
        .where(eq(documentsTable.id, data.id))
        .limit(1);
      if (!doc) throw new Error("Document introuvable");
      if (doc.createdBy !== auth.email) {
        throw new Error("Vous ne pouvez pas supprimer un document créé par un autre administrateur");
      }
    }

    await db.delete(documentsTable).where(eq(documentsTable.id, data.id));
    return { success: true };
  });

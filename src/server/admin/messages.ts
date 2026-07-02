import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { requireAdminAuth } from "@/lib/auth/session";
import { sendMail } from "@/lib/email/mailer";
import { db } from "@/integrations/drizzle/db";
import { contactMessagesTable } from "@/integrations/drizzle/schema";

export const listContactMessages = createServerFn({ method: "GET" }).handler(
  async () => {
    await requireAdminAuth();
    return db
      .select()
      .from(contactMessagesTable)
      .orderBy(desc(contactMessagesTable.createdAt));
  },
);

export const updateContactMessageStatus = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string(), status: z.string() }))
  .handler(async ({ data }) => {
    await requireAdminAuth();
    const [message] = await db
      .update(contactMessagesTable)
      .set({ status: data.status })
      .where(eq(contactMessagesTable.id, data.id))
      .returning();
    return message;
  });

export const deleteContactMessage = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await requireAdminAuth();
    await db
      .delete(contactMessagesTable)
      .where(eq(contactMessagesTable.id, data.id));
    return { success: true };
  });

export const replyToContactMessage = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string(), body: z.string().min(1) }))
  .handler(async ({ data }) => {
    await requireAdminAuth();

    const [message] = await db
      .select()
      .from(contactMessagesTable)
      .where(eq(contactMessagesTable.id, data.id));
    if (!message) throw new Error("Message introuvable");

    await sendMail({
      to: message.email,
      subject: `Re: ${message.subject}`,
      text: data.body,
    });

    const [updated] = await db
      .update(contactMessagesTable)
      .set({ status: "read" })
      .where(eq(contactMessagesTable.id, data.id))
      .returning();
    return updated;
  });

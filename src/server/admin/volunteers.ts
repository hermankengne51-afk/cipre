import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { requireAdminAuth } from "@/lib/auth/session";
import { sendMail } from "@/lib/email/mailer";
import { db } from "@/integrations/drizzle/db";
import { volunteerApplicationsTable } from "@/integrations/drizzle/schema";

export const listVolunteerApplications = createServerFn({
  method: "GET",
}).handler(async () => {
  await requireAdminAuth();
  return db
    .select()
    .from(volunteerApplicationsTable)
    .orderBy(desc(volunteerApplicationsTable.createdAt));
});

export const updateVolunteerApplicationStatus = createServerFn({
  method: "POST",
})
  .inputValidator(z.object({ id: z.string(), status: z.string() }))
  .handler(async ({ data }) => {
    await requireAdminAuth();
    const [application] = await db
      .update(volunteerApplicationsTable)
      .set({ status: data.status })
      .where(eq(volunteerApplicationsTable.id, data.id))
      .returning();
    return application;
  });

export const deleteVolunteerApplication = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await requireAdminAuth();
    await db
      .delete(volunteerApplicationsTable)
      .where(eq(volunteerApplicationsTable.id, data.id));
    return { success: true };
  });

export const replyToVolunteerApplication = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string(), body: z.string().min(1) }))
  .handler(async ({ data }) => {
    await requireAdminAuth();

    const [application] = await db
      .select()
      .from(volunteerApplicationsTable)
      .where(eq(volunteerApplicationsTable.id, data.id));
    if (!application) throw new Error("Candidature introuvable");

    await sendMail({
      to: application.email,
      subject: "Votre candidature bénévole - CIPCRE",
      text: data.body,
    });

    if (application.status === "new") {
      const [updated] = await db
        .update(volunteerApplicationsTable)
        .set({ status: "reviewed" })
        .where(eq(volunteerApplicationsTable.id, data.id))
        .returning();
      return updated;
    }
    return application;
  });

import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { eventsTable } from "@/integrations/drizzle/schema";
import { requireAdminAuth } from "@/lib/auth/session";

const eventInput = z.object({
  slug: z.string().min(1),
  titleFr: z.string(),
  titleEn: z.string(),
  descriptionFr: z.string(),
  descriptionEn: z.string(),
  location: z.string().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  coverImageUrl: z.string().optional(),
  status: z.enum(["draft", "published"]),
});

export const listEvents = createServerFn({ method: "GET" }).handler(
  async () => {
    await requireAdminAuth();
    return db.select().from(eventsTable).orderBy(desc(eventsTable.startDate));
  },
);

export const createEvent = createServerFn({ method: "POST" })
  .inputValidator(eventInput)
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const [event] = await db
      .insert(eventsTable)
      .values({ ...data, createdBy: auth.email, updatedBy: auth.email })
      .returning();
    return event;
  });

export const updateEvent = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(eventInput.shape))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();
    const { id, ...values } = data;
    const [event] = await db
      .update(eventsTable)
      .set({ ...values, updatedBy: auth.email })
      .where(eq(eventsTable.id, id))
      .returning();
    return event;
  });

export const deleteEvent = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const auth = await requireAdminAuth();

    if (auth.role !== "SUPER_ADMIN") {
      const [event] = await db
        .select({ createdBy: eventsTable.createdBy })
        .from(eventsTable)
        .where(eq(eventsTable.id, data.id))
        .limit(1);
      if (!event) throw new Error("Événement introuvable");
      if (event.createdBy !== auth.email) {
        throw new Error("Vous ne pouvez pas supprimer un événement créé par un autre administrateur");
      }
    }

    await db.delete(eventsTable).where(eq(eventsTable.id, data.id));
    return { success: true };
  });

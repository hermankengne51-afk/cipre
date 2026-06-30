import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/integrations/drizzle/db";
import { eventsTable } from "@/integrations/drizzle/schema";

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
    return db.select().from(eventsTable).orderBy(desc(eventsTable.startDate));
  },
);

export const createEvent = createServerFn({ method: "POST" })
  .inputValidator(eventInput)
  .handler(async ({ data }) => {
    const [event] = await db.insert(eventsTable).values(data).returning();
    return event;
  });

export const updateEvent = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }).extend(eventInput.shape))
  .handler(async ({ data }) => {
    const { id, ...values } = data;
    const [event] = await db
      .update(eventsTable)
      .set(values)
      .where(eq(eventsTable.id, id))
      .returning();
    return event;
  });

export const deleteEvent = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await db.delete(eventsTable).where(eq(eventsTable.id, data.id));
    return { success: true };
  });

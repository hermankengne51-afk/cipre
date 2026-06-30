import { createServerFn } from "@tanstack/react-start";
import { and, eq, gte, lt } from "drizzle-orm";
import { db } from "@/integrations/drizzle/db";
import { eventsTable } from "@/integrations/drizzle/schema";

export const listPublishedEvents = createServerFn({ method: "GET" }).handler(
  async () => {
    const now = new Date();
    const [upcoming, past] = await Promise.all([
      db
        .select()
        .from(eventsTable)
        .where(
          and(
            eq(eventsTable.status, "published"),
            gte(eventsTable.startDate, now),
          ),
        )
        .orderBy(eventsTable.startDate),
      db
        .select()
        .from(eventsTable)
        .where(
          and(
            eq(eventsTable.status, "published"),
            lt(eventsTable.startDate, now),
          ),
        )
        .orderBy(eventsTable.startDate),
    ]);
    return { upcoming, past };
  },
);

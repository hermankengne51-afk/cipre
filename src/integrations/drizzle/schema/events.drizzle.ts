import { index, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { AuditableTable, createTable } from "./commons";

export const eventsTable = createTable(
  "events",
  AuditableTable({
    id: uuid("id").primaryKey().defaultRandom(),

    slug: varchar("slug", { length: 255 }).notNull().unique(),
    titleFr: varchar("title_fr", { length: 255 }).notNull(),
    titleEn: varchar("title_en", { length: 255 }).notNull(),
    descriptionFr: text("description_fr").notNull(),
    descriptionEn: text("description_en").notNull(),
    location: varchar("location", { length: 255 }),
    startDate: timestamp("start_date", { withTimezone: true }).notNull(),
    endDate: timestamp("end_date", { withTimezone: true }),
    coverImageUrl: text("cover_image_url"),

    status: varchar("status", { length: 20 }).notNull().default("draft"),
  }),
  (t) => [
    // Upcoming events: WHERE status = 'published' AND start_date >= NOW() ORDER BY start_date ASC
    index("events_status_start_date_idx").on(t.status, t.startDate),
  ],
);

export type DrizzleEvent = typeof eventsTable.$inferSelect;
export type DrizzleNewEvent = typeof eventsTable.$inferInsert;

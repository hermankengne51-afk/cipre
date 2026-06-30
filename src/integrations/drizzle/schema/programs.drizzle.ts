import { index, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { AuditableTable, createTable } from "./commons";

export const programsTable = createTable(
  "programs",
  AuditableTable({
    id: uuid("id").primaryKey().defaultRandom(),

    slug: varchar("slug", { length: 255 }).notNull().unique(),
    titleFr: varchar("title_fr", { length: 255 }).notNull(),
    titleEn: varchar("title_en", { length: 255 }).notNull(),
    summaryFr: text("summary_fr").notNull(),
    summaryEn: text("summary_en").notNull(),
    contentFr: text("content_fr"),
    contentEn: text("content_en"),
    category: varchar("category", { length: 100 }).notNull(),
    coverImageUrl: text("cover_image_url"),

    status: varchar("status", { length: 20 }).notNull().default("draft"),
    publishedAt: timestamp("published_at", { withTimezone: true }),
  }),
  (t) => [
    // Public listing: WHERE status = 'published' ORDER BY published_at DESC
    index("programs_status_published_at_idx").on(t.status, t.publishedAt),
    // Admin filtering by category
    index("programs_category_status_idx").on(t.category, t.status),
  ],
);

export type DrizzleProgram = typeof programsTable.$inferSelect;
export type DrizzleNewProgram = typeof programsTable.$inferInsert;

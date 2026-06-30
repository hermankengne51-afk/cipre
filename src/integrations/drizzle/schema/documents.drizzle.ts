import { index, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { AuditableTable, createTable } from "./commons";

export const documentsTable = createTable(
  "documents",
  AuditableTable({
    id: uuid("id").primaryKey().defaultRandom(),

    titleFr: varchar("title_fr", { length: 255 }).notNull(),
    titleEn: varchar("title_en", { length: 255 }).notNull(),
    category: varchar("category", { length: 100 }).notNull(),
    fileUrl: varchar("file_url", { length: 2048 }).notNull(),
    language: varchar("language", { length: 10 }).notNull().default("fr"),

    status: varchar("status", { length: 20 }).notNull().default("draft"),
    publishedAt: timestamp("published_at", { withTimezone: true }),
  }),
  (t) => [
    // Public listing filtered by status, category, language
    index("documents_status_published_at_idx").on(t.status, t.publishedAt),
    index("documents_category_language_idx").on(t.category, t.language, t.status),
  ],
);

export type DrizzleDocument = typeof documentsTable.$inferSelect;
export type DrizzleNewDocument = typeof documentsTable.$inferInsert;

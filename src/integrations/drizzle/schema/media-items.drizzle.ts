import { index, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { AuditableTable, createTable } from "./commons";

export const mediaItemsTable = createTable(
  "media_items",
  AuditableTable({
    id: uuid("id").primaryKey().defaultRandom(),

    type: varchar("type", { length: 20 }).notNull().default("image"),
    titleFr: varchar("title_fr", { length: 255 }).notNull(),
    titleEn: varchar("title_en", { length: 255 }).notNull(),
    url: varchar("url", { length: 2048 }).notNull(),
    thumbnailUrl: varchar("thumbnail_url", { length: 2048 }),
    gallery: varchar("gallery", { length: 100 }),

    status: varchar("status", { length: 20 }).notNull().default("draft"),
    publishedAt: timestamp("published_at", { withTimezone: true }),
  }),
  (t) => [
    // Filter by type (image/video) and status for gallery pages
    index("media_type_status_idx").on(t.type, t.status, t.publishedAt),
    // Gallery grouping
    index("media_gallery_status_idx").on(t.gallery, t.status),
  ],
);

export type DrizzleMediaItem = typeof mediaItemsTable.$inferSelect;
export type DrizzleNewMediaItem = typeof mediaItemsTable.$inferInsert;

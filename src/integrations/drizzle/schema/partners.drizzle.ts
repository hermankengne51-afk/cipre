import { index, uuid, varchar } from "drizzle-orm/pg-core";

import { AuditableTable, createTable } from "./commons";

export const partnersTable = createTable(
  "partners",
  AuditableTable({
    id: uuid("id").primaryKey().defaultRandom(),

    name: varchar("name", { length: 255 }).notNull(),
    logoUrl: varchar("logo_url", { length: 2048 }),
    websiteUrl: varchar("website_url", { length: 2048 }),
    type: varchar("type", { length: 50 }).notNull().default("partenaire"),
    country: varchar("country", { length: 100 }),

    status: varchar("status", { length: 20 }).notNull().default("draft"),
  }),
  (t) => [
    // Filter published partners by type (partenaire, donateur, etc.)
    index("partners_type_status_idx").on(t.type, t.status),
  ],
);

export type DrizzlePartner = typeof partnersTable.$inferSelect;
export type DrizzleNewPartner = typeof partnersTable.$inferInsert;

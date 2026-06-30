import { index, text, uuid, varchar } from "drizzle-orm/pg-core";

import { AuditableTable, createTable } from "./commons";

export const volunteerApplicationsTable = createTable(
  "volunteer_applications",
  AuditableTable({
    id: uuid("id").primaryKey().defaultRandom(),

    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 50 }).notNull(),
    country: varchar("country", { length: 255 }).notNull(),
    city: varchar("city", { length: 255 }).notNull(),
    areaOfInterest: varchar("area_of_interest", { length: 100 }).notNull(),
    availability: varchar("availability", { length: 50 }).notNull(),
    experience: text("experience"),
    motivation: text("motivation").notNull(),

    status: varchar("status", { length: 50 }).notNull().default("new"),
  }),
  (t) => [
    // Admin inbox: WHERE status = 'new' ORDER BY created_at DESC
    index("volunteer_applications_status_created_at_idx").on(
      t.status,
      t.createdAt,
    ),
    // Filter by area of interest
    index("volunteer_applications_area_status_idx").on(
      t.areaOfInterest,
      t.status,
    ),
  ],
);

export type DrizzleVolunteerApplication =
  typeof volunteerApplicationsTable.$inferSelect;
export type DrizzleNewVolunteerApplication =
  typeof volunteerApplicationsTable.$inferInsert;

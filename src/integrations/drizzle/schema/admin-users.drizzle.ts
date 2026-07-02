import { boolean, uuid, varchar } from "drizzle-orm/pg-core";

import { AuditableTable, createTable } from "./commons";

export const adminUsersTable = createTable(
  "admin_users",
  AuditableTable({
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    passwordHash: varchar("password_hash", { length: 512 }).notNull(),
    role: varchar("role", { length: 20 }).notNull().default("ADMIN"),
    isActive: boolean("is_active").notNull().default(true),
  }),
);

export type DrizzleAdminUser = typeof adminUsersTable.$inferSelect;
export type DrizzleNewAdminUser = typeof adminUsersTable.$inferInsert;

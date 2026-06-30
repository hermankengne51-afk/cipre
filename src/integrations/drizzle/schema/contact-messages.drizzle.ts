import { index, text, uuid, varchar } from "drizzle-orm/pg-core";

import { AuditableTable, createTable } from "./commons";

export const contactMessagesTable = createTable(
  "contact_messages",
  AuditableTable({
    id: uuid("id").primaryKey().defaultRandom(),

    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 50 }),
    organization: varchar("organization", { length: 255 }),
    subject: varchar("subject", { length: 255 }).notNull(),
    message: text("message").notNull(),

    status: varchar("status", { length: 50 }).notNull().default("new"),
  }),
  (t) => [
    // Admin inbox: WHERE status = 'new' ORDER BY created_at DESC
    index("contact_messages_status_created_at_idx").on(t.status, t.createdAt),
  ],
);

export type DrizzleContactMessage = typeof contactMessagesTable.$inferSelect;
export type DrizzleNewContactMessage = typeof contactMessagesTable.$inferInsert;

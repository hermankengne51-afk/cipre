import { pgTableCreator, timestamp, varchar } from "drizzle-orm/pg-core";

const SYSTEM_USER = "system";

const createdAt = timestamp("created_at", { withTimezone: true })
  .notNull()
  .defaultNow();
const updatedAt = timestamp("updated_at", { withTimezone: true })
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date());
const createdBy = varchar("created_by", { length: 256 }).default(SYSTEM_USER);
const updatedBy = varchar("updated_by", { length: 256 }).default(SYSTEM_USER);

export const AuditableTable = <T>(otherFields: T) => ({
  ...otherFields,
  createdAt,
  updatedAt,
  createdBy,
  updatedBy,
});

export const createTable = pgTableCreator((name) => `cipre_${name}`);

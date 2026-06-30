import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { db } from "@/integrations/drizzle/db";
import { documentsTable } from "@/integrations/drizzle/schema";

export const listPublishedDocuments = createServerFn({
  method: "GET",
}).handler(async () => {
  return db
    .select()
    .from(documentsTable)
    .where(eq(documentsTable.status, "published"))
    .orderBy(documentsTable.publishedAt);
});

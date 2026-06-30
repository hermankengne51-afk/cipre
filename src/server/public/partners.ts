import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { db } from "@/integrations/drizzle/db";
import { partnersTable } from "@/integrations/drizzle/schema";

export const listPublishedPartners = createServerFn({
  method: "GET",
}).handler(async () => {
  return db
    .select()
    .from(partnersTable)
    .where(eq(partnersTable.status, "published"))
    .orderBy(partnersTable.name);
});

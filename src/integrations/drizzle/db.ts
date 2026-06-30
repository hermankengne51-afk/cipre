import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { envServer } from "@/lib/env/server";
import * as schema from "./schema/index";

const pool = new Pool({
  connectionString: envServer.DATABASE_URL,
});

export const db = drizzle(pool, { schema });

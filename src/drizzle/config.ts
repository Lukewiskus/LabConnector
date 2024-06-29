
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/drizzle/schema";

const connectionString = process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL ?? "" : process.env.DATABASE_URL_DEV ?? ""
console.log(connectionString)
const client = postgres(connectionString);
const db = drizzle(client, { schema });

export { client, db };
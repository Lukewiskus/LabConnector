// drizzle.config.ts

import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit"


dotenv.config({ path: ".env.local" });

export default defineConfig({
    dialect: "postgresql", // "postgresql" | "mysql"
    schema: "./src/drizzle/schema.ts",
    dbCredentials: {
       url: process.env.DATABASE_URL ?? "",
       user: process.env.DB_USER ?? "",
       password: process.env.DB_PASSWORD ?? "",
    },
})
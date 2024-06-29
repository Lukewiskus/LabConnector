// drizzle.config.ts

import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit"


dotenv.config({ path: ".env.local" });

export default defineConfig({
    dialect: "postgresql", // "postgresql" | "mysql"
    schema: "./src/drizzle/schema.ts",
    dbCredentials: {
        database: process.env.POSTGRES_DATABASE ?? "",
        url: process.env.DATABASE_URL ?? "",
        user: process.env.POSTGRES_USERNAME ?? "",
        password: process.env.POSTGRES_PASSWORD ?? "",
    },
})
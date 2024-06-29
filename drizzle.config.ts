// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

const config = defineConfig({
    dialect: "postgresql", // "postgresql" | "mysql"
    schema: "./src/drizzle/schema.ts",
    dbCredentials: {
        database: process.env.NODE_ENV === 'production' ? process.env.POSTGRES_DATABASE ?? "" : process.env.POSTGRES_DATABASE_DEV ?? "",
        url: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL ?? "" : process.env.DATABASE_URL_DEV ?? "",
        user: process.env.NODE_ENV === 'production' ? process.env.POSTGRES_USERNAME ?? "" : process.env.POSTGRES_USERNAME_DEV ?? "",
        password: process.env.NODE_ENV === 'production' ? process.env.POSTGRES_PASSWORD ?? "" : process.env.POSTGRES_PASSWORD_DEV ?? "",
    },
});

console.log(config)
export default config;

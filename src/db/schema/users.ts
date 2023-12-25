import { InferModel, sql } from "drizzle-orm";
import { text, sqliteTable, integer, blob } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  external_id: text("external_id").notNull().unique(), // the clerk User Id

  first_name: text("first_name").default(""),
  last_name: text("last_name").default(""),
  email: text("email").default(""),
  photo_url: text("photo_url").default(""),

  attributes: blob("attributes", { mode: "json" }).default("{}"),

  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});

export type Users = InferModel<typeof users>;

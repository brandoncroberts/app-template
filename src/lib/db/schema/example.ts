import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

// Comments table - matches existing Neon DB schema
export const comments = pgTable("comments", {
  comment: text("comment").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

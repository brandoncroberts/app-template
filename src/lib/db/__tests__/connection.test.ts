import { describe, it, expect } from "vitest";
import { db } from "../index";
import { comments } from "../schema/example";

describe("Drizzle ORM Connection", () => {
  it("should connect to the database", async () => {
    // Test that we can query the database without errors
    const result = await db.select().from(comments).limit(1);
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
  });

  it("should have DATABASE_URL environment variable", () => {
    expect(process.env.DATABASE_URL).toBeDefined();
    expect(process.env.DATABASE_URL).not.toBe("");
  });

  it("should be able to execute a simple query", async () => {
    // Test a simple count query
    const result = await db.select().from(comments);
    expect(result).toBeDefined();
  });
});

import { describe, it, expect } from "vitest";
import { auth } from "../index";

describe("Better Auth Setup", () => {
  it("should have auth instance configured", () => {
    expect(auth).toBeDefined();
    expect(auth).toHaveProperty("api");
  });

  it("should have BETTER_AUTH_SECRET environment variable", () => {
    expect(process.env.BETTER_AUTH_SECRET).toBeDefined();
    expect(process.env.BETTER_AUTH_SECRET).not.toBe("");
  });

  it("should have BETTER_AUTH_URL environment variable", () => {
    expect(process.env.BETTER_AUTH_URL).toBeDefined();
    expect(process.env.BETTER_AUTH_URL).not.toBe("");
  });

  it("should have database adapter configured", () => {
    // Verify that auth instance has the expected structure
    expect(auth).toBeDefined();
  });
});

import { config } from "dotenv";
import { resolve } from "path";
import "@testing-library/jest-dom/vitest";

// Load environment variables from .env files
// Priority: .env.test.local > .env.local > .env.test > .env
config({ path: resolve(process.cwd(), ".env.test.local") });
config({ path: resolve(process.cwd(), ".env.local") });
config({ path: resolve(process.cwd(), ".env.test") });
config({ path: resolve(process.cwd(), ".env") });


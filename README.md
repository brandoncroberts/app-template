## Getting Started

### Environment Variables

Tests load environment variables using Vite's `loadEnv` method. Vitest automatically loads variables from `.env` files based on the mode:

- `.env.test.local` (highest priority)
- `.env.local`
- `.env.test`
- `.env`

**Required Environment Variables:**

- `DATABASE_URL` - Your Neon database connection string
- `BETTER_AUTH_SECRET` - Secret key for Better Auth (generate with `openssl rand -base64 32`)
- `BETTER_AUTH_URL` - Your app URL (e.g., `http://localhost:3000`)

Create a `.env.local` file in the root directory with these variables for local development and testing.

See [Vitest Environment Variables documentation](https://vitest.dev/guide/features.html#environment-variables) for more details.

### Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Neon DB Setup

- Install https://vercel.com/marketplace/neon into your Vercel account
- Connect your deployed app in vercel to Neon
- Run `vercel env pull .env.development.local`
- Navigate to the Neon SQL Editor in the Neon Console and create the application database by running this SQL command, then you can access the Neon Console from the Storage tab on your Vercel Dashboard. Select Open in Neon Console.:

```sql
CREATE TABLE IF NOT EXISTS comments (comment TEXT);
```

- Submit form at `app/page.tsx`
- In Neon Console run to see posted results

```sql
SELECT * FROM comments;
```

## Drizzle ORM Setup

This project uses [Drizzle ORM](https://orm.drizzle.team/) with Neon Postgres for type-safe database operations.

### Documentation

- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [Drizzle with Neon Tutorial](https://orm.drizzle.team/docs/tutorials/drizzle-with-neon)
- [Connecting Drizzle to Neon](https://orm.drizzle.team/docs/connect-neon)
- [Neon Drizzle Guide](https://neon.com/docs/guides/drizzle)

### Configuration

- **Database Connection**: `src/lib/db/index.ts` - Uses Neon serverless HTTP driver
- **Schema Definitions**: `src/lib/db/schema/` - All database schemas are defined here
- **Drizzle Config**: `drizzle.config.ts` - Configuration for Drizzle Kit

### Available Scripts

```bash
# Generate migration files from schema changes
pnpm db:generate

# Apply migrations to database
pnpm db:migrate

# Push schema changes directly (dev only)
pnpm db:push

# Open Drizzle Studio (database GUI)
pnpm db:studio
```

### Usage

Import the database instance and schemas:

```typescript
import { db } from "@lib/db";
import { comments } from "@lib/db/schema";

// Query example
const allComments = await db.select().from(comments);
```

### Testing

Run the Drizzle connection test:

```bash
pnpm test:drizzle
```

This verifies that:

- Database connection is working
- Schema can be queried
- Environment variables are properly configured

## Better Auth Setup

This project uses [Better Auth](https://www.better-auth.com/) for authentication, integrated with Drizzle ORM and Neon DB.

### Documentation

- [Better Auth Documentation](https://www.better-auth.com/docs/installation)
- [Better Auth Basic Usage](https://www.better-auth.com/docs/basic-usage)
- [Drizzle Adapter](https://www.better-auth.com/docs/adapters/drizzle)
- [Next.js Integration](https://www.better-auth.com/docs/integrations/next)
- [Better Auth Demo (Next.js)](https://github.com/better-auth/better-auth/tree/main/demo/nextjs)

### Configuration

- **Auth Instance**: `src/lib/auth/index.ts` - Main Better Auth configuration
- **API Route**: `src/app/api/auth/[...all]/route.ts` - Next.js API route handler
- **Schema**: `src/lib/db/schema/better-auth.ts` - Better Auth database tables

### Environment Variables

Add these to your `.env.local` file:

```bash
BETTER_AUTH_SECRET=your-secret-key-here  # Generate with: openssl rand -base64 32
BETTER_AUTH_URL=http://localhost:3000    # Your app URL (use production URL in production)
DATABASE_URL=your-neon-database-url      # Already configured for Neon DB
```

### Database Setup

After setting up environment variables, generate and run migrations:

```bash
# Generate migrations for Better Auth tables
pnpm db:generate

# Apply migrations to database
pnpm db:migrate
```

This will create the following tables:

- `user` - User accounts
- `session` - User sessions
- `account` - OAuth accounts
- `verification` - Email verification tokens

### Usage

#### Server-side

```typescript
import { auth } from "@lib/auth";

// Get current session
const session = await auth.api.getSession({ headers: request.headers });
```

#### Client-side

```typescript
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

// Sign up
await authClient.signUp.email({
  email: "user@example.com",
  password: "password",
  name: "User Name",
});

// Sign in
await authClient.signIn.email({
  email: "user@example.com",
  password: "password",
});
```

### Testing

Run the Better Auth setup test:

```bash
pnpm test:auth
```

This verifies that:

- Auth instance is properly configured
- Environment variables are set
- Database adapter is connected

## Chakra UI Setup

This project uses [Chakra UI](https://chakra-ui.com/) for building accessible React components with a modern design system.

### Documentation

- [Chakra UI Documentation](https://chakra-ui.com/docs/get-started/frameworks/next-app)
- [Chakra UI Components](https://chakra-ui.com/docs/components)
- [Chakra UI MCP Server](https://chakra-ui.com/docs/get-started/ai/mcp-server)

### Configuration

- **Providers**: `src/components/UI/providers.tsx` - Chakra UI provider wrapper
- **Layout Integration**: `src/app/layout.tsx` - Root layout with Chakra UI providers

### Installation

Chakra UI and its dependencies have been installed:

- `@chakra-ui/react` - Core Chakra UI library
- `@emotion/react` - CSS-in-JS library (required by Chakra UI)
- `@emotion/styled` - Styled components for Emotion
- `framer-motion` - Animation library (required by Chakra UI)

### Usage

Chakra UI components are now available throughout your app. Import and use them like this:

```typescript
import { Button, Box, Text } from "@chakra-ui/react";

export function MyComponent() {
  return (
    <Box p={4}>
      <Text>Hello from Chakra UI!</Text>
      <Button colorScheme="blue">Click me</Button>
    </Box>
  );
}
```

### Creating UI Components

Add your Chakra UI components to `src/components/UI/` and import them using the `@components` alias:

```typescript
// src/components/UI/Button.tsx
import { Button as ChakraButton } from "@chakra-ui/react";

export function Button({ children, ...props }) {
  return <ChakraButton {...props}>{children}</ChakraButton>;
}

// Usage
import { Button } from "@components/UI/Button";
```

### Testing

Run the Chakra UI setup test:

```bash
pnpm test:chakra
```

This verifies that:

- Chakra UI providers are properly configured
- Components render correctly
- React Testing Library is set up correctly

## NX Setup

This project uses [NX](https://nx.dev/) as a standalone project (not a monorepo) for build system, task running, and caching capabilities.

### Documentation

- [NX Documentation](https://nx.dev/docs/getting-started/installation)
- [Adopting NX in Existing Projects](https://nx.dev/docs/guides/adopting-nx)
- [NX MCP Server](https://nx.dev/docs/getting-started/ai-setup)

### Configuration

- **NX Config**: `nx.json` - NX workspace configuration
- **Project Config**: `project.json` - Project-specific targets and configuration

### Installation

NX and required plugins have been installed:

- `nx` - Core NX package
- `@nx/next` - Next.js plugin for NX
- `@nx/eslint` - ESLint integration
- `@nx/vite` - Vite integration for testing

### Usage

NX provides task running and caching capabilities. You can use NX commands:

```bash
# Run tasks with NX caching
nx build
nx lint
nx test

# View task graph
nx graph

# Clear cache
nx reset
```

### Benefits

- **Task Caching**: NX caches task results, speeding up builds and tests
- **Task Graph**: Visualize and understand your project's task dependencies
- **Parallel Execution**: Run tasks in parallel when possible
- **Affected Detection**: Only run tasks for affected parts of your codebase

### Testing

Run the NX setup test:

```bash
pnpm test:nx
```

This verifies that:

- NX is properly installed
- Configuration files are present
- NX can be used for task running

## Biome Configuration

This project uses [Biome](https://biomejs.dev/) for linting and formatting, configured to match ESLint Perfectionist style.

### Documentation

- [Biome Documentation](https://biomejs.dev/guides/configure-biome/)
- [ESLint Perfectionist](https://perfectionist.dev/configs)

### Configuration

- **Config File**: `biome.json` - Biome configuration with perfectionist-style rules

### Features

- **Import Organization**: Automatically organizes imports
- **Code Formatting**: Consistent code style with 2-space indentation
- **Linting**: Comprehensive linting rules for React and Next.js
- **Type Safety**: TypeScript-aware linting rules

### Usage

```bash
# Check for linting and formatting issues
pnpm lint

# Auto-fix linting and formatting issues
pnpm format
```

### Key Rules

- Import type enforcement (`useImportType`)
- Node.js import protocol enforcement (`useNodejsImportProtocol`)
- Exhaustive dependencies checking
- Organized imports with automatic sorting

## Playwright E2E Testing

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

### Documentation

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Next.js Playwright Guide](https://nextjs.org/docs/pages/guides/testing/playwright)
- [Playwright CI Guide](https://playwright.dev/docs/ci)

### Configuration

- **Config File**: `playwright.config.ts` - Playwright configuration
- **Test Directory**: `e2e/` - End-to-end test files

### Installation

Playwright and browsers have been installed:

- `@playwright/test` - Core Playwright testing library
- Chromium, Firefox, and WebKit browsers

### Usage

```bash
# Run all E2E tests
pnpm test:e2e

# Run tests with UI mode (interactive)
pnpm test:e2e:ui

# Run tests in headed mode (see browser)
pnpm test:e2e:headed

# Debug tests
pnpm test:e2e:debug
```

### Writing Tests

Add your E2E tests to the `e2e/` directory:

```typescript
import { test, expect } from "@playwright/test";

test("my feature works", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
});
```

### Features

- **Auto Server**: Automatically starts Next.js dev server before tests
- **Multiple Browsers**: Tests run on Chromium, Firefox, and WebKit
- **Trace Viewer**: Automatic trace collection on retries
- **CI Ready**: Configured for CI environments with retries

## Renovate Bot

This project uses [Renovate Bot](https://github.com/renovatebot/renovate) to automatically keep dependencies up to date.

### Documentation

- [Renovate Documentation](https://docs.renovatebot.com/)
- [Renovate GitHub App](https://github.com/apps/renovate)

### Configuration

- **Config File**: `renovate.json` - Renovate bot configuration

### Setup

1. **Install Renovate GitHub App**:

   - Go to [Renovate App on GitHub](https://github.com/apps/renovate)
   - Click "Install" and select your repository

2. **Configuration**:
   - The `renovate.json` file is already configured
   - Renovate will create an onboarding PR when first installed

### Features

- **Auto-merge**: Minor and patch updates are automatically merged
- **Scheduled Updates**: Updates are created on Mondays before 10am EST
- **Rate Limiting**: Limits concurrent PRs to prevent spam
- **Major Updates**: Major version updates require manual review

### Configuration Details

- **Auto-merge**: Enabled for minor/patch updates
- **Schedule**: Mondays before 10am EST
- **Concurrent PRs**: Maximum 5 at a time
- **Hourly Limit**: Maximum 2 PRs per hour

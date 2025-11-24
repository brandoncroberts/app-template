## Getting Started

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
`


## Template TODOs

### MCP Servers

1. Setup MCP Servers in both Cursor + Gemini CLI for the following integrations that will be used in this app. Additionally, configure documentation to use the LLMS.TXT for the ie. @Docs for cursor/ whatever Gemini CLI uses when an LLMS.txt is available
   https://cursor.com/docs/context/mcp
   https://google-gemini.github.io/gemini-cli/docs/tools/mcp-server.html

Chakra UI

- https://chakra-ui.com/docs/get-started/ai/mcp-server
- https://chakra-ui.com/llms-full.txt

NX

- https://nx.dev/docs/getting-started/ai-setup
- https://nx.dev/docs/features/enhance-ai

Next.js

- https://nextjs.org/docs/app/guides/mcp

Playwright

- https://github.com/microsoft/playwright-mcp (also ensure that this will work in conjunction with Next.js as they mention it here "Browser Testing: Playwright MCP integration for verifying pages in the browser"
  )

Better Auth MCP

- https://www.better-auth.com/docs/plugins/mcp

- Setup Better Auth, with the Drizzle ORM intergration https://www.better-auth.com/docs/adapters/drizzle

Neon DB:

- https://neon.com/docs/ai/neon-mcp-server
- https://neon.com/docs/ai/connect-mcp-clients-to-neon#other-mcp-clients (ensure that other mcp clients have access to neon)

Vercel:

- https://vercel.com/docs/mcp/vercel-mcp
- Setup Drizzle ORM

### Auth/DB:

Setup will be Better Auth with Neon DB / Drizzle Orm
Note that I have already deployed this project on Vercel and setup the Neon DB Native Intergration
See
https://www.better-auth.com/docs/installation
https://www.better-auth.com/docs/adapters/postgresql
https://github.com/kysely-org/kysely-neon
https://www.better-auth.com/docs/adapters/drizzle
https://www.better-auth.com/docs/integrations/next
https://www.better-auth.com/docs/basic-usage
https://github.com/better-auth/better-auth/tree/main/demo/nextjs

https://orm.drizzle.team/docs/tutorials/drizzle-with-neon
https://orm.drizzle.team/docs/connect-neon
https://neon.com/docs/guides/drizzle

- Setup Chakra UI/Cursor MCP Server/LLMS.txt
- Setup NX and Cursor MCP Server/LLMS.txt
- Setup Next.js Cursor MCP servers
- Configure a src/components and src/lib dir, where UI components for Chakra are added to UI, and imported via ie. @components/Button syntx, and libs, like util functions etc. are added in the lib dir, and imported via ie. @lib/auth
- Setup cursor rules/ LLM files
- Setup BetterAuth with stateless sessions/ LLMS.txt / Cursor MCP
- Setup DB, Prisma/O
- configure biome rules
- configure Vitest/React testing library
- configure Playwright
- Deploy to Vercel
```

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

- Install Chakra UI according to https://chakra-ui.com/docs/get-started/frameworks/next-app,add all snippets in src/UI. reference Chakra UI MCP Server

- Install NX according to https://nx.dev/docs/getting-started/installation, https://nx.dev/docs/guides/adopting-nx, reference MCP Server/LLMS.txt. Note this is a standalone project and not a monorepo.
- Install Next.js Cursor MCP servers
- Configure a src/components and src/lib dir, where UI components for Chakra are added to UI, and imported via ie. @components/Button syntx, and libs, like util functions etc. are added in the lib dir, and imported via ie. @lib/auth
- Install cursor rules/ LLM files
- Install BetterAuth according to https://www.better-auth.com/docs/installation https://www.better-auth.com/docs/basic-usage, https://www.better-auth.com/docs/adapters/postgresql, https://www.better-auth.com/docs/adapters/drizzle,
  https://www.better-auth.com/docs/installation
  https://www.better-auth.com/docs/adapters/postgresql
  https://github.com/kysely-org/kysely-neon
  https://www.better-auth.com/docs/adapters/drizzle
  https://www.better-auth.com/docs/integrations/next
  https://www.better-auth.com/docs/basic-usage
  https://github.com/better-auth/better-auth/tree/main/demo/nextjs

- Install Drizzle, and connect to existing Neon DB that is already instaleld here according to https://orm.drizzle.team/docs/tutorials/drizzle-with-neon, https://neon.com/docs/guides/drizzle, reference Neon MCP
- configure biome rules, to be as close to what you would get with ESLinst perfectionist https://perfectionist.dev/configs https://biomejs.dev/guides/configure-biome/
- configure Playwright
- Install Vitest/React testing library for unit tests according to https://github.com/vercel/next.js/tree/canary/examples/with-vitest https://nextjs.org/docs/app/guides/testing/vitest https://vitest.dev/guide/ https://testing-library.com/docs/react-testing-library/intro/, this will be used to test all react components/util functions
- configure Playwright according to https://nextjs.org/docs/pages/guides/testing/playwright, https://github.com/vercel/next.js/tree/canary/examples/with-playwright, https://playwright.dev/docs/ci, Verify Playwright MCP server works when making some tests.
- Setup Renovate bot accordint to https://github.com/renovatebot/renovate, ensure that on Github the packages are updated regularly

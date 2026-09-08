# MindMesh

MindMesh is an AI-driven competency intelligence and gamified learning platform for India's official statistical workforce.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/mindmesh run dev` — run the MindMesh web app
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/mindmesh/src/` — React frontend, routes, shared shell, and theme
- `artifacts/api-server/src/routes/mindmesh.ts` — mock REST API for the demo flows
- `artifacts/api-server/src/lib/mindmesh-data.ts` — Priya Sharma demo data and progression state
- `lib/api-spec/openapi.yaml` — source of truth for the generated API client and Zod schemas

## Architecture decisions

- The first demo uses a typed mock service rather than a database so the full SIH demo flow runs immediately and can later be swapped for persistent repositories.
- OpenAPI remains the source of truth; the frontend consumes generated React Query hooks and the server validates responses with generated Zod schemas.
- The visual language combines a dark botanical-teal workspace with warm paper surfaces and signal colors to connect learning growth with competency intelligence.
- Learning time, quiz submissions, garden growth, and shield progress are kept in server-side in-memory state for the prototype session.

## Product

MindMesh includes the learner dashboard, AI competency twin, assessment and gap analysis, personalized learning path, simulated iGOT and NSSTA recommendations, course detail and time tracking, AI assistant, material-to-quiz flow, quiz feedback, Skill Garden, Skill DNA, shield achievements, trainer workspace, and workforce analytics.

## User preferences

No additional preferences recorded.

## Gotchas

- Restart the API workflow after changing `artifacts/api-server/src` so the bundled server includes new mock routes.
- If the OpenAPI contract changes, run codegen before checking the API server or frontend.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

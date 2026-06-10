# Kyle Wu Personal Portfolio

Personal portfolio website for Kyle Wu, focused on fintech systems, crypto trading workflows, data-driven market research, execution quality, and business-to-system implementation.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- motion
- next-themes
- pnpm
- Vercel

## Local Development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Project Structure

- `src/app`: Next.js App Router pages including `page.tsx` (Homepage), `/resume/page.tsx`, and dynamic project pages `/projects/[slug]/page.tsx`.
- `src/components/sections`: UI sections for the homepage (Hero, What I Do, Capabilities, etc.).
- `src/components/project-visuals`: React-based visual preview components for projects.
- `src/data/projects.ts`: Project data models and content configuration.
- `src/data/profile.ts`: Profile data, text copy, and positioning.
- `src/data/links.ts`: External and internal site links.

## Adding a New Project

1. Add a new project object to `src/data/projects.ts`.
2. Set `slug`, `visual`, `capabilities`, `tags`, `links`, and `detail` sections.
3. Add a new project visual component in `src/components/project-visuals` only if needed, and register it in `project-visual.tsx`.
4. Confirm `/projects/[slug]` renders correctly.
5. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` to validate.

<div align="center">

# Kyle Wu — Personal Portfolio

**FinTech Builder & Applied Crypto Market Research**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-2.5.0-F8B334?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev/)

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.6.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](./package.json)

<p align="center">
A modern personal portfolio showcasing fintech systems, crypto trading workflows, data-driven market research, execution quality, and business-to-system implementation.
</p>

<p align="center">
  <a href="https://kylewu.me">Live Site</a>
</p>

</div>

---

## Tech Stack

| Area                  | Choice                                       |
| :-------------------- | :------------------------------------------- |
| **Runtime / Core**    | `Node.js 24` + `Next.js 16.2.9 (App Router)` |
| **Language**          | `TypeScript 6.0.3` (strict)                  |
| **UI & Styling**      | `React 19.2.7` + `Tailwind CSS 4.3.1`        |
| **Component Library** | `shadcn/ui` + `motion/react`                 |
| **i18n**              | `next-intl` (`en` / `zh-TW`)                 |
| **Package Manager**   | `pnpm 11.6.0` (Corepack pinned)              |
| **Lint / Format**     | `Biome 2.5.0` (integrated Rust toolchain)    |
| **CI**                | GitHub Actions (parallel lint / typecheck / test / build) |
| **Automation**        | Dependabot (weekly, npm + github-actions)    |
| **Deployment**        | Vercel (Production / Preview)                |

## Design & Architecture

- **Dark Morandi Aesthetic**: A custom color palette balancing warm off-whites with deep grays and muted accents, enforcing a highly readable, premium interface.
- **Unified UI Surfaces**: All card components converge on a centralized `surfaceClass` architecture, ensuring consistent styles without background grid-bleed.
- **Code-Driven Visuals**: Project previews bypass static images in favor of live React components (`framer-motion` + syntax highlighting) to demonstrate real execution flows dynamically.
- **Intersection-Aware Navigation**: A custom "Railway Timeline" track (`site-track.tsx`) automatically scales and color-binds to viewport scroll progression.

## Getting Started

### Prerequisites

- **Node.js 24** — pinned in [`.nvmrc`](./.nvmrc). Use a Node version manager like `nvm` or `fnm` to automatically select the correct version.
- **pnpm 11.6.0** — pinned via `packageManager` in [`package.json`](./package.json). Enable Corepack so the correct pnpm version is matched automatically:

  ```bash
  corepack enable
  ```

### Install and Run

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Then open:

- **English (Default)**: http://localhost:3000/en
- **Traditional Chinese**: http://localhost:3000/zh-TW

## Validation & CI Checks

Before committing or submitting a PR, run the local validation pipeline:

```bash
pnpm validate   # Run Biome check, TypeScript typecheck, Vitest tests, and Next.js Build
```

Individual pipeline commands:

```bash
pnpm lint       # Lint and check code quality using Biome
pnpm format     # Format all code using Biome
pnpm typecheck  # Run TypeScript typechecker
pnpm test       # Run unit tests with Vitest
pnpm build      # Run a production Next.js build
```

## Project Structure

```text
src/
├── app/
│   ├── page.tsx               # Homepage
│   ├── resume/page.tsx        # Integrated Resume Viewer
│   └── projects/[slug]/       # Dynamic Project Detail Pages
├── components/
│   ├── sections/              # Homepage UI sections
│   ├── project-artifacts/     # Detail page content & MDX-like components
│   ├── project-visuals/       # React-based dynamic visual previews
│   └── layout/                # Global layout (Header, Footer, site-track.tsx)
├── data/
│   ├── profile.ts             # Profile copy and capabilities
│   ├── projects.ts            # Project data models
│   └── links.ts               # Internal & external links
└── lib/
    └── utils.ts               # Core utilities and shared surfaceClasses
```

## Adding a New Project

1. Add a new project object to `src/data/projects.ts`.
2. Define the `slug`, `visual`, `capabilities`, `tags`, `links`, and nested `detail` sections.
3. Create a new dynamic preview component in `src/components/project-visuals` and map it in `project-visual.tsx`.
4. Verify the new page renders properly at `/projects/[slug]`.
5. Run `pnpm validate` to ensure linting, formatting, typechecking, tests, and build all pass before committing.

## License

[MIT](LICENSE) © Kyle Wu 2026

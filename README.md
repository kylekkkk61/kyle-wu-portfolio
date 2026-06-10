<div align="center">

# Kyle Wu — Personal Portfolio

**FinTech Builder & Applied Crypto Market Research**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9.x-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)

A modern personal portfolio showcasing fintech systems, crypto trading workflows, data-driven market research, execution quality, and business-to-system implementation.

[Live Site](https://www.kylekkkk.com) · [Contact](https://www.kylekkkk.com/#contact)

</div>

---

## Tech Stack

| Area                  | Choice                                       |
| :-------------------- | :------------------------------------------- |
| **Runtime / Core**    | `Node.js 24` + `Next.js 16.2.9 (App Router)` |
| **Language**          | `TypeScript 5.9.3`                           |
| **UI & Styling**      | `React 19.2.4` + `Tailwind CSS 4.3`          |
| **Component Library** | `shadcn/ui` + `motion/react`                 |
| **Package Manager**   | `pnpm 9.15.9`                                |
| **Lint / Format**     | `eslint 9` + `prettier 3`                    |
| **Deployment & CI**   | Vercel + GitHub Actions                      |

## Local Development

Clone the repository and install dependencies using `pnpm`:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Validation & CI Checks

Before submitting a PR, ensure you pass all strict checks:

```bash
pnpm lint       # Check for ESLint warnings/errors
pnpm typecheck  # Check for TypeScript errors
pnpm build      # Run a full Next.js production build
```

## Project Structure

```text
src/
├── app/
│   ├── page.tsx               # Homepage
│   ├── resume/page.tsx        # Integrated Resume Viewer
│   └── projects/[slug]/       # Dynamic Project Detail Pages
├── components/
│   ├── sections/              # Homepage UI sections (Hero, What I Do, Capabilities, etc.)
│   ├── project-visuals/       # React-based visual previews for projects
│   └── layout/                # Global layout (Header, Footer, Section containers)
└── data/
    ├── profile.ts             # Profile copy, positioning, and capabilities
    ├── projects.ts            # Project data models and content configuration
    └── links.ts               # Centralized internal & external links
```

## Adding a New Project

1. Add a new project object to `src/data/projects.ts`.
2. Define the `slug`, `visual`, `capabilities`, `tags`, `links`, and nested `detail` sections.
3. If necessary, create a new visual preview component in `src/components/project-visuals` and map it in `project-visual.tsx`.
4. Verify the new page renders properly at `/projects/[slug]`.
5. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before committing.

## License

This repository is built for personal portfolio demonstration purposes. All structural and research-related code is open-source, but specific personal data and context remain proprietary. Nothing on the live site should be interpreted as financial or trading advice.

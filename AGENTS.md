# AGENTS.md

This file defines the strict operational rules, architectural constraints, and project context for AI agents working in this repository.

## 1. Pre-Flight & Commit Rules (CRITICAL)
To prevent CI failures, you **MUST** run and pass all of the following commands locally before creating any commits or Pull Requests:
```bash
pnpm format
pnpm lint
pnpm typecheck
pnpm build
```
*Do not push if there are any warnings or errors.*

## 2. Environment & CLI Rules
- **Authentication**: The system environment injects an overriding `GITHUB_TOKEN`. You MUST prefix commands with `unset GITHUB_TOKEN && ` when using Git or GitHub CLI. (e.g., `unset GITHUB_TOKEN && gh pr create`)
- **Clean Working Tree**: Always generate temporary files (like PR bodies) in `/tmp/` (e.g., `/tmp/.pr-body.txt`). Do not create them in the project directory.

## 3. Technology Stack & Pointers
- **Core**: Next.js 16.2 (App Router) + TypeScript.
- **Package Manager**: `pnpm`.
- **Styling**: Tailwind CSS v4 + `shadcn/ui`. (Use `prettier-plugin-tailwindcss` for formatting).
- **Design System**: Linear-style FinTech UI. Locked in **Dark Mode** by default. Use `motion/react` for micro-animations.

## 4. External References & Skills
Instead of redefining extensive rules, agents should refer to:
- **UI/CSS Patterns**: [Modern Web Guidance](file:///Users/kyle/.gemini/config/plugins/modern-web-guidance-plugin/skills/modern-web-guidance/SKILL.md)
- **Commits**: [Conventional Commits Skill](file:///Users/kyle/.gemini/config/skills/commit/SKILL.md)
- **Next.js Breaking Changes**: See local docs at `node_modules/next/dist/docs/` if available.

---

<!-- BEGIN:nextjs-agent-rules -->
## This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

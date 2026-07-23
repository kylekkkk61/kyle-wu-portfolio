# AGENTS.md

This file defines the strict operational rules, architectural constraints, and project context for AI agents working in this repository.

## 1. Branch, Validation & Publishing Rules (CRITICAL)
Every repository change, including documentation and configuration, **MUST** be delivered through a Pull Request:
1. Sync local `main`, then create or switch to a dedicated non-`main` branch before editing. Never implement directly on `main` and never push directly to `main`.
2. Implement only the requested scope on that branch.
3. Except for trivial 1-2 line edits (e.g., a font size tweak), run the validation suite before committing:

```bash
pnpm validate
```

Do not proceed if validation reports errors or new, unapproved warnings. Explicitly accepted existing warnings may remain.
4. Use the repository's Commit skill to review the full worktree and create atomic Conventional Commits.
5. Use the repository's Pull Request skill to review the branch, draft the PR, push the branch, and create the PR.

**IMPORTANT:** Even after validations pass, you **MUST** stop and ask the user for explicit permission BEFORE running `git commit`, `git push`, or creating a Pull Request. Do not chain these commands automatically after testing.

## 2. Environment & CLI Rules
- **Language**: Communicate with the user in Traditional Chinese. Write source-code comments in English.
- **Authentication**: This repository is developed through Codex. Use Git and GitHub CLI normally; do not apply Antigravity-specific workarounds such as prefixing commands with `unset GITHUB_TOKEN &&`. If authentication fails, inspect the current Codex environment instead of unsetting tokens by default.
- **Clean Working Tree**: Always generate temporary files (like PR bodies) in `/tmp/` (e.g., `/tmp/.pr-body.txt`). Do not create them in the project directory.

## 3. Technology Stack & Pointers
- **Core**: Next.js App Router + TypeScript. Treat `package.json` as the source of truth for exact versions.
- **Package Manager**: `pnpm`.
- **TypeScript Toolchain**: The project intentionally uses `@typescript/native` for the TypeScript 7 CLI and an npm-aliased TypeScript 6 package for API compatibility. Do not collapse or replace this setup without compatibility validation.
- **Styling**: Tailwind CSS v4 + `shadcn/ui`. Use the repository's Biome configuration for formatting and linting.
- **Design System**: Linear-style FinTech UI. Dark mode is the default, with user-selectable light and dark themes. Prefer existing CSS and Tailwind animation patterns for micro-interactions.
- **No Emojis**: Do NOT use emojis anywhere in the documentation, READMEs, or code.
- **CodeGraph**: This project uses CodeGraph. Always prioritize `codegraph_*` tools for structural queries.
- **Sitemap Dates**: Sitemap dates must reflect meaningful content updates and must not change merely because of a deployment. Projects fetch their `lastModified` date from the `updatedAt` field (YYYY-MM-DD) in `src/data/projects.ts`. When changing a project's content, you MUST update its `updatedAt` field.
- **Locale Content**: Traditional Chinese copy must use natural Taiwanese wording rather than literal English translation. Preserve official English project names when they function as proper names. In Chinese prose, describe Prediction Market Execution Lab as a `公開研究專案`.
- **Resume PDF**: The public resume PDF is manually maintained by the site owner. Do not regenerate or replace it unless the user provides or explicitly requests a new version.
- **SEO & OG Verification**: When changing profile positioning, project titles, descriptions, or metadata, verify the English and Traditional Chinese dynamic Open Graph image routes.
- **Locale Middleware**: Keep the current Edge `src/middleware.ts` implementation. Do not migrate it to `proxy.ts` without an equivalent preview deployment and regional p50/p95 TTFB comparison. The current middleware deprecation and experimental Edge runtime warnings are explicitly accepted existing warnings.

## 4. External References & Skills
Instead of redefining extensive rules, agents should refer to:
- **UI/CSS Patterns**: [Design Taste Frontend Skill](file:///Users/kyle/dotfiles/codex/skills/taste-skill/SKILL.md)
- **Commits**: [Conventional Commits Skill](file:///Users/kyle/dotfiles/codex/skills/commit/SKILL.md)
- **Pull Requests**: [Pull Request Skill](file:///Users/kyle/dotfiles/codex/skills/pull-request/SKILL.md)
- **Next.js Breaking Changes**: See local docs at `node_modules/next/dist/docs/` if available.

---

<!-- BEGIN:nextjs-agent-rules -->
## This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

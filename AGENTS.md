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
- **Authentication**: This repository is developed through Codex. Use Git and GitHub CLI normally; do not apply Antigravity-specific workarounds such as prefixing commands with `unset GITHUB_TOKEN &&`. If authentication fails, inspect the current Codex environment instead of unsetting tokens by default.
- **Clean Working Tree**: Always generate temporary files (like PR bodies) in `/tmp/` (e.g., `/tmp/.pr-body.txt`). Do not create them in the project directory.

## 3. Technology Stack & Pointers
- **Core**: Next.js 16.2 (App Router) + TypeScript.
- **Package Manager**: `pnpm`.
- **Styling**: Tailwind CSS v4 + `shadcn/ui`. (Use `prettier-plugin-tailwindcss` for formatting).
- **Design System**: Linear-style FinTech UI. Locked in **Dark Mode** by default. Use `motion/react` for micro-animations.
- **No Emojis**: Do NOT use emojis anywhere in the documentation, READMEs, or code.
- **CodeGraph**: This project uses CodeGraph. Always prioritize `codegraph_*` tools for structural queries.
- **Sitemap Dates**: To optimize search crawl frequency, `sitemap.ts` uses stable timestamps. Projects fetch their `lastModified` date dynamically from the `updatedAt` field (YYYY-MM-DD) in `src/data/projects.ts`. When changing a project's content, you MUST update its `updatedAt` field.


## 4. External References & Skills
Instead of redefining extensive rules, agents should refer to:
- **UI/CSS Patterns**: [Modern Web Guidance](file:///Users/kyle/.gemini/config/plugins/modern-web-guidance-plugin/skills/modern-web-guidance/SKILL.md)
- **Commits**: [Conventional Commits Skill](file:///Users/kyle/dotfiles/codex/skills/commit/SKILL.md)
- **Pull Requests**: [Pull Request Skill](file:///Users/kyle/dotfiles/codex/skills/pull-request/SKILL.md)
- **Next.js Breaking Changes**: See local docs at `node_modules/next/dist/docs/` if available.

---

<!-- BEGIN:nextjs-agent-rules -->
## This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

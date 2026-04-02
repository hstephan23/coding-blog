# Repository Guidelines

## Project Overview
- This repo is an Astro 6 static blog.
- Content lives in `src/content/blog/` as Markdown or MDX files.
- Pages, layouts, and helpers live under `src/pages/`, `src/layouts/`, and `src/utils/`.
- Build artifacts are generated into `dist/` and should not be edited by hand.

## Working Rules
- Prefer minimal, targeted changes that match the existing Astro and TypeScript style.
- Do not edit generated or dependency directories such as `dist/`, `.astro/`, or `node_modules/`.
- Keep URL and content behavior aligned with `src/content.config.ts` and existing frontmatter patterns.
- When adding posts, follow the documented frontmatter fields from `README.md`.

## Common Commands
- `npm install` installs dependencies.
- `npm run dev` starts the local Astro dev server on port `4321`.
- `npm run check` runs Astro type and content checks.
- `npm run build` creates the production build and runs Pagefind indexing.
- `npm run preview` serves the built site locally.

## Validation
- For content or schema changes, prefer `npm run check`.
- For layout, routing, or build pipeline changes, prefer `npm run build`.
- If a task only changes documentation or repository instructions, no app build is required.

## Notes
- Node `>=22.12.0` is required per `package.json`.
- Respect the existing `.gitignore`; keep generated output and dependencies out of diffs.

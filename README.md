# Code blog

File-based posts (Markdown and MDX) with Astro 6, Zod-validated frontmatter, Shiki syntax highlighting, and an RSS feed.

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `http://localhost:4321`       |
| `npm run build`   | Production build output in **`./dist/`**      |
| `npm run preview` | Serve `./dist/` locally                     |

## Writing posts

Add `.md` or `.mdx` files under [`src/content/blog/`](src/content/blog/). Frontmatter fields:

| Field         | Required | Notes                                                |
| ------------- | -------- | ---------------------------------------------------- |
| `title`       | yes      | Page and list title                                  |
| `description` | yes      | Meta description, RSS summary, list excerpt          |
| `pubDate`     | yes      | ISO date string                                      |
| `tags`        | no       | String array; defaults to `[]`                       |
| `draft`       | no       | If `true`, omitted from production build and RSS     |
| `slug`        | no       | Custom URL segment; default is derived from filename |

Published URLs look like `/blog/<id>/` (with `trailingSlash: 'always'` in [`astro.config.mjs`](astro.config.mjs)).

## Site URL and RSS

Set your production origin so canonical links and RSS item URLs are correct:

- **Option A:** Edit `site` in [`astro.config.mjs`](astro.config.mjs) (default is `https://example.com`).
- **Option B:** Set `SITE_URL` when building, for example `SITE_URL=https://myblog.dev npm run build`.

## Deploying

Build output is static files in **`dist/`**. Point any static host at that folder.

**Netlify:** New site from Git, build command `npm run build`, publish directory `dist`. Add env `SITE_URL` to match your Netlify URL or custom domain.

**Vercel:** Import the repo; framework preset can stay “Other” or “Astro” if detected. Build `npm run build`, output `dist`. Set `SITE_URL` in project environment variables to your deployment URL.

After the first deploy, update `SITE_URL` / `site` to the real domain so RSS and canonical tags stay accurate.

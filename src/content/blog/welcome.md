---
title: Welcome to the code blog
description: File-based posts with Markdown, syntax highlighting, and optional MDX.
pubDate: 2026-03-15
tags:
  - meta
  - astro
---

This site uses **Astro Content Collections**: each post is a `.md` or `.mdx` file under `src/content/blog/`. Frontmatter is validated with Zod at build time.

Here is a short TypeScript example with Shiki highlighting:

```ts
type Post = {
	title: string;
	pubDate: Date;
	draft?: boolean;
};

function isReady(p: Post): boolean {
	return !p.draft;
}
```

Add new posts by creating a new file, then run `npm run dev` to preview.

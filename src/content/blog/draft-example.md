---
title: "[DEMO] This is a draft"
description: Set draft true to hide from production builds and RSS.
pubDate: 2025-01-01
tags:
  - draft
languages:
  - TypeScript
draft: true
---

You should see this post only when running `npm run dev`. Production `npm run build` omits drafts from the index, post routes, and RSS feed.

```ts
const visible = import.meta.env.DEV || !frontmatter.draft;
```

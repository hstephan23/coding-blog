---
title: Rust snippets that read well in a blog
description: fenced code blocks with language tags get proper highlighting.
pubDate: 2026-03-28
tags:
  - rust
  - syntax-highlighting
---

Rust’s `Result` type maps cleanly to fallible operations:

```rust
fn read_config(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}
```

Use explicit `?` in real code paths; here we keep the example minimal so it fits a post.

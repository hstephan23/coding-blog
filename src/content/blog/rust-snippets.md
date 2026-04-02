---
title: "[DEMO] Rust snippets that read well in a blog"
description: fenced code blocks with language tags get proper highlighting.
draft: true
pubDate: 2025-01-01
tags:
  - rust
  - syntax-highlighting
languages:
  - Rust
---

Rust’s `Result` type maps cleanly to fallible operations:

```rust
fn read_config(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}
```

Use explicit `?` in real code paths; here we keep the example minimal so it fits a post.

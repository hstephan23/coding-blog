---
title: "[DEMO] The C Preprocessor - Macros and Header Files"
description: Discover how the preprocessor transforms your C code before compilation.
draft: true
pubDate: 2025-01-01
tags:
  - c
  - programming
  - preprocessor
languages:
  - C
---

The C preprocessor is a tool that processes your source code before the actual compilation begins.

### Macros

Macros are a way to define constants or code snippets that are replaced by the preprocessor.

```c
#include <stdio.h>

#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main() {
    printf("PI: %f\n", PI);
    printf("Square of 5: %d\n", SQUARE(5));
    return 0;
}
```

### Header Files

Header files (`.h`) are used to share declarations across multiple source files.

```c
// myfunctions.h
#ifndef MYFUNCTIONS_H
#define MYFUNCTIONS_H

void sayHello();

#endif

// myfunctions.c
#include <stdio.h>
#include "myfunctions.h"

void sayHello() {
    printf("Hello from a header file!\n");
}
```

Understanding the preprocessor is essential for writing efficient and modular C code.

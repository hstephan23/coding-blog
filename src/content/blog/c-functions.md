---
title: "[DEMO] Functions in C - Declaration, Definition, and Scope"
description: Learn how to modularize your C code using functions.
pubDate: 2026-04-04
tags:
  - c
  - programming
  - modularity
languages:
  - C
---

Functions are blocks of code that perform a specific task. They help you organize your code and reuse logic.

### Function Declaration and Definition

A function in C typically has a declaration (prototype) and a definition.

```c
#include <stdio.h>

// Function Declaration
int add(int a, int b);

int main() {
    int sum = add(5, 3);
    printf("Sum: %d\n", sum);
    return 0;
}

// Function Definition
int add(int a, int b) {
    return a + b;
}
```

### Scope and Lifetime

Variables declared inside a function have local scope and are only accessible within that function.

```c
#include <stdio.h>

void myFunction() {
    int x = 10; // Local variable
    printf("x inside: %d\n", x);
}

int main() {
    myFunction();
    // x is not accessible here
    return 0;
}
```

Functions are key to writing maintainable and scalable C programs.

---
title: "[DEMO] C Control Flow - If-Else and Switch"
description: Learn how to control the flow of your C programs using conditional statements.
draft: true
pubDate: 2025-01-01
tags:
  - c
  - programming
  - basics
languages:
  - C
---

Control flow is at the heart of any programming language. In C, we use `if-else` and `switch` statements to make decisions.

### The If-Else Statement

The `if` statement allows you to execute a block of code if a condition is true.

```c
#include <stdio.h>

int main() {
    int score = 85;

    if (score >= 90) {
        printf("Grade: A\n");
    } else if (score >= 80) {
        printf("Grade: B\n");
    } else {
        printf("Grade: C\n");
    }

    return 0;
}
```

### The Switch Statement

When you have multiple discrete values to check against a single variable, `switch` is often cleaner than multiple `if-else` blocks.

```c
#include <stdio.h>

int main() {
    char operator = '+';
    int a = 10, b = 5;

    switch (operator) {
        case '+':
            printf("Result: %d\n", a + b);
            break;
        case '-':
            printf("Result: %d\n", a - b);
            break;
        default:
            printf("Invalid operator\n");
    }

    return 0;
}
```

Understanding these constructs is essential for building logic in your C applications.

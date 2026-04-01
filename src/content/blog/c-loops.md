---
title: C Loops - For, While, and Do-While
description: Master the art of repetition in C with loops.
pubDate: 2026-04-03
tags:
  - c
  - programming
  - basics
languages:
  - C
---

Loops allow you to execute a block of code multiple times. In C, we have three main types of loops.

### The For Loop

The `for` loop is often used when you know exactly how many times you want to iterate.

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("Iteration: %d\n", i);
    }
    return 0;
}
```

### The While Loop

The `while` loop checks its condition *before* executing the loop body.

```c
#include <stdio.h>

int main() {
    int count = 0;
    while (count < 5) {
        printf("Count: %d\n", count);
        count++;
    }
    return 0;
}
```

### The Do-While Loop

The `do-while` loop is guaranteed to run at least once because it checks the condition *after* the loop body.

```c
#include <stdio.h>

int main() {
    int x = 10;
    do {
        printf("This runs at least once!\n");
    } while (x < 5);
    return 0;
}
```

Looping is a fundamental concept in C that you'll use constantly.

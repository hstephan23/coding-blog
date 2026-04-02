---
title: "[DEMO] Pointers in C - The Basics"
description: Unlock the power of C by understanding pointers and memory addresses.
pubDate: 2026-04-06
tags:
  - c
  - programming
  - pointers
languages:
  - C
---

Pointers are one of C's most powerful (and sometimes confusing) features. They allow you to directly manipulate memory addresses.

### What is a Pointer?

A pointer is a variable that stores the memory address of another variable.

```c
#include <stdio.h>

int main() {
    int age = 30;
    int *ptr = &age; // ptr now stores the address of age

    printf("Value of age: %d\n", age);
    printf("Address of age: %p\n", &age);
    printf("Value stored in ptr: %p\n", ptr);
    printf("Value pointed to by ptr: %d\n", *ptr); // Dereferencing

    return 0;
}
```

### Why Use Pointers?

Pointers are essential for:
- Efficiently passing data to functions.
- Dynamic memory allocation.
- Implementing complex data structures like linked lists.
- Direct hardware access.

Understanding pointers is key to becoming a proficient C programmer.

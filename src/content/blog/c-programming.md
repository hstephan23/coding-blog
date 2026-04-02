---
title: "[DEMO] Introduction to C Programming"
description: Learn the fundamentals of C, a powerful and efficient low-level programming language.
pubDate: 2026-04-01
tags:
  - c
  - systems
  - programming
languages:
  - C
---

C is a general-purpose, procedural computer programming language. It has been used for building operating systems, compilers, and many other software systems. It's known for its efficiency and low-level access to memory.

### Hello, World! in C

Every C program starts with a `main` function. Here is the classic Hello World example:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Understanding Variables and Types

In C, you must declare the type of each variable before you use it.

```c
#include <stdio.h>

int main() {
    int age = 30;
    float pi = 3.14;
    char grade = 'A';

    printf("Age: %d\n", age);
    printf("Pi: %.2f\n", pi);
    printf("Grade: %c\n", grade);

    return 0;
}
```

### Memory Management

C provides functions for manual memory allocation, such as `malloc`, `free`, `calloc`, and `realloc`. This gives you full control over memory but also requires careful handling to avoid memory leaks.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int *)malloc(5 * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    for (int i = 0; i < 5; i++) {
        arr[i] = i * 2;
    }

    // Free the allocated memory
    free(arr);

    return 0;
}
```

Learning C provides a solid foundation for understanding how computers work and is highly beneficial for any software developer.

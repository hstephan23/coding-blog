---
title: "[DEMO] Dynamic Memory Allocation - Deep Dive"
description: Learn how to manage memory at runtime in C using malloc, free, and friends.
draft: true
pubDate: 2025-01-01
tags:
  - c
  - programming
  - memory-management
languages:
  - C
---

Dynamic memory allocation allows you to request memory from the system at runtime. This is essential for building data structures whose size is not known at compile time.

### Using Malloc and Free

The `malloc` function allocates a block of memory and returns a pointer to its first byte. `free` releases that memory when it's no longer needed.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int *)malloc(sizeof(int));

    if (ptr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    *ptr = 42;
    printf("Value: %d\n", *ptr);

    free(ptr); // Don't forget to free!
    return 0;
}
```

### Calloc and Realloc

- `calloc` allocates memory and initializes it to zero.
- `realloc` allows you to resize an existing memory block.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int *)calloc(5, sizeof(int));
    // arr is now an array of 5 zeros

    arr = (int *)realloc(arr, 10 * sizeof(int));
    // arr is now an array of 10 integers

    free(arr);
    return 0;
}
```

Proper memory management is key to avoiding leaks and crashes in C.

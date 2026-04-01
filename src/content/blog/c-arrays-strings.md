---
title: Arrays and Strings in C
description: Working with collections of data and text in C.
pubDate: 2026-04-05
tags:
  - c
  - programming
  - data-structures
languages:
  - C
---

Arrays allow you to store multiple elements of the same type in a single variable.

### Arrays in C

An array in C is a collection of elements that are stored in contiguous memory.

```c
#include <stdio.h>

int main() {
    int scores[5] = {90, 85, 80, 75, 70};

    for (int i = 0; i < 5; i++) {
        printf("Score %d: %d\n", i, scores[i]);
    }

    return 0;
}
```

### Strings in C

In C, a string is an array of characters ending with a null terminator (`\0`).

```c
#include <stdio.h>
#include <string.h>

int main() {
    char greeting[] = "Hello";
    printf("%s\n", greeting);

    // Using string functions from string.h
    printf("Length: %lu\n", strlen(greeting));

    return 0;
}
```

Strings and arrays are crucial for handling and manipulating data in C.

---
title: Structures and Unions in C
description: Define your own custom data types in C using structures and unions.
pubDate: 2026-04-07
tags:
  - c
  - programming
  - data-structures
languages:
  - C
---

C allows you to group related variables of different types into a single unit using structures and unions.

### Structures

A structure is a collection of variables of different types under a single name.

```c
#include <stdio.h>

struct Person {
    char name[50];
    int age;
    float height;
};

int main() {
    struct Person p1 = {"John Doe", 30, 5.9};

    printf("Name: %s\n", p1.name);
    printf("Age: %d\n", p1.age);

    return 0;
}
```

### Unions

Unions are similar to structures, but all members share the same memory location. This is useful for saving memory when only one member is used at a time.

```c
#include <stdio.h>

union Data {
    int i;
    float f;
};

int main() {
    union Data d;
    d.i = 10;
    printf("d.i: %d\n", d.i);

    d.f = 5.5;
    printf("d.f: %.1f\n", d.f);
    // Note: d.i is now invalid as its memory was overwritten by d.f

    return 0;
}
```

Structures and unions are fundamental for organizing complex data in C.

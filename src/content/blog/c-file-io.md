---
title: "[DEMO] File I/O in C - Reading and Writing Files"
description: Learn how to interact with the file system in your C programs.
pubDate: 2026-04-08
tags:
  - c
  - programming
  - file-io
languages:
  - C
---

C provides a set of standard library functions for performing file input and output operations.

### Writing to a File

To write to a file, you open it in write mode (`"w"`), use `fprintf` or `fputs`, and then close it.

```c
#include <stdio.h>

int main() {
    FILE *fptr = fopen("example.txt", "w");

    if (fptr == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    fprintf(fptr, "Hello, C File I/O!\n");
    fclose(fptr);

    return 0;
}
```

### Reading from a File

To read from a file, you open it in read mode (`"r"`) and use functions like `fgets` or `fscanf`.

```c
#include <stdio.h>

int main() {
    FILE *fptr = fopen("example.txt", "r");
    char buffer[100];

    if (fptr == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    while (fgets(buffer, 100, fptr)) {
        printf("Read: %s", buffer);
    }

    fclose(fptr);
    return 0;
}
```

File I/O is crucial for data persistence in your C applications.

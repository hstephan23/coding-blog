---
title: "DepGraph: A Tool to Visualize Your Code"
description: I wanted to see the dependencies of my code. 
draft: false
pubDate: 2026-04-04
tags:
  - Programming
  - Software Engineering
  - Architecture
languages:
  - Python
image: ../images/dep-graph-intro.png
---

# I Wanted to See What My Code Actually Depends On

Lately, I’ve been thinking less about what my code does, and more about how it’s connected.

Not features.
Not APIs.

Just relationships.

---

Most of the time, dependencies are something I don’t really question.

I install a package.
Add a reference.
Import what I need.

And then I move on.

The system grows, but the structure stays mostly implicit.

---

That worked for a while.

But after spending more time closer to the machine—especially in C—I started noticing something.

When you don’t have a package manager smoothing everything over, dependencies become much more visible.

You have to link things manually.
You have to think about what belongs where.

There’s less distance between you and the structure of the program.

---

That made me realize I didn’t have a clear picture of my own codebases.

Not in a conceptual way, but in a concrete one.

If I picked a project and asked:

* what depends on this module?
* what does this module depend on?
* which parts of the system are actually central?

I didn’t have a good answer.

---

So I built something small to explore that.

I called it **DepGraph**.

---

At a basic level, it walks a project and extracts relationships between parts of the system.

From there, it builds a graph.

Nothing fancy.

Just nodes and edges.

---

But even that was enough to surface things I hadn’t noticed.

Some modules I thought were isolated were actually widely depended on.
Others that felt important weren’t connected to much at all.

There were patterns in the structure that weren’t obvious from reading files one at a time.

---

What stood out most wasn’t any specific dependency.

It was the overall shape.

The system had a structure whether I was aware of it or not.

---

I think that’s the part I had been missing.

We spend a lot of time writing code locally—file by file, function by function.

But the behavior of a system isn’t just in the code itself.

# I Wanted to See What My Code Actually Depends On

Lately, I’ve been thinking less about what my code does, and more about how it’s connected.

Not features.
Not APIs.

Just relationships.

---

Most of the time, dependencies are something I don’t really question.

I install a package.
Add a reference.
Import what I need.

And then I move on.

The system grows, but the structure stays mostly implicit.

---

That worked for a while.

But after spending more time closer to the machine—especially in C—I started noticing something.

When you don’t have a package manager smoothing everything over, dependencies become much more visible.

You have to link things manually.
You have to think about what belongs where.

There’s less distance between you and the structure of the program.

---

That made me realize I didn’t have a clear picture of my own codebases.

Not in a conceptual way, but in a concrete one.

If I picked a project and asked:

* what depends on this module?
* what does this module depend on?
* which parts of the system are actually central?

I didn’t have a good answer.

---

So I built something small to explore that.

I called it **DepGraph**.

---

At a basic level, it walks a project and extracts relationships between parts of the system.

From there, it builds a graph.

Nothing fancy.

Just nodes and edges.

---

But even that was enough to surface things I hadn’t noticed.

Some modules I thought were isolated were actually widely depended on.
Others that felt important weren’t connected to much at all.

There were patterns in the structure that weren’t obvious from reading files one at a time.

---

What stood out most wasn’t any specific dependency.

It was the overall shape.

The system had a structure whether I was aware of it or not.

---

I think that’s the part I had been missing.

We spend a lot of time writing code locally—file by file, function by function.

But the behavior of a system isn’t just in the code itself.

It’s in how everything is connected.

---

DepGraph didn’t solve anything directly.

It just made those connections visible.

And that changed how I look at the code I write.

---

I’m still exploring what that means in practice.

But this feels like a good place to start.

It’s in how everything is connected.

---

DepGraph didn’t solve anything directly.

It just made those connections visible.

And that changed how I look at the code I write.

---

I’m still exploring what that means in practice.

But this feels like a good place to start.

### The Calm Developer

I believe good software isn't just about features or speed.

It's about clarity.

It's about writing code that you—and others—can understand later. It's about building
systems that don't fight you.

And it's about staying calm in the process of learning and building.

If you're interested or on a similar path, you are in the right place. 


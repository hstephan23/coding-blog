---
title: "What C Taught Me About Dependencies"
description: Moving from npm install to manual linking changed how I think about what belongs in my software.
draft: true
pubDate: 2026-04-03
tags:
  - C
  - Dependencies
  - Programming
  - Software Design
languages:
  - C
---

I used to install packages without thinking. C made me stop.

# What C Taught Me About Dependencies

In the JavaScript world, dependencies are invisible.

You run `npm install`, a `node_modules` folder appears, and hundreds—sometimes
thousands—of packages quietly settle into your project. You don't read them. You
don't audit them. You trust that someone, somewhere, made sure it all works.

And for a while, I never questioned it.

## The node_modules Reality

I remember the first time I actually looked at what was in a project's
`node_modules`. A straightforward React app. Nothing fancy.

Over 800 packages.

For a to-do list.

I didn't know what most of them did. I didn't know who wrote them. I definitely
didn't know if any of them had vulnerabilities, or if they were still maintained,
or if they were doing things I wouldn't want them to do.

But the app worked, so I moved on.

## Then I Started Writing C

When you need something in C, there is no package manager waiting to hand it to
you.

You find a library. You read its source. You understand what it does and how it
links into your program. You might vendor the files directly into your project.
You deal with headers, with linking, with making sure it actually compiles on
your system.

It's slower. It's more work.

And it completely changed how I think about dependencies.

## Friction as a Feature

In JavaScript, adding a dependency has almost zero cost. One command and it's
done. That frictionless experience is supposed to be a strength—and in some ways,
it is.

But it also means you stop asking the question: _do I actually need this?_

In C, the friction forces the question. Every dependency is a deliberate choice
because it takes real effort to bring it in. You weigh the tradeoff every time.
Can I write this myself in 50 lines? Is this library worth the complexity it
adds? Do I understand what it's doing well enough to debug it when something
breaks?

These are questions I rarely asked in JavaScript. In C, I can't avoid them.

## Knowing What's in Your Software

There's something deeper here than just convenience versus friction.

When I relied on the npm ecosystem, I was building on a foundation I couldn't
see. My software was made of other people's decisions—dependency trees I never
read, abstractions I never questioned, tradeoffs I never evaluated.

In C, I know what's in my program. Not because I'm smarter, but because the
language doesn't let me look away.

And that knowledge changes things. When something breaks, I know where to look.
When I need to optimize, I understand what's actually running. When I make a
choice about what to include, it's a real choice—not a default.

## What I Brought Back

I learned this the hard way myself.

Early on, I wrote a little console app in C. I didn't think about the
dependencies. I didn't think about the architecture. I just started writing
code—the same way I used to spin up a React app and figure it out as I went.

That was a mistake.

After a couple of weeks, everything was intertwined. Modules depended on each
other in ways I hadn't planned. The whole thing was a mess—and unlike JavaScript,
there was no framework hiding the mess from me. It was all right there in the
headers, the includes, the linker errors.

It took almost an entire week to refactor everything and separate things out.
One week to fix what a few minutes of upfront thinking could have prevented.

That experience changed me. Not just for C, but for everything.

Now, even when I work in higher-level languages, I ask different questions before
adding a dependency or wiring things together:

- What does this actually do? Can I read the source?
- How many transitive dependencies does it pull in?
- Could I write the part I need myself?
- What happens if this package stops being maintained?
- How will this choice look in two weeks when the project has grown?

These aren't radical questions. But I wasn't asking them before.

## The Bigger Lesson

This is really about the same thing I wrote about in my first post—understanding
what sits underneath the abstractions.

Dependencies are abstractions. They hide complexity so you can move faster. That's
valuable. But if you never look underneath, you end up building on a foundation
you don't understand.

C didn't just teach me to be careful about dependencies.

It taught me to be honest about what I actually know about my own software.

### The Calm Developer

I believe good software isn't just about features or speed.

It's about clarity.

It's about writing code that you—and others—can understand later. It's about building
systems that don't fight you.

And it's about staying calm in the process of learning and building.

If you're interested or on a similar path, you are in the right place. 


---
title: Getting Started with TypeScript and React
description: Learn how to use TypeScript with React to build more robust components and applications.
pubDate: 2026-04-01
tags:
  - react
  - typescript
  - frontend
languages:
  - TypeScript
---

React and TypeScript are a powerful combination for building modern web applications. TypeScript adds static typing to React, which helps catch errors early and provides better tooling support.

### Defining a Simple Component

With TypeScript, you can define the props for your components using interfaces or types.

```tsx
interface GreetingProps {
  name: string;
  age?: number; // Optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;
```

### Using Hooks with TypeScript

Hooks like `useState` and `useEffect` work seamlessly with TypeScript.

```tsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};
```

Using TypeScript with React makes your codebase more maintainable and helps your team collaborate more effectively.

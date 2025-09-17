# 🧰 Mastering TypeScript

Welcome to the Mastering TypeScript Project!
This simple project is designed to help you understand the basics of TypeScript, including how to set up a project, use static typing, and organize code with modules.

This Git repository contains my personal notes, code snippets, and reflections as I read through *Programming with Types* by Vlad Riscutia. The book offers a deep dive into TypeScript's type system, exploring concepts like structural typing, type inference, and advanced patterns for building robust applications. My notes aim to reinforce key ideas from the book and provide practical examples that complement the theoretical insights. You can learn more about the book [here](https://www.manning.com/books/programming-with-types).

My notes on TypeScript can be accessed [here](https://alexcarcar.github.io/MasteringTypeScript/
).

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/alexcarcar/MasteringTypeScript.git
cd typescript-demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Compile the TypeScript Code
```bash
npx tsc
```

### 4. Run the Project
```bash
node dist/index.js
```

---

## 📁 Project Structure

```
typescript-demo/
├── src/
│   ├── index.ts        # Entry point
│   ├── utils.ts        # Utility functions
│   └── models.ts       # Type definitions
├── dist/               # Compiled JavaScript output
├── package.json        # Project metadata and scripts
└── tsconfig.json       # TypeScript configuration
```

---

## 🧪 Code Overview

### `models.ts`
Defines a `User` interface with optional properties.

```ts
export interface User {
  id: number;
  name: string;
  email?: string;
}
```

### `utils.ts`
Contains a function that uses the `User` type.

```ts
import { User } from './models';

export function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```

### `index.ts`
Creates a user and prints a greeting.

```ts
import { greet } from './utils';
import { User } from './models';

const user: User = {
  id: 1,
  name: 'Alice'
};

console.log(greet(user));
```

---

## ⚙️ TypeScript Features Demonstrated

- ✅ Static typing with interfaces
- ✅ Optional properties
- ✅ Modular imports/exports
- ✅ Configuration via `tsconfig.json`
- ✅ Compilation to JavaScript

---

## 📚 Resources

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [tsconfig Reference](https://www.typescriptlang.org/tsconfig)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

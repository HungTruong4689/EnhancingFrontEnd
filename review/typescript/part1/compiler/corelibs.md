# Core Libraries in TypeScript

TypeScript provides several core libraries that are essential for development. These libraries include:

## 1. `lib.d.ts`
This is the default library that includes the standard JavaScript library declarations. It provides type definitions for built-in JavaScript objects like `Array`, `String`, `Number`, etc.

## 2. `lib.dom.d.ts`
This library provides type definitions for the Document Object Model (DOM) API, which is used for interacting with HTML and XML documents.

## 3. `lib.es6.d.ts`
This library includes type definitions for ECMAScript 2015 (ES6) features such as Promises, Symbols, and new collection types like `Map` and `Set`.

## 4. `lib.webworker.d.ts`
This library provides type definitions for the Web Workers API, which allows for running scripts in background threads.

## 5. `lib.scripthost.d.ts`
This library includes type definitions for the Windows Script Host (WSH) API, which is used for scripting on Windows platforms.

## 6. `lib.esnext.d.ts`
This library includes type definitions for the latest ECMAScript features that are proposed for future versions of JavaScript.

## Usage
To include a specific library in your TypeScript project, you can use the `lib` option in your `tsconfig.json` file:

```json
{
    "compilerOptions": {
        "lib": ["es6", "dom"]
    }
}
```

This configuration includes the ES6 and DOM libraries in your project.

## Conclusion
Understanding and utilizing TypeScript's core libraries can greatly enhance your development experience by providing robust type definitions and ensuring type safety in your code.

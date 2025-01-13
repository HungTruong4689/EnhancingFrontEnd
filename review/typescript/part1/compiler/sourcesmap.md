# Source Maps in TypeScript

Source maps are a way to map the code within a compressed file back to its original position in a source file. This is particularly useful for debugging purposes.

## Enabling Source Maps

To enable source maps in TypeScript, you need to set the `sourceMap` option to `true` in your `tsconfig.json` file:

```json
{
    "compilerOptions": {
        "sourceMap": true
    }
}
```

## How Source Maps Work

When you compile your TypeScript code with source maps enabled, the compiler generates a `.js.map` file for each `.js` file. This map file contains information about the original TypeScript source code, allowing you to debug the TypeScript code directly in the browser or other debugging tools.

## Example

Consider the following TypeScript code in `example.ts`:

```typescript
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet("World");
```

When compiled with source maps enabled, it generates `example.js` and `example.js.map`. The `.map` file helps the debugger to map the compiled JavaScript code back to the original TypeScript code.

## Using Source Maps in Browsers

Most modern browsers support source maps. When you open the developer tools and inspect the code, you will see the original TypeScript code instead of the compiled JavaScript code, making it easier to debug.

## Conclusion

Source maps are a powerful feature that can greatly enhance your debugging experience by allowing you to work with your original TypeScript code. Make sure to enable them in your project to take advantage of this feature.

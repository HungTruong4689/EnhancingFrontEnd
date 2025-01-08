# The `never` Type in TypeScript

The `never` type in TypeScript represents values that never occur. It is used to indicate that a function never returns or always throws an error. Here are some common use cases for the `never` type:

## Functions that Throw an Error

A function that always throws an error can be typed with `never` because it never successfully completes:

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

## Infinite Loops

A function that contains an infinite loop can also be typed with `never` because it never reaches the end of its execution:

```typescript
function infiniteLoop(): never {
    while (true) {
        // do something
    }
}
```

## Exhaustiveness Checking

The `never` type is useful for exhaustiveness checking in switch statements or type guards. It ensures that all possible cases are handled:

```typescript
type Shape = 
    | { kind: 'circle'; radius: number }
    | { kind: 'square'; sideLength: number };

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            // This ensures that all cases are handled
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
```

In the example above, if a new shape is added to the `Shape` type, TypeScript will produce an error if the switch statement does not handle the new shape, ensuring that all cases are covered.

## Summary

The `never` type is a powerful tool in TypeScript for functions that never return, infinite loops, and ensuring exhaustiveness in type checks. It helps catch errors at compile time and makes your code more robust.

# `unknown` in TypeScript

The `unknown` type in TypeScript is a type-safe counterpart of `any`. It represents any value, but unlike `any`, it requires you to perform type checking before performing operations on it.

## Key Points

- **Type Safety**: You cannot perform operations on an `unknown` type without first asserting its type.
- **Type Assertions**: Use type assertions or type guards to work with `unknown` values safely.

## Example

```typescript
let value: unknown;

value = "Hello, world!";
console.log((value as string).toUpperCase()); // OK

value = 42;
console.log((value as number) + 10); // OK

// Error: Object is of type 'unknown'.
// console.log(value.toUpperCase());
```

## Type Guards

You can use type guards to narrow down the type of an `unknown` value.

```typescript
function printValue(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        console.log(value + 10);
    } else {
        console.log("Unknown type");
    }
}

printValue("Hello");
printValue(42);
printValue(true);
```

## Conclusion

The `unknown` type is useful when you want to write type-safe code while still allowing for flexibility in the types of values you can work with. Always ensure to perform proper type checks when dealing with `unknown` values.

# Union Types in TypeScript

Union types allow you to store values of different types in a single variable. This is useful when a value can be of multiple types.

## Syntax

To define a union type, use the pipe (`|`) symbol between the types:

```typescript
let value: string | number;
```

In this example, `value` can be either a `string` or a `number`.

## Example

Here is a simple example of using union types:

```typescript
function printId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}

printId(101); // Output: Your ID is: 101
printId("202"); // Output: Your ID is: 202
```

## Type Guards

TypeScript provides type guards to work with union types. Type guards allow you to narrow down the type within a conditional block.

```typescript
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(`Your ID is: ${id.toUpperCase()}`);
    } else {
        console.log(`Your ID is: ${id}`);
    }
}

printId(101); // Output: Your ID is: 101
printId("abc"); // Output: Your ID is: ABC
```

In this example, the `typeof` operator is used to check the type of `id` and handle it accordingly.

## Conclusion

Union types are a powerful feature in TypeScript that allow you to work with variables that can hold multiple types. They provide flexibility and help you write more robust code by handling different types appropriately.

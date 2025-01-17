# Type Casting in TypeScript

Type casting in TypeScript allows you to convert a variable from one type to another. This can be useful when you know more about the type of a variable than TypeScript does.

## Syntax

There are two ways to cast a variable in TypeScript:

1. Using the `as` keyword
2. Using angle-bracket syntax

### Using the `as` Keyword

```typescript
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

### Using Angle-Bracket Syntax

```typescript
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
```

## Example

Here is a complete example demonstrating type casting:

```typescript
function getLength(value: string | number): number {
    if ((value as string).length !== undefined) {
        return (value as string).length;
    } else {
        return value.toString().length;
    }
}

console.log(getLength("Hello, TypeScript!")); // Output: 17
console.log(getLength(12345)); // Output: 5
```

## Notes

- Type casting does not change the type of the variable at runtime; it only tells the TypeScript compiler to treat the variable as a different type.
- Use type casting with caution, as incorrect casting can lead to runtime errors.

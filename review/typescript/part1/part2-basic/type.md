# Type Assignment and Type Inference in TypeScript

## Type Assignment

TypeScript allows you to explicitly assign types to variables, function parameters, and return values. This is known as type assignment.

### Example

```typescript
let age: number = 25;
let name: string = "John Doe";

function greet(person: string): string {
    return `Hello, ${person}!`;
}
```

In the example above:
- `age` is explicitly assigned the type `number`.
- `name` is explicitly assigned the type `string`.
- The `greet` function takes a parameter of type `string` and returns a value of type `string`.

## Type Inference

TypeScript can automatically infer the types of variables and function return values based on the assigned values. This is known as type inference.

### Example

```typescript
let age = 25; // inferred as number
let name = "John Doe"; // inferred as string

function greet(person: string) {
    return `Hello, ${person}!`; // inferred as string
}
```

In the example above:
- `age` is inferred to be of type `number` because it is assigned the value `25`.
- `name` is inferred to be of type `string` because it is assigned the value `"John Doe"`.
- The `greet` function's return type is inferred to be `string` based on the return value.

Type inference helps reduce the amount of explicit type annotations needed, making the code more concise while still benefiting from TypeScript's type checking.

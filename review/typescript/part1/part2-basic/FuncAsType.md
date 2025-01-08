# Function as Type in TypeScript

In TypeScript, you can define the type of a function using type aliases or interfaces. This allows you to specify the signature of the function, including the types of its parameters and return value.

## Using Type Aliases

You can use a type alias to define a function type:

```typescript
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => {
    return `Hello, ${name}!`;
};
```

## Using Interfaces

Alternatively, you can use an interface to define a function type:

```typescript
interface GreetFunction {
    (name: string): string;
}

const greet: GreetFunction = (name) => {
    return `Hello, ${name}!`;
};
```

## Example

Here is a complete example demonstrating the use of function types:

```typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

By defining function types, you can ensure that functions adhere to specific signatures, making your code more predictable and easier to understand.
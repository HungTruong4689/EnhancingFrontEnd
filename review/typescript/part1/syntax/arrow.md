# Arrow Functions in TypeScript

Arrow functions provide a concise way to write functions in TypeScript. They are similar to functions in JavaScript but come with some added benefits.

## Syntax

The basic syntax of an arrow function is as follows:

```typescript
const functionName = (parameters) => {
    // function body
};
```

## Example

Here is an example of an arrow function in TypeScript:

```typescript
const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(2, 3)); // Output: 5
```

## Features

1. **Concise Syntax**: Arrow functions allow for a shorter syntax compared to traditional function expressions.
2. **Lexical `this`**: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the parent scope.

## Usage

Arrow functions are particularly useful in scenarios like array operations, event handling, and callbacks.

### Array Operations

```typescript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(n => n * n);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

### Event Handling

```typescript
document.addEventListener('click', (event) => {
    console.log('Element clicked:', event.target);
});
```

### Callbacks

```typescript
setTimeout(() => {
    console.log('This runs after 1 second');
}, 1000);
```

Arrow functions are a powerful feature in TypeScript that can help you write cleaner and more maintainable code.
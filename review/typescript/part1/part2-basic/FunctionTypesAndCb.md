# Function Types and Callback Functions in TypeScript

## Function Types

In TypeScript, we can define types for functions to ensure they adhere to specific signatures. This helps in maintaining type safety and avoiding runtime errors.

### Example

```typescript
// Function type that takes two numbers and returns a number
type BinaryOperation = (a: number, b: number) => number;

// Function that matches the BinaryOperation type
const add: BinaryOperation = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
```

## Callback Functions

Callback functions are functions passed as arguments to other functions. TypeScript allows us to define the types of these callback functions for better type safety.

### Example

```typescript
// Function type for a callback that takes a number and returns void
type NumberCallback = (num: number) => void;

// Function that accepts a number and a callback function
function processNumber(num: number, callback: NumberCallback): void {
    // Perform some processing
    const result = num * 2;
    // Call the callback function with the result
    callback(result);
}

// Callback function that matches the NumberCallback type
const logResult: NumberCallback = (result) => {
    console.log(`Result: ${result}`);
};

processNumber(5, logResult); // Output: Result: 10
```

By defining function types and using them for callbacks, we can ensure our code is more robust and easier to understand.


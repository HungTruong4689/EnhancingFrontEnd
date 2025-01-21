# Returning a Class in a Decorator

In TypeScript, decorators can be used to modify classes, methods, properties, or parameters. One advanced use case is returning a new class from a class decorator. This can be useful for adding or modifying behavior dynamically.

## Example

Here's an example of a class decorator that returns a new class:

```typescript
function WithTimestamp<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        timestamp = new Date();
    };
}

@WithTimestamp
class ExampleClass {
    constructor(public name: string) {}
}

const example = new ExampleClass('Test');
console.log(example.timestamp); // Outputs the current date and time
```

## Explanation

1. **Decorator Definition**: The `WithTimestamp` decorator is defined as a function that takes a constructor and returns a new class that extends the original constructor.
2. **Applying the Decorator**: The `@WithTimestamp` decorator is applied to `ExampleClass`.
3. **New Class**: The new class extends the original `ExampleClass` and adds a `timestamp` property initialized to the current date and time.
4. **Instance Creation**: When an instance of `ExampleClass` is created, it includes the `timestamp` property.

This pattern allows you to dynamically add properties or methods to classes using decorators.

# Default Values of Functions in TypeScript

In TypeScript, you can provide default values for function parameters. This allows you to specify a default value for a parameter if no value or `undefined` is passed.

## Syntax

```typescript
function functionName(parameter: type = defaultValue): returnType {
    // function body
}
```

## Example

```typescript
function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
```

In the example above, the `greet` function has a default parameter `name` with a default value of `"Guest"`. If no argument is provided when calling `greet`, the default value is used.

## Multiple Parameters with Default Values

You can also have multiple parameters with default values:

```typescript
function multiply(a: number = 1, b: number = 1): number {
    return a * b;
}

console.log(multiply()); // Output: 1
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10
```


## Important Note

When using default parameters, if you add an additional parameter to the function, TypeScript will automatically assign the provided value to the corresponding parameter based on its position. For example:

```typescript
function example(a: number = 1, b: number = 2, c: number = 3): void {
    console.log(a, b, c);
}

example(); // Output: 1 2 3
example(10); // Output: 10 2 3
example(10, 20); // Output: 10 20 3
example(10, 20, 30); // Output: 10 20 30
```typescript
function example(a: number = 1, b: number): void {
    console.log(a, b);
}

example(10); // Output: 10 undefined
```

In this example, the function `example` has a default value for the first parameter `a`, but not for the second parameter `b`. When calling `example(10)`, the value `10` is assigned to `a`, and `b` remains `undefined` because no value is provided for it.



## Conclusion

Default values for function parameters in TypeScript provide a convenient way to handle optional parameters and make your functions more flexible and easier to use.


## Default Values with Destructuring

You can also use default values with destructured parameters:

```typescript
function drawCircle({ radius = 10, color = "red" }: { radius?: number; color?: string } = {}): void {
    console.log(`Drawing a circle with radius ${radius} and color ${color}`);
}

drawCircle(); // Output: Drawing a circle with radius 10 and color red
drawCircle({ radius: 5 }); // Output: Drawing a circle with radius 5 and color red
drawCircle({ color: "blue" }); // Output: Drawing a circle with radius 10 and color blue
drawCircle({ radius: 7, color: "green" }); // Output: Drawing a circle with radius 7 and color green
```

In this example, the `drawCircle` function uses destructuring to extract `radius` and `color` from the parameter object, providing default values for both. If no argument is provided, an empty object is used as the default parameter.

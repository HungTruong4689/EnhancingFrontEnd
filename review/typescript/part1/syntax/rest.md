# Rest Parameters in TypeScript

Rest parameters allow a function to accept an indefinite number of arguments as an array. This is useful when you don't know how many arguments will be passed to the function.

## Syntax

To declare a rest parameter, use the spread operator (`...`) followed by the parameter name. The rest parameter must be the last parameter in the function's parameter list.

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
```

In the example above, the `sum` function can accept any number of arguments, and it will sum them up.

## Type Annotations

You can also specify the type of the rest parameter. In the example above, `numbers: number[]` indicates that the rest parameter is an array of numbers.

```typescript
function concatenateStrings(separator: string, ...strings: string[]): string {
    return strings.join(separator);
}

console.log(concatenateStrings(", ", "apple", "banana", "cherry")); // Output: "apple, banana, cherry"
```

In this example, the `concatenateStrings` function takes a separator string and any number of string arguments, and it concatenates them using the separator.

## Conclusion

Rest parameters are a powerful feature in TypeScript that allow you to write more flexible and reusable functions. By using rest parameters, you can handle functions with variable numbers of arguments in a clean and type-safe way.
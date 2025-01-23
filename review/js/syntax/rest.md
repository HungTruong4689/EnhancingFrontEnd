# Rest Parameters in JavaScript

Rest parameters allow you to represent an indefinite number of arguments as an array. This can be useful when you want to work with multiple arguments in a function without knowing how many arguments will be passed.

## Syntax

```javascript
function myFunction(...args) {
    // args is an array containing the arguments
    console.log(args);
}

myFunction(1, 2, 3); // Output: [1, 2, 3]
```

## Example

Here is an example of using rest parameters to sum an indefinite number of arguments:

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

## Notes

- Rest parameters must be the last parameter in the function definition.
- Only one rest parameter is allowed per function.

```javascript
function incorrectFunction(...args, lastArg) {
    // This will cause a syntax error
}
```

- Rest parameters are different from the `arguments` object. The `arguments` object is not a real array, while rest parameters are.

```javascript
function exampleFunction() {
    console.log(arguments); // Not a real array
}

function anotherExampleFunction(...args) {
    console.log(args); // Real array
}
```

Rest parameters provide a more flexible and readable way to handle multiple function arguments in JavaScript.
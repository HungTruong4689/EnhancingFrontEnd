# Spread Operator in JavaScript

The spread operator (`...`) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.

## Examples

### 1. Copying an Array
```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
```

### 2. Merging Arrays
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
```

### 3. Spreading Elements in Function Calls
```javascript
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
```

### 4. Spreading Elements in Object Literals
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

The spread operator is a powerful feature in JavaScript that simplifies working with arrays and objects.

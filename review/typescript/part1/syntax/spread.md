# Spread Operator in TypeScript

The spread operator (`...`) in TypeScript allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected. It can also be used to spread the properties of an object.

## Spreading Arrays

You can use the spread operator to create a new array by combining existing arrays or adding new elements to an existing array.

```typescript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

## Spreading Objects

The spread operator can also be used to create a new object by copying the properties of an existing object.

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

## Function Arguments

The spread operator can be used to pass elements of an array as arguments to a function.

```typescript
function sum(x: number, y: number, z: number): number {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
```

## Conclusion

The spread operator is a powerful feature in TypeScript that allows for more concise and readable code when working with arrays and objects. It simplifies the process of combining, copying, and passing data.


## Copying Objects

When you use the spread operator to copy an object, it creates a shallow copy. This means that the new object will have the same properties as the original object, but if any of those properties are objects themselves, they will still reference the same objects in memory.

```typescript
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
copy.b.c = 3;

console.log(original.b.c); // Output: 3
console.log(copy.b.c); // Output: 3
```

In the example above, modifying the `b.c` property in the copied object also affects the original object because `b` is a reference to the same object in memory. To create a deep copy, you would need to use a different approach, such as `JSON.parse(JSON.stringify(original))`, or a library like `lodash`.

```typescript
import _ from 'lodash';

const original = { a: 1, b: { c: 2 } };
const deepCopy = _.cloneDeep(original);
deepCopy.b.c = 3;

console.log(original.b.c); // Output: 2
console.log(deepCopy.b.c); // Output: 3
```
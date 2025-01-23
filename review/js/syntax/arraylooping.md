# Looping Through Arrays in JavaScript

Looping through arrays is a common task in JavaScript. Here are some common methods to iterate over arrays:

## `for` Loop

The traditional `for` loop gives you complete control over the iteration process.

```javascript
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

## `for...of` Loop

The `for...of` loop provides a simpler syntax for iterating over iterable objects, including arrays.

```javascript
const array = [1, 2, 3, 4, 5];

for (const element of array) {
    console.log(element);
}
```

## `forEach` Method

The `forEach` method executes a provided function once for each array element.

```javascript
const array = [1, 2, 3, 4, 5];

array.forEach(element => {
    console.log(element);
});
```

## `map` Method

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const array = [1, 2, 3, 4, 5];

const newArray = array.map(element => element * 2);
console.log(newArray); // [2, 4, 6, 8, 10]
```

## `for...in` Loop

The `for...in` loop iterates over the enumerable properties of an object, including array indices.

```javascript
const array = [1, 2, 3, 4, 5];

for (const index in array) {
    console.log(array[index]);
}
```

Note: `for...in` is generally not recommended for arrays because it iterates over all enumerable properties, not just the array elements.

These are some of the most common ways to loop through arrays in JavaScript. Choose the one that best fits your use case.
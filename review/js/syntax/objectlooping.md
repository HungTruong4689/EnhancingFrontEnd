# Looping Through Objects in JavaScript

When working with objects in JavaScript, you often need to loop through their properties. JavaScript provides several methods to make this task easier: `Object.keys()`, `Object.values()`, and `Object.entries()`.

## Object.keys()

The `Object.keys()` method returns an array of a given object's own enumerable property names.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);

keys.forEach(key => {
    console.log(key); // 'a', 'b', 'c'
});
```

## Object.values()

The `Object.values()` method returns an array of a given object's own enumerable property values.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);

values.forEach(value => {
    console.log(value); // 1, 2, 3
});
```

## Object.entries()

The `Object.entries()` method returns an array of a given object's own enumerable property `[key, value]` pairs.

```javascript
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);

entries.forEach(([key, value]) => {
    console.log(key, value); // ['a', 1], ['b', 2], ['c', 3]
});
```

These methods provide a convenient way to loop through objects and access their keys, values, and entries.
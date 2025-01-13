# Destructuring Arrays and Objects in TypeScript

## Destructuring Arrays

Destructuring allows you to unpack values from arrays into distinct variables. Here's an example:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
```

You can also skip elements:

```typescript
const [first, , third] = numbers;

console.log(first); // 1
console.log(third); // 3
```

## Destructuring Objects

Destructuring can also be used with objects to unpack properties into distinct variables:

```typescript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const { name, age, city } = person;

console.log(name); // John
console.log(age); // 30
console.log(city); // New York
```

You can also rename variables while destructuring:

```typescript
const { name: personName, age: personAge } = person;

console.log(personName); // John
console.log(personAge); // 30
```

## Nested Destructuring

Destructuring can be nested for more complex structures:

```typescript
const user = {
    id: 1,
    name: 'Jane',
    address: {
        street: '123 Main St',
        city: 'Los Angeles'
    }
};

const {
    name,
    address: { street, city }
} = user;

console.log(name); // Jane
console.log(street); // 123 Main St
console.log(city); // Los Angeles
```

## Default Values

You can provide default values for variables in case the unpacked value is `undefined`:

```typescript
const [a, b = 2] = [1];

console.log(a); // 1
console.log(b); // 2
```

```typescript
const { x = 10, y = 20 } = { x: 5 };

console.log(x); // 5
console.log(y); // 20
```

Destructuring in TypeScript helps to write cleaner and more readable code by unpacking values from arrays and objects into distinct variables.

## Rest Parameters with Destructuring

Rest parameters can be used in conjunction with destructuring to handle the remaining elements of an array or properties of an object.

### Rest Parameters with Arrays

When destructuring arrays, you can use the rest parameter syntax to collect the remaining elements into a new array:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

### Rest Parameters with Objects

Similarly, when destructuring objects, you can use the rest parameter syntax to collect the remaining properties into a new object:

```typescript
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA'
};

const { name, age, ...rest } = person;

console.log(name); // John
console.log(age); // 30
console.log(rest); // { city: 'New York', country: 'USA' }
```

Using rest parameters with destructuring allows you to easily handle the remaining elements or properties, making your code more flexible and concise.
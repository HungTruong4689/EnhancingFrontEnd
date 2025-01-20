# `keyof` Generic in TypeScript

The `keyof` operator in TypeScript is used to extract the keys of an interface or type as a union of string literal types. This is particularly useful when working with generics.

## Basic Usage

```typescript
interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
```

## Using `keyof` with Generics

When combined with generics, `keyof` can be used to create flexible and type-safe functions.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: Person = { name: "Alice", age: 30 };
const name = getProperty(person, "name"); // string
const age = getProperty(person, "age"); // number
```

In this example, `getProperty` ensures that the `key` parameter is a valid key of the object `T`, and it returns the corresponding value type.

## Example with Classes

```typescript
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

type CarKeys = keyof Car; // "make" | "model" | "year"

function getCarProperty<T, K extends keyof T>(car: T, key: K): T[K] {
    return car[key];
}

const myCar = new Car("Toyota", "Corolla", 2020);
const make = getCarProperty(myCar, "make"); // string
const year = getCarProperty(myCar, "year"); // number
```

## Conclusion

The `keyof` operator is a powerful tool in TypeScript that, when used with generics, can help create more flexible and type-safe code. It allows you to work with object keys in a type-safe manner, ensuring that your code is both robust and maintainable.
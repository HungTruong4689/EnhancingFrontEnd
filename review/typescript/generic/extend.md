# Extends in Generics of TypeScript

In TypeScript, you can use the `extends` keyword to constrain a generic type to a specific type or a set of types. This ensures that the generic type parameter adheres to the constraints you define.

## Basic Usage

Here's a simple example of using `extends` with generics:

```typescript
function identity<T extends number | string>(value: T): T {
    return value;
}

let num = identity(42); // OK
let str = identity("Hello"); // OK
// let bool = identity(true); // Error: Type 'boolean' does not satisfy the constraint 'number | string'.
```

In this example, the generic type `T` is constrained to be either `number` or `string`. Any other type will result in a compile-time error.

## Using Interfaces

You can also use interfaces to constrain generics:

```typescript
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

logLength({ length: 10, value: "Hello" }); // OK
// logLength(3); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
```

In this example, the generic type `T` is constrained to types that have a `length` property.

## Extending Multiple Types

TypeScript also allows you to extend multiple types using intersection types:

```typescript
interface Name {
    name: string;
}

interface Age {
    age: number;
}

function displayInfo<T extends Name & Age>(person: T): void {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}

displayInfo({ name: "Alice", age: 30 }); // OK
// displayInfo({ name: "Bob" }); // Error: Property 'age' is missing in type '{ name: string; }'.
```

In this example, the generic type `T` must satisfy both `Name` and `Age` interfaces.

## Conclusion

Using `extends` in TypeScript generics allows you to create more flexible and type-safe functions and classes by constraining the types that can be used. This helps catch errors at compile time and ensures that your code behaves as expected.

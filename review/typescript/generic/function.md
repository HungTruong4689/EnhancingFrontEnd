# Generic Functions in TypeScript

Generic functions allow you to create reusable components that work with a variety of data types. They provide a way to define functions that can operate on different types without sacrificing type safety.

## Basic Syntax

Here is the basic syntax for a generic function in TypeScript:

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

In this example:
- `identity` is a generic function.
- `<T>` is a type parameter, a placeholder for the type that will be specified when the function is called.
- `arg: T` means the function takes an argument of type `T`.
- The function returns a value of type `T`.

## Using Generic Functions

You can call a generic function in two ways:

1. Explicitly specifying the type:

```typescript
let output = identity<string>("Hello, TypeScript!");
```

2. Relying on type inference:

```typescript
let output = identity("Hello, TypeScript!");
```

## Generic Constraints

You can add constraints to a generic function to limit the types it can accept. For example, you can ensure that a type has certain properties:

```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

In this example:
- `T extends Lengthwise` means that `T` must have a `length` property.

## Multiple Type Parameters

You can also use multiple type parameters in a generic function:

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
```

In this example:
- `merge` is a generic function with two type parameters, `T` and `U`.
- The function returns an object that combines properties from both `obj1` and `obj2`.

## Conclusion

Generic functions are a powerful feature in TypeScript that enable you to write flexible and reusable code. By understanding and using generics, you can create functions that work with a wide range of types while maintaining type safety.

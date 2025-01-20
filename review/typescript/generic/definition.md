# Generics in TypeScript

Generics provide a way to create reusable components. They allow a function, class, or interface to work with different data types without specifying the exact type in advance.

## Example

Here is a simple example of a generic function in TypeScript:

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

In this example, `T` is a placeholder for the type that will be passed to the function. When you call the function, you can specify the type:

```typescript
let output = identity<string>("Hello, Generics");
```

Or let TypeScript infer the type:

```typescript
let output = identity("Hello, Generics");
```

Generics are powerful tools for creating flexible and reusable code.
# Extending Functions of Interface in TypeScript

In TypeScript, interfaces can be used to define the structure of a function. You can also extend these function interfaces to create more specific versions.

## Basic Function Interface

```typescript
interface Greet {
    (name: string): string;
}

const greet: Greet = (name: string) => {
    return `Hello, ${name}!`;
};
```

## Extending Function Interface

You can extend a function interface to add more properties or methods.

```typescript
interface Greet {
    (name: string): string;
}

interface GreetWithAge extends Greet {
    age: number;
}

const greetWithAge: GreetWithAge = (name: string) => {
    return `Hello, ${name}!`;
};

greetWithAge.age = 30;

console.log(greetWithAge("John")); // Output: Hello, John!
console.log(`Age: ${greetWithAge.age}`); // Output: Age: 30
```

In this example, `GreetWithAge` extends the `Greet` interface by adding an `age` property.

## Conclusion

Extending function interfaces in TypeScript allows you to create more complex and specific function types, enhancing the flexibility and reusability of your code.
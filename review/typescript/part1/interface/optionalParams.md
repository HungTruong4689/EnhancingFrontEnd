# Optional Parameters and Properties in TypeScript Interfaces

In TypeScript, interfaces can have optional parameters and properties. This is useful when you want to define an object structure but some properties or parameters are not always required.

## Optional Properties

To define an optional property in an interface, you use the `?` symbol after the property name.

```typescript
interface User {
    name: string;
    age?: number; // age is optional
}

const user1: User = { name: "Alice" };
const user2: User = { name: "Bob", age: 25 };
```

In the example above, the `age` property is optional. This means that an object of type `User` may or may not have the `age` property.

## Optional Parameters

Similarly, you can define optional parameters in function signatures within interfaces.

```typescript
interface User {
    name: string;
    age?: number;
    greet(message?: string): void; // message is optional
}

const user: User = {
    name: "Alice",
    greet: (message?: string) => {
        if (message) {
            console.log(`${message}, ${user.name}`);
        } else {
            console.log(`Hello, ${user.name}`);
        }
    }
};

user.greet(); // Output: Hello, Alice
user.greet("Good morning"); // Output: Good morning, Alice
```

In this example, the `greet` method has an optional parameter `message`. The method can be called with or without the `message` parameter.

## Conclusion

Using optional properties and parameters in TypeScript interfaces allows for more flexible and robust type definitions. This can help in creating more adaptable and maintainable code.

# Using Interfaces in TypeScript

Interfaces in TypeScript are used to define the structure of an object. They can be used to type-check the shape of an object, ensuring that it has the required properties and methods.

## Defining an Interface

To define an interface, use the `interface` keyword followed by the name of the interface and the properties it should have:

```typescript
interface User {
    name: string;
    age: number;
    email?: string; // Optional property
}
```

## Implementing an Interface

You can use the interface to type-check objects:

```typescript
const user: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};
```

## Function Parameters

Interfaces can also be used to type-check function parameters:

```typescript
function greet(user: User): void {
    console.log(`Hello, ${user.name}`);
}
```

## Extending Interfaces

Interfaces can be extended to create new interfaces with additional properties:

```typescript
interface Admin extends User {
    isAdmin: boolean;
}

const admin: Admin = {
    name: "Jane Doe",
    age: 25,
    isAdmin: true
};
```

## Conclusion

Interfaces are a powerful feature in TypeScript that help ensure your objects have the correct structure, making your code more robust and maintainable.
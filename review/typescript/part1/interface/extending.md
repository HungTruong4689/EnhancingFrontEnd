# Extending Interfaces in TypeScript

In TypeScript, interfaces can be extended to create new interfaces with additional properties. This allows for the reuse of existing interfaces and the addition of new properties without modifying the original interface.

## Basic Example

Here is a basic example of extending an interface:

```typescript
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

const employee: Employee = {
    name: "John Doe",
    age: 30,
    employeeId: 1234
};
```

In this example, the `Employee` interface extends the `Person` interface, adding an `employeeId` property. An object of type `Employee` must have all properties from both `Person` and `Employee`.

## Extending Multiple Interfaces

TypeScript also allows an interface to extend multiple interfaces:

```typescript
interface Address {
    street: string;
    city: string;
}

interface Contact extends Person, Address {
    phone: string;
}

const contact: Contact = {
    name: "Jane Doe",
    age: 25,
    street: "123 Main St",
    city: "Anytown",
    phone: "555-1234"
};
```

In this example, the `Contact` interface extends both `Person` and `Address` interfaces, combining their properties along with its own `phone` property.

## Conclusion

Extending interfaces in TypeScript is a powerful feature that promotes code reuse and modularity. It allows you to build complex types by combining simpler ones, making your code more maintainable and easier to understand.

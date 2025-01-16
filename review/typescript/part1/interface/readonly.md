# Readonly in TypeScript Interfaces

In TypeScript, the `readonly` modifier can be used to make properties of an interface immutable. Once a property is marked as `readonly`, it cannot be changed after the object is created.

## Example

```typescript
interface User {
    readonly id: number;
    name: string;
}

const user: User = {
    id: 1,
    name: "John Doe"
};

user.name = "Jane Doe"; // This is allowed
user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
```

In the example above, the `id` property is marked as `readonly`, so any attempt to change its value will result in a compile-time error.

## Use Cases

- **Immutable Data**: Ensuring certain properties remain constant throughout the lifecycle of an object.
- **API Responses**: Protecting data received from external sources from being modified.

Using `readonly` helps in maintaining the integrity of data and preventing accidental modifications.
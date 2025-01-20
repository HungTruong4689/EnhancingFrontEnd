# Partial and Readonly in TypeScript

## Partial

The `Partial` utility type constructs a type with all properties of `Type` set to optional. This is useful when you want to create a type that represents a subset of another type.

### Example

```typescript
interface User {
    id: number;
    name: string;
    age: number;
}

const updateUser = (user: Partial<User>) => {
    // user can have any subset of User properties
};

updateUser({ name: "Alice" }); // Valid
updateUser({ id: 1, age: 30 }); // Valid
```

## Readonly

The `Readonly` utility type constructs a type with all properties of `Type` set to readonly, meaning the properties of the type cannot be reassigned.

### Example

```typescript
interface User {
    id: number;
    name: string;
    age: number;
}

const user: Readonly<User> = {
    id: 1,
    name: "Alice",
    age: 30
};

user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
```

These utility types help in creating more flexible and safer TypeScript code by allowing you to control the mutability of your types.
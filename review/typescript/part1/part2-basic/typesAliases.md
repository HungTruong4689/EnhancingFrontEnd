# Type Aliases in TypeScript

Type aliases allow you to create a new name for a type. They are useful for simplifying complex type definitions and making your code more readable.

## Syntax

```typescript
type AliasName = ExistingType;
```

## Examples

### Basic Type Alias

```typescript
type StringAlias = string;

let myString: StringAlias;
myString = "Hello, TypeScript!";
```

### Alias for Object Types

```typescript
type User = {
    name: string;
    age: number;
};

let user: User = {
    name: "John Doe",
    age: 30,
};
```

### Alias for Union Types

```typescript
type ID = number | string;

let userId: ID;
userId = 123;
userId = "ABC123";
```

### Alias for Function Types

```typescript
type Greet = (name: string) => string;

const greet: Greet = (name) => `Hello, ${name}!`;
```

## Conclusion

Type aliases are a powerful feature in TypeScript that can help you write cleaner and more maintainable code by giving descriptive names to complex types.

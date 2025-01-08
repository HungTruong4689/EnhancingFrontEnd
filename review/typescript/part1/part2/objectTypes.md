# Object Types in TypeScript

In TypeScript, object types are used to define the shape of an object. This includes the properties and their types that an object can have.

## Defining Object Types

You can define object types using type aliases or interfaces.

### Using Type Aliases

```typescript
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

const person: Person = {
    name: "John",
    age: 25,
    isStudent: true,
};
```

### Using Interfaces

```typescript
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

const person: Person = {
    name: "John",
    age: 25,
    isStudent: true,
};
```

## Optional Properties

You can define optional properties by adding a question mark (`?`) after the property name.

```typescript
interface Person {
    name: string;
    age: number;
    isStudent?: boolean;
}

const person: Person = {
    name: "John",
    age: 25,
};
```

## Readonly Properties

You can define readonly properties using the `readonly` modifier. These properties cannot be changed after the object is created.

```typescript
interface Person {
    readonly id: number;
    name: string;
    age: number;
}

const person: Person = {
    id: 1,
    name: "John",
    age: 25,
};

// Error: Cannot assign to 'id' because it is a read-only property.
person.id = 2;
```

## Index Signatures

Index signatures allow you to define properties with dynamic keys.

```typescript
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ["Hello", "World"];
```

## Extending Types

You can extend interfaces and type aliases to create more complex types.

### Extending Interfaces

```typescript
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    isStudent: boolean;
}

const student: Student = {
    name: "John",
    age: 25,
    isStudent: true,
};
```

### Extending Type Aliases

```typescript
type Person = {
    name: string;
    age: number;
};

type Student = Person & {
    isStudent: boolean;
};

const student: Student = {
    name: "John",
    age: 25,
    isStudent: true,
};
```

## Conclusion

Object types in TypeScript provide a powerful way to define the shape of objects, ensuring type safety and better code readability. By using type aliases and interfaces, you can create complex and flexible types that suit your application's needs.
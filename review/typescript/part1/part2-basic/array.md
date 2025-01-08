# Array Types in TypeScript

TypeScript provides a way to define the types of elements in an array. This helps in ensuring that the array contains only the specified type of elements.

## Basic Array Types

### Number Array
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
```

### String Array
```typescript
let strings: string[] = ["one", "two", "three"];
```

### Boolean Array
```typescript
let booleans: boolean[] = [true, false, true];
```

## Array of Objects
You can also define arrays that contain objects with specific properties.

```typescript
interface Person {
    name: string;
    age: number;
}

let people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
```

## Using Generics
TypeScript also supports using generics to define array types.

```typescript
let genericArray: Array<number> = [1, 2, 3, 4, 5];
```

## Multi-dimensional Arrays
You can define multi-dimensional arrays as well.

```typescript
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

## Readonly Arrays
If you want to ensure that an array cannot be modified, you can use the `readonly` modifier.

```typescript
let readonlyNumbers: readonly number[] = [1, 2, 3, 4, 5];
```

## Tuple Types
Tuples allow you to define an array with a fixed number of elements of specific types.

```typescript
let tuple: [string, number] = ["hello", 10];
```

By using these array types, you can write more robust and type-safe TypeScript code.
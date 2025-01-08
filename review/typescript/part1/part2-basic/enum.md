# Enums in TypeScript

Enums allow us to define a set of named constants. Using enums can make it easier to document intent or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

## Numeric Enums

By default, enums are numeric, and their values are auto-incremented from 0.

```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Up;
console.log(dir); // Output: 0
```

You can also manually set the values of the enum members.

```typescript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // Output: 1
console.log(Direction.Down); // Output: 2
```

## String Enums

String enums are more readable and can be useful when debugging.

```typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let dir: Direction = Direction.Up;
console.log(dir); // Output: "UP"
```

## Heterogeneous Enums

Enums can also contain both string and numeric values, but this is not recommended.

```typescript
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES"
}
```

## Enum Member Types

Enum members can be constant or computed. Constant members are evaluated at compile time, while computed members are evaluated at runtime.

```typescript
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length
}
```

## Reverse Mapping

TypeScript provides reverse mapping for numeric enums.

```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction[0]); // Output: "Up"
console.log(Direction["Up"]); // Output: 0
```

## Conclusion

Enums are a powerful feature in TypeScript that can help you write more readable and maintainable code. They provide a way to define a set of named constants, making your code more expressive and less error-prone.

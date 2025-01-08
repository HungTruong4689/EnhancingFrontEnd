# Literal Types in TypeScript

Literal types in TypeScript allow you to specify exact values a variable can hold. This can be useful for defining specific values for variables, function parameters, or return types.

## String Literal Types

```typescript
let direction: "north" | "south" | "east" | "west";
direction = "north"; // valid
direction = "south"; // valid
direction = "up"; // error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'.
```

## Numeric Literal Types

```typescript
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 4; // valid
diceRoll = 7; // error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.
```

## Boolean Literal Types

```typescript
let isTrue: true;
isTrue = true; // valid
isTrue = false; // error: Type 'false' is not assignable to type 'true'.
```

## Using Literal Types in Functions

```typescript
function move(direction: "north" | "south" | "east" | "west") {
    // implementation
}

move("north"); // valid
move("up"); // error: Argument of type '"up"' is not assignable to parameter of type '"north" | "south" | "east" | "west"'.
```

## Combining with Other Types

Literal types can be combined with other types using union types.

```typescript
type Status = "success" | "error" | "loading";
type Response = {
    status: Status;
    data?: any;
    error?: string;
};

const response: Response = {
    status: "success",
    data: { id: 1, message: "Operation successful" }
};
```

Using literal types can help make your code more precise and catch errors at compile time.

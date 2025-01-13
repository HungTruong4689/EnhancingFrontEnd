# `let` and `var` in TypeScript

## `let`

- Block-scoped: Variables declared with `let` are limited to the block, statement, or expression where they are used.
- Cannot be redeclared: You cannot redeclare a variable declared with `let` in the same scope.
- Hoisting: Variables declared with `let` are hoisted to the top of their block but not initialized.

Example:
```typescript
let x = 10;
if (x > 5) {
    let y = x + 5;
    console.log(y); // 15
}
// console.log(y); // Error: y is not defined
```

## `var`

- Function-scoped: Variables declared with `var` are limited to the function in which they are declared.
- Can be redeclared: You can redeclare a variable declared with `var` in the same scope.
- Hoisting: Variables declared with `var` are hoisted to the top of their function and initialized with `undefined`.

Example:
```typescript
var x = 10;
if (x > 5) {
    var y = x + 5;
    console.log(y); // 15
}
console.log(y); // 15
```

## Key Differences

- **Scope**: `let` is block-scoped, while `var` is function-scoped.
- **Redeclaration**: `let` cannot be redeclared in the same scope, while `var` can.
- **Hoisting**: Both `let` and `var` are hoisted, but `let` is not initialized.

Use `let` when you need block-level scope and want to avoid issues with variable redeclaration and hoisting.

## Example of Hoisting

### `let` Hoisting

Variables declared with `let` are hoisted to the top of their block but are not initialized. This means you cannot use the variable before the declaration.

Example:
```typescript
console.log(x); // Error: Cannot access 'x' before initialization
let x = 10;
```

### `var` Hoisting

Variables declared with `var` are hoisted to the top of their function and initialized with `undefined`. This means you can use the variable before the declaration, but it will be `undefined`.

Example:
```typescript
console.log(x); // undefined
var x = 10;
console.log(x); // 10
```
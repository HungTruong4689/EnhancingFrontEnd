# Strict Mode in TypeScript

TypeScript's strict mode is a collection of compiler options that enable more stringent type-checking behavior. Enabling strict mode can help catch potential errors early in the development process. The strict mode can be enabled by setting the `strict` flag to `true` in the `tsconfig.json` file, or by enabling individual strict mode options.

## Enabling Strict Mode

To enable strict mode, add the following to your `tsconfig.json` file:

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

Alternatively, you can enable individual strict mode options:

```json
{
    "compilerOptions": {
        "strictNullChecks": true,
        "noImplicitAny": true,
        "strictFunctionTypes": true,
        "strictBindCallApply": true,
        "strictPropertyInitialization": true,
        "noImplicitThis": true,
        "alwaysStrict": true
    }
}
```

## Individual Strict Mode Options

### `strictNullChecks`

With `strictNullChecks` enabled, `null` and `undefined` are not assignable to any other types unless explicitly allowed.

**Example:**

```typescript
let name: string = null; // Error: Type 'null' is not assignable to type 'string'.
```

### `noImplicitAny`

With `noImplicitAny` enabled, the compiler will issue an error when it cannot infer the type and assumes the `any` type.

**Example:**

```typescript
function greet(message) {
    console.log(message);
    // Error: Parameter 'message' implicitly has an 'any' type.
}
```

### `strictFunctionTypes`

With `strictFunctionTypes` enabled, TypeScript uses stricter rules for function type checking.

**Example:**

```typescript
type Func = (a: number) => void;
let func: Func = (a: string) => {}; // Error: Type '(a: string) => void' is not assignable to type 'Func'.
```

### `strictBindCallApply`

With `strictBindCallApply` enabled, the methods `bind`, `call`, and `apply` on functions are more strictly checked.

**Example:**

```typescript
function add(a: number, b: number): number {
    return a + b;
}

add.call(null, "1", "2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### `strictPropertyInitialization`

With `strictPropertyInitialization` enabled, class properties must be initialized in the constructor or explicitly marked as possibly `undefined`.

**Example:**

```typescript
class Person {
    name: string; // Error: Property 'name' has no initializer and is not definitely assigned in the constructor.
}
```

### `noImplicitThis`

With `noImplicitThis` enabled, the `this` keyword must have an explicit type.

**Example:**

```typescript
function f() {
    this.name = "TypeScript"; // Error: 'this' implicitly has type 'any' because it does not have a type annotation.
}
```

### `alwaysStrict`

With `alwaysStrict` enabled, TypeScript parses files in strict mode and emits `"use strict"` for each file.

**Example:**

```typescript
// The emitted JavaScript will include "use strict" at the top of the file.
```

By enabling strict mode, you can write more robust and error-free TypeScript code. Each of these options helps catch potential issues early, making your codebase more maintainable and reliable.
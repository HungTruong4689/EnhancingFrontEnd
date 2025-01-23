# Nullish Coalescing in JavaScript

The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

## Syntax

```javascript
let result = value1 ?? value2;
```

- `value1`: The left-hand side operand.
- `value2`: The right-hand side operand.

## Examples

### Basic Usage

```javascript
let name = null;
let defaultName = "Guest";

let displayName = name ?? defaultName;
console.log(displayName); // Output: "Guest"
```

### With `undefined`

```javascript
let age;
let defaultAge = 18;

let userAge = age ?? defaultAge;
console.log(userAge); // Output: 18
```

### Difference from `||` (OR) Operator

The `||` operator returns the right-hand side operand if the left-hand side operand is falsy (i.e., `false`, `0`, `""`, `null`, `undefined`, `NaN`).

```javascript
let count = 0;
let defaultCount = 10;

let result = count || defaultCount;
console.log(result); // Output: 10

result = count ?? defaultCount;
console.log(result); // Output: 0
```

In the example above, `count || defaultCount` returns `10` because `0` is falsy, while `count ?? defaultCount` returns `0` because `0` is not `null` or `undefined`.

## Conclusion

The nullish coalescing operator is useful for providing default values when dealing with `null` or `undefined` without mistakenly overriding other falsy values like `0` or `""`.

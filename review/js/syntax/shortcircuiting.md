# Logical Operators in JavaScript: `&&` and `||`

## Logical AND (`&&`)

The logical AND operator (`&&`) evaluates operands from left to right and returns the first falsy value encountered, or the last value if all are truthy.

### Example:
```javascript
const a = true && 'Hello'; // 'Hello'
const b = false && 'Hello'; // false
const c = 'Hello' && 'World'; // 'World'
const d = '' && 'Hello'; // ''
```

## Logical OR (`||`)

The logical OR operator (`||`) evaluates operands from left to right and returns the first truthy value encountered, or the last value if all are falsy.

### Example:
```javascript
const a = true || 'Hello'; // true
const b = false || 'Hello'; // 'Hello'
const c = '' || 'World'; // 'World'
const d = null || 0 || 'Hello'; // 'Hello'
```

## Short-Circuiting

Both `&&` and `||` operators use short-circuit evaluation. This means that the evaluation stops as soon as the result is determined.

### Example:
```javascript
const a = false && (console.log('This will not run'), 'Hello'); // false
const b = true || (console.log('This will not run'), 'Hello'); // true
```

In the above examples, the expressions after `&&` and `||` are not evaluated if the result is already determined by the first operand.
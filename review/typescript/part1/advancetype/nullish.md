# Nullish Coalescing in TypeScript

Nullish coalescing is a feature in TypeScript that allows you to provide a default value when dealing with `null` or `undefined`. It uses the `??` operator.

## Syntax

```typescript
let value = someVariable ?? defaultValue;
```

- `someVariable`: The variable you want to check.
- `defaultValue`: The value to use if `someVariable` is `null` or `undefined`.

## Example

```typescript
let name: string | null = null;
let displayName = name ?? "Default Name";
console.log(displayName); // Output: "Default Name"
```

In this example, `name` is `null`, so `displayName` is assigned the value `"Default Name"`.

## Comparison with Logical OR (`||`)

The logical OR operator (`||`) can also be used to provide default values, but it treats `false`, `0`, `NaN`, `""`, `null`, and `undefined` as falsy values. Nullish coalescing (`??`) only treats `null` and `undefined` as nullish values.

```typescript
let count = 0;
let result = count || 10;
console.log(result); // Output: 10

result = count ?? 10;
console.log(result); // Output: 0
```

In this example, `count` is `0`. Using `||`, `result` is `10` because `0` is falsy. Using `??`, `result` is `0` because `0` is not `null` or `undefined`.

## Conclusion

Nullish coalescing is a useful feature in TypeScript for handling `null` and `undefined` values, providing a more precise way to assign default values compared to the logical OR operator.

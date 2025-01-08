# Tuples in TypeScript

A tuple is a typed array with a pre-defined length and types for each index. Tuples are useful when you want to represent a fixed number of elements with known types.

## Defining a Tuple

To define a tuple in TypeScript, you use the following syntax:

```typescript
let tupleName: [type1, type2, type3];
```

For example:

```typescript
let person: [string, number];
person = ["John", 25]; // Correct
person = [25, "John"]; // Error: Type 'number' is not assignable to type 'string'
```

## Accessing Tuple Elements

You can access tuple elements using their index:

```typescript
console.log(person[0]); // Output: John
console.log(person[1]); // Output: 25
```

## Adding Elements to a Tuple

You can add elements to a tuple using the `push` method, but it must match the tuple's type definition:

```typescript
person.push("Developer"); // Error: Argument of type 'string' is not assignable to parameter of type 'never'
```
## Updating Tuple Elements

To update elements in a tuple, you can directly assign a new value to a specific index, as long as the new value matches the type defined for that index:

```typescript
person[1] = 30; // Correct
person[1] = "thirty"; // Error: Type 'string' is not assignable to type 'number'
```

## Adding Elements to a Tuple

If you need to add elements to a tuple, you must ensure that the new elements match the types defined in the tuple. You can use the `push` method, but TypeScript will enforce the type constraints:

```typescript
let extendedPerson: [string, number, string?];
extendedPerson = ["John", 25];
extendedPerson.push("Developer"); // Correct
console.log(extendedPerson); // Output: ["John", 25, "Developer"]
```

In this example, the tuple `extendedPerson` is defined with an optional third element of type `string`. This allows you to push a new string value to the tuple without causing a type error.

## Destructuring Tuples

You can destructure tuples just like arrays:

```typescript
let [name, age] = person;
console.log(name); // Output: John
console.log(age); // Output: 25
```

## Conclusion

Tuples in TypeScript provide a way to handle arrays with fixed sizes and known types, ensuring type safety and predictability in your code.

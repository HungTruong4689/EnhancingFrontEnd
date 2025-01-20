# Generics in TypeScript Classes

Generics provide a way to create reusable components. They allow a class to work with any data type while providing better type safety.

## Example

Here is an example of a generic class in TypeScript:

```typescript
class Box<T> {
    private _contents: T;

    constructor(contents: T) {
        this._contents = contents;
    }

    get contents(): T {
        return this._contents;
    }

    set contents(value: T) {
        this._contents = value;
    }
}

const numberBox = new Box<number>(123);
console.log(numberBox.contents); // Output: 123

const stringBox = new Box<string>('Hello');
console.log(stringBox.contents); // Output: Hello
```

In this example, `Box` is a generic class that can hold any type of contents. The type is specified when creating an instance of the class.

## Benefits

- **Reusability**: Write a class once and use it with different types.
- **Type Safety**: Catch type-related errors at compile time.
- **Flexibility**: Easily adapt to different data types without code duplication.

## Constraints

You can also add constraints to generics to restrict the types that can be used. For example:

```typescript
class Box<T extends number | string> {
    private _contents: T;

    constructor(contents: T) {
        this._contents = contents;
    }

    get contents(): T {
        return this._contents;
    }

    set contents(value: T) {
        this._contents = value;
    }
}

const numberBox = new Box<number>(123); // Valid
const stringBox = new Box<string>('Hello'); // Valid
// const booleanBox = new Box<boolean>(true); // Error: Type 'boolean' does not satisfy the constraint 'number | string'.
```

In this example, `Box` can only be instantiated with `number` or `string` types.

## Conclusion

Generics in TypeScript classes provide a powerful way to create flexible and type-safe components. They enhance code reusability and maintainability by allowing classes to work with various data types.

## Using `object` as a Generic Type

When using `object` as a generic type, the class can accept any non-primitive type. This includes arrays, functions, and objects.

```typescript
class Container<T extends object> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }
}

const objectContainer = new Container({ key: 'value' });
console.log(objectContainer.value); // Output: { key: 'value' }

const arrayContainer = new Container([1, 2, 3]);
console.log(arrayContainer.value); // Output: [1, 2, 3]
```

In this example, `Container` is a generic class that can hold any object type, including arrays and plain objects. The type is specified when creating an instance of the class.


## Removing an Object Item in a Generic Class

When working with generics that involve objects, you might need to remove an item from the object. Here is an example of how you can achieve this in a type-safe manner:

```typescript
class RemovableContainer<T extends object> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }

    removeItem<K extends keyof T>(key: K): void {
        delete this._value[key];
    }
}

const objectContainer = new RemovableContainer({ key1: 'value1', key2: 'value2' });
objectContainer.removeItem('key1');
console.log(objectContainer.value); // Output: { key2: 'value2' }
```

### Things to Consider

- **Type Safety**: Ensure that the key you are trying to remove exists in the object. TypeScript will enforce this at compile time.
- **Mutability**: Removing an item from an object will mutate the original object. If immutability is required, consider creating a new object without the item.
- **Optional Properties**: If the object type has optional properties, ensure that your logic accounts for the possibility of `undefined` values.

By following these guidelines, you can safely remove items from objects in a generic class while maintaining type safety and code clarity.


## Memory Address Considerations

When deleting an item from an object in a generic class, it's important to understand how memory addresses are affected. In JavaScript and TypeScript, objects are reference types, meaning that variables hold references to the memory addresses where the objects are stored.

### Example

Consider the following example:

```typescript
class RemovableContainer<T extends object> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }

    removeItem<K extends keyof T>(key: K): void {
        delete this._value[key];
    }
}

const originalObject = { key1: 'value1', key2: 'value2' };
const objectContainer = new RemovableContainer(originalObject);
objectContainer.removeItem('key1');
console.log(objectContainer.value); // Output: { key2: 'value2' }
console.log(originalObject); // Output: { key2: 'value2' }
```

### Key Points

- **Reference Types**: The `originalObject` and the `_value` property of `RemovableContainer` point to the same memory address. Therefore, changes to `_value` will affect `originalObject`.
- **Mutability**: Deleting an item from the object will mutate the original object. If you need to avoid mutating the original object, consider creating a shallow copy before making changes.
- **Garbage Collection**: Once an item is deleted, the memory previously occupied by that item becomes eligible for garbage collection, provided there are no other references to it.

### Creating a Shallow Copy

To avoid mutating the original object, you can create a shallow copy:

```typescript
class SafeRemovableContainer<T extends object> {
    private _value: T;

    constructor(value: T) {
        this._value = { ...value };
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }

    removeItem<K extends keyof T>(key: K): void {
        delete this._value[key];
    }
}

const originalObject = { key1: 'value1', key2: 'value2' };
const safeObjectContainer = new SafeRemovableContainer(originalObject);
safeObjectContainer.removeItem('key1');
console.log(safeObjectContainer.value); // Output: { key2: 'value2' }
console.log(originalObject); // Output: { key1: 'value1', key2: 'value2' }
```

By creating a shallow copy, you ensure that the original object remains unchanged when items are removed from the container.

Understanding these memory address considerations will help you manage object mutations effectively in generic classes.
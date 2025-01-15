# Static Methods and Properties in TypeScript

In TypeScript, static methods and properties belong to the class itself rather than to instances of the class. This means you can access them without creating an instance of the class.

## Static Properties

Static properties are defined using the `static` keyword. Here's an example:

```typescript
class MyClass {
    static myStaticProperty: string = "Hello, World!";
}

console.log(MyClass.myStaticProperty); // Output: Hello, World!
```

## Static Methods

Static methods are also defined using the `static` keyword. They can be called on the class itself:

```typescript
class MyClass {
    static myStaticMethod(): void {
        console.log("This is a static method.");
    }
}

MyClass.myStaticMethod(); // Output: This is a static method.
```

## Example: Static Properties and Methods

Here's a complete example demonstrating both static properties and methods:

```typescript
class Calculator {
    static PI: number = 3.14;

    static calculateCircumference(radius: number): number {
        return 2 * Calculator.PI * radius;
    }
}

console.log(Calculator.PI); // Output: 3.14
console.log(Calculator.calculateCircumference(10)); // Output: 62.8
```

In this example, `PI` is a static property, and `calculateCircumference` is a static method. Both are accessed directly on the `Calculator` class.

## Summary

- Static properties and methods are defined using the `static` keyword.
- They belong to the class itself, not to instances of the class.
- They can be accessed directly on the class without creating an instance.

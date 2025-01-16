# Abstract Classes in TypeScript

In TypeScript, abstract classes are used to define common behaviors that can be shared by multiple subclasses. An abstract class cannot be instantiated directly and must be inherited by other classes.

## Syntax

```typescript
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Bark
dog.move(); // Output: Moving...
```

## Key Points

- Abstract classes cannot be instantiated.
- They can contain both abstract methods (without implementation) and concrete methods (with implementation).
- Subclasses inheriting an abstract class must implement all abstract methods.

## Example

Here is an example of an abstract class and its subclass:

```typescript
abstract class Shape {
    abstract area(): number;

    describe(): void {
        console.log("This is a shape.");
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
circle.describe(); // Output: This is a shape.
```

In this example, `Shape` is an abstract class with an abstract method `area` and a concrete method `describe`. The `Circle` class extends `Shape` and provides an implementation for the `area` method.
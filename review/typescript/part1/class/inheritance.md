# Inheritance in TypeScript

Inheritance is a fundamental concept in object-oriented programming. It allows a class to inherit properties and methods from another class. In TypeScript, you can achieve inheritance using the `extends` keyword.

## Basic Example

Here's a simple example to demonstrate inheritance in TypeScript:

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog('Rex');
dog.bark(); // Output: Woof! Woof!
dog.move(10); // Output: Rex moved 10 meters.
```

In this example:
- The `Animal` class has a property `name` and a method `move`.
- The `Dog` class extends `Animal` and adds a new method `bark`.

## Method Overriding

A subclass can override a method from its superclass. Here's an example:

```typescript
class Bird extends Animal {
    move(distance: number = 0) {
        console.log(`${this.name} flew ${distance} meters.`);
    }
}

const bird = new Bird('Parrot');
bird.move(20); // Output: Parrot flew 20 meters.
```

In this example, the `Bird` class overrides the `move` method of the `Animal` class.

## Using `super`

You can use the `super` keyword to call the constructor or methods of the superclass. Here's an example:

```typescript
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 45) {
        console.log('Galloping...');
        super.move(distance);
    }
}

const horse = new Horse('Spirit');
horse.move(); // Output: Galloping... Spirit moved 45 meters.
```

In this example, the `Horse` class calls the constructor and the `move` method of the `Animal` class using `super`.

## Conclusion

Inheritance in TypeScript allows you to create a hierarchy of classes that share common functionality. This helps in code reusability and organization.

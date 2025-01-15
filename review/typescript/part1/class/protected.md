# Protected Members in TypeScript

In TypeScript, the `protected` keyword is used to define class members that are accessible within the class itself and by instances of derived classes. This is useful for allowing subclasses to access and modify certain properties or methods while keeping them hidden from the outside world.

## Example

```typescript
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public bark(): void {
        console.log('Woof! Woof!');
    }

    public walk(distance: number): void {
        this.move(distance);
    }
}

const dog = new Dog('Buddy');
dog.bark(); // Woof! Woof!
dog.walk(10); // Buddy moved 10 meters.
// dog.move(10); // Error: Property 'move' is protected and only accessible within class 'Animal' and its subclasses.
```

## Key Points

- `protected` members can be accessed within the class and by instances of derived classes.
- They cannot be accessed from outside the class hierarchy.
- This helps in encapsulating the internal details of a class while allowing controlled access to subclasses.

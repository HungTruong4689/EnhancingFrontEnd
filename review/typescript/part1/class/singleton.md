# Singleton and Private Constructor in TypeScript

## Singleton Pattern

The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.

## Implementation

In TypeScript, you can implement a Singleton pattern using a private constructor and a static method to control the instance creation.

```typescript
class Singleton {
    private static instance: Singleton;

    // Private constructor to prevent direct instantiation
    private constructor() {}

    // Static method to control the access to the Singleton instance
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // Example method
    public someMethod(): void {
        console.log("Singleton method called");
    }
}

// Usage
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true
singleton1.someMethod(); // Singleton method called
```

## Explanation

1. **Private Constructor**: The constructor is marked as private to prevent direct instantiation of the class.
2. **Static Instance**: A static property `instance` holds the single instance of the class.
3. **Static Method**: The `getInstance` method checks if an instance already exists. If not, it creates one and returns it. This ensures that only one instance of the class is created.

By using this pattern, you can ensure that a class has only one instance and provide a global point of access to it.

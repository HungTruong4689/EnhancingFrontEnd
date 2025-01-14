# Class and Interface in TypeScript

## Classes

In TypeScript, a class is a blueprint for creating objects with specific properties and methods. Here's an example of a simple class:

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('John', 30);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
```

## Interfaces

An interface in TypeScript is used to define the structure of an object. It can be used to enforce a specific shape for objects. Here's an example:

```typescript
interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: 'Jane',
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is Jane and I am 25 years old.
```

## Implementing Interfaces in Classes

Classes can implement interfaces to ensure they adhere to a specific structure. Here's an example:

```typescript
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog('Buddy');
dog.makeSound(); // Output: Woof! Woof!
```

In this example, the `Dog` class implements the `Animal` interface, ensuring that it has a `name` property and a `makeSound` method.

## Conclusion

Classes and interfaces are powerful features in TypeScript that help you create well-structured and type-safe code. Classes provide a blueprint for creating objects, while interfaces define the structure that objects must adhere to.
# Private and Public in TypeScript Classes

In TypeScript, you can control the visibility of class members using access modifiers. The two most common access modifiers are `private` and `public`.

## Public Members

By default, all members of a class in TypeScript are public. This means they can be accessed from anywhere.

```typescript
class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

const dog = new Animal('Dog');
console.log(dog.name); // Accessible
dog.move(10); // Accessible
```

## Private Members

When a member is marked as `private`, it cannot be accessed from outside the class. This is useful for encapsulation and hiding implementation details.

```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

const cat = new Animal('Cat');
console.log(cat.name); // Error: Property 'name' is private and only accessible within class 'Animal'.
cat.move(10); // Accessible
```

## Example with Both Public and Private Members

```typescript
class Person {
    private ssn: string;
    public name: string;

    constructor(ssn: string, name: string) {
        this.ssn = ssn;
        this.name = name;
    }

    public getDetails(): string {
        return `Name: ${this.name}, SSN: ${this.ssn}`;
    }
}

const person = new Person('123-45-6789', 'John Doe');
console.log(person.name); // Accessible
console.log(person.getDetails()); // Accessible
console.log(person.ssn); // Error: Property 'ssn' is private and only accessible within class 'Person'.
```

By using `private` and `public` access modifiers, you can control the visibility and encapsulation of your class members in TypeScript.
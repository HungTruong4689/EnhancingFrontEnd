# Getter and Setter in TypeScript

In TypeScript, getters and setters are used to access and modify the properties of a class. They provide a way to control the access to the properties and add additional logic when getting or setting a value.

## Example

Here is an example of a class with a getter and setter:

```typescript
class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // Getter
    get name(): string {
        return this._name;
    }

    // Setter
    set name(newName: string) {
        if (newName && newName.length > 0) {
            this._name = newName;
        } else {
            throw new Error('Name must be a non-empty string.');
        }
    }
}

const person = new Person('John');
console.log(person.name); // Output: John

person.name = 'Jane';
console.log(person.name); // Output: Jane

// This will throw an error
// person.name = '';
```

## Explanation

- The `_name` property is private, meaning it cannot be accessed directly from outside the class.
- The `get name()` method is a getter that returns the value of the `_name` property.
- The `set name(newName: string)` method is a setter that allows you to set the value of the `_name` property. It includes a check to ensure the new name is a non-empty string.

Using getters and setters helps encapsulate the internal representation of the class and provides a controlled way to access and modify the properties.

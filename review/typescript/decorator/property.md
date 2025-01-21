# Property Decorator in TypeScript

Property decorators are used to annotate and modify properties within a class. They are declared just before a property declaration.

## Syntax

```typescript
function PropertyDecorator(target: Object, propertyKey: string | symbol): void {
    // decorator logic
}
```

## Example

Here's an example of a property decorator that logs the property name and value whenever it is set:

```typescript
function LogProperty(target: any, key: string) {
    let value = target[key];

    const getter = () => {
        return value;
    };

    const setter = (newVal) => {
        console.log(`Setting value for ${key}: ${newVal}`);
        value = newVal;
    };

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class Example {
    @LogProperty
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const example = new Example('TypeScript');
example.name = 'JavaScript';
```

In this example, the `LogProperty` decorator logs the property name and value whenever the `name` property is set.

## Conclusion

Property decorators in TypeScript provide a powerful way to add metadata and modify the behavior of class properties. They can be used for logging, validation, and more.

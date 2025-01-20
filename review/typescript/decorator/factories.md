# Factories Decorator in TypeScript

Decorators in TypeScript provide a way to add both meta-programming and syntactic sugar to your code. A decorator factory is a higher-order function that returns a decorator. This allows you to pass parameters to your decorators.

## Creating a Decorator Factory

Here is an example of a simple decorator factory:

```typescript
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

@Logger('LOGGING - PERSON')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const person = new Person();
console.log(person);
```

In this example:
- `Logger` is a decorator factory that takes a `logString` parameter.
- The factory returns a decorator function that logs the `logString` and the constructor of the class it decorates.

## Using Decorator Factories

Decorator factories are useful when you need to customize the behavior of your decorators. For example, you might want to log different messages for different classes or methods.

### Example: Method Decorator Factory

```typescript
function LogMethod(logString: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`${logString} - Calling ${propertyName} with arguments:`, args);
            return method.apply(this, args);
        };
    };
}

class Calculator {
    @LogMethod('DEBUG')
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3));
```

In this example:
- `LogMethod` is a decorator factory for methods.
- It logs a custom message and the arguments whenever the decorated method is called.

## Conclusion

Decorator factories in TypeScript provide a powerful way to create reusable and configurable decorators. They enable you to add custom behavior to your classes and methods in a clean and maintainable way.

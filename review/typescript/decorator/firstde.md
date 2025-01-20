# First Decorator Example in TypeScript

Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime with information about the decorated declaration.

## Example

Here's a simple example of a class decorator in TypeScript:

```typescript
function simpleDecorator(constructor: Function) {
    console.log("SimpleDecorator called.");
}

@simpleDecorator
class MyClass {
    constructor() {
        console.log("MyClass instance created.");
    }
}

const myClassInstance = new MyClass();
```

In this example:
- `simpleDecorator` is a decorator function that takes the constructor of the class it decorates.
- `@simpleDecorator` applies the decorator to `MyClass`.
- When `MyClass` is defined, the decorator logs "SimpleDecorator called." to the console.
- When an instance of `MyClass` is created, it logs "MyClass instance created." to the console.

## Running the Example

To run this example, you need to have TypeScript installed. You can compile the TypeScript file using the following command:

```sh
tsc firstde.ts
```

Then, run the compiled JavaScript file:

```sh
node firstde.js
```

You should see the following output:

```
SimpleDecorator called.
MyClass instance created.
```

This demonstrates the basic usage of a class decorator in TypeScript.
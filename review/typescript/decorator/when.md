# When to Use Decorators in TypeScript

Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. They are used to modify the behavior of the target they are attached to. Here are some scenarios where decorators can be particularly useful:

1. **Logging**: Automatically log method calls, parameters, and return values.
2. **Validation**: Validate data before it is processed by a method.
3. **Authorization**: Check user permissions before executing a method.
4. **Caching**: Cache the results of expensive function calls.
5. **Dependency Injection**: Automatically inject dependencies into a class.

## Example

Here is a simple example of a method decorator that logs the execution time of a method:

```typescript
function logExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`${propertyKey} executed in ${end - start}ms`);
        return result;
    };

    return descriptor;
}

class Example {
    @logExecutionTime
    compute() {
        // Some expensive computation
    }
}
```

In this example, the `logExecutionTime` decorator logs how long the `compute` method takes to execute.

## Conclusion

Decorators in TypeScript provide a powerful way to add behavior to your code in a declarative manner. They can help you write cleaner and more maintainable code by separating concerns and reducing boilerplate.
# Multiple Decorators in TypeScript

In TypeScript, you can apply multiple decorators to a single declaration. Decorators are applied in the order they are declared, but they are evaluated in reverse order.

## Example

Here is an example of how to use multiple decorators:

```typescript
function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}

function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called");
    };
}

class ExampleClass {
    @first()
    @second()
    method() {
        console.log("method called");
    }
}

const example = new ExampleClass();
example.method();
```

## Output

When you run the above code, the output will be:

```
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
method called
```

## Explanation

1. The `first` and `second` decorator factories are evaluated in the order they are declared.
2. The decorators themselves are applied in reverse order.

This means that `second` is applied before `first`, even though `first` is declared before `second`.

## Conclusion

Using multiple decorators in TypeScript allows you to layer functionality on top of your classes and methods in a clean and readable way. Just remember that the order of evaluation and application is important to understand how your decorators will behave.

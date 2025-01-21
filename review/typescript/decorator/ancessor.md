# Accessor and Parameter Decorators in TypeScript

## Accessor Decorators

Accessor decorators are used to observe, modify, or replace an accessor's definition. They are applied to the accessor's property descriptor and can be used to manipulate the accessor's behavior.

### Example

```typescript
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Example {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    @enumerable(false)
    get name(): string {
        return this._name;
    }
}
```

In this example, the `enumerable` decorator is applied to the `name` accessor, making it non-enumerable.

## Parameter Decorators

Parameter decorators are used to observe, modify, or replace a method's parameters. They are applied to the parameters of a method and can be used to inject metadata or modify the parameter's behavior.

### Example

```typescript
function logParameter(target: any, propertyKey: string, parameterIndex: number) {
    const metadataKey = `__log_${propertyKey}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(parameterIndex);
    } else {
        target[metadataKey] = [parameterIndex];
    }
}

class Example {
    greet(@logParameter message: string): void {
        console.log(message);
    }
}
```

In this example, the `logParameter` decorator is applied to the `message` parameter of the `greet` method, allowing us to log or manipulate the parameter.

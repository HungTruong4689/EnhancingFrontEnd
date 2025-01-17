# Type Guards in TypeScript

Type guards are a way to narrow down the type of a variable within a conditional block. They help TypeScript understand the type of a variable, allowing for more precise type checking and better code completion.

## Built-in Type Guards

### `typeof`

The `typeof` operator can be used to check the type of a variable. It works well with primitive types like `string`, `number`, `boolean`, etc.

```typescript
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}
```

### `instanceof`

The `instanceof` operator can be used to check if an object is an instance of a particular class.

```typescript
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}
```

## User-defined Type Guards

You can create custom type guard functions to help TypeScript infer types.

### Using `is` keyword

A type guard function returns a boolean and uses the `is` keyword to specify the type.

```typescript
interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}
```

## `in` Operator

The `in` operator can be used to check if a property exists in an object.

```typescript
interface Car {
    drive: () => void;
}

interface Boat {
    sail: () => void;
}

function operate(vehicle: Car | Boat) {
    if ("drive" in vehicle) {
        vehicle.drive();
    } else {
        vehicle.sail();
    }
}
```

Type guards are a powerful feature in TypeScript that help ensure your code is type-safe and reduce the likelihood of runtime errors.

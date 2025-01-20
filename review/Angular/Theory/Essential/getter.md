# Using Getters in Angular

In Angular, getters can be used to encapsulate and protect access to component properties. They allow you to compute or retrieve values dynamically when they are accessed.

## Example

Here's an example of how to use getters in an Angular component:

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
        <div>
            <p>{{ fullName }}</p>
        </div>
    `
})
export class ExampleComponent {
    firstName: string = 'John';
    lastName: string = 'Doe';

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

In this example, the `fullName` getter concatenates the `firstName` and `lastName` properties. When `fullName` is accessed in the template, the getter is called, and the full name is displayed.

## Benefits of Using Getters

- **Encapsulation**: Getters allow you to control access to component properties.
- **Computed Properties**: You can compute values dynamically based on other properties.
- **Readability**: Getters can make your code more readable by providing meaningful property names.

## Conclusion

Using getters in Angular components can help you manage and encapsulate your component's state more effectively. They provide a clean and readable way to compute and retrieve values dynamically.

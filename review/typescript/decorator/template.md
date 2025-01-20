# DOM Decorator in TypeScript

A decorator is a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature in TypeScript.

Below is an example of a decorator that works on the DOM:

```typescript
// Import necessary types
import 'reflect-metadata';

// Define the decorator
function DomInjector(selector: string) {
    return function (target: any, propertyKey: string) {
        let element: HTMLElement;

        const getter = function () {
            if (!element) {
                element = document.querySelector(selector) as HTMLElement;
                console.log(`Fetching DOM element with selector: ${selector}`);
            }
            return element;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            enumerable: true,
            configurable: true,
        });
    };
}

// Usage example
class MyComponent {
    @DomInjector('#my-element')
    private myElement!: HTMLElement;

    showElement() {
        if (this.myElement) {
            this.myElement.style.display = 'block';
        }
    }
}

// Assuming there is an element with id 'my-element' in the DOM
const component = new MyComponent();
component.showElement();
```

In this example:
- The `DomInjector` decorator takes a CSS selector as an argument.
- It defines a getter for the property it decorates, which lazily fetches the DOM element when accessed.
- The `MyComponent` class uses this decorator to inject a DOM element into the `myElement` property.

This approach helps in keeping the DOM manipulation logic clean and separated from the business logic.

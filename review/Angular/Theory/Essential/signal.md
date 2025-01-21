# Signals in Angular

Signals are a new feature in Angular that allow you to manage state in a reactive way. They provide a way to create reactive variables that automatically update when their dependencies change.

## Creating a Signal

To create a signal, you can use the `createSignal` function:

```typescript
import { createSignal } from '@angular/core';

const [count, setCount] = createSignal(0);
```

## Using a Signal

You can use the signal in your component template by binding it to an element:

```html
<div>{{ count() }}</div>
<button (click)="setCount(count() + 1)">Increment</button>
```

## Signal Features

- **Reactivity**: Signals automatically update when their dependencies change.
- **Simplicity**: Signals provide a simple API for managing state.
- **Performance**: Signals are optimized for performance and reduce the need for manual change detection.

## Example

Here is a complete example of using signals in an Angular component:

```typescript
import { Component } from '@angular/core';
import { createSignal } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <div>{{ count() }}</div>
        <button (click)="increment()">Increment</button>
    `
})
export class CounterComponent {
    [count, setCount] = createSignal(0);

    increment() {
        setCount(count() + 1);
    }
}
```

In this example, the `CounterComponent` uses a signal to manage the count state and updates the view automatically when the count changes.

## Conclusion

Signals in Angular provide a powerful and efficient way to manage state reactively. They simplify state management and improve performance by reducing the need for manual change detection.

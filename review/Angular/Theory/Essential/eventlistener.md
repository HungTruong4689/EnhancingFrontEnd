# Listening to Events with Event Listener in Angular

In Angular, you can listen to events using event binding. Event binding allows you to listen to events such as clicks, key presses, and mouse movements.

## Syntax

The syntax for event binding is as follows:

```html
<button (eventName)="eventHandler()">Click me</button>
```

- `eventName`: The name of the event you want to listen to (e.g., `click`, `mouseover`, `keyup`).
- `eventHandler()`: The method in your component that will be called when the event occurs.

## Example

Here is an example of how to use event binding in an Angular component:

### HTML Template

```html
<!-- app.component.html -->
<button (click)="onClick()">Click me</button>
```

### Component Class

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    onClick() {
        console.log('Button clicked!');
    }
}
```

In this example, when the button is clicked, the `onClick` method in the `AppComponent` class is called, and a message is logged to the console.

## Passing Event Data

You can also pass event data to the event handler method. To do this, use the `$event` object:

### HTML Template

```html
<!-- app.component.html -->
<input (keyup)="onKeyUp($event)" placeholder="Type something">
```

### Component Class

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    onKeyUp(event: KeyboardEvent) {
        console.log('Key pressed:', event.key);
    }
}
```

In this example, when a key is pressed in the input field, the `onKeyUp` method is called, and the key pressed is logged to the console.

## Conclusion

Event binding in Angular is a powerful feature that allows you to handle user interactions in your application. By using event binding, you can create dynamic and interactive user interfaces.

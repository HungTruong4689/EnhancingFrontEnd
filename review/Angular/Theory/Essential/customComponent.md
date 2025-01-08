# Custom Component in Angular

## Introduction
In Angular, a component is a fundamental building block of the application. It controls a part of the user interface and consists of HTML, CSS, and TypeScript code.

## Creating a Custom Component
To create a custom component in Angular, follow these steps:

1. **Generate the Component**:
    Use the Angular CLI to generate a new component.
    ```bash
    ng generate component custom-component
    ```

2. **Define the Component**:
    Open the generated files and define the component logic in the TypeScript file (`custom-component.component.ts`).

3. **Template and Styles**:
    Add the HTML template and CSS styles in the respective files (`custom-component.component.html` and `custom-component.component.css`).

4. **Use the Component**:
    Include the custom component in your application by adding its selector in the desired template.
    ```html
    <app-custom-component></app-custom-component>
    ```

## Example
Here is an example of a simple custom component:

### TypeScript (custom-component.component.ts)
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponent {
  title = 'My Custom Component';
}
```

### HTML (custom-component.component.html)
```html
<div>
  <h1>{{ title }}</h1>
  <p>This is a custom component in Angular.</p>
</div>
```

### CSS (custom-component.component.css)
```css
h1 {
  color: blue;
}
```

## Conclusion
Creating custom components in Angular allows you to build reusable and modular pieces of UI, making your application more maintainable and scalable.
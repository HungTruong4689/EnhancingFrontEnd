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

## Standalone Components

In Angular, you can also create standalone components that are not part of any Angular module. This can be useful for creating reusable components that can be easily shared across different projects.

### Creating a Standalone Component

To create a standalone component, follow these steps:

1. **Generate the Component**:
    Use the Angular CLI to generate a new component with the `--standalone` flag.
    ```bash
    ng generate component standalone-component --standalone
    ```

2. **Define the Component**:
    Open the generated files and define the component logic in the TypeScript file (`standalone-component.component.ts`).

3. **Template and Styles**:
    Add the HTML template and CSS styles in the respective files (`standalone-component.component.html` and `standalone-component.component.css`).

4. **Use the Component**:
    Include the standalone component in your application by adding its selector in the desired template.
    ```html
    <app-standalone-component></app-standalone-component>
    ```

### Example

Here is an example of a simple standalone component:

#### TypeScript (standalone-component.component.ts)
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-component',
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.css'],
  standalone: true
})
export class StandaloneComponent {
  title = 'My Standalone Component';
}
```

#### HTML (standalone-component.component.html)
```html
<div>
  <h1>{{ title }}</h1>
  <p>This is a standalone component in Angular.</p>
</div>
```

#### CSS (standalone-component.component.css)
```css
h1 {
  color: green;
}
```

Standalone components provide a flexible way to create and share components without the need to include them in an Angular module.

## Using a New Component in an Angular Application

Once you have created a new component, you need to integrate it into your Angular application. Here are the steps to use a new component:

1. **Import the Component**:
    If the component is part of a module, ensure that the module is imported in your `AppModule` or the relevant feature module.
    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { CustomComponent } from './custom-component/custom-component.component';

    @NgModule({
      declarations: [
        AppComponent,
        CustomComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

2. **Add the Component Selector**:
    Use the component's selector in the template of the parent component where you want to display it.
    ```html
    <!-- app.component.html -->
    <div>
      <h1>Welcome to My Angular App</h1>
      <app-custom-component></app-custom-component>
    </div>
    ```

3. **Run the Application**:
    Start your Angular application to see the new component in action.
    ```bash
    ng serve
    ```

By following these steps, you can successfully integrate and use a new component in your Angular application.

## Creating a New Component Inside AppComponent

To create a new component called `NewComponent` and define it inside the `AppComponent`, follow these steps:

1. **Generate the New Component**:
    Use the Angular CLI to generate the new component.
    ```bash
    ng generate component new-component
    ```

2. **Define the New Component**:
    Open the generated files and define the component logic in the TypeScript file (`new-component.component.ts`).

3. **Template and Styles**:
    Add the HTML template and CSS styles in the respective files (`new-component.component.html` and `new-component.component.css`).

4. **Include the New Component in AppComponent**:
    Use the selector of the new component in the template of `AppComponent`.
    ```html
    <!-- app.component.html -->
    <div>
      <h1>Welcome to My Angular App</h1>
      <app-new-component></app-new-component>
    </div>
    ```

### Example

Here is an example of the `NewComponent`:

#### TypeScript (new-component.component.ts)
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponent {
  message = 'This is the New Component';
}
```

#### HTML (new-component.component.html)
```html
<div>
  <h2>{{ message }}</h2>
</div>
```

#### CSS (new-component.component.css)
```css
h2 {
  color: red;
}
```

By following these steps, you can create a new component and define it inside the `AppComponent`, making `AppComponent` the parent of `NewComponent`.

## Importing a Component in the Decorator of AppComponent

To import a component directly in the decorator of `AppComponent`, follow these steps:

1. **Generate the New Component**:
    Use the Angular CLI to generate the new component.
    ```bash
    ng generate component new-component
    ```

2. **Define the New Component**:
    Open the generated files and define the component logic in the TypeScript file (`new-component.component.ts`).

3. **Template and Styles**:
    Add the HTML template and CSS styles in the respective files (`new-component.component.html` and `new-component.component.css`).

4. **Import the New Component in AppComponent**:
    Import the new component directly in the decorator of `AppComponent`.
    ```typescript
    import { Component } from '@angular/core';
    import { NewComponent } from './new-component/new-component.component';

    @Component({
      selector: 'app-root',
      template: `
        <div>
          <h1>Welcome to My Angular App</h1>
          <app-new-component></app-new-component>
        </div>
      `,
      standalone: true,
      imports: [NewComponent]
    })
    export class AppComponent { }
    ```

By following these steps, you can import a new component directly in the decorator of `AppComponent`, making it a standalone component that includes `NewComponent`.

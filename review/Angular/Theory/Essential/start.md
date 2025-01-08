# Custom Component in Angular

To create a custom component in Angular, follow these steps:

1. **Generate a new component**:
    Use Angular CLI to generate a new component. Open your terminal and run:
    ```bash
    ng generate component component-name
    ```
    Replace `component-name` with the name of your component.

2. **Define the component**:
    Angular CLI will create four files for your component:
    - `component-name.component.ts`
    - `component-name.component.html`
    - `component-name.component.css` (or `.scss`)
    - `component-name.component.spec.ts`

    In the `.ts` file, you will define the component's logic and metadata:
    ```typescript
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-component-name',
      templateUrl: './component-name.component.html',
      styleUrls: ['./component-name.component.css']
    })
    export class ComponentNameComponent {
      // Component logic goes here
    }
    ```

3. **Use the component**:
    To use your custom component, include its selector in the template of another component:
    ```html
    <app-component-name></app-component-name>
    ```

4. **Add styles and template**:
    Customize the appearance and structure of your component by editing the `.html` and `.css` files.

5. **Register the component**:
    Ensure your component is declared in the `declarations` array of your Angular module (`app.module.ts`):
    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { ComponentNameComponent } from './component-name/component-name.component';

    @NgModule({
      declarations: [
         AppComponent,
         ComponentNameComponent
      ],
      imports: [
         BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

By following these steps, you can create and use custom components in your Angular application.
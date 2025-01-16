# Binding Data to a Component in Angular with String Interpolation

String interpolation in Angular allows you to embed expressions within your HTML template. This is useful for displaying dynamic data from your component.

## Example

1. **Create a Component**

First, create a new component using Angular CLI:

```bash
ng generate component example
```

2. **Define a Property in the Component Class**

Open the generated component file `example.component.ts` and define a property:

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class ExampleComponent {
    public message: string = 'Hello, Angular!';
}
```

3. **Use String Interpolation in the Template**

Open the template file `example.component.html` and use double curly braces `{{ }}` to bind the property:

```html
<p>{{ message }}</p>
```

4. **Include the Component in a Module**

Make sure the component is declared in a module, typically `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
    declarations: [
        AppComponent,
        ExampleComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

5. **Run the Application**

Run your Angular application to see the result:

```bash
ng serve
```

Navigate to `http://localhost:4200` to see the message displayed using string interpolation.

## Summary

String interpolation in Angular is a powerful feature that allows you to bind data from your component class to your HTML template easily. It helps in creating dynamic and interactive web applications.

# Property Binding & Outputting Computed Values in Angular

## Property Binding

Property binding in Angular is used to bind values to the properties of HTML elements. It allows you to dynamically update the properties of an element based on the component's data.

### Syntax

```html
<element [property]="expression"></element>
```

### Example

```html
<img [src]="imageUrl" alt="Image description">
```

In this example, the `src` attribute of the `img` element is bound to the `imageUrl` property of the component.

## Outputting Computed Values

You can also use property binding to output computed values. This is useful when you need to display values that are calculated based on the component's data.

### Example

```html
<p>{{ fullName }}</p>
```

In the component:

```typescript
export class AppComponent {
    firstName = 'John';
    lastName = 'Doe';

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

In this example, the `fullName` property is a computed value that concatenates the `firstName` and `lastName` properties.

## Conclusion

Property binding in Angular is a powerful feature that allows you to dynamically update the properties of HTML elements based on the component's data. It can also be used to output computed values, making your templates more dynamic and responsive to changes in the component's state.
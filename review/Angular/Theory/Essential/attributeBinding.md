# Attribute Binding in Angular

Attribute binding in Angular allows you to set the value of an attribute directly. This is useful when you need to bind values to attributes that are not standard HTML attributes or when you need to set attributes dynamically.

## Syntax

The syntax for attribute binding is:

```html
[attr.attribute-name]="expression"
```

Here, `attribute-name` is the name of the attribute you want to bind to, and `expression` is the value you want to assign to that attribute.

## Example

```html
<!-- In your component template -->
<button [attr.aria-label]="buttonLabel">Click me</button>
```

In the above example, the `aria-label` attribute of the button is bound to the `buttonLabel` property in the component.

## Use Cases

1. **Non-standard Attributes**: When you need to bind to attributes that are not standard HTML attributes.
2. **Dynamic Values**: When the value of the attribute needs to change dynamically based on component data.

## Important Points

- Attribute binding is different from property binding. Use attribute binding when you need to set the value of an attribute directly.
- If the attribute name contains a dash (`-`), you need to use the `attr.` prefix.

## Conclusion

Attribute binding is a powerful feature in Angular that allows you to set and update attributes dynamically. It is especially useful for non-standard attributes and when you need to bind dynamic values.

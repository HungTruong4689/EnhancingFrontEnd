# Void Function in TypeScript

In TypeScript, a function can be specified to return `void`, which means it does not return any value. This is useful for functions that perform actions but do not need to return a result.

## Example

Here is an example of a void function in TypeScript:

```typescript
function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello, TypeScript!");
```

In this example, the `logMessage` function takes a `message` parameter of type `string` and logs it to the console. The function does not return any value, so its return type is specified as `void`.

## Usage

Void functions are commonly used for:

- Logging messages
- Performing side effects
- Event handlers

By specifying the return type as `void`, you make it clear that the function is not intended to return a value.

## Conclusion

Using `void` as a return type in TypeScript helps to clearly define the purpose of a function and ensures that it does not accidentally return a value.

## What are Event Handlers?

Event handlers are functions that are designed to handle events, such as user interactions or other occurrences in a program. In TypeScript, event handlers are often specified with a `void` return type because they perform actions in response to events but do not need to return any value.

### Example

Here is an example of an event handler in TypeScript:

```typescript
document.getElementById("myButton")?.addEventListener("click", function handleClick(): void {
    console.log("Button was clicked!");
});
```

In this example, the `handleClick` function is an event handler that logs a message to the console when a button with the ID `myButton` is clicked. The function does not return any value, so its return type is specified as `void`.

Event handlers are essential for creating interactive web applications, as they allow you to respond to user actions such as clicks, key presses, and mouse movements.


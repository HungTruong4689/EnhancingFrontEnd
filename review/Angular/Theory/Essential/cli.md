# Creating a New Component with Angular CLI

To create a new component in an Angular project using the Angular CLI, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your Angular project directory.
3. Run the following command:

    ```bash
    ng generate component component-name
    ```

    Replace `component-name` with the desired name of your component.

For example, to create a component named `my-new-component`, you would run:

```bash
ng generate component my-new-component
```

This command will generate the following files and update the necessary Angular module:

- `src/app/my-new-component/my-new-component.component.ts`
- `src/app/my-new-component/my-new-component.component.html`
- `src/app/my-new-component/my-new-component.component.css`
- `src/app/my-new-component/my-new-component.component.spec.ts`

Additionally, it will update the `AppModule` to declare the new component.

For more options and details, you can refer to the [Angular CLI documentation](https://angular.io/cli/generate#component).

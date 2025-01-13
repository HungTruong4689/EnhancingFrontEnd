# Watch Mode in TypeScript

TypeScript provides a watch mode that automatically recompiles your code when it detects changes. This can be very useful during development.

## Enabling Watch Mode

To enable watch mode, use the `--watch` flag with the `tsc` command:

```sh
tsc --watch
```

Alternatively, you can use the shorthand `-w`:

```sh
tsc -w
```

## Benefits of Watch Mode

- **Automatic Compilation**: Your TypeScript files are automatically recompiled when changes are detected.
- **Immediate Feedback**: You get immediate feedback on any compilation errors, helping you to catch issues early.
- **Improved Productivity**: Reduces the need to manually recompile your code, allowing you to focus on development.

## Example

Consider the following `tsconfig.json`:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true
    },
    "include": ["src/**/*"]
}
```

To start the watch mode with this configuration, simply run:

```sh
tsc -w
```

Now, any changes you make to the files in the `src` directory will trigger a recompilation, and the output will be placed in the `dist` directory.

## Conclusion

Watch mode is a powerful feature in TypeScript that can greatly enhance your development workflow by providing automatic recompilation and immediate feedback on errors.

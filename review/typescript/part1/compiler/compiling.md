# Compiling Multiple Files and Entire Project in TypeScript

## Compiling Multiple Files

To compile multiple TypeScript files at once, you can list the files you want to compile separated by spaces:

```sh
tsc file1.ts file2.ts file3.ts
```

This will generate corresponding JavaScript files for each TypeScript file.

## Compiling an Entire Project

To compile an entire TypeScript project, you should use a `tsconfig.json` file. This file allows you to specify the root files and the compiler options required to compile the project.

### Creating a `tsconfig.json`

You can create a `tsconfig.json` file by running:

```sh
tsc --init
```

This command will generate a `tsconfig.json` file with default settings. You can then customize this file according to your project's requirements.

### Example `tsconfig.json`

Here is an example of a `tsconfig.json` file:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Compiling the Project

Once you have your `tsconfig.json` file set up, you can compile the entire project by simply running:

```sh
tsc
```

This command will read the `tsconfig.json` file and compile all the TypeScript files specified in the `include` section.

## Conclusion

By using the TypeScript compiler (`tsc`), you can easily compile multiple files or an entire project. The `tsconfig.json` file provides a powerful way to manage your project's compilation settings.

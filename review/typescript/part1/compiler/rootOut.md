# rootDir and outDir in TypeScript

In TypeScript, `rootDir` and `outDir` are compiler options that help manage the structure of your project.

## rootDir

The `rootDir` option specifies the root directory of your input files. This is the directory where the TypeScript compiler will start looking for files to compile.

Example:
```json
{
    "compilerOptions": {
        "rootDir": "./src"
    }
}
```
In this example, the compiler will look for TypeScript files in the `src` directory.

## outDir

The `outDir` option specifies the output directory for the compiled JavaScript files. This is where the TypeScript compiler will place the compiled files.

Example:
```json
{
    "compilerOptions": {
        "outDir": "./dist"
    }
}
```
In this example, the compiled JavaScript files will be placed in the `dist` directory.

## Combined Example

Here is an example of a `tsconfig.json` file that uses both `rootDir` and `outDir`:
```json
{
    "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist"
    }
}
```
With this configuration, the TypeScript compiler will take files from the `src` directory and output the compiled JavaScript files to the `dist` directory.

## Benefits

- **Organization**: Keeps your source files and compiled files organized in separate directories.
- **Clarity**: Makes it clear where your source code lives and where the output should go.
- **Build Process**: Simplifies the build process by clearly defining input and output directories.

By using `rootDir` and `outDir`, you can maintain a clean and organized project structure, making it easier to manage and understand.
# Compile Target in TypeScript

TypeScript allows you to specify the target JavaScript version to which your TypeScript code should be compiled. This is done using the `target` option in the `tsconfig.json` file.

## Available Targets

Here are some of the possible values for the `target` option:

- `ES3` (default)
- `ES5`
- `ES6`/`ES2015`
- `ES2016`
- `ES2017`
- `ES2018`
- `ES2019`
- `ES2020`
- `ES2021`
- `ESNext`

## Example

To set the compile target to ES6, you can configure your `tsconfig.json` as follows:

```json
{
    "compilerOptions": {
        "target": "ES6"
    }
}
```

## Usage

Setting the compile target ensures that the generated JavaScript code is compatible with the specified version of ECMAScript. This is particularly useful for ensuring compatibility with different environments and browsers.

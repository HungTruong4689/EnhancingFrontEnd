# Including and Excluding Files in TypeScript

TypeScript allows you to include and exclude files using the `include` and `exclude` options in the `tsconfig.json` file.

## Including Files

To include specific files or directories, use the `include` option. This option takes an array of glob patterns relative to the `tsconfig.json` file.

```json
{
    "include": [
        "src/**/*",
        "tests/**/*"
    ]
}
```

## Excluding Files

To exclude specific files or directories, use the `exclude` option. This option also takes an array of glob patterns.

```json
{
    "exclude": [
        "node_modules",
        "dist",
        "**/*.spec.ts"
    ]
}
```

## Example `tsconfig.json`

Here is an example `tsconfig.json` that includes all files in the `src` and `tests` directories, but excludes the `node_modules` and `dist` directories, as well as any `.spec.ts` files:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs"
    },
    "include": [
        "src/**/*",
        "tests/**/*"
    ],
    "exclude": [
        "node_modules",
        "dist",
        "**/*.spec.ts"
    ]
}
```

By configuring the `include` and `exclude` options, you can control which files TypeScript compiles.
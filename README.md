# DCL dApps ESLint & Prettier Config

## Installation

```sh
npm install -D @dcl/eslint-config-dapps
```

## Usage

In `eslintrc.json`:

```js
{
  "extends": "@dcl/eslint-config-dapps",
  "parserOptions": {
    "project": ["tsconfig.json"]
  }
}
```

```js
{
  "extends": "@dcl/eslint-config-dapps",
  "parserOptions": {
    "project": ["tsconfig.json"]
  },
  "overrides": {
    "files": ['*.js'],
    "rules": {
      '@typescript-eslint/no-var-requires': 'off'
    }
  }
}
```

In `tsconfig.json`:

```js
{
  "extends": "@dcl/eslint-config-dapps",
}
```

In `prettier.config.js`:

```js
module.exports = {
  ...require('@dcl/eslint-config-dapps/prettier.config')
}
```

In `.prettierrc.json`:

```js
'@dcl/eslint-config-dapps/prettier.config'
```

## License

Apache 2.0

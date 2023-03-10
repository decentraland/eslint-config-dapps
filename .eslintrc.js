module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'default', format: ['camelCase'] },
      { selector: 'variableLike', format: ['camelCase'] },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
      { selector: 'variable', types: ['function'], format: ['PascalCase', 'camelCase'] },
      { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
      { selector: 'memberLike', format: ['camelCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'typeParameter', format: ['PascalCase'], prefix: ['T'] },
      { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
      { selector: 'objectLiteralProperty', format: ['camelCase', 'snake_case'] }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroupsExcludedImportTypes: ['react', 'react-*/**', 'react-*', '@dcl/**', 'decentraland-*/**', 'decentraland-*'],
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'before' },
          { pattern: 'react-*/**', group: 'builtin' },
          { pattern: 'react-*', group: 'builtin' },
          { pattern: '@dcl/**', group: 'external', position: 'after' },
          { pattern: 'decentraland-*/**', group: 'external', position: 'after' },
          { pattern: 'decentraland-*', group: 'external', position: 'after' },
          { pattern: 'lib/**', group: 'internal', position: 'before' },
          { pattern: 'modules/**', group: 'internal', position: 'before' },
          { pattern: 'components/**', group: 'internal', position: 'after' },
          { pattern: './*.types', group: 'sibling', position: 'after' },
          { pattern: './*.css', group: 'sibling', position: 'after' }
        ],
        distinctGroup: false,
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        warnOnUnassignedImports: true
      }
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off' // Turned off this rule for now, because method yield always returns `any`.
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src']
      }
    }
  }
}

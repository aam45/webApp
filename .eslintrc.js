const { join } = require('path');

module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        createDefaultProgram: false,
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'rxjs/no-ignored-observable': 'off',
    'sonarjs/cognitive-complexity': 'off',
    '@angular-eslint/template/no-negated-async': 'off',
  },
};

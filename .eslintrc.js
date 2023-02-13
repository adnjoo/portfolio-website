module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'max-len': ['error', { code: 90 }],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  }
};

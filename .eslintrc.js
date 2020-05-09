module.exports = {
  extends: 'eslint:recommended',
  plugins: ['jest'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
};

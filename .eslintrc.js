module.exports = {

  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'no-return-assign': 0,
    'no-prototype-builtins': 0,
    'consistent-return': 0,
    imports: {
      'prefer-default-exports': 0,
    },
  },

};

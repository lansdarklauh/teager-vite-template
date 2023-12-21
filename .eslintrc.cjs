/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': "off",
    'no-debugger': "off",
    'no-extra-semi': "warn",
    'no-undef': "error",
    'no-constant-condition': "warn",
    'no-unreachable': "warn",
    'no-unused-expressions': "warn",
    'no-else-return': "off",
    'no-extra-boolean-cast': "warn",
    'no-extra-parens': "warn",
    'no-extra-bind': "warn",
    'space-before-function-paren': "off"
  }
}

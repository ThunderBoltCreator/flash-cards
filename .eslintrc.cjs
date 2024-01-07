module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:storybook/recommended'],
  plugins: ['import'],
  rules: {
    'import/consistent-type-specifier-style': "warn",
    "import/no-duplicates":'warn',
    'no-duplicate-imports':'off',
  },
}
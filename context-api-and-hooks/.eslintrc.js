module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'default-case': 'off',
    'import/no-cycle': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'react/jsx-no-constructed-context-values': 'off',
  },
};

module.exports = {
  extends: [
    'airbnb',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    jest: true,
    browser: true
  },
  parser: 'babel-eslint',
  plugins: ['jest', 'promise', 'prettier', 'react', 'react-hooks'],
  rules: {
    'no-alert': 'error',
    'no-console': 'error',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '_'
      }
    ],
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false
      },
    ],
  }
}
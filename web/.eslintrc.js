const path = require('path')

module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}

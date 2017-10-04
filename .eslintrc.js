module.exports = {
  extends: 'airbnb',
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'semi': ['error', 'never'],
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
  }
}

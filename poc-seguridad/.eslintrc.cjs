module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:security/recommended-legacy',
    "react-app/jest",
    "react-app",
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaFeatures: {
    jsx: true,
  }, ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
    plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'import',
    'security',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': [
      'warn',
      { allow: ['warn', 'info'] },
    ]
  },
}


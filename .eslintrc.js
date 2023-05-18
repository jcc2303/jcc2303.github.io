module.exports = {
  // parserOptions: {
  //   ecmaVersion: 2019,
  //   sourceType: 'module',
  // },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
  },

  plugins: ['svelte3'],
  // overrides: [
  //   {
  //     files: ['*.svelte'],
  //     processor: 'svelte3/svelte3',
  //   },
  // ],
  // "extends": "eslint:recommended",
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
    },
  ],
  rules: {
    // ...
  },
  settings: {
    // ...
  },
}

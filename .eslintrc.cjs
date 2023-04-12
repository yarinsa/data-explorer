module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      `eslint:recommended`,
      `plugin:@typescript-eslint/recommended`,
      `@yarnpkg/eslint-config`,
    ],
    overrides: [
    ],
    parser: `@typescript-eslint/parser`,
    parserOptions: {
      ecmaVersion: `latest`,
      sourceType: `module`,
    },
    plugins: [
      `@typescript-eslint`,
    ],
    rules: {
      semi: [
        `error`,
        `always`,
      ],
      'no-tabs': [`error`, {allowIndentationTabs: true}],
      'no-mixed-spaces-and-tabs': [`error`, `smart-tabs`],
      '@typescript-eslint/naming-convention': [
        `error`,
        {
          selector: [
            `classProperty`,
            `objectLiteralProperty`,
            `typeProperty`,
            `classMethod`,
            `objectLiteralMethod`,
            `typeMethod`,
            `accessor`,
            `enumMember`,
          ],
          format: null,
          modifiers: [`requiresQuotes`],
        }],
    },
  };
  
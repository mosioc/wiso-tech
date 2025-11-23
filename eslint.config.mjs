import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'rulesdir/import-style-order': 'off',
      'rulesdir/no-styled-component-outside-styles': 'off',
      'rulesdir/test-should-match-component-name': 'off',
      'rulesdir/no-react-router-navigate': 'off',
      // note you must disable the base rule as it can report incorrect errors
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Recommended: possible errors
      'for-direction': 'warn',
      'no-async-promise-executor': 'warn',
      'no-compare-neg-zero': 'warn',
      'no-constant-condition': 'warn',
      'no-debugger': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-extra-semi': 'warn',
      'no-inner-declarations': 'warn',
      'no-irregular-whitespace': 'warn',
      'no-misleading-character-class': 'warn',
      'no-prototype-builtins': 'error',
      'no-unexpected-multiline': 'warn',
      'no-unsafe-finally': 'warn',
      'no-unsafe-negation': 'warn',
      'require-atomic-updates': 'warn',
      'no-dupe-args': 'warn',
      'no-empty': 'warn',

      // Recommended: best practices
      'no-case-declarations': 'warn',
      'no-global-assign': 'warn',
      'no-useless-catch': 'error',

      // Recommended: ES6
      'constructor-super': 'warn',
      'require-yield': 'warn',
      'no-class-assign': 'warn',
      'no-duplicate-imports': 'warn',

      // Airbnb overrides
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': [
        'error',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'no-param-reassign': ['error', { props: false }],
      'react/no-danger': 'off',

      //Disable them after fixing the errors
      camelcase: 'off',
      'no-array-constructor': 'off',
      'react/function-component-definition': 'off',
      'no-undef': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'no-unused-expressions': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'no-nested-ternary': 'off',
      'import/prefer-default-export': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/media-has-caption': 'off',
      'no-unsafe-optional-chaining': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/forbid-prop-types': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unescaped-entities': 'off',
      'consistent-return': 'off',
      'no-plusplus': 'off',
      'no-async-promise-executor': 'off',
      'no-await-in-loop': 'off',
      'prefer-promise-reject-errors': 'off',
      'no-lonely-if': 'off',
      'no-restricted-globals': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'no-prototype-builtins': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'default-case': 'off',
      'react/no-unused-prop-types': 'off',
      'react/no-unstable-nested-components': 'off',
      'func-names': 'off',
      'no-constant-condition': 'off',
      'no-empty': 'off',
      'react/button-has-type': 'off',
      'no-return-assign': 'off',
      'no-return-await': 'off',
      'no-new': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'new-cap': 'off',
      'no-case-declarations': 'off',
      'prefer-regex-literals': 'off',
      eqeqeq: 'off',
      'import/no-duplicates': 'off',
      'no-duplicate-imports': 'off',
      'import/order': 'off',
      'no-console': 'off',
      'react/default-props-match-prop-types': 'off',
      'require-atomic-updates': 'off',
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-tailwindcss'],
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
    },
  },

  // Production rules
  {
    languageOptions: {
      globals: {
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      // Security and production best practices
      'no-console': 'error',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',

      // Code quality
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: true,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // React/JSX rules (Next.js)
      'react/self-closing-comp': 'error',
      'react/jsx-key': 'error',
      'react/jsx-fragments': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js

      // Import/export rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Additional production rules
      'no-process-env': 'warn',
      'no-warning-comments': [
        'warn',
        { terms: ['todo', 'fixme', 'xxx'], location: 'anywhere' },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;

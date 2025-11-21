import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginNext from '@next/eslint-plugin-next';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // JavaScript core rules
  js.configs.recommended,
  
  // Next.js core config
  ...compat.extends('next/core-web-vitals'),

  // Next.js specific rules
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      // Next.js recommended rules
      '@next/next/google-font-display': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/inline-script-id': 'error',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-assign-module-variable': 'error',
      '@next/next/no-async-client-component': 'error',
      '@next/next/no-before-interactive-script-outside-document': 'error',
      '@next/next/no-css-tags': 'error',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/no-styled-jsx-in-document': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-title-in-document-head': 'error',
      '@next/next/no-unwanted-polyfill-io': 'error',
      '@next/next/no-head': 'off',
    },
  },

  // Prettier integration with Tailwind CSS plugin
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
            'index'
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
        { terms: ['todo', 'fixme', 'xxx'], location: 'anywhere' }
      ],
    },
  },

  // TypeScript-specific rules if using TS
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-const': 'error',
    },
  },
];
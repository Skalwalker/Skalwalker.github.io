import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    ignores: ['node_modules/', 'build/', 'public/', '*.config.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  prettier,
  {
    plugins: {
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      'import/no-default-export': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'prefer-arrow-callback': 'error',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        // Default: camelCase for everything not covered below
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        // Imports: no format enforced — names are defined by the package author
        {
          selector: 'import',
          format: null,
        },
        // Variables: also allow PascalCase (React components) and UPPER_CASE (constants)
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        // Functions: camelCase or PascalCase (React components)
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        // Parameters: camelCase, leading underscore allowed for intentionally unused params
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        // Types (classes, interfaces, type aliases, enums): PascalCase
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        // Enum members: PascalCase or UPPER_CASE
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE'],
        },
      ],
    },
  },
  {
    files: ['**/*.stories.ts', '**/*.stories.tsx', 'vite.config.ts', '.storybook/**/*'],
    rules: {
      'import/no-default-export': 'off',
    },
  }
);

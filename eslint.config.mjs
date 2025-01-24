import eslintReact from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import unusedImports from 'eslint-plugin-unused-imports'
import promise from 'eslint-plugin-promise'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import storybook from 'eslint-plugin-storybook'

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...storybook.configs['flat/recommended'],
  {
    ignores: [
      'node_modules',
      '**/dist',
      '**/eslint.config.mjs',
      '**/vite.config.ts',
      '**/vitest.config.mjs',
      '**/tailwind.config.ts',
      '**/postcss.config.mjs',
      '**/storybook-static',
      'lib/hybrid.ts',
      '.storybook',
      '.github/**/*.cjs'
    ]
  },
  {
    plugins: {
      react: eslintReact,
      'react-refresh': reactRefresh,
      'react-hooks': eslintReactHooks,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      '@typescript-eslint': tseslint.plugin,
      prettier: prettier,
      promise: promise,
      'jsx-a11y': jsxA11Y
    },
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022
      },
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json']
      },
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    settings: {
      'jsx-a11y': {
        polymorphicPropName: 'component'
      },
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...eslintReactHooks.configs.recommended.rules,
      ...eslintReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      'promise/prefer-await-to-then': 'error',
      'react/self-closing-comp': 'off',
      'react/jsx-closing-tag-location': 'off',
      'import/prefer-default-export': 'off',
      'react/function-component-definition': 'off',
      'arrow-body-style': 'off',
      'react/destructuring-assignment': 'off',
      'operator-linebreak': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'react/jsx-curly-newline': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/button-has-type': 'off',
      '@typescript-eslint/semi': 'off',
      'linebreak-style': 'off',
      'function-paren-newline': 'off',
      'object-curly-newline': 'off',
      'prefer-arrow-callback': 'off',
      'no-case-declarations': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      'import/no-default-export': 'error',
      'max-len': 'off',
      'jsx-quotes': [2, 'prefer-single'],
      'import/extensions': 'off',
      'consistent-return': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'implicit-arrow-linebreak': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/indent': 'off',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never'
        }
      ],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error']
        }
      ],
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true
        }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'inline-type-imports'
        }
      ],
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react', '^', '^\u0000', '^@/app', '^@/widgets', '^$/shared', '^../', '^./']]
        }
      ],
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true
        }
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          usePrettierrc: true
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike',
          format: ['PascalCase']
        }
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '$/hybrid',
              message: 'Импорт из $/hybrid запрещен.'
            },
            {
              name: 'dist',
              message: 'Импорт из $/dist запрещен.'
            }
          ],
          patterns: ['dist/*', 'hybrid/*', 'client/*']
        }
      ]
    }
  },
  {
    files: ['**/*.stories.@(ts|tsx)'],
    rules: {
      'import/no-default-export': 'off',
      'react-hooks/rules-of-hooks': 'off'
    }
  }
)

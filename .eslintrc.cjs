module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'vitest.config.mjs',
    'tailwind.config.ts',
    'postcss.config.mjs',
    'storybook-static'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react',
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort',
    'jsx-a11y',
    'unused-imports',
    'promise',
    'prettier'
  ],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'no-restricted-imports': ['error', { paths: [{ name: '$/hybrid', message: 'Импорт из $/hybrid запрещен.' }] }],
    'react/display-name': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'promise/prefer-await-to-then': 'error',
    'react/self-closing-comp': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
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
    'max-len': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'import/extensions': 'off',
    'consistent-return': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-no-useless-fragment': 'off',
    'import/no-default-export': 'error',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/indent': 'off',
    'operator-linebreak': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' }
    ],
    'unused-imports/no-unused-imports': 'error',
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
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ]
  },
  settings: {
    'jsx-a11y': {
      polymorphicPropName: 'component'
    }
  }
}

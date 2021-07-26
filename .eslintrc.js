module.exports = {
    root: true,
    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        JSX: true,
    },
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'import', 'prettier'],
    ignorePatterns: ['./typings', './next', './node_modules'],
    rules: {
        'react/display-name': 'off',
        'prettier/prettier': 'error',
        camelcase: 'error',
        'react/jsx-no-literals': 'error',
        'no-eval': 'error',
        'import/first': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'react/prop-types': 'off',
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error', 'info'],
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    ['internal', 'unknown'],
                    'parent',
                    ['sibling', 'index'],
                ],
                'newlines-between': 'always',
            },
        ],
    },
};

import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'], // Added tsx if needed
    },
    {
        ignores: ['node_modules/*', 'dist/*'],
    },
    {
        languageOptions: { globals: { ...globals.browser, ...globals.node } }, // Combine browser and node globals if required
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,
    {
        plugins: {
            prettier,
            import: await import('eslint-plugin-import'),
        },
        rules: {
            'prettier/prettier': 'error',
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
            'import/no-anonymous-default-export': 'off',
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external', 'internal']],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/newline-after-import': ['error', { count: 1 }],
        },
    },
];

module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    plugins: ['vue'],
    rules: {
        // Add custom rules if needed
    },
};

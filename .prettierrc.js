module.exports = {
    printWidth: 80, // https://github.com/airbnb/javascript#19.13
    tabWidth: 4,
    useTabs: false, // https://github.com/airbnb/javascript#19.1
    semi: true, // https://github.com/airbnb/javascript#21.1
    singleQuote: true, // https://github.com/airbnb/javascript#6.1
    quoteProps: 'as-needed', // https://github.com/airbnb/javascript#3.6
    jsxSingleQuote: false, // https://github.com/airbnb/javascript/tree/master/react#quotes
    trailingComma: 'all', // https://github.com/airbnb/javascript#20.2
    bracketSpacing: false, // https://github.com/airbnb/javascript#19.12
    jsxBracketSameLine: false, // https://github.com/airbnb/javascript/tree/master/react#alignment
    arrowParens: 'always', // https://github.com/airbnb/javascript#8.4
    overrides: [
        {
            files: 'LICENSE',
            options: { parser: 'markdown' },
        },
    ],
};

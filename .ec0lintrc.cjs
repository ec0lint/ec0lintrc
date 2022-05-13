"use strict";

module.exports = {
    root: true,
    extends: [
        "ec0lint"
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },

    overrides: [
        {
            files: ["tests/**/*"],
            env: {
                mocha: true, 
                es6: true,
                node: true,
                browser: true
            },
            rules: {
                "no-restricted-syntax": ["error", {
                    selector: "CallExpression[callee.object.name='assert'][callee.property.name='doesNotThrow']",
                    message: "`assert.doesNotThrow()` should be replaced with a comment next to the code."
                }],
            },
        }
    ]
};

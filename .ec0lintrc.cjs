"use strict";

module.exports = {
    root: true,
    extends: [
        "ec0lint"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },

    overrides: [
        {
            files: ["tests/**/*"],
            env: { mocha: true },
            rules: {
                "no-restricted-syntax": ["error", {
                    selector: "CallExpression[callee.object.name='assert'][callee.property.name='doesNotThrow']",
                    message: "`assert.doesNotThrow()` should be replaced with a comment next to the code."
                }],

                "node/no-unsupported-features/es-syntax": ["error", {
                    ignores: [
                        "modules",
                        "dynamicImport"
                    ]
                }]
            }
        }
    ]
};

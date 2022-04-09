export default [
    {
        input: "./lib/index.js",
        external: [
            "module", "util", "os", "path", "debug", "fs", "import-fresh",
            "strip-json-comments", "assert", "ignore", "minimatch", "url", "ajv",
            "globals"
        ],
        treeshake: false,
        output: {
            format: "cjs",
            file: "dist/ec0lintrc.cjs",
            sourcemap: true,
            freeze: false
        }
    },
    {
        input: "./lib/index-universal.js",
        external: [
            "module", "util", "os", "path", "debug", "fs", "import-fresh",
            "strip-json-comments", "assert", "ignore", "minimatch", "url", "ajv",
            "globals"
        ],
        treeshake: false,
        output: {
            format: "cjs",
            file: "dist/ec0lintrc-universal.cjs",
            sourcemap: true,
            freeze: false
        }
    }
];

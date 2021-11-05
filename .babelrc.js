module.exports = {
    "plugins": [
        "@babel/plugin-transform-runtime",
        "transform-class-properties"
    ],
    "presets": [
        "@babel/env",
        "@babel/react",
        "@babel/typescript"
    ],
    "ignore": [
        "./src/tests/**/*",
        "./src/stories/**/*",
        "./src/core/**/*.test.tsx"
    ]
}

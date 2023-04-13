module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-extra-parens": [
            "warn",
            "all",
            {
                "nestedBinaryExpressions": false,
                "returnAssign": false,
                "enforceForArrowConditionals": false,
                "ignoreJSX": "all"
            }
        ],
        "brace-style": ["error", "1tbs"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "indent": ["error", 4],
    }
};
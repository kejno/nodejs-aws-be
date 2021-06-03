module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "semi": [2, "always"]
    },
    "plugins": ["jest"]
};

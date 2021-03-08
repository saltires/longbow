module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    "extends": [
        "plugin:@typescript-eslint/recommended",
        // 用于关闭 ESLint 相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/index.js
        "prettier",
    ],
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off"
    }
};

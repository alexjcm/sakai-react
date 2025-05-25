module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "error"
  }
};
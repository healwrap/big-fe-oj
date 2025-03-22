module.exports = {
  root: true,
  extends: [require.resolve('@healwrap/fe-oj-lint')], // 因为 ESLint 在 monorepo 中无法找到配置文件，所以使用 require.resolve 来解析成绝对路径
  parserOptions: {
    createDefaultProgram: true,
  },
  rules: {
    'vue/no-mutating-props': 'warn',
    'vue/html-closing-bracket-newline': 'off',
    'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    '@typescript-eslint/no-invalid-this': 'off',
    'arrow-body-style': 'off',
  },
};

import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  javascript: true,
  markdown: true,
  json: true,
  yaml: true,
  rules: {
    // 允许使用console.log()
    'no-console': 'off',
    // Vue组件的风格
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    // 禁止在条件语句中赋值，相当于避免你if (a = 5)，必须得赋值的情况下，加括号 if ((a = b))
    'no-cond-assign': ['error', 'except-parens'],
    // Vue模板里面的组件统一用短横线命名法
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // 允许在必要的时候使用显示的 any 类型，但是仍然不建议，不要把TypeScript写成AnyScript啊
    '@typescript-eslint/no-explicit-any': 'off',
  },
})

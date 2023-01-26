module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  rules: {
    /* js部分 */
    'no-console': 1,
    'no-debugger': 1,
    'comma-dangle': 0, // 允许尾随逗号
    'no-caller': 2, // 禁止callee
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    'no-dupe-args': 2, // 函数参数不能重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-implicit-coercion': 1, // 禁止隐式转换
    'no-multiple-empty-lines': [1, { max: 3 }], // 空行最多不能超过2行
    'no-with': 2, // 禁用with
    'arrow-parens': 2, // 箭头函数用小括号括起来
    eqeqeq: 2, // 必须使用全等
    strict: 2, // 使用严格模式
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN
    'space-before-function-paren': 0, // 禁止函数小括号前的空格
    'no-var': 'error', // 禁用var
    indent: 0, // 不处理缩进，交给prettier

    /* vue部分 */
    'vue/array-bracket-spacing': 2, // 数组括号内保持间距，默认不加间距
    'vue/camelcase': 2, // 变量名必须使用驼峰
    'vue/comma-dangle': 2, // 不允许多余的逗号
    'vue/component-name-in-template-casing': [
      // 组件使用一律使用大驼峰
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/eqeqeq': 2, // 使用全等
    'vue/html-closing-bracket-newline': [
      // 右括号必须换行控制
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-end-tags': 2, // 禁止标签不完整
    'vue/html-self-closing': [
      // 空标签必须自闭合
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/key-spacing': 2, // 对象键值空格控制
    'vue/keyword-spacing': 2, // 关键字空格控制
    'vue/mustache-interpolation-spacing': ['error', 'always'], // 插值中间需要空格
    'vue/no-async-in-computed-properties': 2, // 计算属性禁止异步函数
    'vue/no-dupe-keys': [
      // 禁止重复的键名
      'error',
      {
        groups: [],
      },
    ],
    'vue/no-empty-pattern': 2, // 禁止解构赋值中出现空 {} 或 []
    'vue/no-multi-spaces': [
      // 禁止多个空格
      'error',
      {
        ignoreProperties: false,
      },
    ],
    'vue/no-reserved-keys': [
      // 禁止覆盖保留字段
      'error',
      {
        reserved: [],
        groups: [],
      },
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'], // 等于两边禁止空格
    'vue/no-template-shadow': 2, // 禁止v-for变量和上一级重名
    'vue/no-unused-components': [
      // 组件定义必须使用
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    'vue/no-unused-vars': 2, // 变量定义必须使用
    'vue/object-curly-spacing': 2, // 对象空格一致
    'vue/prop-name-casing': ['error', 'camelCase'], // prop属性采用小驼峰
    'vue/require-v-for-key': 2, // vfor必须有key属性
    'vue/require-valid-default-prop': 2, // prop默认值属性需要匹配
    'vue/return-in-computed-property': [
      // 计算属性必须有返回值
      'error',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    'vue/space-unary-ops': 2, // 一元运算符间距控制
    'vue/this-in-template': ['error', 'never'], // 模板中禁用this
    'vue/valid-v-else-if': 2, // v-else-if
    'vue/valid-v-else': 2, // v-else
    'vue/valid-v-for': 2, // v-for
    'vue/valid-v-html': 2, // v-html
    'vue/valid-v-if': 2, // v-if
    'vue/valid-v-text': 2, // v-text
    'vue/valid-v-model': 2, // v-model
    'vue/valid-v-cloak': 2, // v-cloak
    'vue/valid-v-slot': [
      // v-on
      'error',
      {
        allowModifiers: false,
      },
    ],
    'vue/valid-v-once': 2, // v-once
    'vue/valid-v-pre': 2, // v-pre
    'vue/valid-v-show': 2, // v-show

    'vue/no-parsing-error': [
      // 语法检查
      'error',
      {
        'abrupt-closing-of-empty-comment': true,
        'absence-of-digits-in-numeric-character-reference': true,
        'cdata-in-html-content': true,
        'character-reference-outside-unicode-range': true,
        'control-character-in-input-stream': true,
        'control-character-reference': true,
        'eof-before-tag-name': true,
        'eof-in-cdata': true,
        'eof-in-comment': true,
        'eof-in-tag': true,
        'incorrectly-closed-comment': true,
        'incorrectly-opened-comment': true,
        'invalid-first-character-of-tag-name': true,
        'missing-attribute-value': true,
        'missing-end-tag-name': true,
        'missing-semicolon-after-character-reference': true,
        'missing-whitespace-between-attributes': true,
        'nested-comment': true,
        'noncharacter-character-reference': true,
        'noncharacter-in-input-stream': true,
        'null-character-reference': true,
        'surrogate-character-reference': true,
        'surrogate-in-input-stream': true,
        'unexpected-character-in-attribute-name': true,
        'unexpected-character-in-unquoted-attribute-value': true,
        'unexpected-equals-sign-before-attribute-name': true,
        'unexpected-null-character': true,
        'unexpected-question-mark-instead-of-tag-name': true,
        'unexpected-solidus-in-tag': true,
        'unknown-named-character-reference': true,
        'end-tag-with-attributes': true,
        'duplicate-attribute': true,
        'end-tag-with-trailing-solidus': true,
        'non-void-html-element-start-tag-with-trailing-solidus': false,
        'x-invalid-end-tag': true,
        'x-invalid-namespace': true,
      },
    ],
  },
}

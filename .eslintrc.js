module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        'commonjs': true,
        'jquery':true
    },
    "extends": "eslint:recommended",
    "parserOptions": 
    {
        "ecmaVersion":6,
        "sourceType":"module",
        "ecmaFeatures":
        {
            "jsx":true,
            "experimentalObjectRestSpread":true,
            "modules":true
        }
    },

    // {
    //     "ecmaVersion": 2015,
    //     "ecmaVersion": 6 
    // },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            0,
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        // "semi": [
        //     "error",
        //     "never"
        // ],
        //箭头函数前后俩个空格
        "arrow-spacing": [
            2,
        {
          before: true,
          after: true
        }],
        'no-console': 'off',
        "no-unused-vars":2, //禁止出现未使用过的变量。
        // "no-use-before-define":2, //不允许在变量定义之前使用它们
        "no-multi-spaces":"error", //禁止使用多个空格
        "array-bracket-spacing": ["error", "never"],//指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格。
        "comma-dangle": ["error", "always-multiline"],// 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗,always-multiline：多行模式必须带逗号，单行模式不能带逗号号。
        "comma-spacing": ["error", { "before": false, "after": true }],//控制逗号前后的空格。
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],//该规则规定了在对象字面量语法中，key和value之间的空白，冒号前不要空格，冒号后面需要一个空格。
        "lines-around-comment": ["error", { "beforeBlockComment": true }],// 要求在注释周围有空行 ( 要求在块级注释之前有一空行)。
        // "no-undef-init": "error",// 禁止把undefined赋值给一个变量。
        // "keyword-spacing": "error" //keyword 前后需要空格。
        "operator-assignment": [0, "always"],//赋值运算符 += -=什么的
        "no-unreachable": 2, //不可能执行到的代码
        "space-in-parens": [0, "never"],//小括号里面要不要有空格
        "space-infix-ops": 2,//规定字符串拼接操作符 (Infix operators) 之间要留空格
    }
};
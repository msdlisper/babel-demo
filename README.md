# demo

## 相关链接

cli文档: https://babeljs.io/docs/en/babel-cli/


user handler book: https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md

plugin hander book: https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#toc-definitions

demo import plugin: https://juejin.im/post/6844903518222942222

语法树: https://astexplorer.net/

## 学习记录

### babel生成语法树的过程

- 解析
  - 词法分析
    - 把字符串转换成扁平的语法片段数组
  - 语法分析
    - 吧上面的数组转换成AST
- 转换
  - 通过上面的AST, 再进行增删改, 变成我们想要的样子, 这就是插件介入的地方
- 生成

### 访问者, visitor

就是查的过程, 我们要改某个地方, 先的查

### 路径对象Path

可以访问父级节点等, 也有一些增删改查的api

存在visitor的第一个参数
const t = require('@babel/types')

const visitor = {
  ImportDeclaration(path, _ref = {opts:{}}){
    // const specifiers = path.node.specifiers;
    const source = path.node.source;
    console.log(source.value);
    const value = source.value.replace(/@mand-mobile\/platform\/(?!web)/, '@mand-mobile/platform/web/')
    source.value = value
    /**
     * 不能使用replaceWithMultiple, 会造成死循环
     */
    // console.log(t.ImportDeclaration(specifiers, t.stringLiteral(value)));
    // path.replaceWithMultiple([
    //   t.ImportDeclaration(specifiers, t.stringLiteral(value))
    // ])
      // path.replaceWith(t.ImportDeclaration(                               //创建importImportDeclaration节点
      //   specifiers,
      //     t.StringLiteral(`${value}`)
      // ))
  }
}


module.exports = function() {
  return {visitor}
}
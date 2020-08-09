const t = require('@babel/types')

const visitor = {
  ImportDeclaration(path, _ref = {opts:{}}){
      const specifiers = path.node.specifiers;
      const source = path.node.source;
      if (!t.isImportDefaultSpecifier(specifiers[0]) ) {
          var declarations = specifiers.map((specifier, i) => {         //遍历  uniq extend flatten cloneDeep
              return t.ImportDeclaration(                               //创建importImportDeclaration节点
                  [t.importDefaultSpecifier(specifier.local)],
                  t.StringLiteral(`${source.value}/${specifier.local.name}`)
              )
          })
          path.replaceWithMultiple(declarations)

      }
  }
}


module.exports = function() {
  return {visitor}
}
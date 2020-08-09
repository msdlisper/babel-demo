const path = require('path')
const t = require('@babel/types')

function computedSameDirCssPosition(filePath) {
  const filePathParse = path.parse(filePath)
  return `./style/${filePathParse.name}.css`
}
const globalCssLiteral = '../global.css'

const visitor = {
  Program(path, state) {
    // const importLiteral = computedSameDirCssPosition(state.opts.filePath)
    const importLiteral = computedSameDirCssPosition('../')
    // 在这之前插入global.css
    path.unshiftContainer('body', t.ImportDeclaration([],t.StringLiteral(importLiteral)))
    path.unshiftContainer('body', t.ImportDeclaration([],t.StringLiteral(globalCssLiteral)))
  }
}

module.exports = function() {
  return {
    visitor
  }
}
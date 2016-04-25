module.exports = {
  literals: {
    'keyword.control': ['if', 'then', 'else', 'return'],
    'keyword.operator': ['=', '-', '!', '*', '+', '=='],
    'paren.lparen': ['(', '{', '['],
    'paren.rparen': [')', '}', ']'],
    'punctuation.operator': [',', ';', '.'],
    'storage.type': ['float', 'int', 'void'],
    'constant.language': ['true', 'false']
  },
  symbols: {
    'identifier': 'ID',
    'constant.numeric': 'INT',
    'comment': 'SL_COMMENT'
  }
};
var antlr4 = require('antlr4/index');
var ExprLexer = require.main.require('./parsers/expr/ExprLexer');
var ExprParser = require.main.require('./parsers/expr/ExprParser');

var input = "(0+0)\r\n";
var chars = new antlr4.InputStream(input);
var lexer = new ExprLexer.ExprLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new ExprParser.ExprParser(tokens);
parser.buildParseTrees = true;
var tree = parser.prog();

console.log(`parsed successful:\r\n${input}`);
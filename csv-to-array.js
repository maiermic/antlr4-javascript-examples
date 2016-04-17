const {
  FileStream,
  CommonTokenStream,
} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {CSVLexer} = require.main.require('./parsers/csv/CSVLexer');
const {CSVParser} = require.main.require('./parsers/csv/CSVParser');
const {Loader} = require.main.require('./lib/csv/Loader');

const inputFile = './example.csv';
const chars = new FileStream(inputFile);
const lexer = new CSVLexer(chars);
const tokens  = new CommonTokenStream(lexer);
const parser = new CSVParser(tokens);
parser.buildParseTrees = true;
const tree = parser.file();

const walker = new ParseTreeWalker();
const loader = new Loader();
walker.walk(loader, tree);

console.log(loader.rows);
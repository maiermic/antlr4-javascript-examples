// Generated from CSV.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0007#\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0006",
    "\u0005\u0015\n\u0005\r\u0005\u000e\u0005\u0016\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006\u001d\n\u0006\f\u0006\u000e\u0006",
    " \u000b\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\u0003\u0002\u0004\u0006",
    "\u0002\f\f\u000f\u000f$$..\u0003\u0002$$%\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0003\r\u0003\u0002\u0002\u0002\u0005\u000f\u0003\u0002\u0002",
    "\u0002\u0007\u0011\u0003\u0002\u0002\u0002\t\u0014\u0003\u0002\u0002",
    "\u0002\u000b\u0018\u0003\u0002\u0002\u0002\r\u000e\u0007.\u0002\u0002",
    "\u000e\u0004\u0003\u0002\u0002\u0002\u000f\u0010\u0007\u000f\u0002\u0002",
    "\u0010\u0006\u0003\u0002\u0002\u0002\u0011\u0012\u0007\f\u0002\u0002",
    "\u0012\b\u0003\u0002\u0002\u0002\u0013\u0015\n\u0002\u0002\u0002\u0014",
    "\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016",
    "\u0014\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017",
    "\n\u0003\u0002\u0002\u0002\u0018\u001e\u0007$\u0002\u0002\u0019\u001a",
    "\u0007$\u0002\u0002\u001a\u001d\u0007$\u0002\u0002\u001b\u001d\n\u0003",
    "\u0002\u0002\u001c\u0019\u0003\u0002\u0002\u0002\u001c\u001b\u0003\u0002",
    "\u0002\u0002\u001d \u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f!\u0003\u0002",
    "\u0002\u0002 \u001e\u0003\u0002\u0002\u0002!\"\u0007$\u0002\u0002\"",
    "\f\u0003\u0002\u0002\u0002\u0006\u0002\u0016\u001c\u001e\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CSVLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CSVLexer.prototype = Object.create(antlr4.Lexer.prototype);
CSVLexer.prototype.constructor = CSVLexer;

CSVLexer.EOF = antlr4.Token.EOF;
CSVLexer.T__0 = 1;
CSVLexer.T__1 = 2;
CSVLexer.T__2 = 3;
CSVLexer.TEXT = 4;
CSVLexer.STRING = 5;


CSVLexer.modeNames = [ "DEFAULT_MODE" ];

CSVLexer.literalNames = [ null, "','", "'\r'", "'\n'" ];

CSVLexer.symbolicNames = [ null, null, null, null, "TEXT", "STRING" ];

CSVLexer.ruleNames = [ "T__0", "T__1", "T__2", "TEXT", "STRING" ];

CSVLexer.grammarFileName = "CSV.g4";



exports.CSVLexer = CSVLexer;


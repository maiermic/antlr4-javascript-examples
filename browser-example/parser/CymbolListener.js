// Generated from browser-example/Cymbol.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CymbolParser.
function CymbolListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CymbolListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CymbolListener.prototype.constructor = CymbolListener;

// Enter a parse tree produced by CymbolParser#file.
CymbolListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#file.
CymbolListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#varDecl.
CymbolListener.prototype.enterVarDecl = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#varDecl.
CymbolListener.prototype.exitVarDecl = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#type.
CymbolListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#type.
CymbolListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#functionDecl.
CymbolListener.prototype.enterFunctionDecl = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#functionDecl.
CymbolListener.prototype.exitFunctionDecl = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#formalParameters.
CymbolListener.prototype.enterFormalParameters = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#formalParameters.
CymbolListener.prototype.exitFormalParameters = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#formalParameter.
CymbolListener.prototype.enterFormalParameter = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#formalParameter.
CymbolListener.prototype.exitFormalParameter = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#block.
CymbolListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#block.
CymbolListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#stat.
CymbolListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#stat.
CymbolListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#expr.
CymbolListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#expr.
CymbolListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by CymbolParser#exprList.
CymbolListener.prototype.enterExprList = function(ctx) {
};

// Exit a parse tree produced by CymbolParser#exprList.
CymbolListener.prototype.exitExprList = function(ctx) {
};



exports.CymbolListener = CymbolListener;
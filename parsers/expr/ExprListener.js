// Generated from Expr.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprParser.
function ExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprListener.prototype.constructor = ExprListener;

// Enter a parse tree produced by ExprParser#prog.
ExprListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by ExprParser#prog.
ExprListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by ExprParser#expr.
ExprListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#expr.
ExprListener.prototype.exitExpr = function(ctx) {
};



exports.ExprListener = ExprListener;
// Generated from CSV.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CSVParser.
function CSVListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CSVListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CSVListener.prototype.constructor = CSVListener;

// Enter a parse tree produced by CSVParser#file.
CSVListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by CSVParser#file.
CSVListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by CSVParser#hdr.
CSVListener.prototype.enterHdr = function(ctx) {
};

// Exit a parse tree produced by CSVParser#hdr.
CSVListener.prototype.exitHdr = function(ctx) {
};


// Enter a parse tree produced by CSVParser#row.
CSVListener.prototype.enterRow = function(ctx) {
};

// Exit a parse tree produced by CSVParser#row.
CSVListener.prototype.exitRow = function(ctx) {
};


// Enter a parse tree produced by CSVParser#text.
CSVListener.prototype.enterText = function(ctx) {
};

// Exit a parse tree produced by CSVParser#text.
CSVListener.prototype.exitText = function(ctx) {
};


// Enter a parse tree produced by CSVParser#string.
CSVListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by CSVParser#string.
CSVListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by CSVParser#empty.
CSVListener.prototype.enterEmpty = function(ctx) {
};

// Exit a parse tree produced by CSVParser#empty.
CSVListener.prototype.exitEmpty = function(ctx) {
};



exports.CSVListener = CSVListener;
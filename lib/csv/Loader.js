const antlr4 = require('antlr4/index');
const {CSVParser} = require.main.require('./parsers/csv/CSVParser');
const {CSVListener} = require.main.require('./parsers/csv/CSVListener');

function Loader() {
  CSVListener.call(this);
  /** Load a list of row maps that map field name to value */
  this.rows = [];
  /** List of column names */
  this.header = null;
  /** Build up a list of fields in current row */
  this.currentRowFieldValues = null;
	return this;
}

const EMPTY = "";

Loader.prototype = Object.create(CSVListener.prototype);
Loader.prototype.constructor = Loader;

Loader.prototype.exitHdr = function exitHdr(ctx) {
  this.header = this.currentRowFieldValues.slice();
};

Loader.prototype.enterRow = function enterRow(ctx) {
  this.currentRowFieldValues = [];
};

Loader.prototype.exitRow = function exitRow(ctx) {
  // If this is the header row, do nothing
  if (ctx.parentCtx instanceof CSVParser.HdrContext) return;
  // It's a data row
  var m = {};
  this.currentRowFieldValues.forEach((value, column) => {
    m[this.header[column]] = value;
  });
  this.rows.push(m);
};

Loader.prototype.exitString = function exitString(ctx) {
  this.currentRowFieldValues.push(ctx.STRING().getText());
};

Loader.prototype.exitText = function exitText(ctx) {
  this.currentRowFieldValues.push(ctx.TEXT().getText());
};

Loader.prototype.exitEmpty = function exitEmpty(ctx) {
  this.currentRowFieldValues.push(EMPTY);
};

exports.Loader = Loader;
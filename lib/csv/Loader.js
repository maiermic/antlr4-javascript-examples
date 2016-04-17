const antlr4 = require('antlr4/index');
const {CSVParser} = require.main.require('./parsers/csv/CSVParser');
const {CSVListener} = require('./../../parsers/csv/CSVListener');

const EMPTY = "";

class Loader extends CSVListener {
  constructor() {
    super();
    /** Load a list of row maps that map field name to value */
    this.rows = [];
    /** List of column names */
    this.header = null;
    /** Build up a list of fields in current row */
    this.currentRowFieldValues = null;
  }

  exitHdr(ctx) {
    this.header = this.currentRowFieldValues.slice();
  }

  enterRow(ctx) {
    this.currentRowFieldValues = [];
  }

  exitRow(ctx) {
    // If this is the header row, do nothing
    if (ctx.parentCtx instanceof CSVParser.HdrContext) return;
    // It's a data row
    var m = {};
    this.currentRowFieldValues.forEach((value, column) => {
      m[this.header[column]] = value;
    });
    this.rows.push(m);
  }

  exitString(ctx) {
    this.currentRowFieldValues.push(ctx.STRING().getText());
  }

  exitText(ctx) {
    this.currentRowFieldValues.push(ctx.TEXT().getText());
  }

  exitEmpty(ctx) {
    this.currentRowFieldValues.push(EMPTY);
  }
}

exports.Loader = Loader;
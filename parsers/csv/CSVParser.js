// Generated from CSV.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CSVListener = require('./CSVListener').CSVListener;
var grammarFileName = "CSV.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0007%\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0006\u0002\r\n\u0002",
    "\r\u0002\u000e\u0002\u000e\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004\u0016\n\u0004\f\u0004\u000e\u0004\u0019",
    "\u000b\u0004\u0003\u0004\u0005\u0004\u001c\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005#\n\u0005\u0003",
    "\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0002%\u0002\n\u0003",
    "\u0002\u0002\u0002\u0004\u0010\u0003\u0002\u0002\u0002\u0006\u0012\u0003",
    "\u0002\u0002\u0002\b\"\u0003\u0002\u0002\u0002\n\f\u0005\u0004\u0003",
    "\u0002\u000b\r\u0005\u0006\u0004\u0002\f\u000b\u0003\u0002\u0002\u0002",
    "\r\u000e\u0003\u0002\u0002\u0002\u000e\f\u0003\u0002\u0002\u0002\u000e",
    "\u000f\u0003\u0002\u0002\u0002\u000f\u0003\u0003\u0002\u0002\u0002\u0010",
    "\u0011\u0005\u0006\u0004\u0002\u0011\u0005\u0003\u0002\u0002\u0002\u0012",
    "\u0017\u0005\b\u0005\u0002\u0013\u0014\u0007\u0003\u0002\u0002\u0014",
    "\u0016\u0005\b\u0005\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0016",
    "\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019",
    "\u0017\u0003\u0002\u0002\u0002\u001a\u001c\u0007\u0004\u0002\u0002\u001b",
    "\u001a\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0005\u0002\u0002\u001e",
    "\u0007\u0003\u0002\u0002\u0002\u001f#\u0007\u0006\u0002\u0002 #\u0007",
    "\u0007\u0002\u0002!#\u0003\u0002\u0002\u0002\"\u001f\u0003\u0002\u0002",
    "\u0002\" \u0003\u0002\u0002\u0002\"!\u0003\u0002\u0002\u0002#\t\u0003",
    "\u0002\u0002\u0002\u0006\u000e\u0017\u001b\""].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'\r'", "'\n'" ];

var symbolicNames = [ null, null, null, null, "TEXT", "STRING" ];

var ruleNames =  [ "file", "hdr", "row", "field" ];

function CSVParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CSVParser.prototype = Object.create(antlr4.Parser.prototype);
CSVParser.prototype.constructor = CSVParser;

Object.defineProperty(CSVParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CSVParser.EOF = antlr4.Token.EOF;
CSVParser.T__0 = 1;
CSVParser.T__1 = 2;
CSVParser.T__2 = 3;
CSVParser.TEXT = 4;
CSVParser.STRING = 5;

CSVParser.RULE_file = 0;
CSVParser.RULE_hdr = 1;
CSVParser.RULE_row = 2;
CSVParser.RULE_field = 3;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CSVParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.hdr = function() {
    return this.getTypedRuleContext(HdrContext,0);
};

FileContext.prototype.row = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RowContext);
    } else {
        return this.getTypedRuleContext(RowContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.exitFile(this);
	}
};




CSVParser.FileContext = FileContext;

CSVParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CSVParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.hdr();
        this.state = 10; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 9;
            this.row();
            this.state = 12; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CSVParser.T__0) | (1 << CSVParser.T__1) | (1 << CSVParser.T__2) | (1 << CSVParser.TEXT) | (1 << CSVParser.STRING))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HdrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CSVParser.RULE_hdr;
    return this;
}

HdrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HdrContext.prototype.constructor = HdrContext;

HdrContext.prototype.row = function() {
    return this.getTypedRuleContext(RowContext,0);
};

HdrContext.prototype.enterRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.enterHdr(this);
	}
};

HdrContext.prototype.exitRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.exitHdr(this);
	}
};




CSVParser.HdrContext = HdrContext;

CSVParser.prototype.hdr = function() {

    var localctx = new HdrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CSVParser.RULE_hdr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.row();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CSVParser.RULE_row;
    return this;
}

RowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RowContext.prototype.constructor = RowContext;

RowContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

RowContext.prototype.enterRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.enterRow(this);
	}
};

RowContext.prototype.exitRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.exitRow(this);
	}
};




CSVParser.RowContext = RowContext;

CSVParser.prototype.row = function() {

    var localctx = new RowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CSVParser.RULE_row);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.field();
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CSVParser.T__0) {
            this.state = 17;
            this.match(CSVParser.T__0);
            this.state = 18;
            this.field();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 25;
        _la = this._input.LA(1);
        if(_la===CSVParser.T__1) {
            this.state = 24;
            this.match(CSVParser.T__1);
        }

        this.state = 27;
        this.match(CSVParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CSVParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;


 
FieldContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StringContext(parser, ctx) {
	FieldContext.call(this, parser);
    FieldContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringContext.prototype = Object.create(FieldContext.prototype);
StringContext.prototype.constructor = StringContext;

CSVParser.StringContext = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(CSVParser.STRING, 0);
};
StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.exitString(this);
	}
};


function TextContext(parser, ctx) {
	FieldContext.call(this, parser);
    FieldContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TextContext.prototype = Object.create(FieldContext.prototype);
TextContext.prototype.constructor = TextContext;

CSVParser.TextContext = TextContext;

TextContext.prototype.TEXT = function() {
    return this.getToken(CSVParser.TEXT, 0);
};
TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.exitText(this);
	}
};


function EmptyContext(parser, ctx) {
	FieldContext.call(this, parser);
    FieldContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyContext.prototype = Object.create(FieldContext.prototype);
EmptyContext.prototype.constructor = EmptyContext;

CSVParser.EmptyContext = EmptyContext;

EmptyContext.prototype.enterRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.enterEmpty(this);
	}
};

EmptyContext.prototype.exitRule = function(listener) {
    if(listener instanceof CSVListener ) {
        listener.exitEmpty(this);
	}
};



CSVParser.FieldContext = FieldContext;

CSVParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CSVParser.RULE_field);
    try {
        this.state = 32;
        switch(this._input.LA(1)) {
        case CSVParser.TEXT:
            localctx = new TextContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.match(CSVParser.TEXT);
            break;
        case CSVParser.STRING:
            localctx = new StringContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.match(CSVParser.STRING);
            break;
        case CSVParser.T__0:
        case CSVParser.T__1:
        case CSVParser.T__2:
            localctx = new EmptyContext(this, localctx);
            this.enterOuterAlt(localctx, 3);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.CSVParser = CSVParser;

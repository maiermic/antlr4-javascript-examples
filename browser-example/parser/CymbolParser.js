// Generated from browser-example/Cymbol.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CymbolListener = require('./CymbolListener').CymbolListener;
var grammarFileName = "Cymbol.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001b\u008b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0006\u0002\u0019\n\u0002\r\u0002\u000e\u0002\u001a\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003!\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005+\n\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u00063\n\u0006\f\u0006",
    "\u000e\u00066\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0007\b=\n\b\f\b\u000e\b@\u000b\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tL\n",
    "\t\u0003\t\u0003\t\u0005\tP\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t[\n\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\na\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\ns\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0007\n~\n\n\f\n\u000e\n\u0081\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0086\n\u000b\f\u000b\u000e",
    "\u000b\u0089\u000b\u000b\u0003\u000b\u0002\u0003\u0012\f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0004\u0003\u0002\u0005\u0007",
    "\u0004\u0002\u0013\u0013\u0016\u0016\u0098\u0002\u0018\u0003\u0002\u0002",
    "\u0002\u0004\u001c\u0003\u0002\u0002\u0002\u0006$\u0003\u0002\u0002",
    "\u0002\b&\u0003\u0002\u0002\u0002\n/\u0003\u0002\u0002\u0002\f7\u0003",
    "\u0002\u0002\u0002\u000e:\u0003\u0002\u0002\u0002\u0010Z\u0003\u0002",
    "\u0002\u0002\u0012r\u0003\u0002\u0002\u0002\u0014\u0082\u0003\u0002",
    "\u0002\u0002\u0016\u0019\u0005\b\u0005\u0002\u0017\u0019\u0005\u0004",
    "\u0003\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0017\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002",
    "\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0003\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0005\u0006\u0004\u0002\u001d \u0007\u0018",
    "\u0002\u0002\u001e\u001f\u0007\u0003\u0002\u0002\u001f!\u0005\u0012",
    "\n\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\"",
    "\u0003\u0002\u0002\u0002\"#\u0007\u0004\u0002\u0002#\u0005\u0003\u0002",
    "\u0002\u0002$%\t\u0002\u0002\u0002%\u0007\u0003\u0002\u0002\u0002&\'",
    "\u0005\u0006\u0004\u0002\'(\u0007\u0018\u0002\u0002(*\u0007\b\u0002",
    "\u0002)+\u0005\n\u0006\u0002*)\u0003\u0002\u0002\u0002*+\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0007\t\u0002\u0002-.\u0005",
    "\u000e\b\u0002.\t\u0003\u0002\u0002\u0002/4\u0005\f\u0007\u000201\u0007",
    "\n\u0002\u000213\u0005\f\u0007\u000220\u0003\u0002\u0002\u000236\u0003",
    "\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u0002",
    "5\u000b\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000278\u0005\u0006",
    "\u0004\u000289\u0007\u0018\u0002\u00029\r\u0003\u0002\u0002\u0002:>",
    "\u0007\u000b\u0002\u0002;=\u0005\u0010\t\u0002<;\u0003\u0002\u0002\u0002",
    "=@\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002",
    "\u0002?A\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002AB\u0007\f",
    "\u0002\u0002B\u000f\u0003\u0002\u0002\u0002C[\u0005\u000e\b\u0002D[",
    "\u0005\u0004\u0003\u0002EF\u0007\r\u0002\u0002FG\u0005\u0012\n\u0002",
    "GH\u0007\u000e\u0002\u0002HK\u0005\u0010\t\u0002IJ\u0007\u000f\u0002",
    "\u0002JL\u0005\u0010\t\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002",
    "\u0002\u0002L[\u0003\u0002\u0002\u0002MO\u0007\u0010\u0002\u0002NP\u0005",
    "\u0012\n\u0002ON\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002P",
    "Q\u0003\u0002\u0002\u0002Q[\u0007\u0004\u0002\u0002RS\u0005\u0012\n",
    "\u0002ST\u0007\u0003\u0002\u0002TU\u0005\u0012\n\u0002UV\u0007\u0004",
    "\u0002\u0002V[\u0003\u0002\u0002\u0002WX\u0005\u0012\n\u0002XY\u0007",
    "\u0004\u0002\u0002Y[\u0003\u0002\u0002\u0002ZC\u0003\u0002\u0002\u0002",
    "ZD\u0003\u0002\u0002\u0002ZE\u0003\u0002\u0002\u0002ZM\u0003\u0002\u0002",
    "\u0002ZR\u0003\u0002\u0002\u0002ZW\u0003\u0002\u0002\u0002[\u0011\u0003",
    "\u0002\u0002\u0002\\]\b\n\u0001\u0002]^\u0007\u0018\u0002\u0002^`\u0007",
    "\b\u0002\u0002_a\u0005\u0014\u000b\u0002`_\u0003\u0002\u0002\u0002`",
    "a\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bs\u0007\t\u0002",
    "\u0002cd\u0007\u0018\u0002\u0002de\u0007\u0011\u0002\u0002ef\u0005\u0012",
    "\n\u0002fg\u0007\u0012\u0002\u0002gs\u0003\u0002\u0002\u0002hi\u0007",
    "\u0013\u0002\u0002is\u0005\u0012\n\njk\u0007\u0014\u0002\u0002ks\u0005",
    "\u0012\n\tls\u0007\u0018\u0002\u0002ms\u0007\u0019\u0002\u0002no\u0007",
    "\b\u0002\u0002op\u0005\u0012\n\u0002pq\u0007\t\u0002\u0002qs\u0003\u0002",
    "\u0002\u0002r\\\u0003\u0002\u0002\u0002rc\u0003\u0002\u0002\u0002rh",
    "\u0003\u0002\u0002\u0002rj\u0003\u0002\u0002\u0002rl\u0003\u0002\u0002",
    "\u0002rm\u0003\u0002\u0002\u0002rn\u0003\u0002\u0002\u0002s\u007f\u0003",
    "\u0002\u0002\u0002tu\f\b\u0002\u0002uv\u0007\u0015\u0002\u0002v~\u0005",
    "\u0012\n\twx\f\u0007\u0002\u0002xy\t\u0003\u0002\u0002y~\u0005\u0012",
    "\n\bz{\f\u0006\u0002\u0002{|\u0007\u0017\u0002\u0002|~\u0005\u0012\n",
    "\u0007}t\u0003\u0002\u0002\u0002}w\u0003\u0002\u0002\u0002}z\u0003\u0002",
    "\u0002\u0002~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0013\u0003\u0002\u0002",
    "\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0082\u0087\u0005\u0012\n",
    "\u0002\u0083\u0084\u0007\n\u0002\u0002\u0084\u0086\u0005\u0012\n\u0002",
    "\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u0089\u0003\u0002\u0002\u0002",
    "\u0087\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002",
    "\u0088\u0015\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002",
    "\u0010\u0018\u001a *4>KOZ`r}\u007f\u0087"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "';'", "'float'", "'int'", "'void'", "'('", 
                     "')'", "','", "'{'", "'}'", "'if'", "'then'", "'else'", 
                     "'return'", "'['", "']'", "'-'", "'!'", "'*'", "'+'", 
                     "'=='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "ID", "INT", "WS", "SL_COMMENT" ];

var ruleNames =  [ "file", "varDecl", "type", "functionDecl", "formalParameters", 
                   "formalParameter", "block", "stat", "expr", "exprList" ];

function CymbolParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CymbolParser.prototype = Object.create(antlr4.Parser.prototype);
CymbolParser.prototype.constructor = CymbolParser;

Object.defineProperty(CymbolParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CymbolParser.EOF = antlr4.Token.EOF;
CymbolParser.T__0 = 1;
CymbolParser.T__1 = 2;
CymbolParser.T__2 = 3;
CymbolParser.T__3 = 4;
CymbolParser.T__4 = 5;
CymbolParser.T__5 = 6;
CymbolParser.T__6 = 7;
CymbolParser.T__7 = 8;
CymbolParser.T__8 = 9;
CymbolParser.T__9 = 10;
CymbolParser.T__10 = 11;
CymbolParser.T__11 = 12;
CymbolParser.T__12 = 13;
CymbolParser.T__13 = 14;
CymbolParser.T__14 = 15;
CymbolParser.T__15 = 16;
CymbolParser.T__16 = 17;
CymbolParser.T__17 = 18;
CymbolParser.T__18 = 19;
CymbolParser.T__19 = 20;
CymbolParser.T__20 = 21;
CymbolParser.ID = 22;
CymbolParser.INT = 23;
CymbolParser.WS = 24;
CymbolParser.SL_COMMENT = 25;

CymbolParser.RULE_file = 0;
CymbolParser.RULE_varDecl = 1;
CymbolParser.RULE_type = 2;
CymbolParser.RULE_functionDecl = 3;
CymbolParser.RULE_formalParameters = 4;
CymbolParser.RULE_formalParameter = 5;
CymbolParser.RULE_block = 6;
CymbolParser.RULE_stat = 7;
CymbolParser.RULE_expr = 8;
CymbolParser.RULE_exprList = 9;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.functionDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclContext,i);
    }
};

FileContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitFile(this);
	}
};




CymbolParser.FileContext = FileContext;

CymbolParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CymbolParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 22;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 20;
                this.functionDecl();
                break;

            case 2:
                this.state = 21;
                this.varDecl();
                break;

            }
            this.state = 24; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CymbolParser.T__2) | (1 << CymbolParser.T__3) | (1 << CymbolParser.T__4))) !== 0));
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

function VarDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_varDecl;
    return this;
}

VarDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclContext.prototype.constructor = VarDeclContext;

VarDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VarDeclContext.prototype.ID = function() {
    return this.getToken(CymbolParser.ID, 0);
};

VarDeclContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

VarDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterVarDecl(this);
	}
};

VarDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitVarDecl(this);
	}
};




CymbolParser.VarDeclContext = VarDeclContext;

CymbolParser.prototype.varDecl = function() {

    var localctx = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CymbolParser.RULE_varDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.type();
        this.state = 27;
        this.match(CymbolParser.ID);
        this.state = 30;
        _la = this._input.LA(1);
        if(_la===CymbolParser.T__0) {
            this.state = 28;
            this.match(CymbolParser.T__0);
            this.state = 29;
            this.expr(0);
        }

        this.state = 32;
        this.match(CymbolParser.T__1);
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

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitType(this);
	}
};




CymbolParser.TypeContext = TypeContext;

CymbolParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CymbolParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CymbolParser.T__2) | (1 << CymbolParser.T__3) | (1 << CymbolParser.T__4))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

function FunctionDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_functionDecl;
    return this;
}

FunctionDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclContext.prototype.constructor = FunctionDeclContext;

FunctionDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionDeclContext.prototype.ID = function() {
    return this.getToken(CymbolParser.ID, 0);
};

FunctionDeclContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionDeclContext.prototype.formalParameters = function() {
    return this.getTypedRuleContext(FormalParametersContext,0);
};

FunctionDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterFunctionDecl(this);
	}
};

FunctionDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitFunctionDecl(this);
	}
};




CymbolParser.FunctionDeclContext = FunctionDeclContext;

CymbolParser.prototype.functionDecl = function() {

    var localctx = new FunctionDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CymbolParser.RULE_functionDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.type();
        this.state = 37;
        this.match(CymbolParser.ID);
        this.state = 38;
        this.match(CymbolParser.T__5);
        this.state = 40;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CymbolParser.T__2) | (1 << CymbolParser.T__3) | (1 << CymbolParser.T__4))) !== 0)) {
            this.state = 39;
            this.formalParameters();
        }

        this.state = 42;
        this.match(CymbolParser.T__6);
        this.state = 43;
        this.block();
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

function FormalParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_formalParameters;
    return this;
}

FormalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParametersContext.prototype.constructor = FormalParametersContext;

FormalParametersContext.prototype.formalParameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParameterContext);
    } else {
        return this.getTypedRuleContext(FormalParameterContext,i);
    }
};

FormalParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterFormalParameters(this);
	}
};

FormalParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitFormalParameters(this);
	}
};




CymbolParser.FormalParametersContext = FormalParametersContext;

CymbolParser.prototype.formalParameters = function() {

    var localctx = new FormalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CymbolParser.RULE_formalParameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.formalParameter();
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CymbolParser.T__7) {
            this.state = 46;
            this.match(CymbolParser.T__7);
            this.state = 47;
            this.formalParameter();
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function FormalParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_formalParameter;
    return this;
}

FormalParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterContext.prototype.constructor = FormalParameterContext;

FormalParameterContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FormalParameterContext.prototype.ID = function() {
    return this.getToken(CymbolParser.ID, 0);
};

FormalParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterFormalParameter(this);
	}
};

FormalParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitFormalParameter(this);
	}
};




CymbolParser.FormalParameterContext = FormalParameterContext;

CymbolParser.prototype.formalParameter = function() {

    var localctx = new FormalParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CymbolParser.RULE_formalParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.type();
        this.state = 54;
        this.match(CymbolParser.ID);
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

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitBlock(this);
	}
};




CymbolParser.BlockContext = BlockContext;

CymbolParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CymbolParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(CymbolParser.T__8);
        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CymbolParser.T__2) | (1 << CymbolParser.T__3) | (1 << CymbolParser.T__4) | (1 << CymbolParser.T__5) | (1 << CymbolParser.T__8) | (1 << CymbolParser.T__10) | (1 << CymbolParser.T__13) | (1 << CymbolParser.T__16) | (1 << CymbolParser.T__17) | (1 << CymbolParser.ID) | (1 << CymbolParser.INT))) !== 0)) {
            this.state = 57;
            this.stat();
            this.state = 62;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 63;
        this.match(CymbolParser.T__9);
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

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatContext.prototype.varDecl = function() {
    return this.getTypedRuleContext(VarDeclContext,0);
};

StatContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

StatContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitStat(this);
	}
};




CymbolParser.StatContext = StatContext;

CymbolParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CymbolParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 88;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.varDecl();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.match(CymbolParser.T__10);
            this.state = 68;
            this.expr(0);
            this.state = 69;
            this.match(CymbolParser.T__11);
            this.state = 70;
            this.stat();
            this.state = 73;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 71;
                this.match(CymbolParser.T__12);
                this.state = 72;
                this.stat();

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 75;
            this.match(CymbolParser.T__13);
            this.state = 77;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CymbolParser.T__5) | (1 << CymbolParser.T__16) | (1 << CymbolParser.T__17) | (1 << CymbolParser.ID) | (1 << CymbolParser.INT))) !== 0)) {
                this.state = 76;
                this.expr(0);
            }

            this.state = 79;
            this.match(CymbolParser.T__1);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 80;
            this.expr(0);
            this.state = 81;
            this.match(CymbolParser.T__0);
            this.state = 82;
            this.expr(0);
            this.state = 83;
            this.match(CymbolParser.T__1);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 85;
            this.expr(0);
            this.state = 86;
            this.match(CymbolParser.T__1);
            break;

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

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.ID = function() {
    return this.getToken(CymbolParser.ID, 0);
};

ExprContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.INT = function() {
    return this.getToken(CymbolParser.INT, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitExpr(this);
	}
};



CymbolParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, CymbolParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.state = 91;
            this.match(CymbolParser.ID);
            this.state = 92;
            this.match(CymbolParser.T__5);
            this.state = 94;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CymbolParser.T__5) | (1 << CymbolParser.T__16) | (1 << CymbolParser.T__17) | (1 << CymbolParser.ID) | (1 << CymbolParser.INT))) !== 0)) {
                this.state = 93;
                this.exprList();
            }

            this.state = 96;
            this.match(CymbolParser.T__6);
            break;

        case 2:
            this.state = 97;
            this.match(CymbolParser.ID);
            this.state = 98;
            this.match(CymbolParser.T__14);
            this.state = 99;
            this.expr(0);
            this.state = 100;
            this.match(CymbolParser.T__15);
            break;

        case 3:
            this.state = 102;
            this.match(CymbolParser.T__16);
            this.state = 103;
            this.expr(8);
            break;

        case 4:
            this.state = 104;
            this.match(CymbolParser.T__17);
            this.state = 105;
            this.expr(7);
            break;

        case 5:
            this.state = 106;
            this.match(CymbolParser.ID);
            break;

        case 6:
            this.state = 107;
            this.match(CymbolParser.INT);
            break;

        case 7:
            this.state = 108;
            this.match(CymbolParser.T__5);
            this.state = 109;
            this.expr(0);
            this.state = 110;
            this.match(CymbolParser.T__6);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 125;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 123;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CymbolParser.RULE_expr);
                    this.state = 114;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 115;
                    this.match(CymbolParser.T__18);
                    this.state = 116;
                    this.expr(7);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CymbolParser.RULE_expr);
                    this.state = 117;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 118;
                    _la = this._input.LA(1);
                    if(!(_la===CymbolParser.T__16 || _la===CymbolParser.T__19)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 119;
                    this.expr(6);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CymbolParser.RULE_expr);
                    this.state = 120;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 121;
                    this.match(CymbolParser.T__20);
                    this.state = 122;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 127;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExprListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CymbolParser.RULE_exprList;
    return this;
}

ExprListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprListContext.prototype.constructor = ExprListContext;

ExprListContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprListContext.prototype.enterRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.enterExprList(this);
	}
};

ExprListContext.prototype.exitRule = function(listener) {
    if(listener instanceof CymbolListener ) {
        listener.exitExprList(this);
	}
};




CymbolParser.ExprListContext = ExprListContext;

CymbolParser.prototype.exprList = function() {

    var localctx = new ExprListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CymbolParser.RULE_exprList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.expr(0);
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CymbolParser.T__7) {
            this.state = 129;
            this.match(CymbolParser.T__7);
            this.state = 130;
            this.expr(0);
            this.state = 135;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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


CymbolParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CymbolParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CymbolParser = CymbolParser;

// Generated from ./grammar/MiLenguaje.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,6,30,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,
1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,25,0,10,1,0,0,0,2,20,1,0,0,0,4,22,1,
0,0,0,6,25,1,0,0,0,8,27,1,0,0,0,10,11,5,3,0,0,11,15,3,6,3,0,12,14,3,2,1,
0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,
17,15,1,0,0,0,18,19,3,8,4,0,19,1,1,0,0,0,20,21,3,4,2,0,21,3,1,0,0,0,22,23,
5,4,0,0,23,24,5,5,0,0,24,5,1,0,0,0,25,26,5,1,0,0,26,7,1,0,0,0,27,28,5,2,
0,0,28,9,1,0,0,0,1,15];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'{'", "'}'", "'pasteles'", "'vainilla'" ];
    static symbolicNames = [ null, null, null, "PASTELES", "INT", "BOWL", 
                             "NL" ];
    static ruleNames = [ "start", "molde", "declaraciones", "llavecitaa", 
                         "llavecitab" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_start);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(MiLenguajeParser.PASTELES);
	        this.state = 11;
	        this.llavecitaa();
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 12;
	            this.molde();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.llavecitab();
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
	}



	molde() {
	    let localctx = new MoldeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiLenguajeParser.RULE_molde);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.declaraciones();
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
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_declaraciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(MiLenguajeParser.INT);
	        this.state = 23;
	        this.match(MiLenguajeParser.BOWL);
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
	}



	llavecitaa() {
	    let localctx = new LlavecitaaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_llavecitaa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(MiLenguajeParser.T__0);
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
	}



	llavecitab() {
	    let localctx = new LlavecitabContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiLenguajeParser.RULE_llavecitab);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(MiLenguajeParser.T__1);
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
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.PASTELES = 3;
MiLenguajeParser.INT = 4;
MiLenguajeParser.BOWL = 5;
MiLenguajeParser.NL = 6;

MiLenguajeParser.RULE_start = 0;
MiLenguajeParser.RULE_molde = 1;
MiLenguajeParser.RULE_declaraciones = 2;
MiLenguajeParser.RULE_llavecitaa = 3;
MiLenguajeParser.RULE_llavecitab = 4;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_start;
    }

	PASTELES() {
	    return this.getToken(MiLenguajeParser.PASTELES, 0);
	};

	llavecitaa() {
	    return this.getTypedRuleContext(LlavecitaaContext,0);
	};

	llavecitab() {
	    return this.getTypedRuleContext(LlavecitabContext,0);
	};

	molde = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MoldeContext);
	    } else {
	        return this.getTypedRuleContext(MoldeContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MoldeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_molde;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitMolde(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_declaraciones;
    }

	INT() {
	    return this.getToken(MiLenguajeParser.INT, 0);
	};

	BOWL() {
	    return this.getToken(MiLenguajeParser.BOWL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LlavecitaaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_llavecitaa;
    }


	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitLlavecitaa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LlavecitabContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_llavecitab;
    }


	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitLlavecitab(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiLenguajeParser.StartContext = StartContext; 
MiLenguajeParser.MoldeContext = MoldeContext; 
MiLenguajeParser.DeclaracionesContext = DeclaracionesContext; 
MiLenguajeParser.LlavecitaaContext = LlavecitaaContext; 
MiLenguajeParser.LlavecitabContext = LlavecitabContext; 

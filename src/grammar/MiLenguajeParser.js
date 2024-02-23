// Generated from ./grammar/MiLenguaje.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,10,28,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
1,0,1,0,1,0,1,0,1,1,5,1,16,8,1,10,1,12,1,19,9,1,1,2,1,2,1,2,1,2,1,2,1,3,
1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,1,3,24,0,8,1,0,0,0,2,17,1,0,0,0,4,20,1,0,0,
0,6,25,1,0,0,0,8,9,5,4,0,0,9,10,5,7,0,0,10,11,5,9,0,0,11,12,3,2,1,0,12,13,
5,8,0,0,13,1,1,0,0,0,14,16,3,4,2,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,
0,0,17,18,1,0,0,0,18,3,1,0,0,0,19,17,1,0,0,0,20,21,3,6,3,0,21,22,5,6,0,0,
22,23,5,5,0,0,23,24,5,9,0,0,24,5,1,0,0,0,25,26,7,0,0,0,26,7,1,0,0,0,1,17];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'vainilla'", "'cherry'", "'fresa'", "'pasteles'", 
                            "';'", null, "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, "PASTELES", "SEMI", 
                             "BOWL", "LLAVECITAA", "LLAVECITAB", "NL", "SP" ];
    static ruleNames = [ "start", "molde", "declaraciones", "type" ];

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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.match(MiLenguajeParser.PASTELES);
	        this.state = 9;
	        this.match(MiLenguajeParser.LLAVECITAA);
	        this.state = 10;
	        this.match(MiLenguajeParser.NL);
	        this.state = 11;
	        this.molde();
	        this.state = 12;
	        this.match(MiLenguajeParser.LLAVECITAB);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 14;
	            this.declaraciones();
	            this.state = 19;
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
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_declaraciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.type();
	        this.state = 21;
	        this.match(MiLenguajeParser.BOWL);
	        this.state = 22;
	        this.match(MiLenguajeParser.SEMI);
	        this.state = 23;
	        this.match(MiLenguajeParser.NL);
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
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
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.T__2 = 3;
MiLenguajeParser.PASTELES = 4;
MiLenguajeParser.SEMI = 5;
MiLenguajeParser.BOWL = 6;
MiLenguajeParser.LLAVECITAA = 7;
MiLenguajeParser.LLAVECITAB = 8;
MiLenguajeParser.NL = 9;
MiLenguajeParser.SP = 10;

MiLenguajeParser.RULE_start = 0;
MiLenguajeParser.RULE_molde = 1;
MiLenguajeParser.RULE_declaraciones = 2;
MiLenguajeParser.RULE_type = 3;

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

	LLAVECITAA() {
	    return this.getToken(MiLenguajeParser.LLAVECITAA, 0);
	};

	NL() {
	    return this.getToken(MiLenguajeParser.NL, 0);
	};

	molde() {
	    return this.getTypedRuleContext(MoldeContext,0);
	};

	LLAVECITAB() {
	    return this.getToken(MiLenguajeParser.LLAVECITAB, 0);
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

	declaraciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionesContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionesContext,i);
	    }
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

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	BOWL() {
	    return this.getToken(MiLenguajeParser.BOWL, 0);
	};

	SEMI() {
	    return this.getToken(MiLenguajeParser.SEMI, 0);
	};

	NL() {
	    return this.getToken(MiLenguajeParser.NL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_type;
    }


	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiLenguajeParser.StartContext = StartContext; 
MiLenguajeParser.MoldeContext = MoldeContext; 
MiLenguajeParser.DeclaracionesContext = DeclaracionesContext; 
MiLenguajeParser.TypeContext = TypeContext; 

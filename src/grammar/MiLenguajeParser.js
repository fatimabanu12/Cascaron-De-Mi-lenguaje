// Generated from ./grammar/MiLenguaje.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,19,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,5,1,19,8,1,10,1,12,1,22,9,1,3,1,24,8,1,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,3,2,50,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
61,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,71,8,4,10,4,12,4,74,9,4,1,4,0,
1,8,5,0,2,4,6,8,0,4,2,0,13,13,15,15,1,0,2,4,1,0,10,11,1,0,8,9,80,0,10,1,
0,0,0,2,23,1,0,0,0,4,49,1,0,0,0,6,51,1,0,0,0,8,60,1,0,0,0,10,11,5,7,0,0,
11,12,5,16,0,0,12,13,5,18,0,0,13,14,3,2,1,0,14,15,5,17,0,0,15,1,1,0,0,0,
16,24,3,8,4,0,17,19,3,4,2,0,18,17,1,0,0,0,19,22,1,0,0,0,20,18,1,0,0,0,20,
21,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,23,16,1,0,0,0,23,20,1,0,0,0,24,3,
1,0,0,0,25,26,3,6,3,0,26,27,5,14,0,0,27,28,5,12,0,0,28,29,5,18,0,0,29,50,
1,0,0,0,30,31,3,6,3,0,31,32,5,14,0,0,32,33,5,1,0,0,33,34,3,8,4,0,34,35,5,
12,0,0,35,36,5,18,0,0,36,50,1,0,0,0,37,38,3,6,3,0,38,39,7,0,0,0,39,40,5,
12,0,0,40,41,5,18,0,0,41,50,1,0,0,0,42,43,3,6,3,0,43,44,7,0,0,0,44,45,5,
1,0,0,45,46,3,8,4,0,46,47,5,12,0,0,47,48,5,18,0,0,48,50,1,0,0,0,49,25,1,
0,0,0,49,30,1,0,0,0,49,37,1,0,0,0,49,42,1,0,0,0,50,5,1,0,0,0,51,52,7,1,0,
0,52,7,1,0,0,0,53,54,6,4,-1,0,54,55,5,5,0,0,55,56,3,8,4,0,56,57,5,6,0,0,
57,61,1,0,0,0,58,61,5,14,0,0,59,61,5,13,0,0,60,53,1,0,0,0,60,58,1,0,0,0,
60,59,1,0,0,0,61,72,1,0,0,0,62,63,10,5,0,0,63,71,3,8,4,6,64,65,10,4,0,0,
65,66,7,2,0,0,66,71,3,8,4,5,67,68,10,3,0,0,68,69,7,3,0,0,69,71,3,8,4,4,70,
62,1,0,0,0,70,64,1,0,0,0,70,67,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,
1,0,0,0,73,9,1,0,0,0,74,72,1,0,0,0,6,20,23,49,60,70,72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'='", "'vainilla'", "'cherry'", "'fresa'", 
                            "'('", "')'", "'pasteles'", "'+'", "'-'", "'*'", 
                            "'/'", "';'", null, null, null, "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "PASTELES", 
                             "AGRE", "QUIT", "MULT", "PART", "SEMI", "NUM", 
                             "ID", "BOWL", "LLAVECITAA", "LLAVECITAB", "NL", 
                             "SP" ];
    static ruleNames = [ "start", "molde", "declaraciones", "type", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(MiLenguajeParser.PASTELES);
	        this.state = 11;
	        this.match(MiLenguajeParser.LLAVECITAA);
	        this.state = 12;
	        this.match(MiLenguajeParser.NL);
	        this.state = 13;
	        this.molde();
	        this.state = 14;
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
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 16;
	            this.expr(0);
	            break;
	        case 2:
	        case 3:
	        case 4:
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 20;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0)) {
	                this.state = 17;
	                this.declaraciones();
	                this.state = 22;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AsignacionValidaContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.type();
	            this.state = 26;
	            this.match(MiLenguajeParser.ID);
	            this.state = 27;
	            this.match(MiLenguajeParser.SEMI);
	            this.state = 28;
	            this.match(MiLenguajeParser.NL);
	            break;

	        case 2:
	            localctx = new AsignacionValidaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.type();
	            this.state = 31;
	            this.match(MiLenguajeParser.ID);
	            this.state = 32;
	            this.match(MiLenguajeParser.T__0);
	            this.state = 33;
	            this.expr(0);
	            this.state = 34;
	            this.match(MiLenguajeParser.SEMI);
	            this.state = 35;
	            this.match(MiLenguajeParser.NL);
	            break;

	        case 3:
	            localctx = new AsignacionInvalidaContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.type();
	            this.state = 38;
	            localctx.VALORID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===15)) {
	                localctx.VALORID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 39;
	            this.match(MiLenguajeParser.SEMI);
	            this.state = 40;
	            this.match(MiLenguajeParser.NL);
	            break;

	        case 4:
	            localctx = new AsignacionInvalidaContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 42;
	            this.type();
	            this.state = 43;
	            localctx.VALORID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===15)) {
	                localctx.VALORID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 44;
	            this.match(MiLenguajeParser.T__0);
	            this.state = 45;
	            this.expr(0);
	            this.state = 46;
	            this.match(MiLenguajeParser.SEMI);
	            this.state = 47;
	            this.match(MiLenguajeParser.NL);
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
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0))) {
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, MiLenguajeParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 54;
	            this.match(MiLenguajeParser.T__4);
	            this.state = 55;
	            this.expr(0);
	            this.state = 56;
	            this.match(MiLenguajeParser.T__5);
	            break;
	        case 14:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 58;
	            this.match(MiLenguajeParser.ID);
	            break;
	        case 13:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 59;
	            this.match(MiLenguajeParser.NUM);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 72;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 70;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulImpContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_expr);
	                    this.state = 62;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 63;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new MultPartContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_expr);
	                    this.state = 64;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 65;
	                    localctx.cocinando = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.cocinando = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 66;
	                    this.expr(5);
	                    break;

	                case 3:
	                    localctx = new AgreQuitContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_expr);
	                    this.state = 67;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 68;
	                    localctx.cocinando = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.cocinando = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 69;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 74;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.T__2 = 3;
MiLenguajeParser.T__3 = 4;
MiLenguajeParser.T__4 = 5;
MiLenguajeParser.T__5 = 6;
MiLenguajeParser.PASTELES = 7;
MiLenguajeParser.AGRE = 8;
MiLenguajeParser.QUIT = 9;
MiLenguajeParser.MULT = 10;
MiLenguajeParser.PART = 11;
MiLenguajeParser.SEMI = 12;
MiLenguajeParser.NUM = 13;
MiLenguajeParser.ID = 14;
MiLenguajeParser.BOWL = 15;
MiLenguajeParser.LLAVECITAA = 16;
MiLenguajeParser.LLAVECITAB = 17;
MiLenguajeParser.NL = 18;
MiLenguajeParser.SP = 19;

MiLenguajeParser.RULE_start = 0;
MiLenguajeParser.RULE_molde = 1;
MiLenguajeParser.RULE_declaraciones = 2;
MiLenguajeParser.RULE_type = 3;
MiLenguajeParser.RULE_expr = 4;

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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignacionValidaContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(MiLenguajeParser.SEMI, 0);
	};

	NL() {
	    return this.getToken(MiLenguajeParser.NL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAsignacionValida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.AsignacionValidaContext = AsignacionValidaContext;

class AsignacionInvalidaContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        this.VALORID = null;;
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	SEMI() {
	    return this.getToken(MiLenguajeParser.SEMI, 0);
	};

	NL() {
	    return this.getToken(MiLenguajeParser.NL, 0);
	};

	BOWL() {
	    return this.getToken(MiLenguajeParser.BOWL, 0);
	};

	NUM() {
	    return this.getToken(MiLenguajeParser.NUM, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAsignacionInvalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.AsignacionInvalidaContext = AsignacionInvalidaContext;

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



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.ParentesisContext = ParentesisContext;

class MulImpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitMulImp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.MulImpContext = MulImpContext;

class MultPartContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.cocinando = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MULT() {
	    return this.getToken(MiLenguajeParser.MULT, 0);
	};

	PART() {
	    return this.getToken(MiLenguajeParser.PART, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitMultPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.MultPartContext = MultPartContext;

class AgreQuitContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.cocinando = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	AGRE() {
	    return this.getToken(MiLenguajeParser.AGRE, 0);
	};

	QUIT() {
	    return this.getToken(MiLenguajeParser.QUIT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAgreQuit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.AgreQuitContext = AgreQuitContext;

class NumContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(MiLenguajeParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.NumContext = NumContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.IdContext = IdContext;


MiLenguajeParser.StartContext = StartContext; 
MiLenguajeParser.MoldeContext = MoldeContext; 
MiLenguajeParser.DeclaracionesContext = DeclaracionesContext; 
MiLenguajeParser.TypeContext = TypeContext; 
MiLenguajeParser.ExprContext = ExprContext; 

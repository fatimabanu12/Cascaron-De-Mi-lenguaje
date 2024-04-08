// Generated from /home/fatima/Documents/AUTOMATAS 2 PROYECTOS/MiDiccionario/grammar/MiLenguaje.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MiLenguajeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, PASTELES=7, AGRE=8, QUIT=9, 
		MULT=10, PART=11, SEMI=12, NUM=13, ID=14, BOWL=15, LLAVECITAA=16, LLAVECITAB=17, 
		NL=18, SP=19;
	public static final int
		RULE_start = 0, RULE_molde = 1, RULE_declaraciones = 2, RULE_type = 3, 
		RULE_expr = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "molde", "declaraciones", "type", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'vainilla'", "'cherry'", "'fresa'", "'('", "')'", "'pasteles'", 
			"'+'", "'-'", "'*'", "'/'", "';'", null, null, null, "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, "PASTELES", "AGRE", "QUIT", 
			"MULT", "PART", "SEMI", "NUM", "ID", "BOWL", "LLAVECITAA", "LLAVECITAB", 
			"NL", "SP"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MiLenguaje.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MiLenguajeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public TerminalNode PASTELES() { return getToken(MiLenguajeParser.PASTELES, 0); }
		public TerminalNode LLAVECITAA() { return getToken(MiLenguajeParser.LLAVECITAA, 0); }
		public TerminalNode NL() { return getToken(MiLenguajeParser.NL, 0); }
		public MoldeContext molde() {
			return getRuleContext(MoldeContext.class,0);
		}
		public TerminalNode LLAVECITAB() { return getToken(MiLenguajeParser.LLAVECITAB, 0); }
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(10);
			match(PASTELES);
			setState(11);
			match(LLAVECITAA);
			setState(12);
			match(NL);
			setState(13);
			molde();
			setState(14);
			match(LLAVECITAB);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MoldeContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<DeclaracionesContext> declaraciones() {
			return getRuleContexts(DeclaracionesContext.class);
		}
		public DeclaracionesContext declaraciones(int i) {
			return getRuleContext(DeclaracionesContext.class,i);
		}
		public MoldeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_molde; }
	}

	public final MoldeContext molde() throws RecognitionException {
		MoldeContext _localctx = new MoldeContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_molde);
		int _la;
		try {
			setState(23);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
			case NUM:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(16);
				expr(0);
				}
				break;
			case T__1:
			case T__2:
			case T__3:
			case LLAVECITAB:
				enterOuterAlt(_localctx, 2);
				{
				setState(20);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3))) != 0)) {
					{
					{
					setState(17);
					declaraciones();
					}
					}
					setState(22);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclaracionesContext extends ParserRuleContext {
		public DeclaracionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaraciones; }
	 
		public DeclaracionesContext() { }
		public void copyFrom(DeclaracionesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AsignacionValidaContext extends DeclaracionesContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(MiLenguajeParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(MiLenguajeParser.SEMI, 0); }
		public TerminalNode NL() { return getToken(MiLenguajeParser.NL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AsignacionValidaContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}
	public static class AsignacionInvalidaContext extends DeclaracionesContext {
		public Token VALORID;
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(MiLenguajeParser.SEMI, 0); }
		public TerminalNode NL() { return getToken(MiLenguajeParser.NL, 0); }
		public TerminalNode BOWL() { return getToken(MiLenguajeParser.BOWL, 0); }
		public TerminalNode NUM() { return getToken(MiLenguajeParser.NUM, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AsignacionInvalidaContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionesContext declaraciones() throws RecognitionException {
		DeclaracionesContext _localctx = new DeclaracionesContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaraciones);
		int _la;
		try {
			setState(49);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new AsignacionValidaContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(25);
				type();
				setState(26);
				match(ID);
				setState(27);
				match(SEMI);
				setState(28);
				match(NL);
				}
				break;
			case 2:
				_localctx = new AsignacionValidaContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(30);
				type();
				setState(31);
				match(ID);
				setState(32);
				match(T__0);
				setState(33);
				expr(0);
				setState(34);
				match(SEMI);
				setState(35);
				match(NL);
				}
				break;
			case 3:
				_localctx = new AsignacionInvalidaContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(37);
				type();
				setState(38);
				((AsignacionInvalidaContext)_localctx).VALORID = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==NUM || _la==BOWL) ) {
					((AsignacionInvalidaContext)_localctx).VALORID = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(39);
				match(SEMI);
				setState(40);
				match(NL);
				}
				break;
			case 4:
				_localctx = new AsignacionInvalidaContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(42);
				type();
				setState(43);
				((AsignacionInvalidaContext)_localctx).VALORID = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==NUM || _la==BOWL) ) {
					((AsignacionInvalidaContext)_localctx).VALORID = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(44);
				match(T__0);
				setState(45);
				expr(0);
				setState(46);
				match(SEMI);
				setState(47);
				match(NL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ParentesisContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ParentesisContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class MulImpContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public MulImpContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class MultPartContext extends ExprContext {
		public Token cocinando;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MULT() { return getToken(MiLenguajeParser.MULT, 0); }
		public TerminalNode PART() { return getToken(MiLenguajeParser.PART, 0); }
		public MultPartContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class AgreQuitContext extends ExprContext {
		public Token cocinando;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode AGRE() { return getToken(MiLenguajeParser.AGRE, 0); }
		public TerminalNode QUIT() { return getToken(MiLenguajeParser.QUIT, 0); }
		public AgreQuitContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class NumContext extends ExprContext {
		public TerminalNode NUM() { return getToken(MiLenguajeParser.NUM, 0); }
		public NumContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(MiLenguajeParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 8;
		enterRecursionRule(_localctx, 8, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(54);
				match(T__4);
				setState(55);
				expr(0);
				setState(56);
				match(T__5);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(58);
				match(ID);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(59);
				match(NUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(72);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(70);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						_localctx = new MulImpContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(62);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(63);
						expr(6);
						}
						break;
					case 2:
						{
						_localctx = new MultPartContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(64);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(65);
						((MultPartContext)_localctx).cocinando = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MULT || _la==PART) ) {
							((MultPartContext)_localctx).cocinando = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(66);
						expr(5);
						}
						break;
					case 3:
						{
						_localctx = new AgreQuitContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(67);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(68);
						((AgreQuitContext)_localctx).cocinando = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==AGRE || _la==QUIT) ) {
							((AgreQuitContext)_localctx).cocinando = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(69);
						expr(4);
						}
						break;
					}
					} 
				}
				setState(74);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 4:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\25N\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\7\3\25\n\3"+
		"\f\3\16\3\30\13\3\5\3\32\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\64\n\4\3\5"+
		"\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6?\n\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\7\6I\n\6\f\6\16\6L\13\6\3\6\2\3\n\7\2\4\6\b\n\2\6\4\2\17\17\21\21"+
		"\3\2\4\6\3\2\f\r\3\2\n\13\2R\2\f\3\2\2\2\4\31\3\2\2\2\6\63\3\2\2\2\b\65"+
		"\3\2\2\2\n>\3\2\2\2\f\r\7\t\2\2\r\16\7\22\2\2\16\17\7\24\2\2\17\20\5\4"+
		"\3\2\20\21\7\23\2\2\21\3\3\2\2\2\22\32\5\n\6\2\23\25\5\6\4\2\24\23\3\2"+
		"\2\2\25\30\3\2\2\2\26\24\3\2\2\2\26\27\3\2\2\2\27\32\3\2\2\2\30\26\3\2"+
		"\2\2\31\22\3\2\2\2\31\26\3\2\2\2\32\5\3\2\2\2\33\34\5\b\5\2\34\35\7\20"+
		"\2\2\35\36\7\16\2\2\36\37\7\24\2\2\37\64\3\2\2\2 !\5\b\5\2!\"\7\20\2\2"+
		"\"#\7\3\2\2#$\5\n\6\2$%\7\16\2\2%&\7\24\2\2&\64\3\2\2\2\'(\5\b\5\2()\t"+
		"\2\2\2)*\7\16\2\2*+\7\24\2\2+\64\3\2\2\2,-\5\b\5\2-.\t\2\2\2./\7\3\2\2"+
		"/\60\5\n\6\2\60\61\7\16\2\2\61\62\7\24\2\2\62\64\3\2\2\2\63\33\3\2\2\2"+
		"\63 \3\2\2\2\63\'\3\2\2\2\63,\3\2\2\2\64\7\3\2\2\2\65\66\t\3\2\2\66\t"+
		"\3\2\2\2\678\b\6\1\289\7\7\2\29:\5\n\6\2:;\7\b\2\2;?\3\2\2\2<?\7\20\2"+
		"\2=?\7\17\2\2>\67\3\2\2\2><\3\2\2\2>=\3\2\2\2?J\3\2\2\2@A\f\7\2\2AI\5"+
		"\n\6\bBC\f\6\2\2CD\t\4\2\2DI\5\n\6\7EF\f\5\2\2FG\t\5\2\2GI\5\n\6\6H@\3"+
		"\2\2\2HB\3\2\2\2HE\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2K\13\3\2\2\2L"+
		"J\3\2\2\2\b\26\31\63>HJ";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
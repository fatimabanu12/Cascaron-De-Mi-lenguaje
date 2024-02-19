// Generated from /home/fatima/Documents/AUTOMATAS 2 PROYECTOS/PlantillaCascaronMiDiccionario/grammar/MiLenguaje.g4 by ANTLR 4.9.2
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
		T__0=1, T__1=2, PASTELES=3, VAINILLA=4, BOWL=5, NL=6;
	public static final int
		RULE_start = 0, RULE_molde = 1, RULE_declaraciones = 2, RULE_llavecitaa = 3, 
		RULE_llavecitab = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "molde", "declaraciones", "llavecitaa", "llavecitab"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'}'", "'pasteles'", "'int'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "PASTELES", "VAINILLA", "BOWL", "NL"
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
		public LlavecitaaContext llavecitaa() {
			return getRuleContext(LlavecitaaContext.class,0);
		}
		public LlavecitabContext llavecitab() {
			return getRuleContext(LlavecitabContext.class,0);
		}
		public List<MoldeContext> molde() {
			return getRuleContexts(MoldeContext.class);
		}
		public MoldeContext molde(int i) {
			return getRuleContext(MoldeContext.class,i);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(10);
			match(PASTELES);
			setState(11);
			llavecitaa();
			setState(15);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VAINILLA) {
				{
				{
				setState(12);
				molde();
				}
				}
				setState(17);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(18);
			llavecitab();
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
		public DeclaracionesContext declaraciones() {
			return getRuleContext(DeclaracionesContext.class,0);
		}
		public MoldeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_molde; }
	}

	public final MoldeContext molde() throws RecognitionException {
		MoldeContext _localctx = new MoldeContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_molde);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			declaraciones();
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
		public TerminalNode VAINILLA() { return getToken(MiLenguajeParser.VAINILLA, 0); }
		public TerminalNode BOWL() { return getToken(MiLenguajeParser.BOWL, 0); }
		public DeclaracionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaraciones; }
	}

	public final DeclaracionesContext declaraciones() throws RecognitionException {
		DeclaracionesContext _localctx = new DeclaracionesContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaraciones);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(VAINILLA);
			setState(23);
			match(BOWL);
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

	public static class LlavecitaaContext extends ParserRuleContext {
		public LlavecitaaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_llavecitaa; }
	}

	public final LlavecitaaContext llavecitaa() throws RecognitionException {
		LlavecitaaContext _localctx = new LlavecitaaContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_llavecitaa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(25);
			match(T__0);
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

	public static class LlavecitabContext extends ParserRuleContext {
		public LlavecitabContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_llavecitab; }
	}

	public final LlavecitabContext llavecitab() throws RecognitionException {
		LlavecitabContext _localctx = new LlavecitabContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_llavecitab);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			match(T__1);
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\b \4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\7\2\20\n\2\f\2\16\2\23\13\2\3\2"+
		"\3\2\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\6\2\2\7\2\4\6\b\n\2\2\2\33"+
		"\2\f\3\2\2\2\4\26\3\2\2\2\6\30\3\2\2\2\b\33\3\2\2\2\n\35\3\2\2\2\f\r\7"+
		"\5\2\2\r\21\5\b\5\2\16\20\5\4\3\2\17\16\3\2\2\2\20\23\3\2\2\2\21\17\3"+
		"\2\2\2\21\22\3\2\2\2\22\24\3\2\2\2\23\21\3\2\2\2\24\25\5\n\6\2\25\3\3"+
		"\2\2\2\26\27\5\6\4\2\27\5\3\2\2\2\30\31\7\6\2\2\31\32\7\7\2\2\32\7\3\2"+
		"\2\2\33\34\7\3\2\2\34\t\3\2\2\2\35\36\7\4\2\2\36\13\3\2\2\2\3\21";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
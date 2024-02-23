// Generated from /home/fatima/Documents/AUTOMATAS 2 PROYECTOS/MiDiccionario/grammar/MiLenguaje.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MiLenguajeLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, PASTELES=4, SEMI=5, BOWL=6, LLAVECITAA=7, LLAVECITAB=8, 
		NL=9, SP=10;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "PASTELES", "SEMI", "BOWL", "LLAVECITAA", "LLAVECITAB", 
			"NL", "SP"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'vainilla'", "'cherry'", "'fresa'", "'pasteles'", "';'", null, 
			"'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "PASTELES", "SEMI", "BOWL", "LLAVECITAA", "LLAVECITAB", 
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


	public MiLenguajeLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MiLenguaje.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\fM\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\7"+
		"\6\7:\n\7\r\7\16\7;\3\b\3\b\3\t\3\t\3\n\5\nC\n\n\3\n\3\n\3\13\6\13H\n"+
		"\13\r\13\16\13I\3\13\3\13\2\2\f\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23"+
		"\13\25\f\3\2\4\7\2,-//\61;C\\c|\5\2\13\f\17\17\"\"\2O\2\3\3\2\2\2\2\5"+
		"\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2"+
		"\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\3\27\3\2\2\2\5 \3\2\2\2\7\'\3"+
		"\2\2\2\t-\3\2\2\2\13\66\3\2\2\2\r9\3\2\2\2\17=\3\2\2\2\21?\3\2\2\2\23"+
		"B\3\2\2\2\25G\3\2\2\2\27\30\7x\2\2\30\31\7c\2\2\31\32\7k\2\2\32\33\7p"+
		"\2\2\33\34\7k\2\2\34\35\7n\2\2\35\36\7n\2\2\36\37\7c\2\2\37\4\3\2\2\2"+
		" !\7e\2\2!\"\7j\2\2\"#\7g\2\2#$\7t\2\2$%\7t\2\2%&\7{\2\2&\6\3\2\2\2\'"+
		"(\7h\2\2()\7t\2\2)*\7g\2\2*+\7u\2\2+,\7c\2\2,\b\3\2\2\2-.\7r\2\2./\7c"+
		"\2\2/\60\7u\2\2\60\61\7v\2\2\61\62\7g\2\2\62\63\7n\2\2\63\64\7g\2\2\64"+
		"\65\7u\2\2\65\n\3\2\2\2\66\67\7=\2\2\67\f\3\2\2\28:\t\2\2\298\3\2\2\2"+
		":;\3\2\2\2;9\3\2\2\2;<\3\2\2\2<\16\3\2\2\2=>\7}\2\2>\20\3\2\2\2?@\7\177"+
		"\2\2@\22\3\2\2\2AC\7\17\2\2BA\3\2\2\2BC\3\2\2\2CD\3\2\2\2DE\7\f\2\2E\24"+
		"\3\2\2\2FH\t\3\2\2GF\3\2\2\2HI\3\2\2\2IG\3\2\2\2IJ\3\2\2\2JK\3\2\2\2K"+
		"L\b\13\2\2L\26\3\2\2\2\6\2;BI\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
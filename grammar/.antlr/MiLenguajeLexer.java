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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, PASTELES=7, AGRE=8, QUIT=9, 
		MULT=10, PART=11, SEMI=12, NUM=13, ID=14, BOWL=15, LLAVECITAA=16, LLAVECITAB=17, 
		NL=18, SP=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "PASTELES", "AGRE", "QUIT", 
			"MULT", "PART", "SEMI", "NUM", "ID", "BOWL", "LLAVECITAA", "LLAVECITAB", 
			"NL", "SP"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\25t\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r"+
		"\3\16\6\16Z\n\16\r\16\16\16[\3\17\3\17\3\20\6\20a\n\20\r\20\16\20b\3\21"+
		"\3\21\3\22\3\22\3\23\5\23j\n\23\3\23\3\23\3\24\6\24o\n\24\r\24\16\24p"+
		"\3\24\3\24\2\2\25\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\23%\24\'\25\3\2\6\3\2\62;\4\2C\\c|\7\2,-//"+
		"\61;C\\c|\5\2\13\f\17\17\"\"\2w\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2"+
		"\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2"+
		"\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\3)\3\2\2\2"+
		"\5+\3\2\2\2\7\64\3\2\2\2\t;\3\2\2\2\13A\3\2\2\2\rC\3\2\2\2\17E\3\2\2\2"+
		"\21N\3\2\2\2\23P\3\2\2\2\25R\3\2\2\2\27T\3\2\2\2\31V\3\2\2\2\33Y\3\2\2"+
		"\2\35]\3\2\2\2\37`\3\2\2\2!d\3\2\2\2#f\3\2\2\2%i\3\2\2\2\'n\3\2\2\2)*"+
		"\7?\2\2*\4\3\2\2\2+,\7x\2\2,-\7c\2\2-.\7k\2\2./\7p\2\2/\60\7k\2\2\60\61"+
		"\7n\2\2\61\62\7n\2\2\62\63\7c\2\2\63\6\3\2\2\2\64\65\7e\2\2\65\66\7j\2"+
		"\2\66\67\7g\2\2\678\7t\2\289\7t\2\29:\7{\2\2:\b\3\2\2\2;<\7h\2\2<=\7t"+
		"\2\2=>\7g\2\2>?\7u\2\2?@\7c\2\2@\n\3\2\2\2AB\7*\2\2B\f\3\2\2\2CD\7+\2"+
		"\2D\16\3\2\2\2EF\7r\2\2FG\7c\2\2GH\7u\2\2HI\7v\2\2IJ\7g\2\2JK\7n\2\2K"+
		"L\7g\2\2LM\7u\2\2M\20\3\2\2\2NO\7-\2\2O\22\3\2\2\2PQ\7/\2\2Q\24\3\2\2"+
		"\2RS\7,\2\2S\26\3\2\2\2TU\7\61\2\2U\30\3\2\2\2VW\7=\2\2W\32\3\2\2\2XZ"+
		"\t\2\2\2YX\3\2\2\2Z[\3\2\2\2[Y\3\2\2\2[\\\3\2\2\2\\\34\3\2\2\2]^\t\3\2"+
		"\2^\36\3\2\2\2_a\t\4\2\2`_\3\2\2\2ab\3\2\2\2b`\3\2\2\2bc\3\2\2\2c \3\2"+
		"\2\2de\7}\2\2e\"\3\2\2\2fg\7\177\2\2g$\3\2\2\2hj\7\17\2\2ih\3\2\2\2ij"+
		"\3\2\2\2jk\3\2\2\2kl\7\f\2\2l&\3\2\2\2mo\t\5\2\2nm\3\2\2\2op\3\2\2\2p"+
		"n\3\2\2\2pq\3\2\2\2qr\3\2\2\2rs\b\24\2\2s(\3\2\2\2\7\2[bip\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
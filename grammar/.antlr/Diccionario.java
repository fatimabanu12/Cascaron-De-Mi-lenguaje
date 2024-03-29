// Generated from /home/fatima/Documents/AUTOMATAS 2 PROYECTOS/MiDiccionario/grammar/Diccionario.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Diccionario extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PASTELES=1, SEMI=2, BOWL=3, LLAVECITAA=4, LLAVECITAB=5, NL=6, SP=7;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PASTELES", "SEMI", "BOWL", "LLAVECITAA", "LLAVECITAB", "NL", "SP"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'pasteles'", "';'", null, "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PASTELES", "SEMI", "BOWL", "LLAVECITAA", "LLAVECITAB", "NL", "SP"
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


	public Diccionario(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Diccionario.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\t\61\b\1\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\3\3\3\3\4\6\4\36\n\4\r\4\16\4\37\3\5\3\5\3\6\3\6\3\7"+
		"\5\7\'\n\7\3\7\3\7\3\b\6\b,\n\b\r\b\16\b-\3\b\3\b\2\2\t\3\3\5\4\7\5\t"+
		"\6\13\7\r\b\17\t\3\2\4\7\2,-//\61;C\\c|\5\2\13\f\17\17\"\"\2\63\2\3\3"+
		"\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2"+
		"\17\3\2\2\2\3\21\3\2\2\2\5\32\3\2\2\2\7\35\3\2\2\2\t!\3\2\2\2\13#\3\2"+
		"\2\2\r&\3\2\2\2\17+\3\2\2\2\21\22\7r\2\2\22\23\7c\2\2\23\24\7u\2\2\24"+
		"\25\7v\2\2\25\26\7g\2\2\26\27\7n\2\2\27\30\7g\2\2\30\31\7u\2\2\31\4\3"+
		"\2\2\2\32\33\7=\2\2\33\6\3\2\2\2\34\36\t\2\2\2\35\34\3\2\2\2\36\37\3\2"+
		"\2\2\37\35\3\2\2\2\37 \3\2\2\2 \b\3\2\2\2!\"\7}\2\2\"\n\3\2\2\2#$\7\177"+
		"\2\2$\f\3\2\2\2%\'\7\17\2\2&%\3\2\2\2&\'\3\2\2\2\'(\3\2\2\2()\7\f\2\2"+
		")\16\3\2\2\2*,\t\3\2\2+*\3\2\2\2,-\3\2\2\2-+\3\2\2\2-.\3\2\2\2./\3\2\2"+
		"\2/\60\b\b\2\2\60\20\3\2\2\2\6\2\37&-\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
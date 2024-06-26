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
		PASTELES=1, AGRE=2, QUIT=3, MULT=4, PART=5, SEMI=6, NUM=7, ID=8, BOWL=9, 
		LLAVECITAA=10, LLAVECITAB=11, NL=12, SP=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PASTELES", "AGRE", "QUIT", "MULT", "PART", "SEMI", "NUM", "ID", "BOWL", 
			"LLAVECITAA", "LLAVECITAB", "NL", "SP"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'pasteles'", "'+'", "'-'", "'*'", "'/'", "';'", null, null, null, 
			"'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PASTELES", "AGRE", "QUIT", "MULT", "PART", "SEMI", "NUM", "ID", 
			"BOWL", "LLAVECITAA", "LLAVECITAB", "NL", "SP"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\17L\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3"+
		"\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\6\b\62\n\b\r\b\16\b\63\3\t\3"+
		"\t\3\n\6\n9\n\n\r\n\16\n:\3\13\3\13\3\f\3\f\3\r\5\rB\n\r\3\r\3\r\3\16"+
		"\6\16G\n\16\r\16\16\16H\3\16\3\16\2\2\17\3\3\5\4\7\5\t\6\13\7\r\b\17\t"+
		"\21\n\23\13\25\f\27\r\31\16\33\17\3\2\6\3\2\62;\4\2C\\c|\7\2,-//\61;C"+
		"\\c|\5\2\13\f\17\17\"\"\2O\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2"+
		"\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2"+
		"\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\3\35\3\2\2\2\5&\3\2"+
		"\2\2\7(\3\2\2\2\t*\3\2\2\2\13,\3\2\2\2\r.\3\2\2\2\17\61\3\2\2\2\21\65"+
		"\3\2\2\2\238\3\2\2\2\25<\3\2\2\2\27>\3\2\2\2\31A\3\2\2\2\33F\3\2\2\2\35"+
		"\36\7r\2\2\36\37\7c\2\2\37 \7u\2\2 !\7v\2\2!\"\7g\2\2\"#\7n\2\2#$\7g\2"+
		"\2$%\7u\2\2%\4\3\2\2\2&\'\7-\2\2\'\6\3\2\2\2()\7/\2\2)\b\3\2\2\2*+\7,"+
		"\2\2+\n\3\2\2\2,-\7\61\2\2-\f\3\2\2\2./\7=\2\2/\16\3\2\2\2\60\62\t\2\2"+
		"\2\61\60\3\2\2\2\62\63\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\20\3\2\2"+
		"\2\65\66\t\3\2\2\66\22\3\2\2\2\679\t\4\2\28\67\3\2\2\29:\3\2\2\2:8\3\2"+
		"\2\2:;\3\2\2\2;\24\3\2\2\2<=\7}\2\2=\26\3\2\2\2>?\7\177\2\2?\30\3\2\2"+
		"\2@B\7\17\2\2A@\3\2\2\2AB\3\2\2\2BC\3\2\2\2CD\7\f\2\2D\32\3\2\2\2EG\t"+
		"\5\2\2FE\3\2\2\2GH\3\2\2\2HF\3\2\2\2HI\3\2\2\2IJ\3\2\2\2JK\b\16\2\2K\34"+
		"\3\2\2\2\7\2\63:AH\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
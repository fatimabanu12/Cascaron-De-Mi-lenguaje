// Generated from ./grammar/MiLenguaje.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,6,47,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,5,4,38,8,4,10,4,12,4,41,9,4,1,5,3,5,
44,8,5,1,5,1,5,0,0,6,1,1,3,2,5,3,7,4,9,5,11,6,1,0,2,2,0,65,90,97,122,3,0,
48,57,65,90,97,122,48,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
9,1,0,0,0,0,11,1,0,0,0,1,13,1,0,0,0,3,15,1,0,0,0,5,17,1,0,0,0,7,26,1,0,0,
0,9,35,1,0,0,0,11,43,1,0,0,0,13,14,5,123,0,0,14,2,1,0,0,0,15,16,5,125,0,
0,16,4,1,0,0,0,17,18,5,112,0,0,18,19,5,97,0,0,19,20,5,115,0,0,20,21,5,116,
0,0,21,22,5,101,0,0,22,23,5,108,0,0,23,24,5,101,0,0,24,25,5,115,0,0,25,6,
1,0,0,0,26,27,5,118,0,0,27,28,5,97,0,0,28,29,5,105,0,0,29,30,5,110,0,0,30,
31,5,105,0,0,31,32,5,108,0,0,32,33,5,108,0,0,33,34,5,97,0,0,34,8,1,0,0,0,
35,39,7,0,0,0,36,38,7,1,0,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,
40,1,0,0,0,40,10,1,0,0,0,41,39,1,0,0,0,42,44,5,13,0,0,43,42,1,0,0,0,43,44,
1,0,0,0,44,45,1,0,0,0,45,46,5,10,0,0,46,12,1,0,0,0,3,0,39,43,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiLenguajeLexer extends antlr4.Lexer {

    static grammarFileName = "MiLenguaje.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "'}'", "'pasteles'", "'vainilla'" ];
	static symbolicNames = [ null, null, null, "PASTELES", "INT", "BOWL", "NL" ];
	static ruleNames = [ "T__0", "T__1", "PASTELES", "INT", "BOWL", "NL" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MiLenguajeLexer.EOF = antlr4.Token.EOF;
MiLenguajeLexer.T__0 = 1;
MiLenguajeLexer.T__1 = 2;
MiLenguajeLexer.PASTELES = 3;
MiLenguajeLexer.INT = 4;
MiLenguajeLexer.BOWL = 5;
MiLenguajeLexer.NL = 6;



// Generated from ./grammar/MiLenguaje.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,75,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,4,5,56,8,5,11,5,12,5,57,1,6,1,6,1,
7,1,7,1,8,3,8,65,8,8,1,8,1,8,1,9,4,9,70,8,9,11,9,12,9,71,1,9,1,9,0,0,10,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,1,0,2,5,0,42,43,45,45,47,57,
65,90,97,122,3,0,9,10,13,13,32,32,77,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,
0,0,0,19,1,0,0,0,1,21,1,0,0,0,3,30,1,0,0,0,5,37,1,0,0,0,7,43,1,0,0,0,9,52,
1,0,0,0,11,55,1,0,0,0,13,59,1,0,0,0,15,61,1,0,0,0,17,64,1,0,0,0,19,69,1,
0,0,0,21,22,5,118,0,0,22,23,5,97,0,0,23,24,5,105,0,0,24,25,5,110,0,0,25,
26,5,105,0,0,26,27,5,108,0,0,27,28,5,108,0,0,28,29,5,97,0,0,29,2,1,0,0,0,
30,31,5,99,0,0,31,32,5,104,0,0,32,33,5,101,0,0,33,34,5,114,0,0,34,35,5,114,
0,0,35,36,5,121,0,0,36,4,1,0,0,0,37,38,5,102,0,0,38,39,5,114,0,0,39,40,5,
101,0,0,40,41,5,115,0,0,41,42,5,97,0,0,42,6,1,0,0,0,43,44,5,112,0,0,44,45,
5,97,0,0,45,46,5,115,0,0,46,47,5,116,0,0,47,48,5,101,0,0,48,49,5,108,0,0,
49,50,5,101,0,0,50,51,5,115,0,0,51,8,1,0,0,0,52,53,5,59,0,0,53,10,1,0,0,
0,54,56,7,0,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,
58,12,1,0,0,0,59,60,5,123,0,0,60,14,1,0,0,0,61,62,5,125,0,0,62,16,1,0,0,
0,63,65,5,13,0,0,64,63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,5,10,0,
0,67,18,1,0,0,0,68,70,7,1,0,0,69,68,1,0,0,0,70,71,1,0,0,0,71,69,1,0,0,0,
71,72,1,0,0,0,72,73,1,0,0,0,73,74,6,9,0,0,74,20,1,0,0,0,4,0,57,64,71,1,6,
0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiLenguajeLexer extends antlr4.Lexer {

    static grammarFileName = "MiLenguaje.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'vainilla'", "'cherry'", "'fresa'", "'pasteles'", 
                         "';'", null, "'{'", "'}'" ];
	static symbolicNames = [ null, null, null, null, "PASTELES", "SEMI", "BOWL", 
                          "LLAVECITAA", "LLAVECITAB", "NL", "SP" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "PASTELES", "SEMI", "BOWL", 
                      "LLAVECITAA", "LLAVECITAB", "NL", "SP" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MiLenguajeLexer.EOF = antlr4.Token.EOF;
MiLenguajeLexer.T__0 = 1;
MiLenguajeLexer.T__1 = 2;
MiLenguajeLexer.T__2 = 3;
MiLenguajeLexer.PASTELES = 4;
MiLenguajeLexer.SEMI = 5;
MiLenguajeLexer.BOWL = 6;
MiLenguajeLexer.LLAVECITAA = 7;
MiLenguajeLexer.LLAVECITAB = 8;
MiLenguajeLexer.NL = 9;
MiLenguajeLexer.SP = 10;




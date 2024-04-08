lexer grammar Diccionario; // note "lexer grammar"

PASTELES:'pasteles';

AGRE: '+';/*agre=agregar por eso es + */
QUIT: '-'; /*quit=quitar por eso es -  */
MULT: '*';/*mult=multiplicar para mas personas por eso es* */
PART: '/';/*par= partir como cuando partes un pastel y lo divides entre las personas por eso es /*/

SEMI:';';
NUM:[0-9]+;
ID: [a-zA-Z];
BOWL:[a-zA-Z0-9+\-*/]+; // match identifiers
LLAVECITAA:'{';
LLAVECITAB:'}';
NL:'\r'? '\n' ; // return newlines to parser (end-statement signal)
SP:[ \t\r\n]+->skip;



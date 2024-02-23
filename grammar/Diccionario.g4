lexer grammar Diccionario; // note "lexer grammar"

PASTELES:'pasteles';
SEMI:';';
BOWL:[a-zA-Z0-9+\-*/]+; // match identifiers
LLAVECITAA:'{';
LLAVECITAB:'}';
NL:'\r'? '\n' ; // return newlines to parser (end-statement signal)
SP:[ \t\r\n]+->skip;



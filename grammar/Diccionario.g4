lexer grammar Diccionario; // note "lexer grammar"

VAINILLA:'int';

BOWL:
[a-zA-Z][a-zA-Z0-9]*;
// match identifiers

NL:'\r'? '\n' ;
// return newlines to parser (end-statement signal)


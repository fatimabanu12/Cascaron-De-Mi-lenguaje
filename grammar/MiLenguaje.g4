grammar MiLenguaje;
import Diccionario;

start: PASTELES LLAVECITAA NL molde LLAVECITAB;

molde: expr | declaraciones*;


declaraciones: type ID SEMI  NL                           #asignacionValida                                           
             | type ID '=' expr SEMI NL                   #asignacionValida
             | type VALORID = (BOWL|NUM) SEMI NL        #asignacionInvalida/*DONDE BOWL ES MI ID que permite letras y numeros*/
             | type VALORID =(BOWL|NUM) '=' expr SEMI NL #asignacionInvalida
             ;

type: 'vainilla'| 'cherry' |'fresa';



expr: '(' expr ')'                                  #parentesis
|expr expr                                          #MulImp
|expr cocinando=(MULT|PART) expr                #MultPart
|expr cocinando=(AGRE|QUIT) expr                #AgreQuit
|ID                                                 #Id
|NUM                                                #Num
;                                                   
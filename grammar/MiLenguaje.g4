grammar MiLenguaje;
import Diccionario;

start: PASTELES LLAVECITAA NL molde LLAVECITAB;

molde: 
         declaraciones*;

declaraciones: type BOWL SEMI NL;// DONDE BOWL ES MI ID 

type: 'vainilla'| 'cherry' |'fresa';




grammar MiLenguaje;
import Diccionario;

start: PASTELES llavecitaa molde* llavecitab ;

molde: 
                declaraciones;
                //BOWL es el id mientras que VAINILLA es mi numero entero
declaraciones:  VAINILLA BOWL ;




PASTELES:'pasteles';
llavecitaa: '{';
llavecitab: '}';





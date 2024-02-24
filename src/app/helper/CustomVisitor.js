//Aquí se coloca la copia del visitor para que no se borre
//a la hora de modificación del archivo G4

// Generated from ./grammar/MiLenguaje.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HashMap from 'hashmap';
import MiLenguajeVisitor from '@/grammar/MiLenguajeVisitor';

// This class defines a complete generic visitor for a parse tree produced by MiLenguajeParser.

export default class CustomVisitor extends MiLenguajeVisitor {
  constructor(){
    super();
    this.memoria =new HashMap;
   }
  

	// Visit a parse tree produced by MiLenguajeParser#start.
	visitStart(ctx) {

	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MiLenguajeParser#molde.
	visitMolde(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MiLenguajeParser#declaraciones.
	visitDeclaraciones(ctx) {
    const id=ctx.BOWL().getText();
    const value=0;
    const inicioletras=/^[a-zA-Z]/;
    const operadores=/[\+\-\*\/]/;

    if(inicioletras.test(id)){
      if(operadores.test(id)){
        console.log(`error no debe de incluir operadores "${id}"`)
      }else if(this.memoria.has(id)){
        console.log(`error el identificador"${id}" ya fue declarado`)
                
      }else{
        this.memoria.set(id, value);
        console.log(`${id}=${value}`)

      }

    }else {
      console.log('error, el identificador debe de inciar con una letra')
    }
    
    return null;
	  
	}

  


	// Visit a parse tree produced by MiLenguajeParser#type.
	visitType(ctx) {
	  return this.visitChildren(ctx);
	}



}
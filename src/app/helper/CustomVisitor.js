//Aquí se coloca la copia del visitor para que no se borre
//a la hora de modificación del archivo G4

// Generated from ./grammar/MiLenguaje.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HashMap from 'hashmap';
import MiLenguajeVisitor from '@/grammar/MiLenguajeVisitor';
import MiLenguajeParser from '@/grammar/MiLenguajeParser';
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
  
  // Visit a parse tree produced by MiLenguajeParser#asignacionValida.
	visitAsignacionValida(ctx) {
		const id=ctx.ID().getText();
		const inicioletras=/^[a-zA-Z]/;
		const operadores=/[\+\ - \*\/]/;
		const error =document.getElementById('error');
		
		if(!id){
			console.error(`esta incompleta la declaracion de la variable "${id}"`)
			return null;
		}
		let value =0;
		if(ctx.expr()){
			value=this.visit(ctx.expr());
		}

		if(inicioletras.test(id)){
		  if(operadores.test(id)){
			console.error(`ERROR: no debe de incluir operadores "${id}"`)
			

		  }else if(this.memoria.has(id)){
			
			console.error(`ERROR: el identificador"${id}" ya fue declarado`)
			
			
		  }else if(id == null){
			console.error(`ERROR!:lo declarado ${id} no esta identificado`)
			
		  }
		  
		  else{
			this.memoria.set(id, value);
			console.log(`${id}=${value}`)
	
		  }
	
		}else {
		  console.error(`ERROR:, el identificador ${id} debe de inciar con una letra`)
		 
		}
		
		return null;
		  
		}
	

	// Visit a parse tree produced by MiLenguajeParser#asignacionInvalida.
	visitAsignacionInvalida(ctx) {
		const error=document.getElementById('error');

		console.error(`Declaracion invalida de la variable`)
	
		
	  return null;
	}


	// Visit a parse tree produced by MiLenguajeParser#parentesis.
	visitParentesis(ctx) {
	  return this.visit(ctx.expr());
	}


	// Visit a parse tree produced by MiLenguajeParser#MulImp.
	visitMulImp(ctx) {
    let resultado=this.visitChildren(ctx);
	  return resultado[0] * [1];
	}


	// Visit a parse tree produced by MiLenguajeParser#MultPart.
	visitMultPart(ctx) {
	const num1=this.visit(ctx.expr(0))
 	const num2=this.visit(ctx.expr(1))
	 console.log(num1)
  	console.log(num2)
  	if(ctx.cocinando.type === MiLenguajeParser.MULT) return num1 *  num2;
  	return Math.floor (num1 / num2);
	}


	// Visit a parse tree produced by MiLenguajeParser#AgreQuit.
	visitAgreQuit(ctx) {
	const num1=this.visit(ctx.expr(0))
  	const num2=this.visit(ctx.expr(1))
	console.log("visitando agregar y quitar");
  	console.log(num1)
	console.log(num2)
  	if(ctx.cocinando.type === MiLenguajeParser.AGRE) return num1 +  num2;
  	return num1 -   num2;

	}


	// Visit a parse tree produced by MiLenguajeParser#Num.
	visitNum(ctx) {
	  return parseInt(ctx.NUM().getText());
	}


	// Visit a parse tree produced by MiLenguajeParser#Id.
	visitId(ctx) {
    const id = ctx.ID().getText();
		if(this.memory.has(id)) return this.memory.get(id);
	  return 0;
	}
  


	// Visit a parse tree produced by MiLenguajeParser#type.
	visitType(ctx) {
	  return this.visitChildren(ctx);
	}



}
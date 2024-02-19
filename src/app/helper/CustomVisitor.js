//Aquí se coloca la copia del visitor para que no se borre
//a la hora de modificación del archivo G4

import MiLenguajeVisitor from "@/grammar/MiLenguajeVisitor.js";


export default class customVisitor extends MiLenguajeVisitor{

    // Visit a parse tree produced by ArrayInitParser#init.
    visitInit(ctx) {
        return this.visitChildren(ctx);
      }
  
  
      // Visit a parse tree produced by ArrayInitParser#value.
      visitValue(ctx) {
        return this.visitChildren(ctx);
      }

}
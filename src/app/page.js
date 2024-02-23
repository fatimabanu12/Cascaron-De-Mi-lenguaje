"use client";
import React ,{useState}from 'react';
import { analizar } from './module/generator.js';




const homePage = () => {
  const[inputText,setInputText] = useState("");
  const[resultText,setResultText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAnalizar = () => {
    const result = analizar(inputText);
    setResultText(result);
  };

  const handleIniciar =() => {
    setInputText("");
    setResultText("");
  };

  return (
    
    <div>
      
      <h1 class="container-titulo"><center>Traductor de mi lenguaje FATI_PASTELITOS </center></h1>
     <form onSubmit={(e)=>e.preventDefault()}> 

      <center>
        <textarea id="inputText" value={inputText} onChange={handleInputChange} cols="25" rows="5" class="numbered"> </textarea>
      </center>

      <div>
        
      <button type ="submit" onClick={handleAnalizar} class="button1">Ejecutar</button>
      <button type ="button" onClick={handleIniciar}class="button2">Limpiar</button>
      
      </div>
      
      <div class="contenedor-textotraduccion"><p>Traduccion:</p></div> 

    </form>
    <center>
      <textarea id="resultText" value={resultText} readOnly class="contenedor-resultado"></textarea>    
    </center>
    </div>
  );
};

export default homePage;
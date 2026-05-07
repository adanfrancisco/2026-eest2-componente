// import Boton from "./componentes/Boton";
// import "./css/app.css";

//parrafo, fin de linea, style
//css puro : .negrita{ font-weight: bold; }
//react: style={{ fontWeight: 'bold' }}
// el estilo se pasa como un objeto, con camelCase en lugar de guiones, y los valores se pasan como strings
// <br> //breadk line, salto de línea
//<p></p> //paragraph, párrafo

//función clásica
// function MyButton() {
  //   return <button>Soy un botón</button>;
  // }
  //función flecha
  // const MiBotoncito = () => {
    //   return <button>Soy un botón</button>
    // }
    import { useState } from "react";
import CustomHeader from "./componentes/customHeader";
    
    export const Casitx = () => {
  const [contar, setContar] = useState(0);
  //para mostrar el valor de la variable contar, se debe usar llaves {}
      const suMando = () => { setContar(contar + 1); };
      const reset = () => { setContar(0); };
      const resTando = () => { setContar(contar - 1); };
      
  return (
    <>
      <h1>PRIMER componentes</h1>
      <hr />
      <button onClick={suMando}>+1 </button>
      <button onClick={reset}>reset </button>
      <button onClick={resTando}>-1 </button>
      <br />
      El valor es: {contar}
      <CustomHeader
        titulo="Header de título"
        descripcion="Descripción del header"
      />
    </>
  );
};

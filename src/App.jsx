//TSX TypeScript con JSX

import { useState } from "react";
// import Yheader from "./componentes/Yheader.tsx";
export const App = () => {
const [numero1, setNumero1] = useState(0);
const [numero2, setNumero2] = useState(0);

  const handleCambio1 = (e) => {
    // console.log("El valor del input es: ", e.target.value);
    // console.log("el valor en numero1 es: ",numero1);
    setNumero1(e.target.value);
  };
  const handleSumar = (e) => {
    console.log(numero1+numero2);
  };
  
  const handleCambio2 = (e) => {
    setNumero2(e.target.value);
  };
  return (
    <>
        <label htmlFor="n1">
          N°1
        <input onChange={handleCambio1} type="text" name="n1" id="N1" />
        <br />
        </label>
        <label htmlFor="n2">
          N°2
          <input onChange={handleCambio2} type="text" name="n2" id="N2" />
        </label>
        <button onClick={handleSumar}>Sumar</button>
        <button >Restar</button>
      {/* <Yheader
        estiloprop={{ backgroundColor: "blue" }}
        titulo="Mi Restaurant"
        saludo="Hola pepe"
        encabezado="PEPEPE"
      />
      <h1>Mi Restaurant</h1>

      <br /> */}
      {/* Colocar 2 inputText y sumar su valor en un tercer input
      con las etiquetas */}

      {/* <label htmlFor="n2">
        <input type="text" name="n2" id="N2" />
      </label>
      <input type="text" name="" id="suma" /> */}
    </>
  );
};

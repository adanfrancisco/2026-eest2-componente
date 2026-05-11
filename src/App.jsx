//TSX TypeScript con JSX

import Yheader from "./componentes/Yheader.tsx";
import {Yfooter} from "./componentes/Yfooter";
export const App = () => {
  return (
    <>
      <Yheader
        titulo="Mi Restaurant"
        saludo="Hola pepe"
        encabezado="PEPEPE"
      />
     
<br />
      {/* Colocar 2 inputText y sumar su valor en un tercer input
      con las etiquetas */}
      <hr />
      <Yfooter />
    </>
  );
};

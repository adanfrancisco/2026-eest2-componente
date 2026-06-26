import React from "react";

export const Numeros = (p) => {

    const num = [10,20,30,40,50];

   const mapa = num.map((p) => p*2);
   
    return (
        <>
        {num.map((num,p) => (
          <p>
            El índice es: {p} y el valor es: {num}
          </p>
        ))}

       
        </>
    );
};

export default Numeros;

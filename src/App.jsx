import React from 'react';
import Numeros from './numeros'; 
import Pepe from './Pepe';       

export const App = () => { 
  return (
    <>
      <Numeros />
      <Pepe 
        nombre="jennifer"
        apellido="Aima" 
        curso="programacion" 
      />
    </>
  );
};

export default App; 

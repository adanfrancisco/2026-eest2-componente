interface props {
  nombre: string;
  apellido?: string;
  curso?: string;
}

export const Pepe = ({ nombre, apellido, curso }: props) => {
  return (
    <>
    <h1>nombre={nombre}</h1>
    <h1>apellido={apellido}</h1>
    <h1>escuela={curso}</h1>
    
    </>
  );
};


export default Pepe;

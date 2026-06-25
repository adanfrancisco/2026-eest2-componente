
interface props {
  titulo: string;
  saludo?: string;
  encabezado?: string;
}


export const Pepe = ({ nombre, apellido, escuela }: props) => {
  return (
    <>
    <h1>nombre={nombre}</h1>
    <h1>apellido={apellido}</h1>
    <h1>escuela={escuela}</h1>
    
    </>
  );
};

export default Pepe

interface encabezadoX { 
  titulo: string;//variable opcional
  saludo?: string;
  encabezado?: string;
}

const Yheader = ({ titulo, saludo, encabezado }: encabezadoX) => {
  
  return (
    <>
      <h1>{titulo}</h1>
      {saludo}
      <br />
      {/* template string */}
      {`Este es el encabezado: ${encabezado}`} 
      {/* <p>Yo soy Yheader</p> */}
    </>
  );
}
export default Yheader;
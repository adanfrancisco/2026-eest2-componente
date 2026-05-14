

interface encabezadoX { 
  titulo: string;//variable opcional
  saludo?: string;
  encabezado?: string;
  estiloprop?: React.CSSProperties;
}

const Yheader = ({ estiloprop, titulo, saludo, encabezado }: encabezadoX) => {
  
  return (
    <>
      <h1 style={estiloprop}>{titulo}</h1>
      <p style={{ fontStyle:"italic" }}>{saludo}</p>
      <br />
      {/* template string */}
      {`Este es el encabezado: ${encabezado}`} 
      {/* <p>Yo soy Yheader</p> */}
    </>
  );
}
export default Yheader;
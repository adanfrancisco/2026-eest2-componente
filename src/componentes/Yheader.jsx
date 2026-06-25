interface encabezadoX {
  titulo: string;//variable opcional
  saludo?: string;
  encabezado?: string;
}


const Yheader = ({ titulo, saludo, encabezado }: encabezadoX) => {
 
  return (
    <>
      <h1 style = {{fontStyle: "italic" }}>{titulo}</h1>
      <p style  = {{backgroundColor: "green" }}>{saludo}</p>
      <br />
      {/* template string */}
      {`Este es el encabezado: ${encabezado}`}
      {/* <p>Yo soy Yheader</p> */}
    </>
  );
}
export default Yheader;

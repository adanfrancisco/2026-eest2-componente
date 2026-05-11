//modificar este footer para que reciba parámetros y muestre el nombre del diseñador 

export const Yfooter = () => {
  const fecha = new Date();
//   console.log('La fecha es: ',fecha.getFullYear());
  return (
    <footer>
      inicio footer
      <hr />
          <p>&copy; {
              fecha.getFullYear().toString()
          } Mi App. Todos los derechos reservados.</p>
    </footer>
  );
};

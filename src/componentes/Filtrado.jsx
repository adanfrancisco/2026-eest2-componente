import { useState, useMemo } from "react";

const Filtrado = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [filtroColumna, setFiltroColumna] = useState("todas");

  const datosIniciales = useMemo(
    () => [
      { id: 1, nombre: "Juan Pérez", edad: 28, ciudad: "Buenos Aires" },
      { id: 2, nombre: "María García", edad: 34, ciudad: "Madrid" },
      { id: 3, nombre: "Carlos López", edad: 22, ciudad: "Ciudad de México" },
      { id: 4, nombre: "Ana Martínez", edad: 41, ciudad: "Bogotá" },
      { id: 5, nombre: "Luis Fernández", edad: 30, ciudad: "Santiago" },
      { id: 6, nombre: "Laura Rodríguez", edad: 26, ciudad: "Lima" },
      { id: 7, nombre: "Pedro Sánchez", edad: 35, ciudad: "Barcelona" },
      { id: 8, nombre: "Isabel Gómez", edad: 29, ciudad: "Madrid" },
      { id: 9, nombre: "Miguel Ángel Ruiz", edad: 45, ciudad: "Sevilla" },
      { id: 10, nombre: "Carmen Jiménez", edad: 33, ciudad: "Málaga" },
      { id: 11, nombre: "José Luis Torres", edad: 38, ciudad: "Madrid" },
      { id: 12, nombre: "Dolores Herrera", edad: 27, ciudad: "Cali" },
      { id: 13, nombre: "Francisco Mora", edad: 50, ciudad: "Guayaquil" },
      { id: 14, nombre: "Antonia Vega", edad: 31, ciudad: "Quito" },
      { id: 15, nombre: "Manuel Ortega", edad: 42, ciudad: "La Paz" },
      { id: 16, nombre: "María Dolores Reyes", edad: 36, ciudad: "Sucre" },
      { id: 17, nombre: "Javier Navarro", edad: 29, ciudad: "Montevideo" },
      { id: 18, nombre: "Elena Domínguez", edad: 32, ciudad: "Asunción" },
      { id: 19, nombre: "Alberto Ramos", edad: 44, ciudad: "San José" },
      { id: 20, nombre: "Rosa María Soto", edad: 25, ciudad: "Panamá" },
      { id: 21, nombre: "Antonio Delgado", edad: 37, ciudad: "Caracas" },
      { id: 22, nombre: "Cristina Vázquez", edad: 28, ciudad: "Maracaibo" },
      { id: 23, nombre: "Fernando Romero", edad: 43, ciudad: "Santo Domingo" },
      { id: 24, nombre: "Pilar Moreno", edad: 39, ciudad: "Puerto Rico" },
      { id: 25, nombre: "Rafael Herrera", edad: 46, ciudad: "La Habana" },
      {
        id: 26,
        nombre: "Lourdes Castro",
        edad: 24,
        ciudad: "Santiago de Cuba",
      },
      { id: 27, nombre: "Ramón Serrano", edad: 52, ciudad: "Guatemala" },
      { id: 28, nombre: "Victoria Córdoba", edad: 33, ciudad: "San Salvador" },
      { id: 29, nombre: "Andrés Paredes", edad: 40, ciudad: "Tegucigalpa" },
      { id: 30, nombre: "Teresa Ortega", edad: 31, ciudad: "Managua" },
      { id: 31, nombre: "Pablo Quintero", edad: 27, ciudad: "Kingston" },
      { id: 32, nombre: "Claudia Núñez", edad: 38, ciudad: "Nassau" },
      { id: 33, nombre: "Ricardo Salas", edad: 35, ciudad: "Bridgetown" },
      { id: 34, nombre: "Beatriz Paz", edad: 29, ciudad: "Port of Spain" },
      { id: 35, nombre: "Esteban Fuentes", edad: 48, ciudad: "Paramaribo" },
      { id: 36, nombre: "Alicia Coronel", edad: 26, ciudad: "Cayena" },
      { id: 37, nombre: "Gabriel Ávila", edad: 41, ciudad: "Montego Bay" },
      { id: 38, nombre: "Eva Santos", edad: 30, ciudad: "Oranjestad" },
      { id: 39, nombre: "Tomás Blanco", edad: 36, ciudad: "Philipsburg" },
      { id: 40, nombre: "Luz Dary Rojas", edad: 44, ciudad: "Willemstad" },
      { id: 41, nombre: "Oscar Fuentes", edad: 33, ciudad: "Charlotte Amalie" },
      { id: 42, nombre: "Gloria Carrillo", edad: 29, ciudad: "Road Town" },
      { id: 43, nombre: "Nelson García", edad: 47, ciudad: "The Valley" },
      { id: 44, nombre: "Soledad Mendoza", edad: 25, ciudad: "Gustavia" },
      { id: 45, nombre: "Alex Torres", edad: 38, ciudad: "Grand Turk" },
      { id: 46, nombre: "Mónica Sepúlveda", edad: 42, ciudad: "Cockburn Town" },
      { id: 47, nombre: "Raúl Herrera", edad: 31, ciudad: "Basse-Terre" },
      { id: 48, nombre: "Patricia Campos", edad: 27, ciudad: "Fort-de-France" },
      { id: 49, nombre: "Enrique Castro", edad: 45, ciudad: "St. George's" },
      { id: 50, nombre: "Sara Quispe", edad: 34, ciudad: "Hamilton" },
    ],
    [],
  );

  // Filtrar datos con useMemo para evitar recálculos innecesarios
  const datosFiltrados = useMemo(() => {
    if (!terminoBusqueda.trim()) return datosIniciales;

    return datosIniciales.filter((item) => {
      // Si no hay columna específica, buscar en todas
      if (filtroColumna === "todas") {
        return Object.values(item).some((valor) =>
          valor
            .toString()
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase()),
        );
      }

      // Buscar solo en la columna seleccionada
      return item[filtroColumna]
        .toString()
        .toLowerCase()
        .includes(terminoBusqueda.toLowerCase());
    });
  }, [datosIniciales, terminoBusqueda, filtroColumna]);

  return (
    <div>
      {/* Selector de columna para filtrar */}
      <select
        value={filtroColumna}
        onChange={(e) => setFiltroColumna(e.target.value)}
        style={{ marginRight: "5px", padding: "8px" }}
      >
        <option value="todas">Todas las columnas</option>
        <option value="id">ID</option>
        <option value="nombre">NOMBRE</option>
        <option value="edad">Edad</option>
        <option value="ciudad">Ciudad</option>
      </select>

      <input
        type="text"
        placeholder={`Buscar en ${filtroColumna === "todas" ? "todas" : filtroColumna}...`}
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

      <table border="1" style={{ marginTop: "20px", marginLeft: "30px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {datosFiltrados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.edad}</td>
              <td>{usuario.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <p>Resultados: {datosFiltrados.length}</p>
      {JSON.stringify(datosFiltrados)}
    </div>
  );
};

export default Filtrado;

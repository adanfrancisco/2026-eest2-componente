import { useEffect, useState } from "react";

export const FetchApi = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizamos la petición GET
    // Iniciamos el estado de carga
    fetch("https://jsonplaceholder.typicode.com/posts") 
      .then((response) => {
        if (!response.ok) {
          // Lanza un error si la respuesta no es exitosa[reference:4]
          throw new Error("Error al obtener los datos");
        }
        return response.json(); // Convierte la respuesta a JSON
      })
      .then((datos) => setPosts(datos)) // Guarda los datos en el estado
      .then((datos) => console.log(datos)) // Muestra los datos en la consola
      .catch((err) => setError(err.message)) // Captura cualquier error
      .finally(() => setLoading(false)); // Finaliza el estado de carga[reference:5]
  }, []); // El array vacío [] hace que la petición se ejecute solo una vez al montar el componente[reference:6][reference:7]

  // Muestra mensajes según el estado
  if (loading===true) return <p>Cargando...</p>;
  if (error!=null) return <p>Error: {error}</p>;

  // Renderiza los datos
  return (
    <div>
      <h1>Lista de Postsx</h1>
      <ul>
        {
          posts.map((post) => (
            <li key={post.id}>
              {post.title}
            </li>
        ))}
      </ul>
    </div>
  );
};



import { useState, useEffect } from "react";

const RickImage = () => {
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const obtenerPersonaje = async () => {
      try {
        const respuesta = await fetch(
          "https://rickandmortyapi.com/api/character/1",
        );
        const datos = await respuesta.json();
        setPersonaje(datos);
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
      }
    };

    obtenerPersonaje();
  }, []); // El array vacío asegura que solo se ejecute una vez

  console.log(personaje);

  if (!personaje) return <p>Cargando...</p>;

  const { name, image } = personaje;

  return (
    <div>
      <h1>{name}</h1>
      <img
        src={image}
        alt={name}
        width="300"
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default RickImage;

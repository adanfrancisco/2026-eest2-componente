import { useState, useEffect } from "react";

const RickImage = ({ numero }) => {
  const [personaje, setPersonaje] = useState(1);

  useEffect(() => {
    const obtenerPersonaje = async () => {
      try {
        const respuesta = await fetch(
          `https://rickandmortyapi.com/api/character/${numero}`,
        );
        const datos = await respuesta.json();
        setPersonaje(datos);
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
      }
    };

    obtenerPersonaje();
  }, [numero]);
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

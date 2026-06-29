import { useState, useEffect } from "react";

const RickImage = () => {
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((res) => res.json())
      .then((data) => setPersonaje(data));
  }, []);
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

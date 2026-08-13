import "./app.css";

export const App = () => {
  // const nombre = "Juan";

  const frutas = ["Manzana", "Banana", "Cereza"];
  const vegetales = ["lechuga", "tomate"];
  // const letras = ["a", "b", "c", "n", "d", "n", "e"];
  const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "n", edad: 30 },
    { nombre: "Carlos", edad: 22 },
  ];
  // const resultado = nombre.split("").filter((letra) => letra != "n");
  // const resultado = letras.filter((letra) => letra != "n");
  // const resultado = [...frutas, ...vegetales].filter(
  //   (item) => item != "lechuga",
  // );
  const resultado = [...frutas, "pera", "durazno", 99, ...vegetales];
  // const resultado = personas.filter((persona) => persona.nombre != "n");
  console.log(resultado);

  return <>HOLA</>;
};

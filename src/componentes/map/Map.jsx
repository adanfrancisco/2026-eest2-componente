const Mapx = () => {

    const numeros = [1, 2, 3, 4];
    
    // console.log(numeros);
    const mimapa = numeros.map((p) => p*2);

    console.log(mimapa);
    
    

    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 }
    ];
    const misnombres = users.map((p) =>  p.name + ' tiene ' + p.age + ' años');
    console.log(misnombres);





//     const products = [
//       { id: 1, name: "laptop" },
//       { id: 2, name: "phone" },
//     ];

//     const productsWithPrice = products.map((product) => ({
//       ...product,
//       price: 100,
//     }));
//     console.log(productsWithPrice);


  return <>Hola</>;
};

export default Mapx;

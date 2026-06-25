import './app.css'

export const App = () => {
   const datos = [
    { fila: 'Arriba', color: 'color-arriba' },
    { fila: 'Centro', color: 'color-centro' },
    { fila: 'Abajo', color: 'color-abajo' }
  ];

  const columnas = ['Izq', 'Cen', 'Der'];

  return (
    <div className="app-container">
      {datos.map((item, rowIndex) => (
        <div key={rowIndex} className="fila">
          {columnas.map((col, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`}
              className={`palabra ${item.color}`}
            >
              {item.fila} {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

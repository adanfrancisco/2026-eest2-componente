import "./app.css";

export const App = () => {
  return (
    <div className="app-container">
      {/* FILA ARRIBA */}
      <div className="fila">
        <div className="palabra color-arriba">Arriba Izq</div>
        <div className="palabra color-arriba">Arriba Cen</div>
        <div className="palabra color-arriba">Arriba Der</div>
      </div>

      {/* FILA CENTRO */}
      <div className="fila">
        <div className="palabra color-centro">Centro Izq</div>
        <div className="palabra color-centro">Centro Cen</div>
        <div className="palabra color-centro">Centro Der</div>
      </div>

      {/* FILA ABAJO */}
      <div className="fila">
        <div className="palabra color-abajo">Abajo Izq</div>
        <div className="palabra color-abajo">Abajo Cen</div>
        <div className="palabra color-abajo">Abajo Der</div>
      </div>
    </div>
  );
};

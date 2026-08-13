import { useState } from "react";

const ListManager = () => {
  // Estado inicial con algunas tareas de ejemplo
  const [leftList, setLeftList] = useState([
    { id: 1, text: "Tarea 1" },
    { id: 2, text: "Tarea 2" },
    { id: 3, text: "Tarea 3" },
    { id: 4, text: "Tarea 4" },
  ]);

  const [rightList, setRightList] = useState([
    { id: 5, text: "Tarea 5" },
    { id: 6, text: "Tarea 6" },
  ]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);

  // Mover elementos de izquierda a derecha
  const moveToRight = () => {
    if (selectedLeft === null) return;

    // Buscar el elemento seleccionado
    const itemToMove = leftList.find((item) => item.id === selectedLeft);
    if (!itemToMove) return;

    // Usar spread para crear nuevas listas
    setLeftList((prev) => prev.filter((item) => item.id !== selectedLeft));
    setRightList((prev) => [...prev, { ...itemToMove }]);
    setSelectedLeft(null);
  };

  // Mover elementos de derecha a izquierda
  const moveToLeft = () => {
    if (selectedRight === null) return;

    // Buscar el elemento seleccionado
    const itemToMove = rightList.find((item) => item.id === selectedRight);
    if (!itemToMove) return;

    // Usar spread para crear nuevas listas
    setRightList((prev) => prev.filter((item) => item.id !== selectedRight));
    setLeftList((prev) => [...prev, { ...itemToMove }]);
    setSelectedRight(null);
  };

  // Manejar selección de elementos
  const handleSelectLeft = (id) => {
    setSelectedLeft(selectedLeft === id ? null : id);
  };

  const handleSelectRight = (id) => {
    setSelectedRight(selectedRight === id ? null : id);
  };

  return (
    <div style={styles.container}>
      <h2>Listas con Spread Operator</h2>

      <div style={styles.listsContainer}>
        {/* Lista izquierda */}
        <div style={styles.listWrapper}>
          <h3>Lista Izquierda</h3>
          <ul style={styles.list}>
            {leftList.map((item) => (
              <li
                key={item.id}
                style={{
                  ...styles.listItem,
                  ...(selectedLeft === item.id ? styles.selected : {}),
                }}
                onClick={() => handleSelectLeft(item.id)}
              >
                {item.text}
              </li>
            ))}
          </ul>
          <p style={styles.counter}>Total: {leftList.length}</p>
        </div>

        {/* Botones centrales */}
        <div style={styles.buttonsContainer}>
          <button
            onClick={moveToRight}
            disabled={selectedLeft === null}
            style={styles.button}
          >
            → Mover a derecha
          </button>

          <button
            onClick={moveToLeft}
            disabled={selectedRight === null}
            style={styles.button}
          >
            ← Mover a izquierda
          </button>
        </div>

        {/* Lista derecha */}
        <div style={styles.listWrapper}>
          <h3>Lista Derecha</h3>
          <ul style={styles.list}>
            {rightList.map((item) => (
              <li
                key={item.id}
                style={{
                  ...styles.listItem,
                  ...(selectedRight === item.id ? styles.selected : {}),
                }}
                onClick={() => handleSelectRight(item.id)}
              >
                {item.text}
              </li>
            ))}
          </ul>
          <p style={styles.counter}>Total: {rightList.length}</p>
        </div>
      </div>
    </div>
  );
};

// Estilos en línea para el componente
const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  listsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
  },
  listWrapper: {
    flex: 1,
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#f9f9f9",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    minHeight: "150px",
  },
  listItem: {
    padding: "10px",
    marginBottom: "5px",
    backgroundColor: "white",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  selected: {
    backgroundColor: "#e3f2fd",
    borderColor: "#1976d2",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    padding: "0 10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
  },
  counter: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#666",
    fontWeight: "bold",
  },
  info: {
    marginTop: "30px",
    padding: "15px",
    backgroundColor: "#f0f8ff",
    borderRadius: "8px",
    borderLeft: "4px solid #1976d2",
  },
};

export default ListManager;

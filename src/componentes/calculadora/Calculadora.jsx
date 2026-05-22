import { useState } from "react";
import "./calculadora.css";

const Calculadora = () => {
    const [display, setDisplay] = useState('0');
    
  const handleNumber = (num) => {
      display === '0'
          ? setDisplay(num)
          : setDisplay(display + num)
  };

  return (
    <>
      <div className="calculator">
        <div className="display">
          <span id="display">{display}</span>
        </div>

        <div className="buttons">
          <button className="btn action clear">AC</button>
          <button className="btn action delete">⌫</button>
          <button className="btn action percent">%</button>
          <button className="btn operator divide">÷</button>
          <button onClick={()=>handleNumber("7")} className="btn number">
            7
          </button>
          <button onClick={() => handleNumber("8")} className="btn number">
            8
          </button>
          <button className="btn number">9</button>
          <button className="btn operator">×</button>

          <button className="btn number">4</button>
          <button className="btn number">5</button>
          <button className="btn number">6</button>
          <button className="btn operator">−</button>

          <button className="btn number">1</button>
          <button className="btn number">2</button>
          <button className="btn number">3</button>
          <button className="btn operator">+</button>

          <button className="btn number zero">0</button>
          <button className="btn decimal">.</button>
          <button className="btn equals">=</button>
        </div>
      </div>
    </>
  );
};

export default Calculadora;

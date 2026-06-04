import { useState } from "react";
import "./calculadora.css";

const BUTTONS = [
  { label: "AC", type: "action", cls: "clear" },
  { label: "⌫", type: "action", cls: "delete" },
  { label: "%", type: "action", cls: "percent" },
  { label: "÷", type: "operator", cls: "divide" },
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "×", type: "operator" },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "−", type: "operator" },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator" },
  { label: "0", type: "number", cls: "zero" },
  { label: ".", type: "decimal" },
  { label: "=", type: "equals" },
];

const Calculadora = () => {
  const [display, setDisplay] = useState("0");

  const handleNumber = (num) => {
    display === "0" ? setDisplay(num) : setDisplay(display + num);
  };

  const construyeClassName = (btn) => {
    let className = "btn";
    if (btn.type === "number") className += " number";
    if (btn.type === "operator" || btn.type === "equals") className += " operator";
    if (btn.type === "action") className += " action";
    if (btn.type === "decimal") className += " decimal";
    if (btn.type === "equals") className += " equals";
    if (btn.cls) className += ` ${btn.cls}`;
    return className;
  };

  const handleClick = (btn) => {
    if (btn.type === "number") handleNumber(btn.label);
    if (btn.type === "operator") handleNumber(` ${btn.label} `);
    if (btn.type === "decimal") handleNumber(btn.label);
    if (btn.label === "AC") setDisplay("0");
    if (btn.label === "⌫") setDisplay(display.slice(0, -1) || "0");
    if (btn.label === "%") handleNumber(" % ");
  }

  return (
    <>
      <div className="calculator">
        <div className="display">
          <span id="display">{display}</span>
        </div>

        <div className="buttons">
          {BUTTONS.map((btn) => (
            <button
              key={btn.label}
              className={construyeClassName(btn)}
              onClick={() => handleClick(btn)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculadora;

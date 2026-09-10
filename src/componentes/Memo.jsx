import { useMemo } from "react";

const Counter = ({ count }) => {
  const decimal = useMemo(() => count * 2, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Doble: {decimal}</p>
    </div>
  );
};
export default Counter;

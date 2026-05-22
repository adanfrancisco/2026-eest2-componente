import './Calculadora.css';
const Calculadora = () => {
    return (
      <>
        <div class="calculator">
          <div class="display">
            <span id="display">0</span>
          </div>
          <div class="buttons">
            <button class="btn action clear">AC</button>
            <button class="btn action delete">⌫</button>
            <button class="btn action percent">%</button>
            <button class="btn operator divide">÷</button>

            <button class="btn number">7</button>
            <button class="btn number">8</button>
            <button class="btn number">9</button>
            <button class="btn operator">×</button>

            <button class="btn number">4</button>
            <button class="btn number">5</button>
            <button class="btn number">6</button>
            <button class="btn operator">−</button>

            <button class="btn number">1</button>
            <button class="btn number">2</button>
            <button class="btn number">3</button>
            <button class="btn operator">+</button>

            <button class="btn number zero">0</button>
            <button class="btn decimal">.</button>
            <button class="btn equals">=</button>
          </div>
        </div>
      </>
    );
}

export default Calculadora

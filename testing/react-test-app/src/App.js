import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handlePlusButton = () => {
    setCounter((count) => count + 1);
  };

  const handleMinusButton = () => {
    setCounter((count) => count - 1);
  };

  const handleDisabled = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testId="counter">{counter}</h3>
        <div>
          <button
            onClick={handleMinusButton}
            disabled={disabled}
            data-testId="minus-button"
          >
            -
          </button>
          <button
            onClick={handlePlusButton}
            disabled={disabled}
            data-testId="plus-button"
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testId="on/off-button"
            style={{ backgroundColor: "blue" }}
            onClick={handleDisabled}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

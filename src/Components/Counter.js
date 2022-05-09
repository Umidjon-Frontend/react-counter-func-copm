import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function onCountClick(num) {
    if (num === 0) {
      setCount(0);
    }
    setCount((prev) => prev + num);
  }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h1 className={`${count > 0 ? "green" : count < 0 ? "red" : ""}`}>
        {count}
      </h1>
      <button className="btn" onClick={() => onCountClick(-1)}>
        decrement
      </button>
      <button className="btn" onClick={() => onCountClick(0)}>
        reset
      </button>
      <button className="btn" onClick={() => onCountClick(1)}>
        increment
      </button>
    </div>
  );
}

export default Counter;

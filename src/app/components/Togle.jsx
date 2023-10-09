import React, { useState } from 'react';

function ToggleCounter() {
  // Initialize state for the counter
  const [count, setCount] = useState(0);

  // Function to toggle the counter
  const toggleCount = () => {
    setCount(count === 0 ? 1 : 0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={toggleCount}>Toggle</button>
    </div>
  );
}

export default ToggleCounter;

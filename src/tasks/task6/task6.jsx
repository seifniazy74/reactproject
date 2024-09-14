import React, { useState, useEffect } from 'react';

function CounterWithInterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Counter: {count}</h3>
    </div>
  );
}

export default CounterWithInterval;

import React, { useState, useEffect } from 'react';

function MousePositionAndClickTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleClick = () => {
      setClickCount((prevCount) => prevCount + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <h3>Mouse Position: {mousePosition.x}, {mousePosition.y}</h3>
      <h3>Click Count: {clickCount}</h3>
    </div>
  );
}

export default MousePositionAndClickTracker;

import React, { useState, useEffect } from 'react';

function WindowResizeListener() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h3>Window Width: {windowWidth}px</h3>
    </div>
  );
}

export default WindowResizeListener;

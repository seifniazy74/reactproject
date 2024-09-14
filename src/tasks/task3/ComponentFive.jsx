import React, { useContext } from 'react';
import { SeifContext } from './SeifContext';

function ComponentFive() {
  const value = useContext(SeifContext);

  return (
    <div>
      <h3>Component Five</h3>
      <p>Roaad masr :  ,,,, {value}</p>
    </div>
  );
}

export default ComponentFive;

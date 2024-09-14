import React, { useContext } from 'react';
import { SeifContext } from './SeifContext';
import ComponentFour from './ComponentFour';


function ComponentThree() {
  const value = useContext(SeifContext);

  return (
    <div>
      <h3>Component Three</h3>
      <p>Roaad masr :  ,,,, {value}</p>
      <ComponentFour/>
    </div>
  );
}

export default ComponentThree;

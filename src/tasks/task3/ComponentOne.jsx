import React from 'react';
import { ContextProvider } from './SeifContext';
import ComponentTwo from './ComponentTwo';


function ComponentOne() {
  

  return (
  
    <div>
        <h3>Component One</h3>
        <ComponentTwo/>
    </div>
   
  );
}

export default ComponentOne;

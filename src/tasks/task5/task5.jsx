import React, { useState, useEffect } from 'react';

function Greeting() {
  const [username, setUsername] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting(`Hello, ${username}`);
  }, [username]);

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <h3>{greeting}</h3>
    </div>
  );
}

export default Greeting;

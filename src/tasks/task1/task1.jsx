import React, { useState } from 'react';

function MyApp() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {!submitted ? (
          <>
            <h2>{isLogin ? 'Login' : 'Sign-up'}</h2>
            {!isLogin && (
              <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            )}
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Sign-up'}</button>
          </>
        ) : (
          <div className="response">
            {isLogin ? (
              <>
                <h2>Welcome: {email}</h2>
                <p>You are logged in to the account at {new Date().toLocaleString()}</p>
              </>
            ) : (
              <>
                <h2>Welcome: {name}</h2>
                <p>Your email is: {email}</p>
                <p>You are signed up to the website at {new Date().toLocaleString()}</p>
              </>
            )}
          </div>
        )}
      </form>
      {!submitted && (
        <button className="toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Sign-up' : 'Switch to Login'}
        </button>
      )}
    </div>
  );
}

export default MyApp;

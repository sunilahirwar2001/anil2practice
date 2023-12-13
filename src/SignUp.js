import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    // Save username and password to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    console.log('Signed up successfully');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <input
          type="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

// Signup.js
import React, { useState } from 'react';
import useCustomHistory from '../hooks/useCustomHistory';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useCustomHistory();

  const handleSignup = () => {
    // Implement signup logic here
    // Redirect to /feed on successful signup
    history.push('/feed');
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;

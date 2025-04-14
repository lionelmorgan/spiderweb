import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle Login form submission 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Fetch users data from users.json file. Generally a request is sent to an API to retrieve user credentials from a database.
      const response = await fetch('/users.json');

      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Failed to fetch users data');
      }

      const users = await response.json();

      // Username and password check for authentication
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        navigate('/home');
        localStorage.setItem('currentUser', JSON.stringify(user)); // Save entire user object to localStorage
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('There was an error with the login process.');
    }
  };
//Render HTML Login form
  return (
    <div class="login-container">
     
      <form class="login-form" onSubmit={handleLogin}>
      <h2>LOGIN</h2>
        <div>
          <input
            type="text"
            id="username"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p class="error-message">{error}</p>}
    </div>
  );
};

export default Login;
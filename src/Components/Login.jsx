import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/lib/auth/login', {
        username,
        password,
      });
      setToken(response.data.token);
      setUsername('');
      setPassword('');
      setError(null);
    } catch (error) {
      setError('Error logging in: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

// Add PropTypes validation
Login.propTypes = {
  setToken: PropTypes.func.isRequired, // Validate setToken is a required function
};

export default Login;

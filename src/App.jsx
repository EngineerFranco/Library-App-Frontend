import { useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode by default

  const handleRegisterClick = () => setShowLogin(false);
  const handleLoginClick = () => setShowLogin(true);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? 'container dark-mode' : 'container light-mode'}>
      <div className="toggle-switch">
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </label>
      </div>
      {showLogin ? (
        <div className="card">
          <Login setToken={setToken} />
          <p className="toggle-text">
            Do not have an account?{' '}
            <button onClick={handleRegisterClick}>Register</button>
          </p>
        </div>
      ) : (
        <div className="card">
          <Register />
          <p className="toggle-text">
            Already have an account?{' '}
            <button onClick={handleLoginClick}>Login</button>
          </p>
        </div>
      )}
      {token && (
        <div className="card">
          <h2>Welcome! Your token: {token}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

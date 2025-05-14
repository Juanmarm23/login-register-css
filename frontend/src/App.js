import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'; // Importa el componente Home

function App() {
  const [isLogin, setIsLogin] = useState(true); // Cambia entre login y register
  const [token, setToken] = useState(localStorage.getItem('token')); // Estado para almacenar el token

  // Verifica si el token está presente (es decir, el usuario está logueado)
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken); // Si hay un token, lo guardamos
    }
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin); // toggleForm cambia el valor de isLogin
  };

  return (
    <div className="App">
      {token ? (
        <Home />
      ) : isLogin ? (
        <Login />
      ) : (
        <Register />
      )}

      {/* Solo mostrar el botón de alternancia si el usuario NO está logueado */}
      {!token && (
        <button className="toggle-button" onClick={toggleForm}>
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
      )}
    </div>
  );
}

export default App;

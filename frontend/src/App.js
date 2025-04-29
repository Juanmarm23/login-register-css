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
  }, []); // Este useEffect se ejecuta solo una vez al inicio (cuando el componente se monta)

  const toggleForm = () => {
    setIsLogin(!isLogin); // toggleForm cambia el valor de isLogin
  };

  return (
    <div className="App">
      {token ? (
        <Home />  // Si hay un token, mostrar la página de Home
      ) : isLogin ? (
        <Login />  // Si no hay token y está en login, mostrar el formulario de Login
      ) : (
        <Register />  // Si no está en login, mostrar el formulario de Register
      )}
      <button className="toggle-button" onClick={toggleForm}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
    </div>
  );
}

export default App;

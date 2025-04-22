import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isLogin, setIsLogin] = useState(true); // Cambia entre login y register

  const toggleForm = () => {
    setIsLogin(!isLogin); //toggleForm cambia el calor de isLogin para cambiarlo a registe la pagina
  };

  return (
    <div className="App">
      {isLogin ? <Login /> : <Register />}
      <button className="toggle-button" onClick={toggleForm}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
    </div>
  );
}

export default App;

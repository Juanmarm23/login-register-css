import React, { useEffect, useState } from 'react';
import './Home.css'; // Estilo home.css, lo he metido en componentes para que no este todo en app.css

function Home() {
  const [user, setUser] = useState(null); // Para almacenar la información del usuario logueado
  const [newPassword, setNewPassword] = useState(''); // Para cambiar la contraseña
  const [newEmail, setNewEmail] = useState(''); // Para cambiar el correo electrónico
  const [token, setToken] = useState(localStorage.getItem('token')); // Obtener el token desde localStorage

  // Cargar la información del usuario al montar el componente
  useEffect(() => {
    if (token) {
      fetch('http://localhost:3001/api/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error('Error fetching user info:', error));
    } else {
      console.log('No token found, please log in again.');
    }
  }, [token]); // El efecto se ejecuta cuando cambia el token

  // Función para actualizar la contraseña
  const updatePassword = () => {
    fetch('http://localhost:3001/api/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ password: newPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Password updated successfully');
        setNewPassword(''); // Limpiamos el campo de la contraseña
      })
      .catch((error) => console.error('Error updating password:', error));
  };

  // Función para actualizar el correo electrónico
  const updateEmail = () => {
    fetch('http://localhost:3001/api/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: newEmail }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Email updated successfully');
        setNewEmail(''); // Limpiamos el campo del correo electrónico
      })
      .catch((error) => console.error('Error updating email:', error));
  };

  return (
    <div className="home-container">
      {user ? (
        <>
          <h2>Hola, {user.name}</h2>  {/* Saludo con el nombre del usuario */}
          <p>Email: {user.email}</p>

          <div className="update-section">
            <h3>Nueva contraseña</h3>
            <input
              className="input-field"
              type="password"
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}  
            />
            <button className="update-button" onClick={updatePassword}>Actualizar Contraseña</button>
          </div>

          <div className="update-section">
            <h3>Nuevo correo electrónico</h3>
            <input
              className="input-field"
              type="email"
              placeholder="Nuevo correo electrónico"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}  
            />
            <button className="update-button" onClick={updateEmail}>Actualizar email</button>
          </div>
        </>
      ) : (
        <p className="loading-text">Cargando...</p>  
      )}
    </div>
  );
}

export default Home;

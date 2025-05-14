import React, { useEffect, useState } from 'react';
import './Home.css';

function Home({ setToken }) {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const token = localStorage.getItem('token');

  // Cargar la información del usuario al montar el componente
  useEffect(() => {
    if (token) {
      fetch('http://localhost:3001/api/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error('Error fetching user info:', err));
    }
  }, [token]);

  const updatePassword = () => {
    fetch('http://localhost:3001/api/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Password updated successfully');
        setNewPassword('');
      })
      .catch((err) => console.error('Error updating password:', err));
  };

  const updateEmail = () => {
    fetch('http://localhost:3001/api/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: newEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Email updated successfully');
        setNewEmail('');
        setUser((prev) => ({ ...prev, email: data.user.email })); // Refrescar email en pantalla
      })
      .catch((err) => console.error('Error updating email:', err));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    if (setToken) setToken(null); // Solo si el prop existe
    window.location.reload();
  };

  return (
    <div className="home-container">
      {user ? (
        <>
          <h2>Hola, {user.name}</h2>
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
            <button className="update-button" onClick={updatePassword}>
              Actualizar Contraseña
            </button>
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
            <button className="update-button" onClick={updateEmail}>
              Actualizar email
            </button>
          </div>

          <button className="logout-button" onClick={logout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <p className="loading-text">Cargando...</p>
      )}
    </div>
  );
}

export default Home;

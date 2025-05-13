import React, { useState } from 'react';
import '../App.css';
import TextInput from './TextInput';
import Button from './Button';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); // Nuevo campo
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) && email.endsWith('.com');
  };

  const validatePassword = (password) => {
    const isLongEnough = password.length >= 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return isLongEnough && hasUpperCase && hasNumber && hasSpecialChar;
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setMessage('El email debe contener "@" y terminar en ".com"');
      return;
    }

    if (!validatePassword(password)) {
      setMessage('La contraseña debe tener al menos 6 caracteres, una mayúscula, un número y un carácter especial.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name: name || 'Invitado' }) // se envía name
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('¡Registro exitoso!');
      } else {
        setMessage(data.message || 'Error al registrar');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      setMessage('Error al conectar con el servidor');
    }
  };

  return (
    <div className="container">
      <h2>Registrarse</h2>

      <TextInput
        label="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
      />

      <TextInput
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
      />

      <TextInput
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
      />

      <TextInput
        label="Confirmar Contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        name="confirmPassword"
      />

      <Button label="Registrarse" onClick={handleSubmit} />

      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default Register;

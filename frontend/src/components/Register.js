import React, { useState } from 'react';
import '../App.css';
import TextInput from './TextInput';
import Button from './Button';

const Register = () => {
  const [email, setEmail] = useState('');
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

  const handleSubmit = () => {
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

    setMessage('¡Registro exitoso!');
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

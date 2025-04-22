import React from 'react';

// Componente Button
// Recibe las propiedades: label (Texto), onClick (Función cuando clickas)
const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

import React from 'react';

// Componente TextInput
// Recibe las propiedades: label, value, onChange, type, y name
const TextInput = ({ label, value, onChange, type, name }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        className="text-input"
        required
      />
    </div>
  );
};

export default TextInput;

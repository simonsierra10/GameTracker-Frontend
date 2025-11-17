import React, { useState } from 'react';
import './FormularioReseña.css';

const FormularioReseña = ({ agregarReseña }) => {
  const [usuario, setUsuario] = useState('');
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaReseña = {
      usuario,
      texto,
      fecha: new Date().toLocaleDateString()
    };
    agregarReseña(nuevaReseña);
    setUsuario('');
    setTexto('');
  };

  return (
    <form className="formulario-reseña" onSubmit={handleSubmit}>
      <h4>Agregar Reseña</h4>
      <input
        type="text"
        placeholder="Tu nombre"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        required
      />
      <textarea
        placeholder="Escribe tu reseña"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioReseña;

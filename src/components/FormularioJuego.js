import React, { useState } from 'react';
import './FormularioJuego.css';

const FormularioJuego = ({ agregarJuego }) => {
  const [titulo, setTitulo] = useState('');
  const [portada, setPortada] = useState('');
  const [puntuacion, setPuntuacion] = useState('');
  const [horasJugadas, setHorasJugadas] = useState('');
  const [completado, setCompletado] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!titulo || !portada || !puntuacion || !horasJugadas) {
      setError('Por favor completa todos los campos.');
      return;
    }

    const nuevoJuego = {
      titulo: titulo.trim(),
      portada: portada.trim(),
      puntuacion: parseFloat(puntuacion),
      horasJugadas: parseInt(horasJugadas),
      completado,
      reseñas: []
    };

    agregarJuego(nuevoJuego);

    // Limpiar formulario
    setTitulo('');
    setPortada('');
    setPuntuacion('');
    setHorasJugadas('');
    setCompletado(false);
    setError('');
  };

  return (
    <div className="formulario-juego-container">
      <form className="formulario-juego" onSubmit={handleSubmit}>
        <h3>➕ Agregar Juego</h3>

        {error && <p className="mensaje-error">{error}</p>}

        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL Portada"
          value={portada}
          onChange={(e) => setPortada(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Puntuación"
          value={puntuacion}
          onChange={(e) => setPuntuacion(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Horas Jugadas"
          value={horasJugadas}
          onChange={(e) => setHorasJugadas(e.target.value)}
          required
        />
        <label className="checkbox-completado">
          <input
            type="checkbox"
            checked={completado}
            onChange={(e) => setCompletado(e.target.checked)}
          />
          ¿Juego completado?
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default FormularioJuego;

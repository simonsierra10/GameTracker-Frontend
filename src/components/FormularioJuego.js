import React, { useState } from 'react';
import './FormularioJuego.css';

const FormularioJuego = ({ agregarJuego }) => {
  const [titulo, setTitulo] = useState('');
  const [portada, setPortada] = useState('');
  const [puntuacion, setPuntuacion] = useState('');
  const [horasJugadas, setHorasJugadas] = useState('');
  const [completado, setCompletado] = useState(false); // ← nuevo estado

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoJuego = {
      id: Date.now(),
      titulo,
      portada,
      puntuacion: parseFloat(puntuacion),
      horasJugadas: parseInt(horasJugadas),
      completado, // ← se usa el valor del checkbox
      reseñas: []
    };
    agregarJuego(nuevoJuego);
    setTitulo('');
    setPortada('');
    setPuntuacion('');
    setHorasJugadas('');
    setCompletado(false); // ← reinicia el checkbox
  };

  return (
    <div className="formulario-juego-container">
      <form className="formulario-juego" onSubmit={handleSubmit}>
        <h3>➕ Agregar Juego</h3>
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

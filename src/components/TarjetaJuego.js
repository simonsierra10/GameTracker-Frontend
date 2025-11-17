import React, { useState } from 'react';
import ListaReseñas from './ListaReseñas';
import FormularioReseña from './FormularioReseña';
import './TarjetaJuego.css';

const obtenerColorPuntuacion = (p) => {
  if (p >= 85) return '#4CAF50';
  if (p >= 70) return '#FF9800';
  return '#F44336';
};

const TarjetaJuego = ({ juego, eliminarJuego, editarJuego }) => {
  const [reseñas, setReseñas] = useState(juego.reseñas || []);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tituloEditado, setTituloEditado] = useState(juego.titulo);

  const agregarReseña = (nuevaReseña) => {
    setReseñas([...reseñas, nuevaReseña]);
  };

  const guardarEdicion = () => {
    editarJuego(juego.id, tituloEditado);
    setModoEdicion(false);
  };

  return (
    <div className="tarjeta-juego">
      <img src={juego.portada || 'https://via.placeholder.com/150'} alt={juego.titulo} />
      {modoEdicion ? (
        <>
          <input
            type="text"
            value={tituloEditado}
            onChange={(e) => setTituloEditado(e.target.value)}
          />
          <button onClick={guardarEdicion}>Guardar</button>
        </>
      ) : (
        <h3>{juego.titulo}</h3>
      )}
      <p style={{ color: obtenerColorPuntuacion(juego.puntuacion) }}>
        Puntuación: ⭐ {juego.puntuacion}
      </p>
      <div className="barra-puntuacion">
        <div style={{ width: `${juego.puntuacion * 20}%` }}></div>
      </div>
      <span className="etiqueta-veredicto">
        {juego.puntuacion >= 85 ? 'Excelente' :
        juego.puntuacion >= 70 ? 'Bueno' : 'Regular'}
      </span>
      <p>Horas jugadas: {juego.horasJugadas}</p>
      <ListaReseñas reseñas={reseñas} />
      <FormularioReseña agregarReseña={agregarReseña} />
      <div className="botones">
        <button onClick={() => setModoEdicion(!modoEdicion)}>Editar</button>
        <button className="eliminar" onClick={() => eliminarJuego(juego.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default TarjetaJuego;

import React, { useState } from 'react';
import ListaReseñas from './ListaReseñas';
import FormularioReseña from './FormularioReseña';
import './TarjetaJuego.css';

const obtenerColorPuntuacion = (p) => {
  if (p >= 85) return '#4CAF50';
  if (p >= 70) return '#FF9800';
  return '#F44336';
};

const TarjetaJuego = ({ juego, eliminarJuego, editarJuego, agregarReseña }) => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tituloEditado, setTituloEditado] = useState(juego.titulo);
  const [puntuacionEditada, setPuntuacionEditada] = useState(juego.puntuacion);
  const [horasEditadas, setHorasEditadas] = useState(juego.horasJugadas);
  const [completadoEditado, setCompletadoEditado] = useState(juego.completado);

  const guardarEdicion = () => {
    editarJuego(juego.id, {
      titulo: tituloEditado,
      puntuacion: parseFloat(puntuacionEditada),
      horasJugadas: parseInt(horasEditadas),
      completado: completadoEditado
    });
    setModoEdicion(false);
  };

  const handleAgregarReseña = (nuevaReseña) => {
    agregarReseña(juego.id, nuevaReseña);
  };

  return (
    <div className="tarjeta-juego">
      <img
        src={juego.portada || 'https://via.placeholder.com/150'}
        alt={juego.titulo}
        className="portada-juego"
      />

      {modoEdicion ? (
        <div className="modo-edicion">
          <input
            type="text"
            value={tituloEditado}
            onChange={(e) => setTituloEditado(e.target.value)}
            placeholder="Título"
          />
          <input
            type="number"
            value={puntuacionEditada}
            onChange={(e) => setPuntuacionEditada(e.target.value)}
            placeholder="Puntuación"
          />
          <input
            type="number"
            value={horasEditadas}
            onChange={(e) => setHorasEditadas(e.target.value)}
            placeholder="Horas jugadas"
          />
          <label className="checkbox-completado">
            <input
              type="checkbox"
              checked={completadoEditado}
              onChange={(e) => setCompletadoEditado(e.target.checked)}
            />
            ¿Juego completado?
          </label>
          <button onClick={guardarEdicion}>Guardar</button>
        </div>
      ) : (
        <>
          <h3>{juego.titulo}</h3>
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
          <p className={juego.completado ? "estado completado" : "estado pendiente"}>
            {juego.completado ? "✅ Completado" : "⏳ Sin completar"}
          </p>
        </>
      )}

      <ListaReseñas reseñas={juego.reseñas} />
      <FormularioReseña agregarReseña={handleAgregarReseña} />

      <div className="botones">
        <button onClick={() => setModoEdicion(!modoEdicion)}>
          {modoEdicion ? "Cancelar" : "Editar"}
        </button>
        <button className="eliminar" onClick={() => eliminarJuego(juego._id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TarjetaJuego;

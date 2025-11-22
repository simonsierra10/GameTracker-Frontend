import React, { useState } from 'react';
import TarjetaJuego from './TarjetaJuego';
import './BibliotecaJuegos.css';

const BibliotecaJuegos = ({ juegos, setJuegos, eliminarJuego, editarJuego }) => {
  const [busqueda, setBusqueda] = useState('');

  const juegosFiltrados = juegos.filter(j =>
    j.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const mejoresJuegos = juegosFiltrados.filter(j => j.puntuacion > 85);

  const agregarReseña = (idJuego, nuevaReseña) => {
    const juegosActualizados = juegos.map(j =>
      j.id === idJuego ? { ...j, reseñas: [...j.reseñas, nuevaReseña] } : j
    );
    setJuegos(juegosActualizados);
  };

  return (
    <div className="biblioteca-juegos">
      <h2>🎮 Mi Biblioteca de Juegos</h2>
      <input
        type="text"
        placeholder="Buscar juego..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="buscador-juegos"
      />
      <div className="lista-juegos">
        {juegosFiltrados.map(juego => (
          <TarjetaJuego
            key={juego.id}
            juego={juego}
            eliminarJuego={eliminarJuego}
            editarJuego={editarJuego}
            agregarReseña={agregarReseña}
          />
        ))}
      </div>
      {mejoresJuegos.length > 0 && (
        <section id="mejores" className="seccion-ajustada">
          <h2>🏆 Mejores Juegos</h2>
          <div className="lista-juegos">
            {mejoresJuegos.map(juego => (
              <TarjetaJuego
                key={juego.id}
                juego={juego}
                eliminarJuego={eliminarJuego}
                editarJuego={editarJuego}
                agregarReseña={agregarReseña}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BibliotecaJuegos;

import React, { useState } from 'react';
import TarjetaJuego from './TarjetaJuego';
import './BibliotecaJuegos.css';

const BibliotecaJuegos = ({ juegos, eliminarJuego, editarJuego }) => {
  const [busqueda, setBusqueda] = useState('');

  const juegosFiltrados = juegos.filter(j =>
    j.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const mejoresJuegos = juegosFiltrados.filter(j => j.puntuacion > 85);

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
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BibliotecaJuegos;

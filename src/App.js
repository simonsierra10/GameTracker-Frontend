import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FormularioJuego from './components/FormularioJuego';
import EstadisticasPersonales from './components/EstadisticasPersonales';
import BibliotecaJuegos from './components/BibliotecaJuegos';
import './App.css';

function App() {
  const [juegos, setJuegos] = useState([
    {
      id: 1,
      titulo: 'Super Mario Odyssey',
      portada: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg',
      puntuacion: 96,
      horasJugadas: 15,
      completado: false,
      reseñas: []
    },
    {
      id: 2,
      titulo: 'The Legend of Zelda: Breath of the Wild',
      portada: 'https://pics.filmaffinity.com/zeruda_no_densetsu_buresu_obu_za_wairudo-907119617-large.jpg',
      puntuacion: 98,
      horasJugadas: 40,
      completado: true,
      reseñas: []
    }
  ]);

  const agregarJuego = (nuevoJuego) => {
    setJuegos([...juegos, nuevoJuego]);
  };

  const eliminarJuego = (id) => {
    setJuegos(juegos.filter((juego) => juego.id !== id));
  };

  const editarJuego = (id, nuevoTitulo) => {
    setJuegos(juegos.map(j =>
      j.id === id ? { ...j, titulo: nuevoTitulo } : j
    ));
  };

  return (
    <div className="app-container">
      <Navbar />
      <section id="agregar" className="seccion-ajustada">
        <FormularioJuego agregarJuego={agregarJuego} />
      </section>
      <section id="estadisticas" className="seccion-ajustada">
        <EstadisticasPersonales juegos={juegos} />
      </section>
      <section id="biblioteca" className="seccion-ajustada">
        <BibliotecaJuegos
          juegos={juegos}
          eliminarJuego={eliminarJuego}
          editarJuego={editarJuego}
        />
      </section>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FormularioJuego from './components/FormularioJuego';
import EstadisticasPersonales from './components/EstadisticasPersonales';
import BibliotecaJuegos from './components/BibliotecaJuegos';
import './App.css';

function App() {
  const [juegos, setJuegos] = useState([]);

  // Cargar juegos desde el backend
  useEffect(() => {
    fetch('http://localhost:5000/api/juegos')
      .then(res => res.json())
      .then(data => setJuegos(data));
  }, []);

  const agregarJuego = async (nuevoJuego) => {
    const res = await fetch('http://localhost:5000/api/juegos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoJuego)
    });
    const juegoGuardado = await res.json();
    setJuegos([...juegos, juegoGuardado]);
  };

  const eliminarJuego = async (id) => {
  await fetch(`http://localhost:5000/api/juegos/${id}`, {
    method: 'DELETE'
  });
  setJuegos(juegos.filter((juego) => juego._id !== id));
};


  const editarJuego = (id, datosEditados) => {
    setJuegos(juegos.map(j =>
      j._id === id ? { ...j, ...datosEditados } : j
    ));
  };

  const agregarReseña = async (idJuego, nuevaReseña) => {
    const res = await fetch(`http://localhost:5000/api/juegos/${idJuego}/resenas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevaReseña)
    });
    const juegoActualizado = await res.json();
    setJuegos(juegos.map(j =>
      j._id === idJuego ? juegoActualizado : j
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
          setJuegos={setJuegos}
          eliminarJuego={eliminarJuego}
          editarJuego={editarJuego}
          agregarReseña={agregarReseña}
        />
      </section>
    </div>
  );
}

export default App;

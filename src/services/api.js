const API_URL = 'http://localhost:5000/api/juegos';

export const obtenerJuegos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const agregarJuego = async (juego) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(juego)
  });
  return res.json();
};

export const editarJuego = async (id, datos) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return res.json();
};

export const eliminarJuego = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

export const agregarReseña = async (id, reseña) => {
  const res = await fetch(`${API_URL}/${id}/reseñas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reseña)
  });
  return res.json();
};
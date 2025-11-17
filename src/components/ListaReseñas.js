import React from 'react';
import './ListaReseñas.css';

const ListaReseñas = ({ reseñas }) => {
  return (
    <div className="lista-reseñas">
      <h4>Reseñas</h4>
      {reseñas.length === 0 ? (
        <p>No hay reseñas aún.</p>
      ) : (
        reseñas.map((r, index) => (
          <div key={index} className="reseña">
            <p><strong>{r.usuario}</strong>: {r.texto}</p>
            <small>{r.fecha}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default ListaReseñas;

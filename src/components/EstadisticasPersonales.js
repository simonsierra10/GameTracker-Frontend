import React from 'react';
import './EstadisticasPersonales.css';

const EstadisticasPersonales = ({ juegos }) => {
  const totalJuegos = juegos.length;
  const completados = juegos.filter(j => j.completado).length;
  const horasTotales = juegos.reduce((acc, j) => acc + j.horasJugadas, 0);
  const promedioPuntuacion = totalJuegos > 0
    ? (juegos.reduce((acc, j) => acc + j.puntuacion, 0) / totalJuegos).toFixed(1)
    : 0;

  return (
    <div className="estadisticas-personales">
      <h2>📊 Estadísticas Personales</h2>
      <p>Total de juegos: {totalJuegos}</p>
      <p>Completados: {completados}</p>
      <p>Horas jugadas: {horasTotales}</p>
      <p>Puntuación promedio: ⭐ {promedioPuntuacion}</p>
    </div>
  );
};

export default EstadisticasPersonales;

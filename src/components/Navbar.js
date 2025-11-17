import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-logo">🎮 GameTracker</div>
        <ul className="navbar-links">
          <li><a href="#agregar">Agregar Juego</a></li>
          <li><a href="#estadisticas">Estadísticas</a></li>
          <li><a href="#biblioteca">Biblioteca</a></li>
          <li><a href="#mejores">Mejores Juegos</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;

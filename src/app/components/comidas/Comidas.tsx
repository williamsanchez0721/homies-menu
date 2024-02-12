// components/Comidas.tsx
'use client'
import React, { useState, useEffect } from 'react';
import './comidas.module.css'; // Importa los estilos de Comidas

interface ComidasProps {
  images: string[];
}

const Comidas: React.FC<ComidasProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="comidas"> {/* Utiliza la clase 'comidas' directamente */}
      <div className="manual-carousel">
        <div className="carousel-inner">
          {images.map((src, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <img src={src} alt={`Comida ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={goToPrevSlide}>
          Prev
        </button>
        <button className="carousel-control-next" onClick={goToNextSlide}>
          Next
        </button>
      </div>
      {/* Otros elementos del componente Comidas */}
    </div>
  );
};

export default Comidas;

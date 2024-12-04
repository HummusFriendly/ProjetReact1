import React, { useState } from 'react';
import './Gallery.css';

function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  if (pictures.length === 1) {
    return (
      <div className="gallery-container">
        <img
          src={pictures[0]}
          alt="Logement"
          className="gallery-image"
        />
      </div>
    );
  }

  return (
    <div className="gallery-container">
      <button onClick={handlePrev} className="gallery-button prev">
        &lt;
      </button>
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="gallery-image"
      />
      <button onClick={handleNext} className="gallery-button next">
        &gt;
      </button>
    </div>
  );
}

export default Gallery;

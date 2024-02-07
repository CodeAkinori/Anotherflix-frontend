import React, { useState } from 'react';
import './style.css'

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : children.length - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < children.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="carousel">
      <button onClick={goPrevious}>Anterior</button>
      <div className="carousel-content">{children[activeIndex]}</div>
      <button onClick={goNext}>Próximo</button>
    </div>
  );
};

export default Carousel;

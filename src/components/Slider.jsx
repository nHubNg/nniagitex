import React, { useState, useEffect } from 'react';
import '../App.css';
import { images } from './images';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [images.hero, images.sector, images.group2]; 
  const slideInterval = 3000; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='slider-container'>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            display: index === currentSlide ? 'flex' : 'none',
            justifyContent: 'center',
          }}
          className='slide'
        >
          <img src={slide} alt={`Slide ${index}`} className='image w-[60%]' />
        </div>
      ))}
    </div>
  );
};

export default Slider;

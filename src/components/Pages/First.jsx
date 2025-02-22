import React, { useState, useEffect } from 'react';
import Home1 from '../Assests/Pics/HOME1.jpg';
import Home2 from '../Assests/Pics/HOME2.jpg';
import './First.css';

const First = () => {
  const images = [Home1, Home2]; // Array of images
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-section">
      <div
        className="hero-slider"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      />
      <div className="hero-content">
        <h1>Leading Engineering Consultants in India</h1>
        <p>From concept to commissioning, Avant Garde India supports its clients with integrated engineering consultancy services.</p>
        <div className="hero-buttons">
          <button>REQUEST A CALL BACK</button>
          <button>OUR SERVICES</button>
        </div>
       
      </div>
      <div className="blocks">
          <div className="block"><h1> Excellence</h1>
          <p>34+ years of excellence in engineering design and consulting.</p></div>
          <div className="block"><h1>Versatile</h1>
          <p>Wide industry expertise across sectors and varied industry applications.</p></div>
          <div className="block"><h1>Award-Winning</h1>
          <p>Recognized by renowned Government & Independent entities.</p></div>
          <div className="block"><h1>Sustainable</h1>
          <p>Staying on top of ESG regulatory frameworks to help our clients comply.</p></div>
        </div>
      
    </div>
  );
};

export default First;

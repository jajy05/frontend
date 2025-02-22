import React from 'react';
import img1 from '../Assests/Pics/img1.webp';
import img2 from '../Assests/Pics/img2.webp';
import img3 from '../Assests/Pics/img3.webp';
import img4 from '../Assests/Pics/img4.webp';
import img5 from '../Assests/Pics/img5.webp';
import img6 from '../Assests/Pics/img6.webp';
import './Sector.css';

const Sector = () => {
  return (
    <div className='sec'>
      <div className='info'>
        <h1>Our Experience Across Sectors</h1>
        <p>For over 34+ years, Avant-Garde India has been serving multiple industries that work on Energy, Water, Oil, and other FMCG products. Browse through our expertise and real-world case studies across the engineering value chain in multiple business verticals.</p>
      </div>
      <div className='image-container'>
        <div className='sector-item'>
          <img src={img1} alt="Fertilizer" />
          <div className='label'>Fertilizer</div>
          <div className='view-details'>View Details</div>
        </div>
        <div className='sector-item'>
          <img src={img2} alt="Power" />
          <div className='label'>Power</div>
          <div className='view-details'>View Details</div>
        </div>
        <div className='sector-item'>
          <img src={img3} alt="Co-Generation" />
          <div className='label'>Co-Generation</div>
          <div className='view-details'>View Details</div>
        </div>

        <div className='sector-item'>
          <img src={img4} alt="Distillers" />
          <div className='label'>Distillers</div>
          <div className='view-details'>View Details</div>
        </div>
        <div className='sector-item'>
          <img src={img5} alt="Solar" />
          <div className='label'>Solar</div>
          <div className='view-details'>View Details</div>
        </div>
        <div className='sector-item'>
          <img src={img6} alt="Water" />
          <div className='label'>Water</div>
          <div className='view-details'>View Details</div>
        </div>
      </div>
    </div>
  );
};

export default Sector;

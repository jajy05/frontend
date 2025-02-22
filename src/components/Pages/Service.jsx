import React from 'react';
import './Service.css';
import img1 from '../Assests/Pics/analytics.webp';
import img2 from '../Assests/Pics/blueprint.webp';
import img3 from '../Assests/Pics/boiler-1.webp';
import img4 from '../Assests/Pics/boiler.webp';
import img5 from '../Assests/Pics/case-study.webp';
import img6 from '../Assests/Pics/computer.webp';
import img7 from '../Assests/Pics/engineering.webp';
import img8 from '../Assests/Pics/feasiblity.webp';
import img9 from '../Assests/Pics/inspection.webp';
import img10 from '../Assests/Pics/settings.webp';
import img11 from '../Assests/Pics/solution.webp';

const Service = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="container-1">
          <div className="service-header">
            <h1>What We Offer</h1>
            <p>Engineering, Design, and Consulting Services to elevate your projects.</p>
          </div>
          <div className="about">
            <p>
              Avant-Garde is a professionally managed organization with over 30 years of service excellence in 
              Concept-to-Commissioning EPCM (Engineering, Procurement and Construction Management) Services. 
              Avant-Garde is amongst the few engineering organizations providing total engineering solutions in all 
              disciplines for complete project implementation under one roof.
            </p>
          </div>
        </div>
        <div className="heads">
            <h1>All services</h1>
          </div>

        <div className="service-content">
          
         
          <div className="service-card">
            <div className="card-icon">
              <i className="fas fa-cogs"></i>
            </div>
            
            <ul>
              <li><img src={img1} alt="" /> Boiler Design</li>
              <li><img src={img2} alt="" /> Boiler Study</li>
              <li><img src={img3} alt="" /> Commissioning Services</li>
              <li><img src={img4} alt="" /> Construction Supervision</li>
              <li><img src={img5} alt="" /> Detailed Engineering</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
           
            <ul>
              <li><img src={img6} alt="" /> Energy Audits</li>
              <li><img src={img7} alt="" /> Engineering & Supply</li>
              <li><img src={img8} alt="" /> EPCM</li>
              <li><img src={img9} alt="" /> Procurement Services</li>
              <li><img src={img10} alt="" /> Project Management Services</li>
            </ul>
          </div>

         
          <div className="service-card">
            <div className="card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
           
            <ul>
              <li><img src={img11} alt="" /> Project Studies</li>
              <li><img src={img10} alt="" /> Residual Life Assessment Studies</li>
              <li><img src={img1} alt="" /> Techno-Economical Feasibility Study</li>
              <li><img src={img1} alt="" /> Third-Party Inspection Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="service-header">
          <h1>What We Offer</h1>
          <p>Engineering, Design, and Consulting Services to elevate your projects.</p>
        </div>
        <div className="service-content">
          <div className="service-card">
            <div className="card-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Engineering Services</h3>
            <ul>
              <li>Boiler Design</li>
              <li>Boiler Study</li>
              <li>Commissioning Services</li>
              <li>Construction Supervision</li>
              <li>Detailed Engineering</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="card-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Consulting Services</h3>
            <ul>
              <li>Energy Audits</li>
              <li>Engineering & Supply</li>
              <li>EPCM</li>
              <li>Procurement Services</li>
              <li>Project Management Services</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Specialized Services</h3>
            <ul>
              <li>Project Studies</li>
              <li>Residual Life Assessment Studies</li>
              <li>Techno-Economical Feasibility Study</li>
              <li>Third-Party Inspection Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

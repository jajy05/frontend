import React from "react";
import "./Aboutus.css";
import home3 from "../Assests/Pics/HOME3.webp";

const Aboutus = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={home3} alt="About Us" />
          <div className="experience-block">
            <span className="experience-text">
              <span className="highlight">34+</span> Years of Experience
            </span>
          </div>
        </div>
        <div className="about-text">
          <h1>WHO WE ARE</h1>
          <h2>Engineers, Designers, and Consultants</h2>
          <p>
            Incepted in the year 1990 by four technocrats, who have chiselled themselves during 
            their tenure with BHEL, India, Avant-Garde is one of the leading Engineering and Project 
            Management Consultants in India for the process and power industries. Avant-Garde is one 
            of the well-known IBR Certified Agencies For RLA. We are also an ISO 9001: 2015 certified 
            organization.
          </p>
          <a href="/about" className="more-about-btn">More About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

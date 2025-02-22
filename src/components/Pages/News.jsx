
import './News.css'

import React, { useEffect, useState } from "react";


const NewsEvents = () => {
  const newsList = [
    "Fetches News & Events from an API",
    "Displays each event with title, description, and link",
    "Organized in separate JSX files for maintainability",
  ];

  return (
    <div className="news-container">
      <span className="news-title">📰 News & Events:</span>
      <div className="news-ticker">
        <div className="ticker-content">
          {newsList.map((item, index) => (
            <span key={index} className="ticker-item">
              {item} •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;

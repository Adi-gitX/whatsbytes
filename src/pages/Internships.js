// src/pages/Internships.js
import React from 'react';
import { Link } from 'react-router-dom';
import internship404 from './ErrorAsserts/Internship404.png';
import './Internships.css';

const Internships = () => {
  return (
    <div className="internships-page">
      <div className="error-page">
        <img src={internship404} alt="Internships 404" className="error-image" />
        <Link to="/" className="home-button">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Internships;
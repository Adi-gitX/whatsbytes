import React from 'react';
import { Link } from 'react-router-dom';
import dashboard404 from './ErrorAsserts/Dashboard404.png';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="error-page">
        <img src={dashboard404} alt="Dashboard 404" className="error-image" />
        <Link to="/" className="home-button">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
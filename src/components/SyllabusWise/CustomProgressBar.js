// CustomProgressBar.js
import React from "react";
import PropTypes from "prop-types";
import "./CustomProgressBar.css";

const CustomProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%`, backgroundColor: "#438AF6" }}
      ></div>
    </div>
  );
};

CustomProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CustomProgressBar;
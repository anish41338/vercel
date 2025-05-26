import React from 'react';
import '../styles/Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <circle id="loader-circle" cx="40" cy="40" r="32"></circle>
        </svg>
        <div className="loader-text">
          <span>A</span>
          <span>N</span>
          <span>I</span>
          <span>S</span>
          <span>H</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
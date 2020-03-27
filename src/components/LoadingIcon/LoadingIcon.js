import React from 'react';
import './LoadingIcon.css';

function LoadingIcon(props) {
  return (
    <div className="loading-icon-container">
      <div className="loading-icon"></div>
      <div className="loading-icon"></div>
      <div className="loading-icon"></div>
    </div>
  );
}

export default LoadingIcon;
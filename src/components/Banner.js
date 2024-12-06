import React from 'react';
import './Banner.css';

function Banner({ picture, text }) {
  return (
    <div className="banner-container">
      <img src={picture} alt="Home Banner" className="home-banner" />
      <div className="banner-text">{text}</div>
    </div>
  );
}

export default Banner;

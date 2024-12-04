import React from 'react';
import './Footer.css';
import logo from '../assets/footer.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo du projet" className="footer-logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

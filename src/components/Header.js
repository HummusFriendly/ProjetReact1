import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo du projet" />
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/about" className="nav-link">À Propos</Link>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../assets/404.png';
import './Error.css';

function Error() {
  return (
    <div>

      <div className="error-container">
        <img src={ErrorImage} alt="Erreur 404" className="error-image" />
        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error-link"> <div className="error-button">Retourner à l'accueil</div>
        </Link>
      </div>
    </div>
  );
}

export default Error;

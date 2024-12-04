import React, { useState } from 'react';
import './Collapse.css';
import downIcon from '../assets/down.png';
import topIcon from '../assets/top.png';

export function Collapse({ title, contents }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-description">
      <div className="title-container">
        <p>{title}</p>
        <button onClick={toggleCollapse} className="toggle-button">
          <img
            src={isOpen ? downIcon : topIcon}
            alt={isOpen ? 'Fermer' : 'Ouvrir'}
            className="toggle-icon"
          />
        </button>
      </div>
      <div className={`equipement ${isOpen ? 'open' : 'closed'}`}>
        {typeof contents === 'string' ? (
          <div>{contents}</div>
        ) : (
          contents.map((content, index) => <div key={index}>{content}</div>)
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Gallery from '../components/Gallery';
import './Details.css';
import star from '../assets/star.png';
import starRed from '../assets/star-red.png';
import { Collapse } from '../components/Collapse';

function Details() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="*" />;
  }

  return (
    <div className="details-container">
      <div className="details-banner">
        <Gallery pictures={logement.pictures} />
      </div>

      <div className="details-info">
        <div className="details-title-host">
          <h1>{logement.title}</h1>
          <div className="right-style">
            <p className="host-name">{logement.host.name}</p>
            <img src={logement.host.picture} alt="pdp" className="host-img" />
          </div>
        </div>
        <p className="details-location">{logement.location}</p>
      </div>

      <div className="details-tags-stars">
        <div className="details-tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <ul className="details-stars">
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index}>
              {index < parseInt(logement.rating) ? (
                <img src={starRed} alt="étoiles" className="stars-style" />
              ) : (
                <img src={star} alt="étoiles" className="stars-style" />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='collapse-container'>
      <Collapse title={"Description"} contents={[logement.description]}/>
      <Collapse title={"Equipement"} contents={logement.equipments}/>
      </div>
    </div>
  );
}

export default Details;

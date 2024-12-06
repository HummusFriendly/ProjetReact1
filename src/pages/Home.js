import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logements from '../data/logements.json';
import HomeImage from '../assets/HomeImage.png';
import './Home.css';
import Banner from '../components/Banner';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(logements);
  }, []);

  return (
    <div>
        <Banner picture={HomeImage} text={"Chez vous, partout et ailleurs"} />
          
      <div className="home-grid">
        {data.map((logement) => (
          <div className="home-card" key={logement.id}>
            <Link to={`/details/${logement.id}`} className="image-link">
              <div className="image-container">
                {logement.cover ? (
                  <img src={logement.cover} alt={logement.title} />
                ) : (
                  <div className="placeholder"></div>
                )}
                <h3>{logement.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

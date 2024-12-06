import React from 'react';
import AboutImage from '../assets/AboutImage.png';
import './About.css';
import { Collapse } from '../components/Collapse';
import Banner from '../components/Banner';

function About() {
  return (
    <div>
      <Banner picture={AboutImage} />
      <div className="about-container">
        <Collapse className="about-collapse" title="Fiabilité" contents="Les annonces postées sur texte texte texte texte sont texte texte texte." />
        <Collapse className="about-collapse" title="Respect" contents="Les annonces postées sur texte texte texte texte sont texte texte texte." />
        <Collapse className="about-collapse" title="Service" contents="Les annonces postées sur texte texte texte texte sont texte texte texte." />
        <Collapse className="about-collapse" title="Sécurité" contents="Les annonces postées sur texte texte texte texte sont texte texte texte." />
      </div>
    </div>
  );
}

export default About;

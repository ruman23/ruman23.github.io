import React from 'react';
import './Home.css';
import rumanSquare from '../assets/rumanSquare.png';

function Home() {
  return (
    <section id="home" className="section-container">
      <img src={rumanSquare} alt="Ruman" className="responsive-image" />
    </section>
  );
}

export default Home;

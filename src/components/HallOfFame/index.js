import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import trofeu from '../../assets/trofeu.png'
import casa from '../../assets/casa.png'

function HallOfFame() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('entries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const name = capitalizeFirstLetter(localStorage.getItem('name'))

  return (
    <div className='content hall'>
      <Link to="/" className='link-home'>
        <img src={casa} className="home-img" />
      </Link>

      <div className='first-access-text'>
        <div className='title'>
          <img src={trofeu} className='title-image'/> 
          <h1>Hall da Fama</h1>
        </div>
        <p>{name}, você é tão incrível...</p>
      </div>

      {entries.length === 0 ? (
          <Link to="/spill-it-out">
            <p className='empty-hall'>Não aceito essa modéstia não, hein. Vá logo registrar suas conquistas</p>
        </Link>
      ) : (
        <div className='card-container'>
          {entries.map((entry, index) => (
            <div className='card'>
                <img src={trofeu} className='card-image'/> 
                <div className='card-text'>{entry}</div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HallOfFame;

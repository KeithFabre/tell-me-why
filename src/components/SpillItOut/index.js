import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import raio from '../../assets/raio.png';
import fogo from '../../assets/fogo.png';
import casa from '../../assets/casa.png'

function SpillItOut() {
  const [input, setInput] = useState('');
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('entries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [showRaio, setShowRaio] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const name = capitalizeFirstLetter(localStorage.getItem('name'));

  const handleSubmit = () => {
    if (input.trim()) {
      const newEntries = [...entries, input];
      setEntries(newEntries);
      localStorage.setItem('entries', JSON.stringify(newEntries));
      setInput('');

      // Show the "raio" image
      setShowRaio(true);

      // Hide the "raio" image after 1.5 seconds
      setTimeout(() => {
        setShowRaio(false);
      }, 1500);
    }
  };

  return (
    <div className='content spill'>
        <Link to="/" className='link-home'>
        <img src={casa} alt="casa" className='home-img'/>
      </Link>
      <div className='first-access-text'>
        <div className='title'>
          <img src={raio} alt="raio" className='title-image'/> 
          <h1>Põe pra fora</h1>
        </div>
        <p>{name}, hora de celebrar suas vitórias! <br /> (pequenas, médias ou grandes)</p>
      </div>

      <div className='first-access-input'>
        {showRaio && <img src={fogo} alt="fogo" className='raio-image' />} {/* Animated Image */}
        <input 
          type="text" 
          placeholder="Sem modéstia" 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <button className='button-30' onClick={handleSubmit}>Celebrar</button>
      </div>
    </div>
  );
}

export default SpillItOut;

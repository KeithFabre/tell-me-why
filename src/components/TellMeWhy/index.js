import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import casa from '../../assets/casa.png'

function SpillItOut() {
  const [input, setInput] = useState('');
  const [goals, setGoals] = useState(() => {
    const savedgoals = localStorage.getItem('goals');
    return savedgoals ? JSON.parse(savedgoals) : [];
  });
  const [showRaio, setShowRaio] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const name = capitalizeFirstLetter(localStorage.getItem('name'));

  const handleSubmit = () => {
    if (input.trim()) {
      const newgoals = [...goals, input];
      setGoals(newgoals);
      localStorage.setItem('goals', JSON.stringify(newgoals));
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
    <div className='content tell'>
        <Link to="/" className='link-home'>
        <img src={casa} className='home-img'/>
      </Link>
      <div className='first-access-text'>
        <div className='title'>
          <img src={logo} className='title-image'/> 
          <h1>tell me why</h1>
        </div>
        <p>{name}, o que você quer fazer? <br /> Te ajudo a recordar como você é capaz! <br />(assim que esta funcionalidade estiver pronta)</p>

      </div>

      <div className='first-access-input'>
        {/* {showRaio && <img src={logo} className='raio-image tell' alt='Raio' />} Animated Image */}
        <input 
          type="text" 
          placeholder="Quero muito fazer isso aqui: " 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <button className='button-30' onClick={handleSubmit}>Pronto, falei</button>
      </div>
    </div>
  );
}

export default SpillItOut;

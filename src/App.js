import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import TellMeWhy from './components/TellMeWhy';
import SpillItOut from './components/SpillItOut';
import HallOfFame from './components/HallOfFame';

import logo from './assets/logo.png';
import casa from './assets/casa.png'

import './App.css'

function App() {
  const [name, setName] = useState(localStorage.getItem('name') || '');

  const handleNameSubmit = (enteredName) => {
    setName(enteredName);
    localStorage.setItem('name', enteredName);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={name ? <WelcomePage /> : <NameInput onSubmit={handleNameSubmit} />} />
          <Route path="/tell-me-why" element={<TellMeWhy setName={setName} />} />
          <Route path="/spill-it-out" element={<SpillItOut />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
        </Routes>
      </div>
    </Router>
  );
}

function WelcomePage() {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const name = capitalizeFirstLetter(localStorage.getItem('name'));
  
  return (
    <div className='content'>

      <Link to="/" className='link-home'>
        <img src={casa} className='home-img'/>
      </Link>
      
      {/* acesso regular */}
      <div className='first-access-text'>
        <div className='title'>
          <img src={logo} className='title-image'/> 
          <h1>tell me why</h1>
        </div>
        <p>Proibido esquecer que você é capaz!</p>
      </div>


      <p className='subheader'>{name}, aceita uma dose a mais de confiança?</p>

      <nav>
        <div className='home-link-container'>
          {/* <li><Link to="/tell-me-why">Tell Me Why</Link></li> */} 
          <Link to="/spill-it-out" className='link'>
          <div className='home-link'>Registre Suas Conquistas</div>
          </Link>
          <Link to="/hall-of-fame" className='link'><div className='home-link'>Veja seu Hall de Vitórias</div></Link>
          <Link to="/tell-me-why" className='link'><div className='home-link inactive'>Te Digo Porque Sim - Em Breve!</div></Link>
        </div>
      </nav>
    </div>
  );
}

function NameInput({ onSubmit }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = () => {
    if (inputName.trim()) {
      onSubmit(inputName);
    }
  };

  // primeiro acesso
  return (
    <div className='first-access-container'>
      <div className='first-access-text'>
        <div className='title'>
          <img src={logo} className='first-access-image'/> 
          <h1>tell me why</h1>
        </div>
        <p>Proibido esquecer que você é capaz, sim!</p>
      </div>


      <div className='first-access-input'>
        <input 
          type="text" 
          placeholder="Pra começar, qual o seu nome?" 
          value={inputName} 
          onChange={(e) => setInputName(e.target.value)} 
        />
        <button className='button-30' onClick={handleSubmit}>Pronto</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import CountryComponent from './CountryComponent';

function App() {
  const countryList = ['mexico', 'spain', 'japan', 'canada', 'brazil']; // Lista de países
  const [currentCountry, setCurrentCountry] = useState(countryList[0]);

  const selectRandomCountry = () => {
    const randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
    setCurrentCountry(randomCountry);
  };

  return (
    <div className="App">
      <h1>Información de Países Aleatorios</h1>
      <button onClick={selectRandomCountry}>Cambiar País</button>
      <CountryComponent countryName={currentCountry} />
    </div>
  );
}

export default App;
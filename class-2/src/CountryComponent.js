import React, { useState, useEffect } from 'react';

function CountryComponent({ countryName }) {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setCountryData(data[0]);
        }
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [countryName]);

  if (!countryData) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{countryData.name.common}</h2>
      <img src={countryData.flags.png} alt={`Flag of ${countryData.name.common}`} />
      <p>Capital: {countryData.capital}</p>
      <p>Población: {countryData.population.toLocaleString()}</p>
      {/* ... más información del país */}
    </div>
  );
}

export default CountryComponent;
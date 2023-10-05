import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

function CitySearch({ onSearch }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const handleSearch = async () => {
    try {
      setError('');
      await onSearch(city);
      setCity('');
    } catch (err) {
      setError('City not found');
    }
  };

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default CitySearch;

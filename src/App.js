import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';
import "./App.css"

const API_KEY = '99783a89d74e3708ba0f5b3478b214e1'; // Replace with your OpenWeatherMap API key

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('New Delhi'); 
  const unit="metric";

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      console.log(data.temp);
      const weatherInfo = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        iconUrl: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        pressure: data.main.pressure,
        visibility: data.visibility / 1000, // Convert visibility to Km
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      };
      setWeatherData(weatherInfo);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <div className="App">
      <h1 className='title'>WEATHER DASHBOARD</h1>
      <CitySearch onSearch={setCity} />
      {error && <ErrorMessage message={error} />}
      {weatherData ? <WeatherDisplay weatherData={weatherData} city={city} /> : null}
    </div>
  );
}

export default App;

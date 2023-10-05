import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTint,
  faWind,
  faCompressArrowsAlt,
  faEye,
  faSun,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

function WeatherDisplay({ weatherData, city }) {
  const {
    temperature,
    description,
    humidity,
    windSpeed,
    iconUrl,
    pressure,
    visibility,
    sunrise,
    sunset,
  } = weatherData;
 // Default to Celsius

  //const temperatureInSelectedUnit = temperature;

  return (
    <div className='card'>
      <div className='temp-container'>
        <img src={iconUrl} alt="Weather Icon" className='icon b'/>
        <h1 className='b'>
          {temperature}°C
        </h1>
        <hr />
        <div>{description}</div>
        <div><FontAwesomeIcon icon={faMapMarkerAlt} />  {city}</div>
      </div>
      <div className="parameters-cotainer">
          <p className='parameter'>
            
            <FontAwesomeIcon icon={faTint} />  
            <div className='gap'>
              <p className="grey">Humidity</p>
              <p className="bold">{humidity}%</p>
            </div>
          </p>
          <p className='parameter'>
            <FontAwesomeIcon icon={faWind} />  
            <div className='gap'>
              <p className="grey">Wind Speed</p>
              <p className="bold">{windSpeed} Km/h</p>
            </div>
          </p>
          <p className='parameter'>
            <FontAwesomeIcon icon={faCompressArrowsAlt} /> 
            <div className='gap'>
              <p className="grey">Pressure</p>
              <p className="bold">{pressure} Hpa</p>
            </div>
          </p>
          <p className='parameter'>
            <FontAwesomeIcon icon={faEye} />
            <div className='gap'>
              <p className="grey"> Visibility</p>
              <p className="bold">{visibility} Km</p>
            </div>
          </p>
          <p className='parameter'>
            <FontAwesomeIcon icon={faSun} /> 
            
            <div className='gap'>
              <p className="grey">Sunrise</p>
              <p className="bold">{new Date(sunrise * 1000).toLocaleTimeString([], { timeStyle: 'short' })}</p>
            </div>
          </p>
          <p className='parameter'>
            <FontAwesomeIcon icon={faSun} />             
            <div className='gap'>
              <p className="grey">Sunset</p>
              <p className="bold">{new Date(sunset * 1000).toLocaleTimeString([], { timeStyle: 'short' })}</p>
            </div>
          </p>
      </div>
      
    </div>
  );
}

export default WeatherDisplay;

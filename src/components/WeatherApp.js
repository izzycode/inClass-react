import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';

class WeatherApp extends React.Component {
  render() {
    return (
      <div>
        <Days />
        <DetailedForecast />
      </div>
    )
  }
}

export default WeatherApp;
import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';

class WeatherApp extends React.Component {
  render() {
    return (
      <main>
        <Days cityState={this.props.match.params.weatherId} />
        <DetailedForecast />
      </main>
    )
  }
}

export default WeatherApp;
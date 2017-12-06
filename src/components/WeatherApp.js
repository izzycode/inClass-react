import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';
import sampleCity from '../sample-city';

class WeatherApp extends React.Component {
  constructor() {
    super();
    this.state = {
      city: [],
      currentDay:{}
    }
  }
  componentWillMount() {
    this.setState({
      city: sampleCity
    });
  }
  render() {
    return (
      <main>
        <Days
          cityState={ this.props.match.params.weatherId }
          data={ this.state }
        />
        <DetailedForecast />
      </main>
    )
  }
}

export default WeatherApp;
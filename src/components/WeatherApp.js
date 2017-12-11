import React from 'react';
import '../css/weather-app.css';
import Days from './Days';
import DetailedForecast from './DetailedForecast';
import sampleCity from '../sample-city';
import PropTypes from 'prop-types';

class WeatherApp extends React.Component {
  constructor() {
    super();
    this.state = {
      city: [],
      currentDay:{}
    }
    this.updateCurrentDay = this.updateCurrentDay.bind(this);
  }
  componentWillMount() {
    this.setState({
      city: sampleCity,
      currentDay: sampleCity[0]
    });
  }
  updateCurrentDay(day){
    this.setState({
      currentDay: day
    });
  }
  render() {
    return (
      <main>
        <Days 
          cityState={ this.props.match.params.weatherId } 
          data={ this.state } 
          updateCurrentDay={ this.updateCurrentDay }
        />
        <DetailedForecast currentDay={ this.state.currentDay } />
      </main>
    )
  }
}

WeatherApp.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default WeatherApp;
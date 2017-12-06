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

export default WeatherApp;
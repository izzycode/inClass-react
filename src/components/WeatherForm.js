import React from 'react';
import '../css/weather-form.css';
import PropTypes from 'prop-types';

class WeatherForm extends React.Component { 
  getWeather(event) {
    event.preventDefault();
    const weatherId = this.weatherFormInput.value;
    let path = `/weather/${ weatherId }`;
    this.props.history.push(path);
  }
  render() {
    return (
      <form action="" className="weather-form" onSubmit={ (e) => this.getWeather(e) }>
        <h1 className="form-title">Find your local weather!</h1>
        <div>
          <label htmlFor="city">Enter city, state:</label>
          <input type="text" id="city" name="city" placeholder="ex: Miami, FL" ref={ (input) => this.weatherFormInput = input } />
        </div>
        <footer>
          <input type="submit" value="Find my weather!" />
        </footer>
      </form>
    )
  }
}

WeatherForm.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default WeatherForm;
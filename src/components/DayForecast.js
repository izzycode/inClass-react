import React from 'react';
  
class DayForecast extends React.Component {
  render() {
    const currentDay = this.props.currentDay;
    return (
      <div className="daytime">
        <div className="day-night-info">
          <div className="left-side">
            <h2>DAY</h2>
            <div className="temp">
              { currentDay.temp_max }&deg;
              <span className="label">HI</span>
            </div>
            <div className="precipitation"> 
              Precipitation: <span>{ currentDay.day.precipitation }</span> 
            </div>
          </div>
          <img src={ process.env.PUBLIC_URL + "/weather_icons/" + currentDay.day.icon + ".png" } alt="weather" />
        </div>
        <p>{ currentDay.day.description }</p>
      </div>
    )
  }
}

export default DayForecast;
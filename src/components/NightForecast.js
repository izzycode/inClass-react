import React from 'react';

class NightForecast extends React.Component {
  render() {
    const currentDay = this.props.currentDay;
    return (
     <div className="nighttime">
      <div className="day-night-info">
        <div className="left-side">
          <h2>NIGHT</h2>
          <div className="temp">
            { currentDay.temp_min }&deg;
            <span className="label">LO</span>
          </div>
          <div className="precipitation"> 
            Precipitation: <span>{ currentDay.night.precipitation }</span> 
          </div>
        </div>
        <img src={ process.env.PUBLIC_URL + "/weather_icons/" + currentDay.night.icon + ".png" } alt="weather" />
      </div>
      <p>{ currentDay.night.description }</p>
    </div>
    )
  }
}

export default NightForecast;
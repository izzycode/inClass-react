import React from 'react';

class NightForecast extends React.Component {
  render() {
    return (
     <div className="nighttime">
      <div className="day-night-info">
        <div className="left-side">
          <h2>NIGHT</h2>
          <div className="temp">
            64&deg;
            <span className="label">LO</span>
          </div>
          <div className="precipitation"> 
            Precipitation: <span>10%</span> 
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + "/weather_icons/01d.png"} alt="weather" />
      </div>
      <p>Sun and some clouds with a shower or thunderstorm later in the afternoon</p>
    </div>
    )
  }
}

export default NightForecast;
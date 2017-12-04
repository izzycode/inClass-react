import React from 'react';
  
class DayForecast extends React.Component {
  render() {
    return (
      <div className="daytime">
        <div className="day-night-info">
          <div className="left-side">
            <h2>DAY</h2>
            <div className="temp">
              81&deg;
              <span className="label">HI</span>
            </div>
            <div className="precipitation"> 
              Precipitation: <span>10%</span> 
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/weather_icons/01d.png"} alt="weather" />
        </div>
        <p>Sun and some clouds with a shower or thunderstorm later in the afternoon.</p>
      </div>
    )
  }
}

export default DayForecast;
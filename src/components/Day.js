import React from 'react';

class Day extends React.Component {
  render() {
    return (
      <div className="day">
        <h2>TODAY</h2>
        <h3>Nov 24</h3>
        <img src={process.env.PUBLIC_URL + "/weather_icons/01d.png"} alt="weather" />
        <div className="degrees">
          <span className="high">81&deg;</span>/64&deg;
        </div>
        <p>A p.m. shower or thunderstorm.</p>
      </div>
    )
  }
}

export default Day;
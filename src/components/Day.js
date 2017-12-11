import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Day extends React.Component {
  formatDate(datetime) {
    let thisdate = new Date(datetime);
    return thisdate.toLocaleDateString('en-US', 
      {  
        month: 'short', 
        day: 'numeric' 
      });
  }
  getDayOfWeek(datetime) {
    let thisdate = new Date(datetime);
    return thisdate.toLocaleDateString('en-US', 
      { 
        weekday: 'short'
      });
  }
  render() {
    const day = this.props.day;
    const classes = classNames({
      day: true, 
      selected: day === this.props.data.currentDay
    });
    return (
      <div className={ classes } onClick={ () => this.props.updateCurrentDay(day) }>
        <h2>{ this.getDayOfWeek(day.dt) }</h2>
        <h3>{ this.formatDate(day.dt) }</h3>
        <img src={ process.env.PUBLIC_URL + "/weather_icons/" + day.icon + ".png" } alt="weather" />
        <div className="degrees">
          <span className="high">{ day.temp_max }&deg;</span>/{ day.temp_min }&deg;
        </div>
        <p>{ day.description }</p>
      </div>
    )
  }
}

Day.propTypes = {
  updateCurrentDay: PropTypes.func.isRequired,
  day: PropTypes.shape({
    day: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    dt: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    night: PropTypes.object.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired
  })
}

export default Day;
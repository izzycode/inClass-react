import React from 'react';
import DayForecast from './DayForecast';
import NightForecast from './NightForecast';
import PropTypes from 'prop-types';
  
const DetailedForecast = (props) => {
  return (
    <div className="details">
      <DayForecast currentDay={ props.currentDay } />
      <NightForecast currentDay={ props.currentDay } />
    </div>
  )
}

DetailedForecast.propTypes = {
  currentDay: PropTypes.shape({
    day: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    dt: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    night: PropTypes.object.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired
  })
}

export default DetailedForecast;


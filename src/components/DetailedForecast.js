import React from 'react';
import DayForecast from './DayForecast';
import NightForecast from './NightForecast';
  
const DetailedForecast = (props) => {
  return (
    <div className="details">
      <DayForecast currentDay={ props.currentDay } />
      <NightForecast currentDay={ props.currentDay } />
    </div>
  )
}

export default DetailedForecast;
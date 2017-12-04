import React from 'react';
import DayForecast from './DayForecast';
import NightForecast from './NightForecast';
  
const DetailedForecast = (props) => {
  return (
    <div className="details">
      <DayForecast />
      <NightForecast />
    </div>
  )
}

export default DetailedForecast;
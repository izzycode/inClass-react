import React from 'react';
import DayForecast from './DayForecast';
import NightForecast from './NightForecast';
  
class DetailedForecast extends React.Component {
  render() {
    return (
     <div>
       <DayForecast />
       <NightForecast />
     </div>
    )
  }
}

export default DetailedForecast;
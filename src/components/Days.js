import React from 'react';
import Day from './Day';
  
class Days extends React.Component {
  render() {
    const cityData = this.props.data.city;
    return (
      <div>
        <h1>Weather for { this.props.cityState }</h1>
        <div className="days">
          {
            cityData.map( (day, i) => {
              return (
                <Day 
                  day={ day } 
                  data={ this.props.data }
                  updateCurrentDay={ this.props.updateCurrentDay }
                  key={ i }
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Days;
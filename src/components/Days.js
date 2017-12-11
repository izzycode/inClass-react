import React from 'react';
import Day from './Day';
import PropTypes from 'prop-types';
  
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

Days.propTypes = {
  updateCurrentDay: PropTypes.func.isRequired,
  cityState: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default Days;
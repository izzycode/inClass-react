import React from 'react';
import Day from './Day';
  
class Days extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather for {this.props.cityState}</h1>
        <div className="days">
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </div>
      </div>
    )
  }
}

export default Days;
import React, { Component } from 'react';

class TimeSlots extends Component {
  render() {
    return (
      this.props.availableTimeSlots.map((time, i) => {
        return (
          <button 
            key={i}
            value={`${this.props.day}, ${time}`}
            onClick={(e) => this.props.onClick(e)}
          >
            { time }
          </button>
        );
      })
    )
  }
}

export default TimeSlots;
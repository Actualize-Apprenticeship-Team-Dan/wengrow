import React, { Component } from 'react';
import moment from 'moment';

class TimeSlots extends Component {
  render() {
    return (
      this.props.availableTimeSlots.map((time, i) => {
        let value = `${moment(this.props.day).format('MM-DD-YYYY')}, ${time}`;
        let disabled = !!this.props.reservedTimeSlots.filter(function(o) {
          return o.time === value;
        }).length > 0
        return (
          <button 
            key={i}
            value={value}
            onClick={(e) => this.props.onClick(e)}
            disabled={disabled}
          >
            { time }
          </button>
        );
      })
    )
  }
}

export default TimeSlots;
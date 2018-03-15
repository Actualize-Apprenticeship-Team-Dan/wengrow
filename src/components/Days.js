import React, { Component } from 'react';
import TimeSlots from './TimeSlots';
import moment from 'moment';

class Days extends Component {
  render() {
    return (
      <div className="days">
          {
            this.props.currentWeek.map((day, i) => {
              return (
                <div key={i}>
                  <h3> {moment(day).format('dddd, MM-DD-YYYY')} </h3>
                  <TimeSlots 
                    day={day}
                    availableTimeSlots={this.props.availableTimeSlots}
                    reservedTimeSlots={this.props.reservedTimeSlots}
                    onClick={this.props.onClick}
                  />
                </div>
              );
            })
          }
      </div>
    );
  }
}

export default Days;

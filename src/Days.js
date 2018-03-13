import React, { Component } from 'react';
import TimeSlots from './TimeSlots';
import moment from 'moment';

class Days extends Component {
  render() {
    return (
      <div className="days">
          {
            this.props.data.currentWeek.map((day, i) => {
              return (
                <div key={i}>
                  <h3> {moment(day).format('dddd, MM-DD-YYYY')} </h3>
                  <TimeSlots 
                    day={day}
                    availableTimeSlots={this.props.data.avaiableTimeSlots}
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

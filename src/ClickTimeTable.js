import React, { Component } from 'react';

class ClickTimeTable extends Component {
  render() {
    let times = [
              "8:00 AM",
              "9:00 AM",
              "10:00 AM",
              "11:00 AM",
              "12:00 PM",
              "1:00 PM",
              "2:00 PM",
              "3:00 PM",
              "4:00 PM",
              "5:00 PM"
              ];
    return (
      <select>
        {
        times.map(time => {
            return (
              <option>{time}</option>
            );
          })
        }
      <option></option>
      </select>
    )
  }
}

export default ClickTimeTable;
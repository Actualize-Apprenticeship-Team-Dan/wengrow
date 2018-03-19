import React, { Component } from 'react';


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

function chooseTime(name, e) {
  var el = e.target;
  var value = el.options[el.selectedIndex].value;
  console.log(name, value);
}

class Day extends Component {
  render() {
    return (
      <div
        className="time-table-column"
        id={this.props.name}> {this.props.name}

        <select
          onChange={(e) => chooseTime(this.props.name, e)}>
          {
          times.map((time, index) => {
              return (
                <option key={index}>{time}</option>
              );
            })
          }
        </select>
      </div>
    );
  }
}


export default Day;
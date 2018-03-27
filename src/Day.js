import React, { Component } from 'react';
import Moment from 'react-moment';

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
        id={this.props.day}>
        <Moment format="dddd Do">{this.props.day}</Moment>
        <select
          onChange={(e) => chooseTime(this.props.day.format('dddd'), e)}>
          {
            // console.log(this.props.data.times)
          this.props.data.times.map((time, index) => {
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
import React, { Component } from 'react';
import Moment from 'react-moment';
import firebase from './firebase.js';

let appointmentsRef = firebase.database().ref('appointments');

function chooseTime(name, e) {
  var el = e.target;
  var value = el.options[el.selectedIndex].value;
  var timeString = `${name} ${value}`;
  var email = prompt("Gimme your email and social, suckah: ")
  appointmentsRef.push({time: timeString, client: email});
}


class Day extends Component {
  render() {

    const isTaken = this.props.reserved;
    const date = this.props.day.format('l')

    return (
      <div
        className="time-table-column"
        id={this.props.day}>
        <Moment format="MMM dddd Do">{this.props.day}</Moment>
        <select
          onChange={(e) => chooseTime(date, e)}>
          {
            // console.log(this.props.data.times)
          this.props.data.times.map((time, index) => {
              return (
                <option key={index}
                  disabled={isTaken.includes(`${date} ${time}`)}
                  >{time}
                </option>
              );
            })
          }
        </select>
      </div>
    );
  }
}


export default Day;
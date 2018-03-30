import React, { Component } from 'react';
import Moment from 'react-moment';
import firebase from './firebase.js';

let appointmentsRef = firebase.database().ref('appointments');

function chooseTime(name, e) {
  var email = prompt("Gimme your email and social, suckah: ")
  appointmentsRef.push({time: name, client: email});
}


class Day extends Component {
  render() {

    const isTaken = this.props.reserved;
    const date = this.props.day.format('l')

    return (
      <div
        className="col"
        id={this.props.day}>
        <Moment format="MMM dddd Do">{this.props.day}</Moment>
        {
          this.props.data.times.map((time, index) => {
              return (
                <button
                  key={index}
                  className="btn btn-secondary"
                  style={{width:'100%'}}
                  disabled={isTaken.includes(`${date} ${time}`)}
                  onClick={(e) => chooseTime(`${date} ${time}`, e)}
                  >{time}
                </button>
              );
          })
        }
      </div>
    );
  }
}


export default Day;
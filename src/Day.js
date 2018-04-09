import React, { Component } from 'react';
import Moment from 'react-moment';
import firebase from './firebase.js';

let appointmentsRef = firebase.database().ref('appointments');

function chooseTime(datetime, e) {
  var email = prompt("Gimme your email and social, suckah: ")
  if (email === null) {return;}
  appointmentsRef.push({time: datetime, client: email});

}

function getClient(r, datetime) {
  // console.log(r);
  var match = r.filter(function(o){
    return (o.time === datetime) 
  })
  return (match.length) ? match[0].client :'Time is available!'
}



class Day extends Component {
  render() {

    const isTaken = this.props.reserved;
    const date = this.props.day.format('l')

    return (
      <div
        className="time-table-column"
        id={this.props.day}>
        <Moment format="dddd, MMM Do">{this.props.day}</Moment>
          {
          this.props.data.times.map((time, index) => {
              return (
                <div>
                  <button
                    className="btn btn-primary time-butt tooltipz"
                    onClick={(e) => chooseTime(`${date} ${time}`, e)} 
                    key={index}
                    disabled={
                      isTaken.map( function(reservation){ 
                        return reservation.time;
                      })
                      .includes(`${date} ${time}`)
                    }
                    >
                      {time}
                      <span className='tooltiptext'>
                        {getClient(isTaken, `${date} ${time}`)}
                      </span>
                  </button>
                </div>
              );
            })
          }
      </div>
    );
  }
}


export default Day;
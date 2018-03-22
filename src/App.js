import React, { Component } from 'react';
import './App.css';
import TimeTable from './TimeTable';
import Data from './data';
import moment from 'moment';
import firebase from './firebase.js';

var firstDayOfTheWeek = moment().startOf('week');
const days = [];
for(var i=0; i<5; i++){
  days.push(moment(firstDayOfTheWeek.add(1, 'day')))
}

let appointmentsRef = firebase.database().ref('appointments');


class App extends Component {
  constructor(props) {
    super(props)
    const title = 'Wengrow\'s Appointments'
    this.state ={
      reservedTimeSlots: []
    }
  }
  
  componentWillMount() {
    appointmentsRef.on('value', snapshot => {
      var reservedTimeSlots = Object.values(snapshot.val());
      this.setState({ reservedTimeSlots : reservedTimeSlots });
    });
  };

  render() {
    return (
      <div className="App">
        {console.log(this.state.reservedTimeSlots)}
        <h1>
        {this.title}
        </h1>
      <TimeTable data={Data} days={days} />
      </div>
    )
  }
}


export default App;

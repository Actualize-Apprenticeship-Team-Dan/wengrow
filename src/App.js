import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import Days from './components/Days';
import moment from 'moment';

let appointmentsRef = firebase.database().ref('appointments');

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      availableTimeSlots: [
        "9:00am-10:00am" ,
        "10:00am-11:00am",
        "11:00am-12:00pm",
        "12:00pm-1:00pm" ,
        "1:00pm-2:00pm"  ,
        "2:00pm-3:00pm"  ,
        "3:00pm-4:00pm"  ,
        "4:00pm-5:00pm"
      ],
      currentDate: Date.now(),
      currentWeek: this.getCurrentWeek(),
      reservedTimeSlots: []
    };
  }

  componentWillMount() {
    appointmentsRef.on('value', snapshot => {
      var reservedTimeSlots = Object.values(snapshot.val());
      this.setState({ reservedTimeSlots : reservedTimeSlots });
    });
  }

  handleClick(event) {
    let value = event.target.value;
    console.log(value);
    appointmentsRef.push({time: value, client: 'jay@harry.com'});
    event.target.setAttribute("disabled", "");
  }

  getCurrentWeek() {
    const startOfWeek = moment().startOf('isoWeek');
    let days = [];
    let day = startOfWeek;
    while (days.length < 5) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }
    return days;
  }

  render() {
    return (
      <div className="App">
        <h1> Available Days </h1>
        <h2> Today: { moment(this.state.currentDate).format('dddd, MM-DD-YYYY') } </h2>
        <Days 
          currentWeek={this.state.currentWeek}
          availableTimeSlots={this.state.availableTimeSlots}
          reservedTimeSlots={this.state.reservedTimeSlots}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;

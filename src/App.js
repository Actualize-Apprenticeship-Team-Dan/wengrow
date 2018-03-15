import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import Days from './components/Days';
import moment from 'moment';

let appointmentsRef = firebase.database().ref('appointments');

class App extends Component {
   constructor(props) {
    super(props);
    this.weekCounter = 0;
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
      currentWeek: this.getCurrentWeek(this.weekCounter),
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

  getCurrentWeek(counter) {
    const startOfWeek = moment().startOf('isoWeek').add(counter, 'week');
    let days = [];
    let day = startOfWeek;
    while (days.length < 5) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }
    return days;
  }

  changeWeek(n) {
    this.weekCounter = this.weekCounter + n;
    this.setState({ currentWeek: this.getCurrentWeek(this.weekCounter) })

  }

  render() {
    return (
      <div className="App">
        <h1> Available Days </h1>
        <h2> Today: { moment(this.state.currentDate).format('dddd, MM-DD-YYYY') } </h2>
          { this.weekCounter > 0 ?
            <button onClick={(e) => {this.changeWeek(-1)}}>Previous Week</button> : null
          }
        <button onClick={(e) => {this.changeWeek(1)}}>Next Week</button>
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

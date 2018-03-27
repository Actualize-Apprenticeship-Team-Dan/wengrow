import React, { Component } from 'react';
import './App.css';
import TimeTable from './TimeTable';
import Data from './data';
import moment from 'moment';
import firebase from './firebase.js';

//var firstDayOfTheWeek = moment().startOf('week');

let appointmentsRef = firebase.database().ref('appointments');

class App extends Component {
  constructor(props) {
    super(props)
    const title = 'Wengrow\'s Appointments';
    this.changeWeek = this.changeWeek.bind(this)
    this.state = {
      reservedTimeSlots: [],
      //firstDayOfTheWeek: moment().startOf('week'),
      days: [
        moment().startOf('week').add(1, 'days'),
        moment().startOf('week').add(2, 'days'),
        moment().startOf('week').add(3, 'days'),
        moment().startOf('week').add(4, 'days'),
        moment().startOf('week').add(5, 'days'),
      ]
    }

  }
  
  componentWillMount() {
    appointmentsRef.on('value', snapshot => {
      var reservedTimeSlots = Object.values(snapshot.val());
      this.setState({ reservedTimeSlots });
    });
  };

  changeWeek(){
    let newWeek = this.state.days.map((day) => day.add(1, 'week'))
    this.setState({
      //firstDayOfTheWeek: this.state.firstDayOfTheWeek.add(1, 'week'),
      days: newWeek
    })
    console.log(this.state.firstDayOfTheWeek)
  };

  render() {
    console.log("getting rendered")
    return (
      <div className="App">
        <h1>
        {this.title}
        </h1>
        {console.log(this.state.firstDayOfTheWeek)}
      <TimeTable data={Data} days={this.state.days} />
      <button
      onClick={() => {this.changeWeek()}}
      >Next Week</button>
      </div>
    )
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';
import TimeTable from './TimeTable';
import Data from './data';
import moment from 'moment';

var firstDayOfTheWeek = moment().startOf('week');
const days = [];
for(var i=0; i<5; i++){
  days.push(moment(firstDayOfTheWeek.add(1, 'day')))
}

class App extends Component {
  render() {
    const title = 'Wengrow\'s Appointments'
    return (
      <div className="App">
        <h1>
        {title}
        </h1>
      <TimeTable data={Data} days={days} />
      </div>
    );
  }
}

export default App;

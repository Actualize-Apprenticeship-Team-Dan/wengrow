import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      dates: [
        "9:00am - 10:00am",
        "10:00am - 11:00am",
        "11:00am - 12:00pm",
        "12:00pm - 1:00pm",
        "1:00pm - 2:00pm",
        "2:00pm - 3:00pm",
        "3:00pm - 4:00pm",
        "4:00pm - 5:00pm" 
      ]
    };

  }

  handleClick() {
    const datesRef = firebase.database().ref('dates');
    let dateSelect = document.getElementById('dateSelect');
    let value = dateSelect.options[dateSelect.selectedIndex].value;
    datesRef.push(value);
  }

  render() {
    const title = 'Wengrow\'s Appointments'
    return (
      <div class="App">
        <h1> Available Dates </h1>
        <select id="dateSelect">
        {
          this.state.dates.map(function(item, i){
            return <option key={i} value={item}>{item}</option>
          })
        }
        </select>
        <button onClick={this.handleClick}> Submit </button>
      </div>
    );
  }
}

export default App;

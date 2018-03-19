import React, { Component } from 'react';
import './App.css';
import TimeTable from './TimeTable';



class App extends Component {
  render() {
    const title = 'Wengrow\'s Appointments'
    return (
      <div className="App">
        <h1>
        {title}
        </h1>
      <TimeTable/>
      </div>
    );
  }
}

export default App;

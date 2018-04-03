import React, { Component } from 'react';
import './App.css';
import TimeTable from './TimeTable';
import Data from './data';
import moment from 'moment';
import firebase from './firebase.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';





let appointmentsRef = firebase.database().ref('appointments');

class App extends Component {
  constructor(props) {
    super(props)
    this.title = 'Wengrow\'s Appointments';
    this.state = {
      reservedTimeSlots: [],
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

  nextWeek(direction){
    let newWeek = this.state.days.map((day) => day.add(direction, 'week'))
    this.setState({
      days: newWeek
    })
  };

  isCurrentWeek(){
    return (this.state.days[0].isSame(moment().startOf('isoWeek'))) ?  
      { display:'none' } :
      { display: 'inline-block' }; 
  }

  render() {
    let reserved = this.state.reservedTimeSlots.map(function(o){return o.time;})

    {console.log(reserved)}
    return (
      <div className="App">
        <div className="jumbotron">
        <img src="../Clippers.png" class="img-circle scissors" />
        <img src="../JayWengrow.png" class="img-rounded scissors"/>
        <img src="../Clippers.png" class="img-circle scissors" />
          <h1 className="display-3">
            {this.title}
          </h1>
        </div>
        <TimeTable
          data={Data}
          days={this.state.days}
          reserved={reserved}
          className='Time-Table'
          />
        <button
          onClick={() => {this.nextWeek(-1)}}
          style={this.isCurrentWeek()}
          className='btn btn-primary next-butt'
          > Previous Week
        </button>
        <button
          onClick={() => {this.nextWeek(1)}}
          className='btn btn-primary next-butt'
          > Next Week
        </button>
      </div>
    )
  }
}


export default App;

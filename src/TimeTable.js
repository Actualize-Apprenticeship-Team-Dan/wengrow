import React, { Component } from 'react';
import ClickTimeTable from './ClickTimeTable';
import Moment from 'react-moment';
import moment from 'moment';

class TimeTable extends Component {
  render() {
    const title = 'Wengrow\'s Appointments';
    const currentDay = Date.now();
    console.log(currentDay);
    var firstDayOfTheWeek = moment().startOf('week');
    console.log(firstDayOfTheWeek);
    const days = [];
    for(var i=0; i<5; i++){
      days.push(moment(firstDayOfTheWeek.add(1, 'day')))
    }
    return (
      <table>
        <tbody className="component">
        <tr>
          {days.map(function(item, i){
            return (
              <td key={i}>
                <Moment format="dddd">{item}</Moment>
              </td>)
            })
          }
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TimeTable;
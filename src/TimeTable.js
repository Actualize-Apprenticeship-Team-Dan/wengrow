import React, { Component } from 'react';
import ClickTimeTable from './ClickTimeTable';
import Moment from 'react-moment';

class TimeTable extends Component {
  render() {
    const title = 'Wengrow\'s Appointments';
    const currentDay = Date.now();
    const data =  [
      {"date": currentDay}
    ];
    return (
      <table>
        <tbody className="component">
        <tr>
          {data.map(function(item, i){
            return (
              <td key={i}>
                <Moment format="dddd">{item.date}</Moment>
                <Moment add={{ days: 1 }} format="dddd">{item.date}</Moment>
                <Moment add={{ days: 2 }} format="dddd">{item.date}</Moment>
                <Moment add={{ days: 3 }} format="dddd">{item.date}</Moment>
                <Moment add={{ days: 4 }} format="dddd">{item.date}</Moment>
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

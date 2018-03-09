import React, { Component } from 'react';
import ClickTimeTable from './ClickTimeTable';


class TimeTable extends Component {
  render() {
    const title = 'Wengrow\'s Appointments';
    const data =  [
    {"date": "monday"},
    {"date": "tuesday"},
    {"date": "wednesday"},
    {"date": "thursday"},
    {"date": "friday"},
    {"date": "saturday"}


  ];
    return (
      <div className="component">
        <tr>
          {
            data.map(item => {
              return (
                <td className="Time-Table">
                  {item["date"]}
                </td>
              );
            })
          }
        </tr>
      </div>
    );
  }
}

export default TimeTable;

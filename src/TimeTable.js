import React, { Component } from 'react';
import Data from './data';

let times = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
  ];


function Day(props){
  // render() {

    return (
      <div className="time-table-column" id={props.id}>{props.name}
        <select  id={props.name} onChange={(e) => chooseTime(props.name, e)}>
          {
          times.map((time, index) => {
              return (
                <option key={index}>{time}</option>
              );
            })
          }
        </select>
      </div>
    );
  // }
}

function chooseTime(name) {
  // var el = document.getElementById(name);
  // console.log(el);
  var el = document.getElementById(name);
  var value = el.options[el.selectedIndex].value;
  console.log(name, value);
}

class TimeTable extends Component {
  render() {
    return (
      <div className="component container">
            {Data.data.map((item, index) => {
               return <Day key={index} id={'col-' + item.date} name={item.date} />
            })}
      </div>
    );
  }
}

export default TimeTable;
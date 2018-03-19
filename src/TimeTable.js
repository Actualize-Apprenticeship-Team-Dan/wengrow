
import React, { Component } from 'react';
import Data from './data';
import Day from './Day'



function chooseTime(name) {
  var el = document.getElementById(name);
  var value = el.options[el.selectedIndex].value;
  console.log(name, value);
}

class TimeTable extends Component {
  render() {
    return (
      <div className="component container">
            {
              Data.data.map((item, index) => {
               return(<Day key={index} id={'col-' + item.date} name={item.date} />)
            })}
      </div>
    );
  }
}

export default TimeTable;
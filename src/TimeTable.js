
import React, { Component } from 'react';
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
              this.props.data.days.map((item, index) => {
               return(<Day key={index} id={'col-' + item.date} name={item.date} times={this.props.data.times} />)
            })}
      </div>
    );
  }
}

export default TimeTable;
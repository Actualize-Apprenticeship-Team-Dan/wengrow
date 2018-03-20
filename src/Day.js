import React, { Component } from 'react';

function chooseTime(name, e) {
  var el = e.target;
  var value = el.options[el.selectedIndex].value;
  console.log(name, value);
}

class Day extends Component {
  render() {
    return (
      <div
        className="time-table-column"
        id={this.props.name}> {this.props.name}

        <select
          onChange={(e) => chooseTime(this.props.name, e)}>
          {
          this.props.times.map((time, index) => {
              return (
                <option key={index}>{time}</option>
              );
            })
          }
        </select>
      </div>
    );
  }
}


export default Day;
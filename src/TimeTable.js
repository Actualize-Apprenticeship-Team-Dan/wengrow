import React, { Component } from 'react';
import Day from './Day'

class TimeTable extends Component {
  render() {
    return (
      <div className="component container">
            {
              this.props.days.map((item, index) => {
               return(<Day key={index} id={'col-' + item} day={item} times={this.props.data.times} reserved={this.props.reserved}/>)
            })}
      </div>
    );
  }
}

export default TimeTable;

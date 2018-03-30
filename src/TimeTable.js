import React, { Component } from 'react';
import Day from './Day'

class TimeTable extends Component {
  render() {
    return (
      <div className="row">
            {
              this.props.days.map((item, index) => {
                return(
                  <Day 
                    data={this.props.data}
                    key={index}
                    id={'col-' + item}
                    day={item}
                    reserved={this.props.reserved}
                  />
                )
              })
            }
      </div>
    );
  }
}

export default TimeTable;

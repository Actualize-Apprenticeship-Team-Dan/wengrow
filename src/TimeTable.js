import React, { Component } from 'react';
import Day from './Day'

class TimeTable extends Component {
  render() {
    return (
      <div className="component container">
            {
              // console.log(this.props.days)
              // console.log(this.props.data)
              this.props.days.map((item, index) => {
               return(<Day data={this.props.data} key={index} id={'col-' + item} day={item} />)
            })
            }
      </div>
    );
  }
}

export default TimeTable;

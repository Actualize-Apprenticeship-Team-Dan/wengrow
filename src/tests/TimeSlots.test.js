import React from 'react';
import ReactDOM from 'react-dom';
import TimeSlots from '../components/TimeSlots';

it('renders without crashing', () => {
  const div = document.createElement('div'),
    day = Date.now(), 
    availableTimeSlots = [],
    handleClick = () => {},
    disabled = false;

  ReactDOM.render(
    <TimeSlots 
      day={day}
      availableTimeSlots={availableTimeSlots}
      onClick={handleClick}
      disabled={disabled}
    />, div);
    
  ReactDOM.unmountComponentAtNode(div);
});
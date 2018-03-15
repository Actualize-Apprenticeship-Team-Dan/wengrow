import React from 'react';
import ReactDOM from 'react-dom';
import Days from '../components/Days';

it('renders without crashing', () => {
  const div = document.createElement('div'),
    availableTimeSlots = [],
    reservedTimeSlots = [],
    currentWeek = [],
    handleClick = () => {};

  ReactDOM.render(
    <Days 
      availableTimeSlots={availableTimeSlots}
      reservedTimeSlots={reservedTimeSlots}
      currentWeek={currentWeek}
      onClick={handleClick}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
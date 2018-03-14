import React from 'react';
import ReactDOM from 'react-dom';
import Days from '../components/Days';

it('renders without crashing', () => {
  const div = document.createElement('div'),
    data = {currentWeek : []},
    handleClick = () => {};
  ReactDOM.render(<Days data={data} onClick={handleClick} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
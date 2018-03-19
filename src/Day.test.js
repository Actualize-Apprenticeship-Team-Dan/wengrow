
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import Day from './Day' 

it('renders monday element', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Day />, div);
  ReactDOM.unmountComponentAtNode(div);
});


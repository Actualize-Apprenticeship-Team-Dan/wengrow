
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import Day from './Day' 
import Moment from 'react-moment';

it('renders monday element', () => {
  const div = document.createElement('div');
  const times = [];
  ReactDOM.render(<Day times={times} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


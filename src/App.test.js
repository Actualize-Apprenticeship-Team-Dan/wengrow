import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TimeTable from './TimeTable'
import {shallow} from 'enzyme'
import Day from './Day'

it('renders without crashing',() => {
  shallow(<App/>);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const title = 'Wengrow\'s Appointments'
  const welcome = <h1>{title}</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

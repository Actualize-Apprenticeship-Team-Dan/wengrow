import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TimeTable from './TimeTable'
import {shallow} from 'enzyme'

describe('TimeTable', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the days without crashing', () => {
    console.log('asdfasdfasdf');
    ReactDOM.render(<TimeTable />, div )
    expect(shallow(<TimeTable />, div)).exists(<TimeTable />).toBe(true);
  });

});
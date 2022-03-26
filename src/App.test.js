import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.Pokedex').length).toBe(1);
});

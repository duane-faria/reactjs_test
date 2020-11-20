import React from 'react';
import enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test('renders learn react link', () => {
  const wrapper = enzyme.shallow(<App />);
  expect(wrapper).toBeFalsy();
});
 
import React from 'react';
import Enzyme, { ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

/**
 * Função para criar um empacotador (wrapper) para o componente App.
 * @function setup
 * @param {object} props - propriedade do componente
 * @param {object} state - estate inicial
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = Enzyme.shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Retorno ShallowWrapper contendo dom nodes com o data-test passado
 * @param {ShallowWrapper} wrapper
 * @param {string} val - valor do data-test para busca
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking button decrease counter', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const decreaseButton = findByTestAttr(wrapper, 'decrement-button');
  decreaseButton.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
});

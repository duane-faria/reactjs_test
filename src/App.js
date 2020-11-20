import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>O contador está atualmente</h1>
        <button data-test='increment-button'>Aumentar o contador</button>
      </div>
    );
  }
}

export default App;

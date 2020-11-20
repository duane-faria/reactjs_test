import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: false,
    };
  }
  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          O contador está atualmente {this.state.counter}
        </h1>
        {this.state.error && (
          <h2 style={{ color: 'tomato' }}>o contador não pode ser negativo</h2>
        )}
        <button
          data-test='increment-button'
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, error: false })
          }
        >
          Aumentar o contador
        </button>
        <button
          data-test='decrement-button'
          onClick={() => {
            if (this.state.counter > 0)
              this.setState({ counter: this.state.counter - 1 });
            else this.setState({ error: true });
          }}
        >
          diminuir o contador
        </button>
      </div>
    );
  }
}

export default App;

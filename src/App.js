import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Products App
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            By {this.props.name}!
          </a>
        </header><br/>
        <section>
          <Products/>
        </section>
      </div>
    );
  }

}

export default App;

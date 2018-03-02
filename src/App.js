import React, { Component } from 'react';
import logo from './logo.svg';
import { read, store } from './util/test';
import Web3 from 'web3';
import './App.css';

class App extends Component {

  componentWillMount() {
    //   window.addEventListener('load', function () {
    // store({ test: 1 })
    read("0xecfdfcf63bd5c813e8dccf869280c333d2a1bff8")
    // });

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

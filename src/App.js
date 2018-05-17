import React, { Component } from 'react';
import logo from './logo.svg';
import { storePublic, readPublic } from './util/test';
import Web3 from 'web3';
import './App.css';

class App extends Component {

  componentWillMount() {
    //   window.addEventListener('load', function () {
    // store({ test: 1 })
    // storePublic("11111111111")
    readPublic("0xeCFDfcf63Bd5c813e8dccf869280C333d2A1BfF8")
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

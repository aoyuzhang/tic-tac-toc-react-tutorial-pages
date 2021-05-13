import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div classname="App">
        <div classname="App-header">
          <img src="{logo}" classname="App-logo" alt="logo">
          <h2>Welcome to React</h2>
        </div>
        <p classname="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;

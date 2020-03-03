import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountComponent from './CountComponent';

function App() {
  return (
    <div className="App">
      <CountComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> hello.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rafalin Learn ReactJS by changing this component
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';  // tem que importar mesmo que nao use

import './App.css';  // impotando arquivo scc

import logo from './assets/logo.svg';

import Routes from './routes'

// componentização e estado
function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>
      
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="main-container">
      <Nav />
      <Routes />
    </div>
  );
};

export default App;

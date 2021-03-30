import React from 'react';
import './Nav.css';
import logo from '../../assets/mddlogo_white.png';

const Nav = () => {
  return (
    <div className="nav-container">
      <img className="nav-logo" src={logo}/>
    </div>
  );
};

export default Nav;

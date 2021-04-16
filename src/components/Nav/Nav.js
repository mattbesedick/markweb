import React from 'react';
import './Nav.css';
import {Image} from 'cloudinary-react';
// import logo from '../../assets/mddlogo_white.png';

const Nav = () => {
  return (
    <div className="nav-container">
      {/* <img className="nav-logo" src={logo}/> */}
      <Image publicId="navlogo" className="nav-logo" />
    </div>
  );
};

export default Nav;

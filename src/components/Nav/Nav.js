/* eslint-disable no-unused-vars */
import React from 'react';
import './Nav.css';
import {Image} from 'cloudinary-react';

const Nav = () => {
  return (
    <div className="nav-container">
      <Image publicId="navlogo" className="nav-logo" />
    </div>
  );
};

export default Nav;

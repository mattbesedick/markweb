/* eslint-disable no-unused-vars */
import React from 'react';
import './Nav.css';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/">
        <Image publicId="navlogo" className="nav-logo" />
      </Link>
    </div>
  );
};

export default Nav;

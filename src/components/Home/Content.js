/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';

const handleClick = () => {

};


const Content = ({project, image, title}) => {
  return (
    <div className="slide-container">
      <Link to={`${project}`}>
        <Image publicId={image} className="content-logo" onClick={handleClick} />
      </Link>
    </div>
  );
};

export default Content;

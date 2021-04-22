/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {Image} from 'cloudinary-react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const handleClick = () => {

};


const Content = ({project, image, title}) => {
  return (
    <motion.div whileHover={{opacity: .7}} className="slide-container">
      <Link to={`${project}`}>
        <Image publicId={image} className="content-logo" onClick={handleClick} />
      </Link>
      <div>{title}</div>
    </motion.div>
  );
};

export default Content;

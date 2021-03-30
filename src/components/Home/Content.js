/* eslint-disable react/prop-types */
import React from 'react';

const Content = ({project, image, title}) => {
  return (
    <div className="slide-container">
      <img className="content-logo" src={`/assets/${project}/${image}.png`} />
      <p>{title}</p>
    </div>
  );
};

export default Content;

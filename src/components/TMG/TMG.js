/* eslint-disable no-unused-vars */
import React from 'react';
import {Image} from 'cloudinary-react';
import './TMG.css';

const TMG = () => {
  return (
    <div className="root">
      <div className="grid-container">
        <div className="header">TMG Family Office</div>
        <div className="description">
              TMG is a financial advisory serving clients nationwide.
              These are branding materials created for their Family Office.
        </div>
        <div className="image-container">
          <Image publicId="tmgcover" className="image-square"/>
          <Image publicId="tmgpage1" className="image-square"/>
          <Image publicId="tmgpage2" className="image-square"/>
          <Image publicId="tmgpage3" className="image-square"/>
          <Image publicId="tmgpage4" className="image-square"/>
          <Image publicId="tmgcards" className="image-square" />
          <Image publicId="tmgpage5" className="image-square" />
          <Image publicId="tmgletterhead" className="image-square" />
        </div>
      </div>
    </div>

  );
};

export default TMG;

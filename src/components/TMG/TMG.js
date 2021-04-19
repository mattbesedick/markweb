import React from 'react';
import {Image} from 'cloudinary-react';
import styles from './TMG.module.css';


const TMG = () => {
  return (
    <div className="root">
      <div className={styles.container}>
        <div className="header">TMG Family Office</div>
        <div className="description">
              TMG is a financial advisory serving clients nationwide.
              These are branding materials created for their Family Office.
        </div>
      </div>
      <div className="image_container">
        <Image publicId="tmgcover" className="image_square"/>
        <Image publicId="tmgpage1" className="image_square"/>
        <Image publicId="tmgpage2" className="image_square"/>
        <Image publicId="tmgpage3" className="image_square"/>
        <Image publicId="tmgpage4" className="image_square"/>
        <Image publicId="tmgcards" className="image_square" />
        <Image publicId="tmgpage5" className="image_square" />
        <Image publicId="tmgletterhead" className="image_square" />
      </div>
    </div>

  );
};

export default TMG;

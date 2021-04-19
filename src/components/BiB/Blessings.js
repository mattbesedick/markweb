import React from 'react';
import styles from './Blessings.module.css';
import {Image} from 'cloudinary-react';
import '../Home/Home.css';
const Blessings = () => {
  return (
    <div className="root">
      <div className={styles.container}>
        <div className={styles.header}>Blessings in a Backpack</div>
        <div className="description">
                  BIB is a non-profit helping kids with food
                  supplies. This is an annual report created
                  with their new brand guidelines.
        </div>
      </div>
      <div className="image_container">
        <Image publicId="tmgcover" className="image_square" />
        <Image publicId="tmgpage1" className="image_square" />
        <Image publicId="tmgpage2" className="image_square" />
        <Image publicId="tmgpage3" className="image_square" />
        <Image publicId="tmgpage4" className="image_square" />
        <Image publicId="tmgcards" className="image_square" />
        <Image publicId="tmgpage5" className="image_square" />
        <Image publicId="tmgletterhead" className="image_square" />
      </div>
    </div>
  );
};

export default Blessings;

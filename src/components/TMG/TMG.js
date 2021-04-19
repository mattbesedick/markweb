
/* eslint-disable no-unused-vars */
import React from 'react';
import {Image} from 'cloudinary-react';
import styles from './TMG.module.css';

const TMG = () => {
  return (
    <div className="root">
      <div className={styles.container}>
        <div className={styles.header}>TMG Family Office</div>
        <div className={styles.description}>
              TMG is a financial advisory serving clients nationwide.
              These are branding materials created for their Family Office.
        </div>
      </div>
      <div className={styles.image_container}>
        <Image publicId="tmgcover" className={styles.image_square}/>
        <Image publicId="tmgpage1" className={styles.image_square}/>
        <Image publicId="tmgpage2" className={styles.image_square}/>
        <Image publicId="tmgpage3" className={styles.image_square}/>
        <Image publicId="tmgpage4" className={styles.image_square}/>
        <Image publicId="tmgcards" className={styles.image_square} />
        <Image publicId="tmgpage5" className={styles.image_square} />
        <Image publicId="tmgletterhead" className={styles.image_square} />
      </div>
    </div>

  );
};

export default TMG;

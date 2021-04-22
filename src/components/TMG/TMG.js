import React from 'react';
import {Image} from 'cloudinary-react';
import styles from './TMG.module.css';
import {motion} from 'framer-motion';


const TMG = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {delay: .5, duration: 1.5},
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden"
      animate="visible" exit="exit" className="root">
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
    </motion.div>

  );
};

export default TMG;

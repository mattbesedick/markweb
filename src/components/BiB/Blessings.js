import React from 'react';
import styles from './Blessings.module.css';
import {Image} from 'cloudinary-react';
import '../Home/Home.css';
import {motion} from 'framer-motion';

const Blessings = () => {
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
        <div className={styles.header}>Blessings in a Backpack</div>
        <div className="description">
                  BIB is a non-profit helping kids with food
                  supplies. This is an annual report created
                  with their new brand guidelines.
        </div>
      </div>
      <div className="image_container">
        <Image publicId="bib1" className="image_square" />
        <Image publicId="bib2" className="image_square" />
        <Image publicId="bib2" className="image_square" />
        <Image publicId="bib2" className="image_square" />
        <Image publicId="bib5" className="image_square" />
        <Image publicId="bib6" className="image_square" />
      </div>
    </motion.div>
  );
};

export default Blessings;

/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import './Home.css';
import Content from './Content';
import {motion} from 'framer-motion';

// const transition = {duration: .6, ease: [0.6,0.01, ]}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {delay: .5, duration: 1.5},
  },
  exit: {
    opacity: 0,
  },
};


const Home = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible"
      exit="exit" className="root">
      <div className="container">
        <motion.div
          className="intro">
          <h1>Hello</h1>
          <p>My name is Mark Diaz. I graduated from DePaul University
          in Chicago with a BFA in Graphic Design.
          I create visual experiences through design.
          Get to know me here</p>
        </motion.div>
        <Content
          project="TMG"
          image="tmgheader"
          title="TMG | Family Office" className="content" />
        <Content
          project="BlessingsinaBackpack"
          image="blessheader"
          title="Blessings in a Backpack" className="content" />
        <Content
          project="HuluSocial"
          image="huluheader"
          title="Hulu Social" className="content"/>
      </div>
    </motion.div>
  );
};

export default Home;

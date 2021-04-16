/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import './Home.css';
import Content from './Content';
import Axios from 'axios';
import {Image} from 'cloudinary-react';

const Home = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="intro">
          <h1>Hello</h1>
          <p>My name is Mark Diaz. I graduated from DePaul University
          in Chicago with a BFA in Graphic Design.
          I create visual experiences through design.
          Get to know me here</p>
        </div>
        <div className="content-container">
          <Content
            project="TMG"
            image="tmgheader"
            title="TMG | Family Office" />
          <Content
            project="BlessingsinaBackpack"
            image="blessheader"
            title="Blessings in a Backpack" />
          <Content
            project="HuluSocial"
            image="huluheader"
            title="Hulu Social" />
        </div>
      </div>
    </div>
  );
};

export default Home;

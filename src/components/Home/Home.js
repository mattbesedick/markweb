import React from 'react';
import './Home.css';
import Content from './Content';

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
            image="TMG_Logo-Portfolio"
            title="TMG | Family Office" />
          <Content
            project="BlessingsinaBackpack"
            image="TMG_Logo-Portfolio"
            title="Blessings in a Backpack" />
          <Content
            project="HuluSocial"
            image="TMG_Logo-Portfolio"
            title="Hulu Social" />
        </div>
      </div>
    </div>
  );
};

export default Home;

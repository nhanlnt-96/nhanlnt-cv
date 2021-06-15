import React, { FC } from 'react';
import Bg from '../../imgs/homepage-bg.jpeg';

import './Homepage.scss';

const Homepage: FC = () => {
  return (
    <>
      <div className="home-background">
        <img src={Bg} alt="homepage-bg" />
      </div>
      <div className="home-title">
        <h3>Hello, I am</h3>
        <h2>LE NGUYEN THIEN NHAN</h2>
        <div className="typing-text">
          I am <b>a Frontend Developer.</b>
        </div>
      </div>
    </>
  );
};

export default Homepage;
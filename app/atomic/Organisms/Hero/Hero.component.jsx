import React from 'react';
import Styles from './Hero.module.css';
import heroImg from '../..//../../public/assets/Hero.png';
import Image from 'next/image';

import { Searchbar } from '../../../atomic';

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <Image
        src={heroImg}
        fill
        priority
        alt='hero image'
        style={{ zIndex: -1 }}
      ></Image>
      <Searchbar />
    </div>
  );
};

export default Hero;

import React from 'react';
import Styles from './Hero.module.css';
import heroImg from '../..//../../public/assets/Hero.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <Image
        src={heroImg}
        fill
        priority
        alt='hero image'
      ></Image>
    </div>
  );
};

export default Hero;

import styles from './Logo.module.css';

import logoImg from '../../../../public/assets/logo.png';
import Image from 'next/image';

const Logo = (varient = 'regular') => {
  return (
    <div className={styles.image}>
      <Image
        height={80}
        src={logoImg}
        alt='Cyber Solutions Logo'
      ></Image>
    </div>
  );
};

export default Logo;

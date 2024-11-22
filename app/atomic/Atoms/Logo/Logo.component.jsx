import styles from './Logo.module.css';

import logoImg from '../../../../public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = (varient = 'regular') => {
  return (
    <div className={styles.image}>
      <Link href={'/'}>
        <Image
          height={80}
          src={logoImg}
          alt='Cyber Solutions Logo'
        ></Image>
      </Link>
    </div>
  );
};

export default Logo;

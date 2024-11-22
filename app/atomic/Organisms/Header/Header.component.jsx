import React from 'react';
import styles from './Header.module.css';
import { Logo } from '../../Atoms';
import { Nav } from '../../Molecules';

import { navItems } from '../../../../public/data/nav-items';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav navItems={navItems} />
    </div>
  );
};

export default Header;

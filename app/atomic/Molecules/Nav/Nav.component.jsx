import React from 'react';
import styles from './Nav.module.css';
import { Logo, Text } from '../../Atoms';
import Link from 'next/link';

const Nav = ({ navItems }) => {
  return (
    <div className={styles.nav}>
      {navItems.map(item => (
        <Link
          key={item.title}
          href={item.url}
        >
          <Text color='light'>{item.title}</Text>
        </Link>
      ))}
    </div>
  );
};

export default Nav;

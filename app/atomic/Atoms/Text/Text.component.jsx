import React from 'react';
import styles from './Text.module.css';

const cn = require('classnames');

const Text = ({ varient = 'body-rg', weight = 'normal', children }) => {
  const classname = cn(styles[varient], styles[weight]);

  switch (varient) {
    case 'h1':
      return <h1 className={classname}>{children}</h1>;
    case 'h2':
      return <h2 className={classname}>{children}</h2>;
    case 'h3':
      return <h3 className={classname}>{children}</h3>;
    case 'h4':
      return <h4 className={classname}>{children}</h4>;
    default:
      return <p className={classname}>{children}</p>;
  }
};

export default Text;

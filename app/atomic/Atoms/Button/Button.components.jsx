import React from 'react';
import Styles from './Button.module.css';
import cn from 'classnames';
import Text from '../Text/Text.component';
import { chdir } from 'process';

const Button = ({ varient = 'primary', className, children }) => {
  const btnClass = cn(Styles['btn'], Styles[className]);
  return (
    <div className={Styles.btn}>
      <Text weight='bold'>{children}</Text>
    </div>
  );
};

export default Button;

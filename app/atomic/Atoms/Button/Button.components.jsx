import React from 'react';
import Styles from './Button.module.css';
import cn from 'classnames';
import Text from '../Text/Text.component';

const Button = ({ varient = 'primary', className, children }) => {
  const btnClass = cn(Styles['btn'], Styles[varient], Styles[className]);
  return (
    <div className={btnClass}>
      <Text weight='bold'>{children}</Text>
    </div>
  );
};

export default Button;

import React from 'react';
import classes from './Button.module.scss';
const Button = props => <button
  onClick={props.click}
  className={`${classes.Button} ${classes[props.btnType]}`}>
  {props.children}
</button>;

export default Button;
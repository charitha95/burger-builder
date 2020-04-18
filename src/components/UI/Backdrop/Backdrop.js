import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = props =>
  props.show && <div
    onClick={props.modalClosed}
    className={classes.Backdrop}>
  </div>

export default Backdrop;
import React from 'react';
import classes from './Modal.module.scss'
import Auxi from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, show, modalClosed }) =>
  <Auxi>
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}>{children}
    </div>
    <Backdrop show={show} modalClosed={modalClosed}/>
  </Auxi>


export default Modal;
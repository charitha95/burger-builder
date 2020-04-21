import React, { memo } from 'react';
import classes from './Modal.module.scss'
import Auxi from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, show, modalClosed }) => <Auxi>
  <div
    className={classes.Modal}
    style={{
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0'
    }}>{children}
  </div>
  <Backdrop show={show} clicked={modalClosed} />
</Auxi>


// if return true in memo will not re render 
// when the function returns true, the component will not be re-rendered
export default memo(Modal,
  (prevProps, nextProps) => (nextProps.children === prevProps.children) &&
    (prevProps.show === nextProps.show)

);
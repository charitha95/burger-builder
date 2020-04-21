import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi'
const SideDrawer = props => {
  return (
    <Auxi>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={`${classes.SideDrawer} ${props.show ? classes.Open : classes.Close}`}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxi>
  );
};

export default SideDrawer;
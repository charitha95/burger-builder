import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkou</NavigationItem>
  </ul>
)

export default NavigationItems;
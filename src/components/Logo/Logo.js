import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import classes from './Logo.module.scss';

const Logo = props => <div className={classes.Logo}>
    <img src={burgerLogo} alt='burger' />
</div>

export default Logo;
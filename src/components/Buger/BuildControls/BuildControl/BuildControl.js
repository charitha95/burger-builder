import React from 'react';
import classes from './BuildControl.module.scss';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} disabled={props.disabledInfo} onClick={props.removeIngredientHandler}>-</button>
    <button className={classes.More} onClick={props.addIngredientHandler}>+</button>
  </div>
);

export default BuildControl;
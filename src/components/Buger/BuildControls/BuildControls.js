import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]
const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>Price: <strong>{props.price.toFixed(2)}</strong> </p>
    {controls.map((control) =>
      <BuildControl
        key={control.type}
        label={control.label}
        addIngredientHandler={() => props.addIngredientHandler(control.type)}
        removeIngredientHandler={() => props.removeIngredientHandler(control.type)}
        disabledInfo={props.disabledInfo[control.type]}
      />
    )}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.order}
    >ORDER NOW</button>
  </div>
);

export default BuildControls;
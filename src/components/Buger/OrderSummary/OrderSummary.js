import React from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(ingKey =>
      <li key={ingKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {props.ingredients[ingKey]}</li>
    )
  return <Auxi>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {ingredientsSummary}
    </ul>
    <p>Continue to checkout?</p>
    <Button btnType='Success'>ORDER</Button>
    <Button btnType='Danger' click={props.modalClosed}>CANCEL</Button>
  </Auxi>;
}


export default OrderSummary;
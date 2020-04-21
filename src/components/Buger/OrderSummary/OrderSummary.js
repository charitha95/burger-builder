import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(ingKey =>
        <li key={ingKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {this.props.ingredients[ingKey]}</li>
      )

    return <Auxi>
      <h3>Your Order</h3>
      <p>Total Price: <strong>${this.props.totalPrice.toFixed(2)}</strong></p>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button btnType='Danger' click={this.props.modalClosed}>CANCEL</Button>
      <Button btnType='Success' click={this.props.purchaseContinue}>ORDER</Button>
    </Auxi>
  }
}


export default OrderSummary;
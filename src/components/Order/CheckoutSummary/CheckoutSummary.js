import React from 'react';
import Burger from '../../Buger/Buger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.scss';
const CheckoutSummary = props => {
  return <div className={classes.CheckoutSummary}>
    <h1>We home it tasts well!!</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={props.ingredients} />
    </div>
    <Button btnType='Danger' click={props.onCheckoutCancelled}>CANCEL</Button>
    <Button btnType='Success' click={props.onCheckoutContinued}>CONTINUE</Button>
  </div>
}

export default CheckoutSummary;
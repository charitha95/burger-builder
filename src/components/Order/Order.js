import React from 'react';
import classes from './Order.module.scss';
const Order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map((ig, idx) =>
    <span style={{
      textTransform: 'capitalize',
      display: 'inline-block',
      margin: '0 8px',
      border: '1px solid #ccc',
      padding: '5px',
      borderRadius: '5px'
    }} key={idx}>{ig.name} ({ig.amount})</span>)

  return <div className={classes.Order}>
    <p>Ingredients: {ingredientOutput}</p>
    <p>Price: <strong>{props.order}</strong></p>
  </div>
}


export default Order;
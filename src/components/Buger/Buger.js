import React from 'react';
import classes from './Burger.module.scss';
import Ingredients from './Ingredients/Ingredients'
const Burger = props => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => [...Array(props.ingredients[ingKey])]
      .map((_, index) => <Ingredients key={`${index}_${ingKey}`} type={ingKey} />)
    ).reduce((flatArray, current) => flatArray.concat(current), []);
  if (!transformedIngredients.length) {
    transformedIngredients = <p>please add some ingredients</p>;
  }
  
  return (
    <div className={classes.Buger}>
      <Ingredients type='bread-top' />
      {transformedIngredients}
      <Ingredients type='bread-bottom' />
    </div>
  );
}

export default Burger;
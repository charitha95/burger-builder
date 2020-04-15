import React from 'react'
import classes from './Ingredients.module.scss';
import PropTypes from 'prop-types';

const Ingredients = (props) => {
  let ingrediant = null;
  switch (props.type) {
    case ('bread-bottom'):
      ingrediant = <div className={classes.BreadBottom}></div>;
      break;
    case ('bread-top'):
      ingrediant = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case ('meat'):
      ingrediant = <div className={classes.Meat}></div>;
      break;
    case ('cheese'):
      ingrediant = <div className={classes.Cheese}></div>;
      break;
    case ('salad'):
      ingrediant = <div className={classes.Salad}></div>;
      break;
    case ('bacon'):
      ingrediant = <div className={classes.Bacon}></div>;
      break;
    default:
      ingrediant = null;
      break;
  }
  return ingrediant;
}

Ingredients.prototype = {
  type: PropTypes.string.isRequired
}

export default Ingredients;
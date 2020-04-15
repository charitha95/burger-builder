import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Buger/Buger';

class BugerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render() {
    return (
      <Auxi>
        <Burger ingredients={this.state.ingredients} />
        <div> Build controls</div>
      </Auxi>
    );
  }
}

export default BugerBuilder;
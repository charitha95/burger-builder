import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Buger/Buger';
import BuildControls from '../../components/Buger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Buger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.2,
  bacon: 0.7,
  cheese: 1,
  meat: 0.3
}

class BugerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2,
    purchasable: false,
    showModal: false
  }

  updatePurchase() {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map(key => ingredients[key])
      .reduce((total, el) => total + el, 0);
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedIngredients[type] + 1;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    }, () => this.updatePurchase());
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedIngredients[type] - 1;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      }, () => this.updatePurchase());
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal 
    });
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    
    return (
      <Auxi>
        <Modal show={this.state.showModal} modalClosed={this.toggleModal}>
          <OrderSummary ingredients={this.state.ingredients} modalClosed={this.toggleModal} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabledInfo={disabledInfo}
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.toggleModal}
        />
      </Auxi>
    );
  }
}

export default BugerBuilder;
import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Buger/Buger';
import BuildControls from '../../components/Buger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Buger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.2,
  bacon: 0.7,
  cheese: 1,
  meat: 0.3
}

class BugerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 2,
    purchasable: false,
    showModal: false,
    loading: false
  }

  componentDidMount() {
    axios.get('https://my-burger-builder-2020.firebaseio.com/ingredients.json')
      .then(res => this.setState({ ingredients: res.data }))
      .catch(e => console.log(e))
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

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Charitha G',
        address: {
          street: 'My street',
          zipCode: '10300',
          country: 'Sri Lanka'
        },
        email: 'charitha@email.com',
        deliveryMothod: 'fastest'
      }
    }
    axios.post('/orders.json', order)
      .then(res => this.setState({ loading: false, showModal: false }))
      .catch(e => this.setState({ loading: false, showModal: false }));
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null

    let burger = <Spinner />

    if (this.state.ingredients) {
      burger = <Auxi>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabledInfo={disabledInfo}
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.toggleModal}
        /></Auxi>

      orderSummary = <OrderSummary
        totalPrice={this.state.totalPrice}
        ingredients={this.state.ingredients}
        modalClosed={this.toggleModal}
        purchaseContinue={this.purchaseContinueHandler} />
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Auxi>
        <Modal show={this.state.showModal} modalClosed={this.toggleModal}>
          {orderSummary}
        </Modal>
        {burger}
      </Auxi>
    );
  }
}

export default withErrorHandler(BugerBuilder, axios);
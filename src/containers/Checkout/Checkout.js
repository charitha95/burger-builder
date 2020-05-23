import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {},
    price: 0
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    let price = 0;
    const ingredients = {}
    for (const [key, value] of params.entries()) {
      if (key !== 'price') {
        ingredients[key] = +value;
      } else {
        price = +value;
      }
    }
    this.setState({ ingredients: ingredients, price: price })
  }

  onCheckoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  onCheckoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return <div>
      <CheckoutSummary
        ingredients={this.state.ingredients}
        onCheckoutCancelled={this.onCheckoutCancelledHandler}
        onCheckoutContinued={this.onCheckoutContinuedHandler} />
      <Route path={`${this.props.match.path}/contact-data`}
        render={(props) => (
          <ContactData {...props} ingredients={this.state.ingredients} price={this.state.price}/>
        )} />
    </div>
  }
}

export default Checkout; 
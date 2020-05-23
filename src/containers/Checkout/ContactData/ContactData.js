import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price.toFixed(2),
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
      .then(res => {
        this.setState({ loading: false, showModal: false });
        this.props.history.push('/')
      })
      .catch(e => this.setState({ loading: false, showModal: false }));
  }

  render() {
    let form = (<form>
      <input className={classes.Input} type='text' name='name' placeholder='Your name' />
      <input className={classes.Input} type='email' name='email' placeholder='Your email' />
      <input className={classes.Input} type='text' name='street' placeholder='Your street' />
      <input className={classes.Input} type='text' name='postalcode' placeholder='Your postal code' />
      <Button btnType='Success' click={this.orderHandler}>ORDER</Button>
    </form>);
    if (this.state.loading) {
      form = <Spinner />
    }
    return <div className={classes.ContactData}>
      <h4>Enter your contact data:</h4>
      {form}
    </div>
  }
}

export default ContactData;
import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name',
        },
        value: ''

      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your street name',
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Zipcode',
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email',
        },
        value: ''
      },
      deliveryMothod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ]
        }
      }
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

  inputChangeHandler = (e, inputId) => {
    const updatedForm = { ...this.state.orderForm };
    const updatedElement = { ...updatedForm[inputId] };
    updatedElement.value = e.target.value;
    updatedForm[inputId] = updatedElement;
    this.setState({ orderForm: updatedForm })
  }

  render() {
    const formElementArry = [];
    for (let key in this.state.orderForm) {
      formElementArry.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (<form>
      {formElementArry.map(formElement =>
        <Input key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(e) => this.inputChangeHandler(e, formElement.id)} />
      )}

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
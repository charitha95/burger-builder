import React from 'react';
import './App.module.scss';
import BugerBuilder from './containers/BurgerBuilder/BugerBuilder';
import Layout from './containers/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
        <Route path='/' exact component={BugerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;

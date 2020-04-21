import React from 'react';
import './App.module.scss';
import BugerBuilder from './containers/BurgerBuilder/BugerBuilder';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <Layout>
      <BugerBuilder />
    </Layout>
  );
}

export default App;

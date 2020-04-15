import React from 'react';
import './App.module.scss';
import Layout from './components/Layout/Layout';
import BugerBuilder from './containers/BurgerBuilder/BugerBuilder';

function App() {
  return (
    <Layout>
      <BugerBuilder />
    </Layout>
  );
}

export default App;

import React, { Component } from 'react';
import classes from './Layout.module.scss'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Auxi from '../../hoc/Auxi';

class Layout extends Component {

  state = {
    showDrawer: false
  }

  sideDrawerCloseHander = () => {
    this.setState({
      showDrawer: false
    });
  }

  sideDrawerToggleHander = () => {
    this.setState((prevState) => ({ showDrawer: !prevState.showDrawer }))
  }

  render() {
    return <Auxi>
      <Toolbar toggle={this.sideDrawerToggleHander} />
      <SideDrawer show={this.state.showDrawer} closed={this.sideDrawerCloseHander} />
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </Auxi>
  }
}


export default Layout;
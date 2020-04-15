import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.module.scss'
const Layout = ({ children }) => <Auxi>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main className={classes.Content}>
    {children}
  </main>
</Auxi>


export default Layout;
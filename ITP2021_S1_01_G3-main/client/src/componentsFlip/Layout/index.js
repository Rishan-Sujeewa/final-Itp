import React from 'react';
import Header from '../Header';
import MenuHeader from '../MenuHeader';
import Footer from '../Footer';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header />
        <MenuHeader />
        {props.children}
        <Footer />
    </>
   )

 }

export default Layout
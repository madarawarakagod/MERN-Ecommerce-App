import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (porps) => {
  return (
    <div>
      <Header/>
       
      <main>{porps.children}</main> 
       
       </div>
  )
};

export default Layout